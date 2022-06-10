import { contactDetais } from "../../../data/Data"
import { FiArrowUpRight } from "react-icons/fi"

const ContactCTA = () => {
  return (
    <>
        <div className="contact-cta">
            {contactDetais.map((item, key) => (
                <div className="card" key={key}>
                    <h3>{item.stash}</h3>
                    <h6>{item.handle}</h6>
                    <a href={item.actionSRC}>Send Message<span><FiArrowUpRight /></span></a>
                </div>
            ))}
        </div>
    </>
  )
}

export default ContactCTA