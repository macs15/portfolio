import { ExternalLinkIcon } from '@heroicons/react/outline'
import { github } from 'components/atoms/Icons'
import IconWrapper from 'components/atoms/IconWrapper'
import Link, { Color } from 'components/atoms/Link'
import { FC } from 'react'

const ProjectsButtons: FC<ProjectsButtonsProps> = ({ repoUrl, demoUrl, linkColor = 'primary', linkText="Demo" }) => {
  return (
    <div className="flex items-center justify-center mt-5 z-10">
      <Link href={repoUrl} color="transparent">
        <IconWrapper size="30px" color="white">
          {github}
        </IconWrapper>
      </Link>

      <Link color={linkColor} className="ml-7" href={demoUrl} text={linkText}>
        <ExternalLinkIcon className="ml-2 w-6" />
      </Link>
    </div>
  )
}

type ProjectsButtonsProps = {
  repoUrl: string
  demoUrl: string
  linkText?: string
  linkColor?: Color
}

export default ProjectsButtons
