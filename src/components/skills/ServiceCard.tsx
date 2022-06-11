import { serviceDetails } from '../../data/Data'
import { AiFillCheckCircle } from 'react-icons/ai'
import { IServiceSectionProps } from '../../types/types'

const ServiceCard = (props: IServiceSectionProps) => {
  return (
    <>
        <div className="service-grid">
            {serviceDetails.map((item, key) => (
              <div className="service-card">
                <div className="track" key={key}>
                  <h3>{item.track}</h3>
                </div>
                <div className="details">
                  {item.details.map((subItem, key) => (
                    <>
                      <div className="detail-flex" key={key}>
                        <div className="icon"><AiFillCheckCircle /></div>
                        <div className="detail" key={key}>{subItem}</div>
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