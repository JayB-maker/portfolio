import Socials from "../home/Socials"
import NavigationBars from "../navigation/NavigationBars"
import './style/Style.css'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="container">
        <a href="#"><h1>Jayb—ee</h1></a>
        <NavigationBars />
        <Socials />
        <h6>&copy; Copyright 2022, Jaybee</h6>
        </div>
    </footer>
    </>
  )
}

export default Footer