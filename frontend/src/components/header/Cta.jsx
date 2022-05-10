import React from 'react';
import CV from "../../assets/cv1.pdf"

const Cta = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Télécharger le CV</a>
            <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
    );
};

export default Cta;