import { testimonialDetails } from "../../data/Data"
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialCard = () => {
  return (
    <>
        <Swiper 
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="testimonial-cards">
            {testimonialDetails.map((item, key) => (
                <SwiperSlide className="card" key={key}>
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
                </SwiperSlide>
            ))}
        </Swiper>
    </>
  )
}

export default TestimonialCard