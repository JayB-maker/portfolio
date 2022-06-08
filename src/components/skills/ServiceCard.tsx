import { serviceDetails } from '../../data/Data'
import { AiFillCheckCircle } from 'react-icons/ai'

const ServiceCard = () => {
  return (
    <>
        <div className="service-grid">
            {serviceDetails.map((item) => (
              <div className="service-card">
                <div className="track">
                  <h3>{item.track}</h3>
                </div>
                <div className="details">
                  {item.details.map((subItem) => (
                    <>
                      <div className="detail-flex">
                        <div className="icon"><AiFillCheckCircle /></div>
                        <div className="detail">{subItem}</div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            ))}
        </div>
    </>
  )
}

export default ServiceCard