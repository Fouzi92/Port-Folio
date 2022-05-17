import React from 'react';
import "../footer/footer.css"
import {FiFacebook} from "react-icons/fi"
import { GrInstagram} from "react-icons/gr"
import {FiTwitter} from "react-icons/fi"

const Footer = () => {
    return (
       <footer>
             <a href="#footer" className='footer__logo'>Fao-CHomeur</a>

             <ul className='permalinks'>
                 <li><a href="#header">Home</a> </li>
                  <li><a href="#about">About</a> </li>
                   <li><a href="#experience">Experience</a> </li>
                    <li><a href="#services">Services</a> </li>
                    <li><a href="#portfolio">Portfolio</a> </li>
                     <li><a href="#testimonials">Témoignages</a> </li>
                     <li><a href="#contact">Contact</a> </li>
                      </ul>
               
               <div className="footer__socials">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" > <FiFacebook/> </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" > <GrInstagram/> </a>
                    <a href="https://twitter.com/home" target="_blank" rel="noreferrer" > <FiTwitter/> </a>
                </div>

                <div className="footer__copyright">
                    <small>&copy; Fao portfolio 2022</small>
                </div>
             

            

       </footer>
    );
};

export default Footer;