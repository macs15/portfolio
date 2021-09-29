import SectionTitle from 'components/atoms/SectionTitle'
import useIntersection from 'components/hooks/useIntersection'
import AboutContent from 'components/organisms/AboutContent'

const AboutView = () => {
  const { ref } = useIntersection('about')
  return (
    <div ref={ref}>
      <SectionTitle sectionId="about" text="About me" />
      <AboutContent />
    </div>
  )
}

export default AboutView
