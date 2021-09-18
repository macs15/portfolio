import ProjectList from 'components/molecules/ProjectList'
import { projectsData } from 'data/projects-data'

const ProjectsView = () => {
  return (
    <>
      <div id="projects" className="flex justify-center">
        <h2 className="text-md z-10 relative">
          Projects
          <span className="bg-primary section-title-bg"/>
        </h2>
      </div>
      <ProjectList projects={projectsData} />
    </>
  )
}

export default ProjectsView
