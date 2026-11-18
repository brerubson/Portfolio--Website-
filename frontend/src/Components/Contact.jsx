import { useState } from 'react'
import './Contact.css'
import { sendMessage } from '../api'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')

    try {
      await sendMessage(form)
      setForm({ name: '', email: '', message: '' })
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact" id="contact">
      <p className="section-label">Contact</p>

      <h2>Get in touch</h2>
      <p className="contact-text">
        Open to roles, projects and conversations.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            maxLength={100}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            maxLength={2000}
            required
          />
        </label>

        <button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message →'}
        </button>

        {status === 'sent' && (
          <p className="form-message">Thank you. Your message has been sent.</p>
        )}
        {status === 'error' && (
          <p className="form-message">
            Something went wrong. Please try again, or use the links below.
          </p>
        )}
      </form>

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