import './Contact.css'

function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="section-label">Contact</p>

      <h2>Get in touch</h2>
      <p className="contact-text">
        Open to roles, projects and conversations.
      </p>

      <div className="contact-links">
        <a href="mailto:rubson.eny@gmail.com">Email</a>
        <a href="https://github.com/brerubson" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/benedicta-rubsonnn" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="/Benedicta-Rubson-CV.pdf" download>CV</a>
      </div>

      <p className="contact-footer">© 2026 Benedicta Rubson</p>
    </section>
  )
}

export default Contact