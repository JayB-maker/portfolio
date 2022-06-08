import ExperienceCard from "./ExperienceCard";
import "./style/Style.css";

const ExperienceHeader = () => {
    return(
        <>
        <div className="headers">
            <h6>What Skills I Have</h6>
            <h3>My Experience</h3>
        </div>
        </>
    )
}
const Experience = () => {
  return (
    <>
        <div className="container experience">
            <ExperienceHeader />
            <ExperienceCard />
        </div>
    </>
  )
}

export default Experience