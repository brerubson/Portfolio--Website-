import { useEffect, useState } from 'react'
import './Hero.css'

function getLondonTime() {
  return new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/London',
  }).format(new Date())
}

function Hero() {
  const [time, setTime] = useState(getLondonTime)

  useEffect(() => {
    const timer = setInterval(() => setTime(getLondonTime()), 30000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero" id="home">
      <nav className="hero-nav">
        <div className="hero-nav-left">
          <a href="#projects">Projects</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </div>

        <div className="hero-nav-right">
          <a href="/Benedicta-Rubson-CV.pdf" download>CV</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="hero-line hero-line-vertical"></div>
      <div className="hero-line hero-line-horizontal"></div>

      <div className="hero-title">
        <h1>Benedicta Rubson</h1>
        <p>Data &amp; Business Analyst</p>
        <p className="hero-status">
          London, UK · {time} · Open to work
        </p>
      </div>
    </section>
  )
}

export default Hero