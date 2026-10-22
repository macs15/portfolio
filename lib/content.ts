export const site = {
  name: 'Maykell Carrillo',
  role: 'Senior Frontend Engineer',
  email: 'maykellcarrillo@gmail.com',
  linkedin: 'https://www.linkedin.com/in/macs15',
  github: 'https://github.com/macs15',
  city: 'Joinville, Brazil',
  timeZone: 'America/Sao_Paulo'
}

export const today = [
  "I build the parts of a product people touch. Right now that means Danone's headless storefronts in Brazil and Mexico and, project by project, operations platforms built around how each client works.",
  'Outside work I make Gastify, a finance app on the App Store, together with the designer Juan Alexis Mora Ángulo. A release isn’t the end of the job: analytics show us where people drop off and what they never open, and that decides what we build next.'
]

export type Screen = {
  id: string
  label: string
  caption: string
  src: string
  alt: string
  phone?: boolean
  /** Short muted loop that shows more of the screen; src is its poster. */
  video?: string
  /** Brand colour behind this screen, when it differs from the project's. */
  field?: string
  /** Tab shown before its recording exists. */
  wip?: boolean
}

export type Project = {
  id: 'gastify' | 'danone' | 'service-ops' | 'tickets' | 'pre-sale'
  name: string
  summary: string
  meta: string
  description: string
  stack: string
  /** Real screens. Client data in them is sample data. */
  screens?: Screen[]
  /** Where the screens come from. */
  screensNote?: string
  /** People who made it with me. */
  credits?: { role: string; name: string; href?: string }[]
  /** Only public products get links; client work stays private. */
  cta?: { label: string; href: string }
  link?: { label: string; href: string }
}

const so = '/work/service-ops'
const tk = '/work/tickets'
const ps = '/work/pre-sale'

