import { ExternalLinkIcon } from '@heroicons/react/outline'
import { github } from 'components/atoms/Icons'
import IconWrapper from 'components/atoms/IconWrapper'
import Link from 'components/atoms/Link'
import { ProjectData } from 'data/projects-data'
import { FC } from 'react'

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { image, technologies, description, title, demoUrl, repoUrl } = project

  return (
    <article className="shadow-card">
      <div className="relative bg-cover mt-5 rounded-lg">
        <div className="flex flex-col p-5 mx-2">
          <h3 className="text-sm">{title}</h3>
          <p className="text-paragraph mt-5">{description}</p>

          <div className="flex items-center mt-5">
            <p>Built with:</p>
            <div className="flex items-center">
              {technologies.map(({ id, icon }) => (
                <IconWrapper key={id} className="ml-2" size="20px">
                  {icon}
                </IconWrapper>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center mt-5">
            <Link href={repoUrl} color="transparent">
              <IconWrapper size="30px" color="white">
                {github}
              </IconWrapper>
            </Link>

            <Link color="primary" className="ml-7" href={demoUrl} text="Demo">
              <ExternalLinkIcon className="ml-2 w-6" />
            </Link>
          </div>
        </div>

        {/* Background */}
        <img
          className="absolute top-0 left-0 h-full w-full bg-no-repeat rounded-md -z-2 bg-cover object-cover"
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
