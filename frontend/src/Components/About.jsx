import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-photo">
        <img src="/portrait.jpg" alt="Benedicta Rubson" />
      </div>

      <div className="about-text">
        <p className="section-label">About</p>

        <p className="about-paragraph">
          I’ve always wanted to be where important decisions are being made. It’s led to my growing passion for business and finance, particularly because businesses and organisations are at the core of what create value, manage risk and shape the future.
        </p>

        <p className="about-paragraph">
          I’ve been intrigued by how data, coupled with AI, plays an important role in making insight-assisted decisions that help shape direction and drive success.
        </p>

        <p className="about-paragraph">
          My background in engineering and AI for Business Intelligence has given me a combination of quantitative thinking, problem-solving and business-focused analytics. Through my academic projects, professional experiences and independent work, I’ve enjoyed taking data beyond simply reporting what has happened and looking at what it means, why it matters and what could be done next.
        </p>

        <p className="about-paragraph about-closing">
          Making your work easier and your next step clear is what I do best.
        </p>

        <a className="about-link" href="#contact">Get in touch →</a>
      </div>
    </section>
  )
}

export default About