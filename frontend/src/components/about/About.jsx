import React from "react";
import "../about/about.css";
import moi2 from "../../assets/moi-2.jpg";
import {FiAward} from "react-icons/fi"
import {FiUserCheck} from "react-icons/fi"
import {BiFolderOpen} from "react-icons/bi"

const About = () => {
    return (
        <section id="about">
            <h5> Apprendre à me connaître</h5>
            <h2> Sur moi </h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={moi2} alt="moi le bg" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FiAward className="about__icon"/>
                            <h5>Expérience</h5>
                            <small>6mois de formation </small>
                        </article>

                        <article className="about__card">
                            <FiUserCheck className="about__icon"/>
                            <h5>Client</h5>
                            <small>lool des Pigeons Wallah </small>
                        </article>

                        <article className="about__card">
                            <BiFolderOpen className="about__icon"/>
                            <h5>Projets</h5>
                            <small>10 réaliser</small>
                        </article>

                    </div>

                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fuga facilis quo ullam aperiam esse, vitae architecto obcaecati numquam eaque voluptatem totam quas quaerat odit explicabo ab provident? Deleniti, sint?</p>

                    <a href="#contact" className="btn btn-promary"> Parlons </a>
                </div>
            </div>
        </section>
    );  
       
};

export default About;
