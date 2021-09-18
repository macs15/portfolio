import SectionTitle from "components/atoms/SectionTitle"
import ContactContent from "components/organisms/ContactContent"

const ContactView = () => {
  return (
    <div className="contact flex flex-col">
      <SectionTitle sectionId="contact" text="Contact" />
      <ContactContent />
    </div>
  )
}

export default ContactView
