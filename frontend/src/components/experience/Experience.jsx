import React from 'react';
import "../experience/experience.css"
//import {BsCheckSquare} from "react-icons/bs"
import { SiCheckmarx } from "react-icons/si"

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
                            <SiCheckmarx className='experience__details-icon' />
                            <div>
                            <h4>HTML</h4>
                            <small className='text-light'>Avancé</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <SiCheckmarx className='experience__details-icon'/>
                            <div>
                            <h4>CSS</h4>
                            <small className='text-light'>Avancé</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <SiCheckmarx className='experience__details-icon'/>
                            <div>
                            <h4>JavaScript</h4>
                            <small className='text-light'>Intermédiaire</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <SiCheckmarx className='experience__details-icon'/>
                            <div>
                            <h4>SASS</h4>
                            <small className='text-light'>Intermédiaire</small>
                            </div>
                        </article>
                       
                        <article className='experience__details'>
                            <SiCheckmarx className='experience__details-icon'/>
                            <div> 
                            <h4>React</h4>
                            <small className='text-light'>Intermédiaire</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <SiCheckmarx className='experience__details-icon'/>
                            <div>
                            <h4>Glandeur</h4>
                            <small className='text-light'>Expert</small>
                            </div>
                        </article>

                    </div>

                </div>
            {/* FRONT-END FINI */}
            <div className="experience__backend">

                 <h3>Développement Back-end</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <SiCheckmarx className='experience__details-icon'/>
                            <div> 
                            <h4>Node JS</h4>
                            <small className='text-light'>Débutant</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <SiCheckmarx className='experience__details-icon'/>
                            <div> 
                            <h4>MongoDB</h4>
                            <small className='text-light'>Débutant</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <SiCheckmarx className='experience__details-icon'/>
                            <div>
                            <h4>NoSQL</h4>
                            <small className='text-light'>Débutant</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <SiCheckmarx className='experience__details-icon'/>
                            <div>
                            <h4>JAVA</h4>
                            <small className='text-light'>Débutant</small>
                            </div>
                        </article>
                       
                        <article className='experience__details'>
                            <SiCheckmarx className='experience__details-icon'/>
                            <div> 
                            <h4>PHP</h4>
                            <small className='text-light'>Débutant</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <SiCheckmarx className='experience__details-icon'/>
                            <div> 
                            <h4>Glandeur</h4>
                            <small className='text-light'>Expert</small>
                            </div>
                        </article>

                    </div>

                    
                </div>


            </div>
        </section>
    );
};

export default Experience;