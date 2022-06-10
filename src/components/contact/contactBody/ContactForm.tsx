
const ContactForm = () => {
  return (
    <>
    <form>
        <input type="text" name="full-name" id="full-name" placeholder="Your Full Name" required />
        <input type="email" name="email" id="email" placeholder="Your Email" required />
        <textarea name="message" id="message" cols={30} rows={10} placeholder="Your Message" required />
        <button type="submit" className="btn-primary">Send Message</button>
    </form>
    </>
  )
}

export default ContactForm;