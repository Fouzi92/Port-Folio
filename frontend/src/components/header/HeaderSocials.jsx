import React from 'react';
import {SiLinkedin} from "react-icons/si"
import {ImGithub} from "react-icons/im"
import {GiPirateFlag} from "react-icons/gi"



const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/faouzi-ben-romdhane/" target="_blank" rel="noreferrer"><SiLinkedin/></a>
            <a href="https://github.com/Fouzi92" target="_blank" rel="noreferrer"><ImGithub/></a>
            <a href="https://www.pole-emploi.fr/accueil/" target="_blank" rel="noreferrer"><GiPirateFlag/></a>
            
        </div>
    );
};

export default HeaderSocials;