import React from 'react';
import "../header/header.css"
import Cta from './Cta';

const Header = () => {
    return (
       <header>
           <div className="container header__container">
          <h5>Bonjour Je suis </h5>
          <h1>Un chomeur</h1>
          <h5 className='text-light'>Fullstack galérien</h5>
          <Cta />

           </div>
       </header>
       
    );
};

export default Header;