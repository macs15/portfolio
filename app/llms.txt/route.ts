import { process, projects, roles, site, stack } from '@/lib/content'
import { description, url } from '@/lib/seo'

export const dynamic = 'force-static'

// Plain-text summary for AI assistants and answer engines (llmstxt.org).
export function GET() {
  const work = projects
    .map((p) => {
      const links = [p.link && `[${p.link.label}](${p.link.href})`, p.cta && `[App Store](${p.cta.href})`].filter(Boolean)
      return `### ${p.name}\n${p.summary} (${p.meta})\n\n${p.description}\n\nStack: ${p.stack}${links.length ? `\nLinks: ${links.join(', ')}` : ''}`
    })
    .join('\n\n')
  const body = `# ${site.name}

> ${description}

- Site: ${url}
- Location: ${site.city}
- Email: ${site.email}
- LinkedIn: ${site.linkedin}
- GitHub: ${site.github}

## Work

${work}

Client work is shown with sample data and the client brand changed.

## How I work

${process.map((s) => `- ${s.title}: ${s.body}`).join('\n')}

## Experience

${roles.map((r) => `- ${r.years}: ${r.title}, ${r.place}. ${r.note}.`).join('\n')}

## Education

- B.Sc. Software Engineering, Centro Universitário Leonardo da Vinci, 2024 – 2028 (in progress)

## Stack

${stack.join(', ')}
`
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
