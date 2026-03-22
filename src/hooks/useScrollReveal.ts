import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal, .exp-item').forEach(el => observer.observe(el))

    // stagger exp items
    document.querySelectorAll<HTMLElement>('.exp-item').forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.15}s`
    })

    return () => observer.disconnect()
  }, [])
}
