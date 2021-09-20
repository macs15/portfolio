import SectionTitle from 'components/atoms/SectionTitle'
import { projectsData } from 'data/projects-data'
import dynamic from 'next/dynamic'

const ProjectList = dynamic(() => import('components/molecules/ProjectList'))

const ProjectsView = () => {
  return (
    <>
      <SectionTitle sectionId="projects" text="Projects" />
      <ProjectList projects={projectsData} />
    </>
  )
}

export default ProjectsView
