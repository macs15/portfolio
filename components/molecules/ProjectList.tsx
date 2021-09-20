import useMedia from 'components/hooks/useMedia'
import ProjectCard from 'components/organisms/ProjectCard'
import ProjectCardDesktop from 'components/organisms/ProjectCardDesktop'
import { ProjectData } from 'data/projects-data'
import { FC } from 'react'

const ProjectList: FC<ProjectListProps> = ({ projects }) => {
  const { isMobile } = useMedia()

  return isMobile ? (
    <section className="my-10 mx-5 md:grid md:grid-cols-2 md:gap-10">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  ) : (
    <ProjectCardDesktop projects={projects} />
  )
}

type ProjectListProps = {
  projects: ProjectData[]
}

export default ProjectList
