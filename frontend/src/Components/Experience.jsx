import { useEffect, useState } from 'react'
import './Experience.css'
import { getExperience } from '../api'

function Experience() {
  const [jobs, setJobs] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    getExperience()
      .then((data) => {
        setJobs(data)
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }, [])

  return (
    <section className="experience" id="experience">
      <p className="section-label">Experience</p>

      {status === 'loading' && <p className="status-message">Loading…</p>}
      {status === 'error' && (
        <p className="status-message">Couldn’t load experience. Please try again.</p>
      )}

      {status === 'ready' && (
        <ul className="experience-list">
          {jobs.map((job) => (
            <li className="experience-row" key={job.id}>
              <span className="experience-period">{job.period}</span>

              <div className="experience-role">
                <h2>{job.role}</h2>
                <p>{job.company}</p>
              </div>

              <span className="experience-location">{job.location}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Experience