import React from 'react'
import ME from "../../assets/my-profile/anshul pic.jpg"
import HeaderSocials from './HeaderSocials'
import './headernew.css'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='container__header'>
          <div className="header__title">
           
            <h5 className='text-light'>Full Stack Developer</h5>
          </div>
          <div className="header__container">
            <HeaderSocials className="header__social" />
            <div className="me">
              <img src={ME} style={{ borderRadius: "50%" }} alt="me" className='me-img' />
            </div>
            <div className="scroll">
              <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header