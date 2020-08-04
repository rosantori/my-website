import React from 'react';
import {Header} from '../Standard';
import me from '../../assets/me.jpg';
import './styles.css';

export default function Home () {
    return (
        <div className="home-container">
            <Header/>
            <section className="body">
                <div className="upper">
                    <div className="profile">
                        <img src={me} alt="Rosana Ribeiro"/>
                        <p>Rosana Ribeiro <br/><br/>
                        Graduanda em <br/>Engenharia Mecatrônica</p>
                    
                    </div>
                    <div className="citacao">
                    <h1>"Acreditando no 'além', <br/> e esperando, em Deus, o 'Amém!' "</h1>
                        <h4>Rosana Ribeiro</h4>
                    </div>
                </div>
                <div className="redes">
                    <p> Site feito por mim, utilizando ReactJS <br/>
                    Conheça outros trabalhos <a href="http://github.com/rosantori"> aqui</a>.</p>
                </div>
            </section>
        </div>
            );
}

/*export default function Home () {
    return (
        <div className="home-container">
            <Header/>
            <section className = "body">
                <div className='rosana'>
                    <img src={me} alt="Eu :)" style={{maxWidth : "30%"}}/>
                    <h4> Rosana S. Ribeiro <br/>Graduanda em Engenharia Mecatrônica </h4>
                </div>
                <div className='frase'>
                    <h1>"Acreditando no 'além', <br/> e esperando, em Deus, o 'Amém!' "</h1>
                    <h4>Rosana Ribeiro</h4>
                </div>
                <div>
                    rosanasrib@gmail.com
                </div>
            </section>
            <Credits/>
        </div>
        
        );
    }
    /*
                        <div className="redes">
        
                            <div className="rede">
                                <a href= 'mailto:rosanasrib@gmail.com'>
                                    <img src={insta} alt="@rosanasrib"/>
                                </a>
                            </div>
                            <div className="rede">
                                <a href= 'http://youtube.com/rosantori'>
                                    <img src={linkedin} alt="@rosanasrib"/>
                                </a>
                            </div>
                            <div className="rede">
                                <a href= 'http://www.facebook.com/rosantori'>
                                    <img src={telegram} alt="@AiRow_"/>
                                </a>
                            </div>
                        </div>
                        */