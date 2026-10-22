'use client'

import { useEffect } from 'react'

// Adds `.in` once as each [data-reveal] block enters the viewport. Content is
// visible without JavaScript: the hidden state only applies under `html.js`.
export function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    )
    document.querySelectorAll('[data-reveal]').forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])
  return null
}
