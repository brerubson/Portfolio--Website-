# Benedicta Rubson | Portfolio

A personal portfolio for a data and business analyst, built as a full-stack web app: a React front end and a Python (FastAPI) back end.

**Live site:** https://portfolio-website-six-pink-65.vercel.app

## What it does

- Shows selected data projects, each with its own page: question, data, method, result and tools
- Lists work experience, an About section and a CV download
- Includes a contact form that validates input, saves the message and emails it to me
- Loads all content from the back end API, so adding a project means editing one data file

## Tech stack

| Part | Tools |
|---|---|
| Front end | React, Vite, React Router, plain CSS |
| Back end | Python, FastAPI, Pydantic, Uvicorn |
| Email | Resend |
| Hosting | Vercel (front end), Render (back end) |
| Version control | Git and GitHub |

## Design

A minimalist, monochrome look: stone texture hero, serif small caps headings (Cormorant Garamond), light sans body text (Jost), thin dividing lines, and a live London time in the hero.

## Project structure

```
Portfolio--Website-/
  backend/
    main.py            API routes and the contact endpoint
    data.py            Projects and work experience data
    requirements.txt   Python packages
  frontend/
    public/            Images, favicon and CV
    src/
      Components/      Hero, Work (projects), Experience (work), About, Contact
      Pages/           Home and Project pages
      api.js           Requests to the back end
      main.jsx, App.jsx
    vercel.json        Routing rule for Vercel
```

## API

| Method | Endpoint | Returns |
|---|---|---|
| GET | `/projects` | All projects |
| GET | `/projects/{id}` | One project (404 if not found) |
| GET | `/experience` | Work experience |
| POST | `/contact` | Validates a message, saves it and emails it |

FastAPI also generates interactive documentation at `/docs`.

## Run it locally

You need Node.js (LTS), Python 3.12 or newer and Git.

**1. Clone**

```
git clone https://github.com/brerubson/Portfolio--Website-.git
cd Portfolio--Website-
```

**2. Back end**

```
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

On macOS or Linux, activate with `source venv/bin/activate`. The API runs at http://localhost:8000.

**3. Front end** (in a second terminal)

```
cd frontend
npm install
npm run dev
```

The site runs at http://localhost:5173.

## Environment variables

Never commit real values. `.env` is listed in `.gitignore`.

| Where | Variable | Purpose |
|---|---|---|
| Back end | `RESEND_API_KEY` | Key for sending email through Resend |
| Back end | `CONTACT_TO_EMAIL` | Inbox that receives contact messages |
| Back end | `FRONTEND_ORIGINS` | Allowed site addresses for CORS, comma separated (not needed locally) |
| Front end | `VITE_API_URL` | Back end address (defaults to `http://localhost:8000`) |

## Deployment

- **Back end (Render):** root directory `backend`, build `pip install -r requirements.txt`, start `uvicorn main:app --host 0.0.0.0 --port $PORT`
- **Front end (Vercel):** root directory `frontend`, framework Vite, with `VITE_API_URL` set to the Render address

Both redeploy automatically when changes are pushed to `main`.

## Notes

- The back end runs on a free plan that sleeps when idle, so the first request after a quiet spell can take up to a minute.
- Locally, messages are also appended to `backend/messages.jsonl`, which is ignored by Git. In production, the email is the record.
- Project data lives in `backend/data.py`.

## Contact

Benedicta Rubson | London, UK
[LinkedIn](https://linkedin.com/in/benedicta-rubsonnn) · [GitHub](https://github.com/brerubson)