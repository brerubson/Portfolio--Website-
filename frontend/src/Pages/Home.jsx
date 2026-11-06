import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../Components/Hero'
import Work from '../Components/Work'
import About from '../Components/About'
import Experience from '../Components/Experience'
import Contact from '../Components/Contact'

function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    document.title = 'Benedicta Rubson'
    if (hash) {
      document.querySelector(hash)?.scrollIntoView()
    }
  }, [hash])

  return (
    <main>
      <Hero />
      <Work />
      <About />
      <Experience />
      <Contact />
    </main>
  )
}

export default Home