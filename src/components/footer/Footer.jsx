import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { IoLogoGithub } from 'react-icons/io'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Anshul Kumar Singh</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://instagram.com/_anshulkumarr?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer"><BsInstagram /></a>
        <a href="linkedin.com/in/anshul-kumar-singh-a1b7a0271" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/anshulsingh80" target="_blank" rel="noreferrer"><IoLogoGithub /></a>
    
      </div>

      <div className='footer__copyright'>
        <small>&copy; Anshul Kumar Singh. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer