import React from 'react';
import "../testimonials/testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

const data = [
{
avatar: AVTR1,
Name:' Tina Snow',
review: 'Lorem ipsum doloamet consectetur adipisicing elit. Dolorem sapiente possimus obcaecati sint vel, architecto doloremque esse alias nihil corrupti harum provident ea, voluptatibus quidem delectus ratione, distinctio placeat? Incidunt.'
},

{
avatar: AVTR2,
Name:' Shatta Wale',
review: 'Lorem ipsum doloamet consectetur adipisicing elit. Dolorem sapiente possimus obcaecati sint vel, architecto doloremque esse alias nihil corrupti harum provident ea, voluptatibus quidem delectus ratione, distinctio placeat? Incidunt.'
},

{
avatar: AVTR3,
Name:' Kwame Despite',
review: 'Lorem ipsum doloamet consectetur adipisicing elit. Dolorem sapiente possimus obcaecati sint vel, architecto doloremque esse alias nihil corrupti harum provident ea, voluptatibus quidem delectus ratione, distinctio placeat? Incidunt.'
},

{
avatar: AVTR4,
Name:' Eric Zemmour',
review: 'Lorem ipsum doloamet consectetur adipisicing elit. Dolorem sapiente possimus obcaecati sint vel, architecto doloremque esse alias nihil corrupti harum provident ea, voluptatibus quidem delectus ratione, distinctio placeat? Incidunt.'
}

]

const Testimonials = () => {
    return (
        <section id='testimonials'>
             <h5>Avis clients "Pigeon"</h5>
              <h2>Témoignages "En vrais c'est du MITO Wallah</h2>

              <div className="container testimonials__container">
               {
                   data.map(({avatar, name, review}, index) => {
                       return (
                 <article key={index} className='testimonial'> 
                   <div className="client__avatar">
                     <img src={avatar} alt="r"/>
                     </div>
                     <h5 className="client__name"> {name}</h5>
                     <small className='client__review'> {review}
                      
                     </small>
                
                  
                </article>
                       )
                   })
               }

            </div>
        </section>
    );
};

export default Testimonials;