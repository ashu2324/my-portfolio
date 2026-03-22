import { useState, useEffect } from 'react'

const ROLES = [
  'Software Developer.',
  'Frontend Developer.',
  'React Developer.',
  'MERN Stack Developer.',
  'AEM Developer.',
]

export function useTyping(startDelay = 1300) {
  const [text, setText] = useState('')

  useEffect(() => {
    let roleIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timer: ReturnType<typeof setTimeout>

    function type() {
      const current = ROLES[roleIndex]
      if (isDeleting) {
        setText(current.substring(0, charIndex - 1))
        charIndex--
      } else {
        setText(current.substring(0, charIndex + 1))
        charIndex++
      }
      let delay = isDeleting ? 45 : 80
      if (!isDeleting && charIndex === current.length) {
        delay = 1800
        isDeleting = true
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        roleIndex = (roleIndex + 1) % ROLES.length
        delay = 400
      }
      timer = setTimeout(type, delay)
    }

    const initial = setTimeout(type, startDelay)
    return () => { clearTimeout(initial); clearTimeout(timer) }
  }, [startDelay])

  return text
}
