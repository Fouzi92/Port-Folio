import React from 'react';
import "../services/services.css"
import {BsCheck2All} from "react-icons/bs"

const Services  = () => {
    return (
        <section id='services'>
             <h5>ce que j'offre</h5>
            <h2> Mes Services</h2>
            
            <div className="container services__container">
              <article className='service'>
                  <div className="service__head">
                      <h3>UI/UX Design</h3>
                  </div>
                  
                  <ul className='service__list'>
                    <li>
                        <BsCheck2All className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
                        </li>
                        <li>
                        <BsCheck2All className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
                        </li>
                        <li>
                        <BsCheck2All className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
                        </li>
                        <li>
                        <BsCheck2All className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
                        </li>
                        <li>
                        <BsCheck2All className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
                        </li>
                        <li>
                        <BsCheck2All className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
                        </li>

                  </ul>
              </article>

               {/* Ui-Ux fini */}

                             <article className='service'>
                  <div className="service__head">
                      <h3>Développement Web</h3>
                  </div>
                  
                  <ul className='service__list'>
                    <li>
                        <BsCheck2All className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
                        </li>
                        <li>
                        <BsCheck2All className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
                        </li>
                        <li>
                        <BsCheck2All className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
                        </li>
                        <li>
                        <BsCheck2All className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
                        </li>
                        <li>
                        <BsCheck2All className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
                        </li>
                        <li>
                        <BsCheck2All className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
                        </li>

                  </ul>
              </article>

              {/* WeB DEVELOPMENT */ }

                <article className='service'>
                  <div className="service__head">
                      <h3>Création de contenu</h3>
                  </div>
                  
                  <ul className='service__list'>
                    <li>
                        <BsCheck2All className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
                        </li>
                        <li>
                        <BsCheck2All className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
                        </li>
                        <li>
                        <BsCheck2All className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
                        </li>
                        <li>
                        <BsCheck2All className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
                        </li>
                        <li>
                        <BsCheck2All className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
                        </li>
                        <li>
                        <BsCheck2All className='service__list-icon'/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
                        </li>

                  </ul>
              </article>
              { /* Création de contenu */}
            </div>
        </section>
    );
};

export default Services ;