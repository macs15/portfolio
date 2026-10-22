import { ImageResponse } from 'next/og'
import { site } from '@/lib/content'

export const alt = `${site.name}, ${site.role}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// The muted colour of each project's gallery, as on the page.
const fields = ['#e5146e', '#1d4ed8', '#1fa595', '#e39a2b', '#7f9a5a']

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 80, background: '#fdfdfc', color: '#21201c' }}>
        <svg width="88" height="88" viewBox="0 0 64 64">
          <rect width="64" height="64" rx="15" fill="#21201c" />
          <path d="M11 46V18h7l9 13 9-13h7v28h-7V30l-9 13-9-13v16z" fill="#fdfdfc" />
          <circle cx="51.5" cy="42.5" r="4.5" fill="#30a46c" />
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -3 }}>{site.name}</div>
          <div style={{ fontSize: 40, color: '#63635e', marginTop: 8 }}>{`${site.role} · ${site.city}`}</div>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          {fields.map((c) => (
            <div key={c} style={{ width: 120, height: 14, borderRadius: 7, background: c, opacity: 0.55 }} />
          ))}
        </div>
      </div>
    ),
    size
  )
}
