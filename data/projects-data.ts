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
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, sint aspernatur aut
      numquam vel possimus laborum sed eaque sunt vitae veritatis odio et dicta a, facilis
      ducimus voluptatibus nisi ex!`,
    technologies: [
      { id: 1, icon: javascript },
      { id: 2, icon: gatsby },
      { id: 3, icon: strapi }
    ],
    image: 'studio-wrap.png',
    demoUrl: '',
    repoUrl: ''
  },
  {
    id: 2,
    title: 'Bet system app',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, sint aspernatur aut
      numquam vel possimus laborum sed eaque sunt vitae veritatis odio et dicta a, facilis
      ducimus voluptatibus nisi ex!`,
    technologies: [
      { id: 1, icon: javascript },
      { id: 2, icon: nextjs },
      { id: 3, icon: nodejs }
    ],
    image: 'bets.png',
    demoUrl: '',
    repoUrl: ''
  },
  {
    id: 3,
    title: 'Todo app',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, sint aspernatur aut
      numquam vel possimus laborum sed eaque sunt vitae veritatis odio et dicta a, facilis
      ducimus voluptatibus nisi ex!`,
    technologies: [
      { id: 1, icon: javascript },
      { id: 2, icon: reactjs }
    ],
    image: 'todoApp.jpg',
    demoUrl: '',
    repoUrl: ''
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
