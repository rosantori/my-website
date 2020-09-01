import React from 'react';
import {Header} from '../Standard';
import me from '../../assets/me.jpg';
import './styles.css';

export default function Home () {
    function alertOnClick() {
        document.getElementById("alert").style.display = "none";
    }
    return (
        <div className="home-container">
            <Header/>
            <section className="body">
                <div id ="alert">
                    <div className = "alert-content">
                    <h1>Esse site ainda está em desenvolvimento :D </h1>
                    <span className = "close" onClick = {alertOnClick} >&times;</span>
                    </div>
                </div>
                <div className="upper">
                    <div className="profile">
                        <img src={me} alt="Rosana Ribeiro"/>
                        <p>Rosana Ribeiro <br/><br/>
                        Graduanda em Engenharia Mecatrônica</p>
                    </div>
                    <div className="citacao">
                    <h1>"Acreditando no 'além', <br/> e esperando, em Deus, o 'Amém!' "</h1>
                        <h4>Rosana Ribeiro</h4>
                    </div>
                </div>
                <div className="redes">
                    <p> Site feito por mim, utilizando ReactJS <br/>
                    Conheça<a href="http://github.com/rosantori/my-website/tree/master"> aqui</a>.</p>
                </div>
            </section>
        </div>
            );
}
