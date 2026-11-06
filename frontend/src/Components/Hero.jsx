import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <nav className="hero-nav">
        <div className="hero-nav-left">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
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
      </div>
    </section>
  )
}

export default Hero