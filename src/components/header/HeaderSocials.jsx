import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>

     <a href="https://instagram.com/_anshulkumarr?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer"><BsInstagram /></a>
      <a href="linkedin.com/in/anshul-kumar-singh-a1b7a0271" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/anshulsingh80/reacttask6/upload" target="_blank" rel="noreferrer"><IoLogoGithub /></a>
    </div>
  )
}

export default HeaderSocials