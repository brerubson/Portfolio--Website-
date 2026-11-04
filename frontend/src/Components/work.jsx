import './Work.css'
import { projects } from '../data'

function Work() {
  return (
    <section className="work" id="work">
      <p className="section-label">Selected Work</p>

      <ul className="work-list">
        {projects.map((project) => (
          <li className="work-row" key={project.id}>
            <span className="work-number">{project.number}</span>

            <div className="work-info">
              <h2>{project.title}</h2>
              <p className="work-tech">{project.tech.join(' · ')}</p>
            </div>

            <div className="work-result">
              <span className="work-headline">{project.headline}</span>
              <span className="work-label">{project.headlineLabel}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Work