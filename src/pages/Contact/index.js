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
                    <section className="telegram">
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
                    </section>                    
                </div>
            </section>
            <Credits/>
        </div>
    );
}
/*export default function Contact() {
    return (
        <div className="contact-container">
            <Header/>
            <section className = "body">
                <div className="socials">
                    <section className="telegram">
                        Telegram: @rosantori
                    </section>
                    <section className="email">
                        e-mail: rosanasrib@gmail.com
                    </section>
                    <section className="insta">
                        
                    </section>
                </div>
            </section>
            <Credits/>
        </div>
    );
}*/

/*                <div className="redes">

                    <div className="rede">
                        <a href= 'mailto:rosanasrib@gmail.com'>
                            <img src={insta} alt="@rosanasrib" style={{maxWidth : "10%"}}/>
                        </a>
                    </div>
                    <div className="rede">
                        <a href= 'http://youtube.com/rosantori'>
                            <img src={linkedin} alt="@rosanasrib" style={{maxWidth : "15%"}}/>
                        </a>
                    </div>
                    <div className="rede">
                        <a href= 'http://www.facebook.com/rosantori'>
                            <img src={facebook} alt="@AiRow_" style={{maxWidth : "12%"}}/>
                        </a>
                    </div>
                </div> */