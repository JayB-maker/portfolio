import { testimonialDetails } from "../../data/Data"

const TestimonialCard = () => {
  return (
    <>
        <div className="testimonial-cards">
            {testimonialDetails.map((item, key) => (
                <div className="card" key={key}>
                    <div className="image-container">
                        <div className="inner-container">
                            <img src={item.imageSRC} alt={item.personsName} />
                        </div>
                    </div>
                    <div className="name">
                        <h6>{item.personsName}</h6>
                    </div>
                    <div className="testimonial">
                        <p>{item.tesstimonial}</p>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default TestimonialCard