import { useCursor } from './hooks/useCursor'
import { useScrollReveal } from './hooks/useScrollReveal'
import { usePageTransition } from './hooks/usePageTransition'
import { useCounterAnimation } from './hooks/useCounterAnimation'

import Cursor from './components/Cursor'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Impact from './components/Impact'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useCursor()
  useScrollReveal()
  usePageTransition()
  useCounterAnimation()

  return (
    <>
      {/* Page transition overlay */}
      <div id="page-transition" />

      <Cursor />
      <Loader />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Impact />
      <Contact />
      <Footer />
    </>
  )
}
