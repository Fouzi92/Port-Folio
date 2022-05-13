import React from 'react';
import "../testimonials/testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

const Testimonials = () => {
    return (
        <section id='testimonials'>
             <h5>Avis clients "Pigeon"</h5>
              <h2>Témoignages "En vrais c'est du MITO Wallah</h2>

              <div className="container testimonials__container">
                 <article className='testimonial'> 
                   <div className="client__avatar">
                     <img src={AVTR1} alt="Avatar" />
                     </div>
                     <h5 className="client__name"> Ernest Achiever</h5>
                     <small className='client__review'>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempore tenetur dolor mollitia architecto, sequi nesciunt temporibus, est repellat nihil harum, quo saepe dicta. Dolores quae iusto facere distinctio tempore.
                     </small>
                
                  
                </article>

                <article className='testimonial'> 
                   <div className="client__avatar">
                      <img src={AVTR2} alt="Avatar" />
                        <h5 className="client__name"> Ernest Achiever</h5>
                           </div>
                           <small className='client__review'>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempore tenetur dolor mollitia architecto, sequi nesciunt temporibus, est repellat nihil harum, quo saepe dicta. Dolores quae iusto facere distinctio tempore.
                     </small>
                
                  
                </article>

                <article className='testimonial'> 
                 <div className="client__avatar">
                    <img src={AVTR3} alt="Avatar" />
                     <h5 className="client__name"> Ernest Achiever</h5>
                     </div>
                        <small className='client__review'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempore tenetur dolor mollitia architecto, sequi nesciunt temporibus, est repellat nihil harum, quo saepe dicta. Dolores quae iusto facere distinctio tempore.
                     </small>
                    
                </article>

                <article className='testimonial'> 
                 <div className="client__avatar">
                    <img src={AVTR4} alt="Avatar" />
                     <h5 className="client__name"> Ernest Achiever</h5>
                     </div>
                        <small className='client__review'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempore tenetur dolor mollitia architecto, sequi nesciunt temporibus, est repellat nihil harum, quo saepe dicta. Dolores quae iusto facere distinctio tempore.
                     </small>
                    
                </article>

                     
                
               
              </div>
        </section>
    );
};

export default Testimonials;