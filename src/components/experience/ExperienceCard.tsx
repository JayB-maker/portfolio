import { experienceDetails } from "../../data/Data"
import {AiFillCheckCircle} from "react-icons/ai"


const ExperienceCard = () => {
  return (
    <>
    <div className="experience-flex">
        {experienceDetails.map((item) => (
            <div className="card">
            <h3>{item.track}</h3>
            <div className="items">
                {item.skills.map((subItem) => (
                    <div className="item-flex">
                        <div className="icon">
                            <AiFillCheckCircle />
                        </div>
                        <div className="list">
                            <h4>{subItem.type}</h4>
                            <h6>{subItem.level}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        ))}
    </div>
    </>
  )
}

export default ExperienceCard