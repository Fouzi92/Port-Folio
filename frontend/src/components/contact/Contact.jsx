import React from 'react';
import "../contact/contact.css"
import {MdOutlineAttachEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from "emailjs-com"

const Contact = () => {
  const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k8olbke', 'template_nugxd6h', form.current, 'rm_Y2CSXhu8dMsGDE')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
 
    return (
        <section id='contact'>
  
     <h5>Contact</h5>
     <h2>Contactez-moi</h2>

      <div className="container contact__container">
         <div className="contact__options">
        <article className='contact__option'>
          <MdOutlineAttachEmail className='contact__option-icon'/>
         <h4>Email</h4>
         <h5>Chomeur.PoleEmploie-LaCaf@hotmail.fr</h5>
           <a href="mailto:Chomeur.PoleEmploie-LaCaf@hotmail.fr" target="_blank" rel="noreferrer" > Envoyer un message </a>
        </article>

                <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon'/>
         <h4>Messenger</h4>
         <h5>Faouzi Tounsi</h5>
           <a href="https://m.me/Faouzi.Tounsiiii" target="_blank" rel="noreferrer" > Envoyer un message </a>
        </article>


                <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
         <h4>WhatsApp</h4>
         <h5>+33695470187</h5>
           <a href="https://api.whatsapp.com/send?phone+33695470187" target="_blank" rel="noreferrer" > Envoyer un message </a>
        </article>
         </div>
         {/* OPTIONS DE FIN DE CONTACT */}
       <form ref={form} onSubmit={sendEmail}>
         <input type="text" name='name' placeholder='Nom et Prénom' required />
         <input type="email" name="email" placeholder='Votre email' required/>
         <textarea name="message" rows="7" placeholder='Votre message' required></textarea>
         <button type="submit" className='btn btn-primary'>Envoyer</button>
       </form>

       </div>


        </section>
    );
};

export default Contact;

