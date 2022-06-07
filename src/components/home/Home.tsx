import HomeCTA from "./HomeCTA";
import HomeImage from "./HomeImage";
import HomeStuff from "./HomeStuff";
import "./style/style.css";

const Home = () => {
    return(
        <>
            <div className="container home">
                <div className="hero-details">
                    <h6>Hello I'm</h6>
                    <h1>Abiodun Jayb</h1>
                    <h6>Frontend Developer</h6>
                </div>
                <HomeCTA />
                <HomeImage />
                <HomeStuff />
            </div>
        </>
    )
}
export default Home;