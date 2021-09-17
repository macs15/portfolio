import ProjectList from 'components/molecules/ProjectList'

const ProjectsView = () => {
  return (
    <>
      <div id="projects" className="flex justify-center">
        <h2 className="text-md z-10 relative">
          Projects
          <span className="bg-primary section-title-bg"/>
        </h2>
      </div>
      <ProjectList />
    </>
  )
}

export default ProjectsView
