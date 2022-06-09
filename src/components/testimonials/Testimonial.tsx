import './style/Style.css'
import TestimonialCard from './TestimonialCard'

const TestimonialHeader = () =>{
    return(
        <>
            <div className="headers">
                <h6>Reviews From Clients</h6>
                <h3>Testimonials</h3>
            </div>
        </>
    )
}

const Testimonial = () => {
  return (
    <>
        <div className="container testimonial">
            <TestimonialHeader />
            <TestimonialCard />
        </div>
    </>
  )
}

export default Testimonial