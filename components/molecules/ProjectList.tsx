import ProjectCard from 'components/organisms/ProjectCard'
import { ProjectData } from 'data/projects-data'
import { FC } from 'react'

const ProjectList: FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="my-10 mx-5">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

type ProjectListProps = {
  projects: ProjectData[]
}

export default ProjectList
