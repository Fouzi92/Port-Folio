import React from 'react';
import "../nav/nav.css"
import {BiHomeSmile} from "react-icons/bi"
import {BiUserVoice} from "react-icons/bi"
import {FiBookOpen} from "react-icons/fi"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageRoundedCheck} from "react-icons/bi"
import { useState } from 'react';

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#")
    return (
       <nav>
           <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ""}><BiHomeSmile/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ""}><BiUserVoice/></a>
             <a href="#experience"  onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ""}><FiBookOpen/></a>
              <a href="#services"  onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ""}><RiServiceLine/></a>
               <a href="#contact"  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ""}><BiMessageRoundedCheck/></a>
       </nav>
    );
};

export default Nav;