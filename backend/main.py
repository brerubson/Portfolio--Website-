import json
from datetime import datetime, timezone
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

from data import projects, experience

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origin_regex=r"http://localhost:\d+",
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

MESSAGES_FILE = Path(__file__).parent / "messages.jsonl"


class ContactMessage(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    email: EmailStr
    message: str = Field(min_length=1, max_length=2000)


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
    record = {
        "received_at": datetime.now(timezone.utc).isoformat(),
        **contact.model_dump(),
    }
    with MESSAGES_FILE.open("a", encoding="utf-8") as file:
        file.write(json.dumps(record) + "\n")
    return {"status": "received"}