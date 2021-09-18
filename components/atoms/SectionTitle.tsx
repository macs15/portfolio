import { FC } from 'react'

const SectionTitle: FC<SectionTitleProps> = ({ sectionId, text }) => {
  return (
    <div id={sectionId} className="flex justify-center">
      <h2 className="text-md lg:text-xl z-10 relative">
        {text}
        <span className="bg-primary section-title-bg" />
      </h2>
    </div>
  )
}

type SectionTitleProps = {
  sectionId: string
  text: string
}

export default SectionTitle
