/* eslint-disable react/no-danger */
import { ExternalLinkIcon } from '@heroicons/react/outline'
import { github } from 'components/atoms/Icons'
import IconWrapper from 'components/atoms/IconWrapper'
import Link from 'components/atoms/Link'
import ProjectsButtons from 'components/molecules/ProjectsButtons'
import TechnologiesList from 'components/molecules/TechnologiesList'
import { ProjectData } from 'data/projects-data'
import Image from 'next/image'
import { FC } from 'react'

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { image, technologies, description, title, demoUrl, repoUrl } = project

  return (
    <article className="shadow-card">
      <div className="relative bg-cover mt-5 rounded-lg">
        <div className="flex flex-col p-5 mx-2">
          <h3 className="text-sm z-10">{title}</h3>
          <p
            className="text-paragraph mt-5 z-10"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <TechnologiesList technologies={technologies} />

          <ProjectsButtons demoUrl={demoUrl} repoUrl={repoUrl} />
        </div>

        {/* Background */}
        <Image
          layout="fill"
          className="absolute top-0 left-0 h-full w-full bg-no-repeat rounded-md -z-2 bg-cover object-cover bg-card"
          src={`/projects/${image}`}
          alt={title}
        />
        <div className="absolute h-full w-full top-0 left-0 opacity-90 bg-gray -z-1" />
      </div>
    </article>
  )
}

type ProjectCardProps = {
  project: ProjectData
}

export default ProjectCard
