import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProject } from '../api'
import './Project.css'

function Project() {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    window.scrollTo(0, 0)

    getProject(id)
      .then((data) => {
        setProject(data)
        setStatus('ready')
        document.title = `${data.title} | Benedicta Rubson`
      })
      .catch((error) => {
        setStatus(error.status === 404 ? 'notfound' : 'error')
      })
  }, [id])

  if (status !== 'ready') {
    return (
      <article className="project">
        <Link className="project-back" to="/#projects">← All work</Link>

        {status === 'loading' && <p className="status-message">Loading…</p>}
        {status === 'notfound' && <h1>Project not found</h1>}
        {status === 'error' && (
          <p className="status-message">Couldn’t load this project. Please try again.</p>
        )}
      </article>
    )
  }

  return (
    <article className="project">
      <Link className="project-back" to="/#work">← All work</Link>

      <p className="section-label">
        {project.number} · {project.period}
      </p>

      <h1>{project.title}</h1>

      <div className="project-headline">
        <span className="project-headline-number">{project.headline}</span>
        <span className="project-headline-label">{project.headlineLabel}</span>
      </div>

      <div className="project-block">
        <h2>Question</h2>
        <p>{project.question}</p>
      </div>

      <div className="project-block">
        <h2>Data</h2>
        <p>{project.data}</p>
      </div>

      <div className="project-block">
        <h2>Method</h2>
        <ul>
          {project.method.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </div>

      <div className="project-block">
        <h2>Result</h2>
        <p>{project.result}</p>
      </div>

      <div className="project-block">
        <h2>Tools</h2>
        <p>{project.tech.join(' · ')}</p>
      </div>

      <div className="project-links">
        {project.dashboard && (
          <a href={project.dashboard} target="_blank" rel="noreferrer">View dashboard →</a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">View code on GitHub →</a>
        )}
      </div>
    </article>
  )
}

export default Project