import IconWrapper from 'components/atoms/IconWrapper'
import { TechnologyIcon } from 'data/projects-data'
import { FC } from 'react'

const TechnologiesList: FC<TechnologiesListProps> = ({ technologies }) => {
  return (
    <div className="flex items-center mt-5 z-10">
      <p>Built with:</p>
      <div className="flex items-center">
        {technologies.map(({ id, icon }) => (
          <IconWrapper key={id} className="ml-2" size="20px">
            {icon}
          </IconWrapper>
        ))}
      </div>
    </div>
  )
}

type TechnologiesListProps = {
  technologies: TechnologyIcon[]
}

export default TechnologiesList
