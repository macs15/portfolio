'use client'

import { useRef, useState } from 'react'

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)
  return (
    <button
      type="button"
      className="copy"
      data-copied={copied}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email)
        } catch {
          window.location.href = `mailto:${email}`
          return
        }
        setCopied(true)
        window.clearTimeout(timer.current)
        timer.current = window.setTimeout(() => setCopied(false), 1800)
      }}
    >
      <span className="copy-label">{email}</span>
      <span className="copy-icon" aria-hidden>
        <svg viewBox="0 0 16 16" className="icon-copy">
          <rect x="5" y="5" width="8" height="8" rx="2" />
          <path d="M3 10.5V4.5A1.5 1.5 0 0 1 4.5 3h6" />
        </svg>
        <svg viewBox="0 0 16 16" className="icon-check">
          <path d="M3.5 8.5l3 3 6-7" />
        </svg>
      </span>
      <span className="sr-only" role="status">
        {copied ? 'Email copied' : ''}
      </span>
    </button>
  )
}
