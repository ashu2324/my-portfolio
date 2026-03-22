import { useState } from 'react'
import { useTheme } from '../hooks/useTheme'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isLight, toggle } = useTheme()

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <>
      <nav>
        <div className="nav-logo">AP.</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="Ayushi_Parmar_Frontend_Developer.pdf" download className="nav-resume">↓ Download Resume</a>
        <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
          {isLight ? '☀️' : '🌙'}
        </button>
        <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu">
        <a href="#about" className="mobile-nav-link" onClick={closeMenu}>About</a>
        <a href="#skills" className="mobile-nav-link" onClick={closeMenu}>Skills</a>
        <a href="#experience" className="mobile-nav-link" onClick={closeMenu}>Experience</a>
        <a href="#projects" className="mobile-nav-link" onClick={closeMenu}>Projects</a>
        <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>Contact</a>
        <a
          href="Ayushi_Parmar_Frontend_Developer.pdf"
          download
          className="mobile-nav-link"
          onClick={closeMenu}
          style={{ fontSize: '1.4rem', color: 'var(--accent)', border: '1px solid var(--accent)', padding: '0.6rem 1.8rem', borderRadius: '4px', marginTop: '0.5rem' }}
        >
          ↓ Download Resume
        </a>
      </div>
    </>
  )
}
