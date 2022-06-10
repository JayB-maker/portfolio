import { navs } from "../../data/Data";
import "./style/Style.css"
import { MdClose } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import NavigationBars from "./NavigationBars";


const Navigation = () => {

    const [navState, setNavState] = useState(false);

    return(
        <header>
            <div className="container">
                <a href="#">Jayb—ee</a>
                <NavigationBars navState={navState} setNavState={setNavState} />
            </div>
        </header>
        
    )
}

export default Navigation;