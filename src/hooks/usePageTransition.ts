import { useEffect } from 'react'

export function usePageTransition() {
  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')

    const handleClick = (e: Event) => {
      const link = e.currentTarget as HTMLAnchorElement
      const target = document.querySelector(link.getAttribute('href') || '')
      if (!target) return
      e.preventDefault()

      const overlay = document.createElement('div')
      overlay.style.cssText = `
        position:fixed;inset:0;background:var(--accent);z-index:99999;
        transform:scaleY(0);transform-origin:bottom;
        transition:transform 0.35s cubic-bezier(0.77,0,0.175,1);
        pointer-events:none;
      `
      document.body.appendChild(overlay)
      requestAnimationFrame(() => { overlay.style.transform = 'scaleY(1)' })
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'instant' })
        overlay.style.transformOrigin = 'top'
        overlay.style.transform = 'scaleY(0)'
        setTimeout(() => overlay.remove(), 400)
      }, 370)
    }

    links.forEach(l => l.addEventListener('click', handleClick))
    return () => links.forEach(l => l.removeEventListener('click', handleClick))
  }, [])
}
