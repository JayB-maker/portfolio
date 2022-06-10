import ContactCTA from "./ContactCTA"
import ContactForm from "./ContactForm"

const ContactBody = () => {
  return (
    <>
    <div className="contact-flex">
    <div className="contact-grid">
        <ContactCTA />
        <ContactForm />
    </div>
    </div>
    </>
  )
}

export default ContactBody