import { navs } from "../../data/Data";
import "./style/Style.css"
import { MdClose } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";


const Navigation = () => {

    const [navState, setNavState] = useState(false);

    return(
        <header>
            <div className="container">
                <a href="#">Jayb—ee</a>
                <div className="nav-container">
                    <ul className= {`nav-list ${navState? "show" : ""}`}>
                        <div className="exit" onClick={() => setNavState(false)}><MdClose /></div>
                        {navs.map((item) => (
                            <li><a href={item.route} >{item.menu}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="mobile-menu" onClick={() => setNavState(true)}><BiMenuAltRight /></div>
            </div>
        </header>
        
    )
}

export default Navigation;