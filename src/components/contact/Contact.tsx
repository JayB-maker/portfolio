import ContactBody from "./contactBody/ContactBody"
import './style/Style.css'

const ContactHeader = () =>{
    return(
        <>
        <div className="headers">
            <h6>Get In Touch</h6>
            <h3>Contact</h3>
        </div>
        </>
    )
}
const Contact = () => {
  return (
    <>
        <div className="container contact">
            <ContactHeader />
            <ContactBody />
        </div>
    </>
  )
}

export default Contact