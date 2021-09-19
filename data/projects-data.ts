import {
  gatsby,
  IconInterface,
  javascript,
  nextjs,
  nodejs,
  reactjs,
  strapi
} from '../components/atoms/Icons'

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: 'Studio Wrap app',
    description: `This is an app with the purpose of showing the work done by a visual communication company. This is a project developed in Gatsbyjs, a framework based on React, with Node.js, Strapi and MySQL as backend`,
    technologies: [
      { id: 1, icon: javascript },
      { id: 2, icon: gatsby },
      { id: 3, icon: strapi }
    ],
    image: 'studio-wrap.png',
    demoUrl: 'https://studio-wrap.netlify.app/',
    repoUrl: 'https://github.com/macs15/studiowrapfrontend'
  },
  {
    id: 2,
    title: 'CMS courses EDteam app',
    description:
      "This project is a simple CRUD made with React.js that uses JSON Server as a fake Rest API. In the project you can create, update, delete and/or list courses.I developed it trying to follow a little bit the <a class='text-primary hover:underline' href='https://ed.team' target='_blank'>EDteam</a> website.",
    technologies: [
      { id: 1, icon: javascript },
      { id: 2, icon: nextjs },
      { id: 3, icon: nodejs }
    ],
    image: 'bets.png',
    demoUrl: 'https://edteam-cursos.vercel.app/',
    repoUrl: 'https://github.com/macs15/edteam-cursos'
  },
  {
    id: 3,
    title: 'Todo app',
    description: `A to-do application with a simple CRUD (read, create, modify and delete, respectively) without a database, so the use of LocalStorage was implemented to manage the tasks.`,
    technologies: [
      { id: 1, icon: javascript },
      { id: 2, icon: reactjs }
    ],
    image: 'todoApp.jpg',
    demoUrl: 'https://todo-app-challenge-seven.vercel.app/',
    repoUrl: 'https://github.com/macs15/todo-app-challenge'
  },
  {
    id: 3,
    title: 'MERN stack task app',
    description: `An application with a CRUD of tasks in projects which requires authentication and allows the creation of new user accounts built with React. The state of the application is fully handled with context.`,
    technologies: [
      { id: 1, icon: javascript },
      { id: 2, icon: nodejs },
      { id: 3, icon: reactjs }
    ],
    image: 'mernTask.png',
    demoUrl: 'https://tasks-mern.vercel.app/',
    repoUrl: 'https://github.com/macs15/MERN-Tasks'
  }
]

export interface ProjectData {
  id: number
  title: string
  description: string
  technologies: TechnologyIcon[]
  image: string
  demoUrl: string
  repoUrl: string
}

export type TechnologyIcon = {
  id: number
  icon: IconInterface
}
