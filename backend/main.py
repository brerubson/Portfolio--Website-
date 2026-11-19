import html
import json
import os
import time
from collections import deque
from datetime import datetime, timezone
from pathlib import Path

import resend
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

from data import projects, experience

load_dotenv()

resend.api_key = os.getenv("RESEND_API_KEY")
CONTACT_TO_EMAIL = os.getenv("CONTACT_TO_EMAIL")

app = FastAPI()

origins = [
    origin.strip()
    for origin in os.getenv("FRONTEND_ORIGINS", "").split(",")
    if origin.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_origin_regex=r"http://localhost:\d+",
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

MESSAGES_FILE = Path(__file__).parent / "messages.jsonl"

# (window in seconds, maximum messages in that window)
RATE_LIMITS = [(600, 5), (86400, 30)]
recent_messages: deque = deque()


def rate_limited() -> bool:
    now = time.time()
    while recent_messages and now - recent_messages[0] > 86400:
        recent_messages.popleft()
    for window, limit in RATE_LIMITS:
        count = sum(1 for sent in recent_messages if now - sent <= window)
        if count >= limit:
            return True
    return False


class ContactMessage(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    email: EmailStr
    message: str = Field(min_length=1, max_length=2000)
    website: str = Field(default="", max_length=200)


def send_email_notification(contact: ContactMessage) -> None:
    if not resend.api_key or not CONTACT_TO_EMAIL:
        print("Email not sent: RESEND_API_KEY or CONTACT_TO_EMAIL is missing")
        return

    clean_name = " ".join(contact.name.split())
    body = html.escape(contact.message).replace("\n", "<br>")

    resend.Emails.send(
        {
            "from": "Portfolio <onboarding@resend.dev>",
            "to": [CONTACT_TO_EMAIL],
            "reply_to": contact.email,
            "subject": f"Portfolio message from {clean_name}",
            "html": (
                f"<p><strong>Name:</strong> {html.escape(clean_name)}</p>"
                f"<p><strong>Email:</strong> {html.escape(contact.email)}</p>"
                f"<p>{body}</p>"
            ),
        }
    )


@app.get("/")
def home():
    return {"message": "Hello from my portfolio API"}


@app.get("/projects")
def get_projects():
    return projects


@app.get("/projects/{project_id}")
def get_project(project_id: str):
    for project in projects:
        if project["id"] == project_id:
            return project
    raise HTTPException(status_code=404, detail="Project not found")


@app.get("/experience")
def get_experience():
    return experience


@app.post("/contact", status_code=201)
def send_message(contact: ContactMessage):
    # Honeypot: real visitors never see this field, bots fill it in.
    if contact.website:
        return {"status": "received"}

    if rate_limited():
        raise HTTPException(status_code=429, detail="Too many messages")
    recent_messages.append(time.time())

    record = {
        "received_at": datetime.now(timezone.utc).isoformat(),
        **contact.model_dump(exclude={"website"}),
    }
    with MESSAGES_FILE.open("a", encoding="utf-8") as file:
        file.write(json.dumps(record) + "\n")

    try:
        send_email_notification(contact)
    except Exception as error:
        print(f"Email failed: {error}")

    return {"status": "received"}