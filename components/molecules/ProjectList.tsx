import ProjectCard from "components/organisms/ProjectCard"
import { FC } from "react"

const ProjectList: FC<ProjectListProps> = () => {
  return (
    <div className="my-8 mx-5">
      <ProjectCard imageUrl="studio-wrap.png" />
      <ProjectCard imageUrl="studio-wrap.png" />
      <ProjectCard imageUrl="studio-wrap.png" />
    </div>
  )
}

type ProjectListProps = {}

export default ProjectList
