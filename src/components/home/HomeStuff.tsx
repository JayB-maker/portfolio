import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {TiSocialInstagramCircular} from "react-icons/ti"

const HomeStuff = () => {
    return(
        <>
        <div className="left">
            <a href="facebook.com"><BsFacebook /></a>
            <a href="facebook.com"><AiFillTwitterCircle /></a>
            <a href="facebook.com"><AiFillGithub /></a>
            <a href="facebook.com"><TiSocialInstagramCircular /></a>
            <div className="line" />
        </div>
        <div className="right">
            <p>Scroll down</p>
        </div>
        </>
    )
}

export default HomeStuff;