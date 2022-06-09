import { portfolioDetails } from '../../data/Data'
import {FiArrowUpRight} from 'react-icons/fi'

const PortfolioBody = () => {
  return (
    <>
    <div className="portfolio-container">
        {portfolioDetails.map((item, key) => (
            <div className="card" key={key}>
                <div className="image-container">
                    <img src={item.imageSRC} alt={item.projectName} />
                </div>
                <div className="project-name">
                    <h6>{item.projectName}</h6>
                </div>
                <div className="project-cta">
                    <a href={item.githubLink} className="btn-primary">Github</a>
                    <a href={item.liveDemoLink}  className="live-demo" >Live Demo <span><FiArrowUpRight /></span></a>
                </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default PortfolioBody