import { navs } from '../../data/Data'
import { MdClose } from 'react-icons/md'
import { BiMenuAltRight } from 'react-icons/bi'

const NavigationBars = (props: any) => {
    const {navState, setNavState} = props
  return (
    <>
    <div className="nav-container">
                    <ul className= {`nav-list ${navState? "show" : ""}`}>
                        <div className="exit" onClick={() => setNavState(false)}><MdClose /></div>
                        {navs.map((item) => (
                            <li><a href={item.route} >{item.menu}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="mobile-menu" onClick={() => setNavState(true)}><BiMenuAltRight /></div>
    </>
  )
}

export default NavigationBars