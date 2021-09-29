import SectionTitle from 'components/atoms/SectionTitle'
import useIntersection from 'components/hooks/useIntersection'
import { projectsData } from 'data/projects-data'
import dynamic from 'next/dynamic'

const ProjectList = dynamic(() => import('components/molecules/ProjectList'))

const ProjectsView = () => {
  const { ref } = useIntersection('projects')
  return (
    <div ref={ref}>
      <SectionTitle sectionId="projects" text="Projects" />
      <ProjectList projects={projectsData} />
    </div>
  )
}

export default ProjectsView
