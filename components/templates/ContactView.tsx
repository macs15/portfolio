import SectionTitle from 'components/atoms/SectionTitle'
import useIntersection from 'components/hooks/useIntersection'
import ContactContent from 'components/organisms/ContactContent'

const ContactView = () => {
  const { ref } = useIntersection('contact')
  return (
    <div ref={ref} className="contact flex flex-col">
      <SectionTitle sectionId="contact" text="Contact" />
      <ContactContent />
    </div>
  )
}

export default ContactView
