import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { TiSocialInstagramCircular } from 'react-icons/ti'

const Socials = () => {
  return (
    <>
    <div className="left">
        <a href="https://www.facebook.com/abiodun.ajiboye.716" target="_blank"><BsFacebook /></a>
        <a href="https://www.twitter.com/Ajiboye31726857" target="_blank"><AiFillTwitterCircle /></a>
        <a href="https://www.github.com/JayB-maker" target="_blank"><AiFillGithub /></a>
        <a href="https://www.instagram.com/abiodunjayb/" target="_blank"><TiSocialInstagramCircular /></a>
        <div className="line" />
    </div>
    </>
  )
}

export default Socials