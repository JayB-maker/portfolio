import ServiceCard from "./ServiceCard"
import "./styles/Style.css"

const ServiceHeader = () =>{
    return(
        <>
         <div className="headers">
             <h6>What I Offer</h6>
             <h3>My Service</h3>
         </div>
        </>
    )
}

const Service = () => {
  return (
    <>
        <div className="container service">
            <ServiceHeader />
            <ServiceCard />
        </div>
    </>
  )
}

export default Service