import React from 'react';
import {Header, Credits} from '../Standard';
import './styles.css';
import me from '../../assets/me.jpeg';
import Aboutme from '../../data/Aboutme';

export default function About() {
    return (
        <div className="about-container">
            <Header/>
                <section className="body">
                    <section className="myself">
                        <img src={me} alt="Eu :)"  style={{maxWidth : "30%"}}/>
                        <section className="home-text">
                            <h1>Olá, bem-vindxss! :)</h1>
                            <Aboutme/>
                        </section>
                    </section>
                </section>
            <Credits/>
        </div>
    );
}