export const projects: Project[] = [
  {
    id: 'gastify',
    name: 'Gastify',
    summary: 'A finance app for iPhone, built as a pair.',
    meta: 'iOS · 2024 – now',
    description:
      'Bills, subscriptions and instalments with a reminder before each is due. Expenses are logged by hand on purpose, not read from the bank. Juan and I build it side by side: we plan, decide, ship, read the numbers and go again. He leads design; I write the React Native code and run releases, subscriptions and analytics.',
    stack: 'React Native, Expo, TypeScript, WatermelonDB, RevenueCat, PostHog, Maestro',
    credits: [{ role: 'designer', name: 'Juan Alexis Mora Ángulo', href: 'https://alexiz.design/' }],
    cta: { label: 'Download on the App Store', href: 'https://apps.apple.com/app/gastify/id6757965842' },
    link: { label: 'gastify.pro', href: 'https://gastify.pro' }
  },
  {
    id: 'danone',
    name: 'Danone',
    summary: 'Headless storefronts for Brazil and Mexico.',
    meta: 'eCommerce · 2023 – now',
    description:
      "Danone's direct-to-consumer stores used to reload the whole page on every click. I led the move to a headless Next.js storefront, built the checkout with address validation and Mastercard 3DS, and took PageSpeed from single digits to around 60 on image-heavy pages. Content teams now publish without waiting for a deploy.",
    stack: 'Next.js, React, TypeScript, GraphQL, Magento, New Relic',
    screens: [
      { id: 'store', label: 'Bonafont', field: '#f26b2d', src: '/work/danone/store.webp', video: '/work/danone/store.mp4', alt: 'Bonafont online store: home, bottled water category and a product page asking for the delivery address', caption: 'Bonafont, the Mexico store: category, product, and the delivery address check before adding to cart.' },
      // WIP: record Mundo Danone once its site is back up, then add src and video and drop wip.
      { id: 'mundo-danone', label: 'Mundo Danone', field: '#1d4ed8', wip: true, src: '', alt: 'Mundo Danone, the Brazil store', caption: 'Mundo Danone, the Brazil store. Recording coming soon.' }
    ]
  },
  {
    id: 'service-ops',
    name: 'Service ops',
    summary: 'Maintenance platform for a gym equipment company.',
    meta: 'Client work · 2023 – now',
    description:
      'Built around how this company already worked. Staff keep every client gym and its machines on file, schedule preventive and corrective services and assign engineers. Engineers work each machine through a checklist on their phone and collect the gym manager’s signature; the system then produces the PDF report. Gyms log in to see their inventory, their service history and to report a broken machine with photos.',
    stack: 'Next.js, TypeScript, React Query, Chakra UI, Tailwind CSS, Vitest, NestJS, Prisma',
    screensNote: 'Sample data, client brand changed.',
    screens: [
      { id: 'preventive', label: 'Service', src: `${so}/service.webp`, video: `${so}/service.mp4`, alt: 'Completed preventive service with checklist steps and the manager’s signature', caption: 'A finished preventive service: engineers, times, the checklist per machine and the manager’s signature.' },
      { id: 'technician', label: 'Engineer', phone: true, src: `${so}/tech.webp`, video: `${so}/tech.mp4`, alt: 'Engineer’s phone view of the machines to service at one gym', caption: 'The engineer works each machine step by step on a phone and flags anything relevant with notes and photos.' },
      { id: 'dashboard', label: 'Dashboard', src: `${so}/dashboard.webp`, video: `${so}/dashboard.mp4`, alt: 'Admin dashboard with services by status and response time', caption: 'Services by status, and how many are within the response time.' },
      { id: 'inventory', label: 'Inventory', src: `${so}/inventory.webp`, video: `${so}/inventory.mp4`, alt: 'A client gym’s machine inventory', caption: 'One gym’s machines; each one keeps its own service history.' },
      { id: 'request', label: 'Client portal', src: `${so}/request.webp`, video: `${so}/request.mp4`, alt: 'Client form to request a corrective service with evidence upload', caption: 'Gyms report a broken machine themselves, with photos or video as evidence.' }
    ]
  },
  {
    id: 'tickets',
    name: 'Ticket system',
    summary: 'Internal requests, built to fit one company.',
    meta: 'Client work · 2026',
    description:
      'The same client needed one place for requests between its departments: quotes, warranty claims, customer complaints. Each department defines its own request types, with their own form fields and response times. The board shows at a glance which tickets are on time, at risk or late, counted in office hours only. Every change lands in the ticket’s timeline.',
    stack: 'Next.js, TypeScript, React Query, Zustand, dnd-kit, Tiptap, Vitest, MSW, NestJS, Prisma',
    screensNote: 'Sample data, client brand changed.',
    screens: [
      { id: 'board', label: 'Board', src: `${tk}/board.webp`, video: `${tk}/board.mp4`, alt: 'Ticket board with to do, in progress and done columns and colour-coded status dots', caption: 'Green, amber and red dots: on time, close to the limit, or late.' },
      { id: 'detail', label: 'Ticket', src: `${tk}/detail.webp`, video: `${tk}/detail.mp4`, alt: 'Ticket detail with custom fields, timeline and comments', caption: 'Each request type brings its own fields. Below them, the timeline and comments.' },
      { id: 'mobile', label: 'Mobile', phone: true, src: `${tk}/mobile.webp`, video: `${tk}/mobile.mp4`, alt: 'Ticket detail on a phone', caption: 'The board and a ticket on a phone.' },
      { id: 'members', label: 'Team', src: `${tk}/team.webp`, video: `${tk}/team.mp4`, alt: 'Team members with department and role', caption: 'Members, their department and their role.' }
    ]
  },
  {
    id: 'pre-sale',
    name: 'Pre-sale',
    summary: 'A broker’s tool for selling apartments off-plan.',
    meta: 'Client work · 2025',
    description:
      'Built for a real estate developer. Each project gets a public landing page with the basics and a form to ask for information. The real work happens with a broker: they log in, check which units are still available, compare options side by side with the buyer, walk them through the payment plan month by month and reserve the unit with a Stripe payment.',
    stack: 'Next.js, TypeScript, Chakra UI, React Query, Zustand, Stripe, Leaflet, Strapi',
    screensNote: 'From the design file, with project names and photos replaced.',
    screens: [
      { id: 'projects', label: 'Projects', src: `${ps}/home.webp`, video: `${ps}/home.mp4`, alt: 'Broker view: grid of projects with starting prices', caption: 'The broker’s view: every project with its starting price, location and sales stage.' },
      { id: 'compare', label: 'Compare', src: `${ps}/comparator.webp`, video: `${ps}/comparator.mp4`, alt: 'Three units compared side by side', caption: 'Up to three units side by side for the buyer: price, down payment, price per m² and cap rate.' },
      { id: 'plan', label: 'Payment plan', src: `${ps}/simulacion.webp`, video: `${ps}/simulacion.mp4`, alt: 'Monthly payment plan simulation', caption: 'The payment plan month by month, from reservation to handover.' },
      { id: 'landing', label: 'Public page', src: `${ps}/category.webp`, video: `${ps}/category.mp4`, alt: 'Public page for one apartment type with an information form', caption: 'What buyers see on their own: the apartment type and a form to ask for information.' },
      { id: 'mobile', label: 'Mobile', phone: true, src: `${ps}/mobile.webp`, alt: 'Broker project list on a phone', caption: 'The broker’s project list on a phone.' }
    ]
  }
]

export const roles = [
  { years: '2023 – now', place: 'Danone', title: 'Frontend Developer', note: 'Headless storefronts, 3DS checkout, performance' },
  { years: '2022 – 2023', place: 'Skydropx', title: 'Frontend Engineer', note: 'Shipping rules engine used on Mercado Libre Mexico' },
  { years: '2021 – 2022', place: 'TARIC / Prontu+', title: 'Frontend Developer', note: 'Rebrand after the spin-off, telemedicine module' },
  { years: '2020 – 2021', place: 'EDteam', title: 'Frontend Developer', note: 'Scaled the platform from 300 to 1,500 concurrent users' }
]

export const stack = [
  'React',
  'Next.js',
  'TypeScript',
  'React Native',
  'Expo',
  'React Query',
  'Zustand',
  'GraphQL',
  'Tailwind CSS',
  'Node.js',
  'NestJS',
  'Vitest',
  'Testing Library',
  'Maestro',
  'New Relic',
  'PostHog',
  'Figma'
]
