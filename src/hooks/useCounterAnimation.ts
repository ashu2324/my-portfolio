import { useEffect } from 'react'

function animateCounter(el: Element, target: number, suffix = '') {
  let current = 0
  const increment = target / 60
  const timer = setInterval(() => {
    current += increment
    if (current >= target) { current = target; clearInterval(timer) }
    el.textContent = Math.floor(current) + suffix
  }, 16)
}

export function useCounterAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.impact-num').forEach(num => {
            const text = num.textContent || ''
            if (text === '0') animateCounter(num, 0)
            else if (text.includes('%')) animateCounter(num, parseInt(text), '%')
            else if (text.includes('+')) animateCounter(num, parseInt(text), '+')
            else animateCounter(num, parseInt(text), '')
          })
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.3 })

    document.querySelectorAll('.impact').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
