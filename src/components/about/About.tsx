import AboutLeftFlex from "./AboutLeftFlex";
import AboutRightFlex from "./AboutRightFlex";
import "./style/Style.css"

const AboutHeader = () => {
    return(
        <>
            <div className="headers">
                <h6>Get to know</h6>
                <h3>About Me</h3>
            </div>
        </>
    )
}

const About = () => {

    

    return(
        <>
            <div className="container about">
                <AboutHeader />
                <div className="about-flex">
                    <AboutLeftFlex />
                    <AboutRightFlex />
                </div>
            </div>
        </>
    )
}

export default About;