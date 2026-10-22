import { projects, roles, site, stack } from './content'

export const url = 'https://maykell.dev'
export const title = `${site.name} · ${site.role}`
export const description =
  'Senior frontend engineer in Joinville, Brazil. Headless eCommerce for Danone, operations platforms for agency clients, and Gastify, my own App Store finance app.'

const gastify = projects.find((p) => p.id === 'gastify')!

// One graph so search engines and AI answers read the page as one person's profile.
export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': `${url}/#page`,
      url,
      name: title,
      description,
      inLanguage: 'en',
      mainEntity: { '@id': `${url}/#person` }
    },
    {
      '@type': 'Person',
      '@id': `${url}/#person`,
      name: site.name,
      jobTitle: site.role,
      url,
      email: `mailto:${site.email}`,
      sameAs: [site.linkedin, site.github],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Joinville',
        addressRegion: 'SC',
        addressCountry: 'BR'
      },
      worksFor: { '@type': 'Organization', name: roles[0].place },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Centro Universitário Leonardo da Vinci' },
      knowsAbout: stack,
      knowsLanguage: ['es', 'en', 'pt']
    },
    {
      '@type': 'MobileApplication',
      '@id': `${url}/#gastify`,
      name: gastify.name,
      description: gastify.summary,
      operatingSystem: 'iOS',
      applicationCategory: 'FinanceApplication',
      url: gastify.link!.href,
      installUrl: gastify.cta!.href,
      author: { '@id': `${url}/#person` }
    }
  ]
}
