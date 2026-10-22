'use client'

import { useLayoutEffect, useRef, useState } from 'react'

type Option<T extends string> = { value: T; label: string }

// A segmented control whose pill slides to the selected option.
// Arrow keys move the selection, like native radio buttons.
export function Segmented<T extends string>({
  options,
  value,
  onChange,
  label
}: {
  options: Option<T>[]
  value: T
  onChange: (v: T) => void
  label: string
}) {
  const root = useRef<HTMLDivElement>(null)
  const [pill, setPill] = useState<{ x: number; w: number } | null>(null)

  useLayoutEffect(() => {
    const measure = () => {
      const el = root.current?.querySelector<HTMLButtonElement>('[aria-checked="true"]')
      if (el) setPill({ x: el.offsetLeft, w: el.offsetWidth })
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [value])

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]
    if (!step) return
    e.preventDefault()
    const i = options.findIndex((o) => o.value === value)
    const next = options[(i + step + options.length) % options.length]
    onChange(next.value)
    root.current?.querySelector<HTMLButtonElement>(`[data-value="${next.value}"]`)?.focus()
  }

  return (
    <div className="segmented" data-ui role="radiogroup" aria-label={label} ref={root} onKeyDown={onKeyDown}>
      {pill && (
        <span className="segmented-pill" aria-hidden style={{ transform: `translateX(${pill.x}px)`, width: pill.w }} />
      )}
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          role="radio"
          data-value={o.value}
          aria-checked={o.value === value}
          tabIndex={o.value === value ? 0 : -1}
          onClick={() => onChange(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
