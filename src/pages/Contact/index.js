import React from 'react';
import {Header, Credits} from '../Standard';
import './styles.css';

import github from '../../assets/gh.png';
import telegram from '../../assets/telegram.png';
import linkedin from '../../assets/in.png';
import email from '../../assets/email.png';

export default function Contact() {
    return (
        <div className = "contact-container">
            <Header/>
            <section className="body">
                <div className="socials">
                    <a href = 'http://github.com/rosantori'>    
                        <img src={github} alt="@rosantori"/>
                    </a>
                    <a href = 'http://t.me/rosantori'>
                        <img src={telegram} alt="@rosantori"/>
                    </a>
                    <a href='http://linkedin.com/in/rosantori'>
                        <img src={linkedin} alt="rosantori"/>
                    </a>
                    <a href = 'mailto:rosanasrib@gmail.com'>
                        <img src={email} alt="rosanasrib@gmail.com"/>
                    </a>
                </div>
            </section>
            <Credits/>
        </div>
    );
}