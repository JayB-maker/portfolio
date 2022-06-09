import PortfolioBody from "./PortfolioBody"
import './style/Style.css'

const PortfolioHeader = () => {
    return(
        <>
        <div className="headers">
            <h6>My Recent Work</h6>
            <h3>Portfolio</h3>
        </div>
        </>
    )
}

const Portfolio = () => {
  return (
    <>
    <div className="container portfolio">
        <PortfolioHeader />
        <PortfolioBody />
    </div>
    </>
  )
}

export default Portfolio