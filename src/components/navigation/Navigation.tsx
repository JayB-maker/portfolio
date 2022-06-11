import "./style/Style.css"
import { useState } from "react";
import NavigationBars from "./NavigationBars";
import { INavigationSectionProps } from "../../types/types";


const Navigation = (props:INavigationSectionProps) => {

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