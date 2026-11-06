import './Experience.css'
import { experience } from '../data'

function Experience() {
  return (
    <section className="experience" id="experience">
      <p className="section-label">Experience</p>

      <ul className="experience-list">
        {experience.map((job) => (
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
    </section>
  )
}

export default Experience