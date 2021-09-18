import SectionTitle from 'components/atoms/SectionTitle'
import ProjectList from 'components/molecules/ProjectList'
import { projectsData } from 'data/projects-data'

const ProjectsView = () => {
  return (
    <>
      <SectionTitle sectionId="projects" text="Projects" />
      <ProjectList projects={projectsData} />
    </>
  )
}

export default ProjectsView
