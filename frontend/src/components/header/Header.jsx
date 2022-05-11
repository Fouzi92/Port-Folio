import React from 'react';
import "../header/header.css"
import Cta from './Cta';
import ME from "../../assets/moi.png"
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
       <header>
           <div className="container header__container">
          <h5>Bonjour Je suis </h5>
          <h1>Un chomeur</h1>
          <h5 className='text-light'>Fullstack galérien</h5>
          <Cta />
          <HeaderSocials />
          <div className="me"> 
          <img src={ME} alt="MOi je suis un BG" />
          </div>
          <a href="#contact" className='scroll__down'>Scroll Down</a>

           </div>
       </header>
       
    );
};

export default Header;