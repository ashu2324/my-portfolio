import { useEffect } from 'react'

export function useCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const follower = document.getElementById('follower')
    if (!cursor || !follower) return

    let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX; mouseY = e.clientY
      cursor.style.left = mouseX - 6 + 'px'
      cursor.style.top  = mouseY - 6 + 'px'
    }

    function animate() {
      followerX += (mouseX - followerX - 20) * 0.12
      followerY += (mouseY - followerY - 20) * 0.12
      follower!.style.left = followerX + 'px'
      follower!.style.top  = followerY + 'px'
      rafId = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(animate)

    const onEnter = () => { cursor.style.transform = 'scale(2.5)' }
    const onLeave = () => { cursor.style.transform = 'scale(1)' }
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])
}
