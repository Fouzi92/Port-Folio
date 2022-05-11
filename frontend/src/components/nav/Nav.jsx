import React from 'react';
import "../nav/nav.css"
import {BiHomeSmile} from "react-icons/bi"
import {BiUserVoice} from "react-icons/bi"
import {FiBookOpen} from "react-icons/fi"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageRoundedCheck} from "react-icons/bi"

const Nav = () => {
    return (
       <nav>
           <a href="#header" className='active'><BiHomeSmile/></a>
            <a href="#about"><BiUserVoice/></a>
             <a href="#experience"><FiBookOpen/></a>
              <a href="#services"><RiServiceLine/></a>
               <a href="#contact"><BiMessageRoundedCheck/></a>
       </nav>
    );
};

export default Nav;