from fastapi import FastAPI, HTTPException

from data import projects, experience

app = FastAPI()


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