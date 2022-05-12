import React from 'react';
import "../experience/experience.css"
import {BsCheckSquare} from "react-icons/bs"

const Experience = () => {
    return (
        <section id='experience'>
            <h2>Mes compétences </h2>
            <h2>Mon experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Développement front-end</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsCheckSquare/>
                            <h4>HTML</h4>
                            <small className='text-light'>Avancé</small>
                        </article>
                        
                        <article className='experience__details'>
                            <BsCheckSquare/>
                            <h4>CSS</h4>
                            <small className='text-light'>Avancé</small>
                        </article>
                        
                        <article className='experience__details'>
                            <BsCheckSquare/>
                            <h4>JavaScript</h4>
                            <small className='text-light'>Intermédiaire</small>
                        </article>
                        
                        <article className='experience__details'>
                            <BsCheckSquare/>
                            <h4>SASS</h4>
                            <small className='text-light'>Intermédiaire</small>
                        </article>
                       
                        <article className='experience__details'>
                            <BsCheckSquare/>
                            <h4>React</h4>
                            <small className='text-light'>Intermédiaire</small>
                        </article>
                        
                        <article className='experience__details'>
                            <BsCheckSquare/>
                            <h4>Glandeur</h4>
                            <small className='text-light'>Expert</small>
                        </article>

                    </div>

                </div>
            {/* FRONT-END FINI */}
            <div className="experience__backend">

                 <h3>Développement Back-end</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsCheckSquare/>
                            <h4>Node JS</h4>
                            <small className='text-light'>Débutant</small>
                        </article>
                        
                        <article className='experience__details'>
                            <BsCheckSquare/>
                            <h4>MongoDB</h4>
                            <small className='text-light'>Débutant</small>
                        </article>
                        
                        <article className='experience__details'>
                            <BsCheckSquare/>
                            <h4>NoSQL</h4>
                            <small className='text-light'>Débutant</small>
                        </article>
                        
                        <article className='experience__details'>
                            <BsCheckSquare/>
                            <h4>JAVA</h4>
                            <small className='text-light'>Débutant</small>
                        </article>
                       
                        <article className='experience__details'>
                            <BsCheckSquare/>
                            <h4>PHP</h4>
                            <small className='text-light'>Débutant</small>
                        </article>
                        
                        <article className='experience__details'>
                            <BsCheckSquare/>
                            <h4>Glandeur</h4>
                            <small className='text-light'>Expert</small>
                        </article>

                    </div>

                    
                </div>


            </div>
        </section>
    );
};

export default Experience;