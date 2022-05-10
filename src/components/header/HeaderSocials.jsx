import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/eduard-scobioală-663850231/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/EduardScobioala" target="_blank"><BsGithub/></a>
        <a href="https://www.facebook.com/eduard.scobioala.1" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials