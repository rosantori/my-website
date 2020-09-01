import React from 'react';
import {Header, Credits} from '../Standard';
import './styles.css';
import download from "../../assets/download.png";
import unb from "../../assets/unb.png";
import droid from "../../assets/droid.png";
import catron from "../../assets/catron.png";
import ensinamais from "../../assets/emsw.png";
import Droid from "../../data/Droid";
import Unb from "../../data/Unb";
import Catron from "../../data/Catron";
import Emsw from "../../data/Emsw";

export default function Experiences() {

    function universityOnMouseEnter() {
        document.getElementById("university-overlay").style.opacity = "1";
    }

    function universityOnMouseLeave() {
        document.getElementById("university-overlay").style.opacity = "0";
    }
    
    function universitybtnOnClick() {
        document.getElementById("university-modal").style.display = "block";
    }
    
    function universityspanOnClick() {
        document.getElementById("university-modal").style.display = "none";
    }
    
    function droidOnMouseEnter() {
        document.getElementById("droid-overlay").style.opacity = "1";
    }

    function droidOnMouseLeave() {
        document.getElementById("droid-overlay").style.opacity = "0";
    }

    function droidbtnOnClick() {
        document.getElementById("droid-modal").style.display = "block";
    }

    function droidspanOnClick() {
        document.getElementById("droid-modal").style.display = "none";
    }
    
    function caOnMouseEnter() {
        document.getElementById("ca-overlay").style.opacity = "1";
    }

    function caOnMouseLeave() {
        document.getElementById("ca-overlay").style.opacity = "0";
    }

    function cabtnOnClick() {
        document.getElementById("ca-modal").style.display = "block";
    }

    function caspanOnClick() {
        document.getElementById("ca-modal").style.display = "none";
    }
    
    function emswOnMouseEnter() {
        document.getElementById("emsw-overlay").style.opacity = "1";
    }

    function emswOnMouseLeave() {
        document.getElementById("emsw-overlay").style.opacity = "0";
    }

    function emswbtnOnClick() {
        document.getElementById("emsw-modal").style.display = "block";
    }

    function emswspanOnClick() {
        document.getElementById("emsw-modal").style.display = "none";
    }


    return (
        <div className="experiences-container">
            <Header/>
            <section className="body">
                <div className="locais">
                    <div className="item">
                        <button id="university-btn" onClick = {universitybtnOnClick} onMouseEnter={universityOnMouseEnter}
                            onMouseLeave={universityOnMouseLeave}>
                            <img src={unb} alt="Universidade de Brasília"/>
                            <div className="overlay" id="university-overlay" >
                                <h4>Universidade de Brasília </h4>
                                <h1>Graduanda em Engenharia Mecatrônica. <br/> </h1>
                                <h4>1º semestre de 2016 - atual </h4>
                            </div>
                        </button>
                        <div id ="university-modal" className = "modal">
                            <div className = "modal-content">
                            <span className = "close" onClick = {universityspanOnClick} >&times;</span>
                            <Unb/>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <button id="droid-btn" onClick = {droidbtnOnClick} onMouseEnter={droidOnMouseEnter}
                            onMouseLeave={droidOnMouseLeave}>
                            <img src={droid} alt="Universidade de Brasília"/>
                            <div className="overlay" id= "droid-overlay">
                                <h4>Divisão de Robótica Inteligente - DROID</h4>
                                <h1>Competidora de robótica. <br/></h1>
                                <h4>abril 2018 - atual</h4>
                            </div>
                        </button>
                        <div id ="droid-modal" className = "modal">
                            <div className = "modal-content">
                            <span className = "close" onClick = {droidspanOnClick} >&times;</span>
                            <Droid/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="item">
                        <button id="ca-btn" onClick = {cabtnOnClick} onMouseEnter={caOnMouseEnter}
                            onMouseLeave={caOnMouseLeave}>
                            <img src={catron} alt="Centro Acadêmico de Engenharia Mecatrônica"/>
                            <div className="overlay" id = "ca-overlay">
                                <h4>Centro Acadêmico de Engenharia Mecatrônica</h4>
                                <h1>Presidente do Centro Acadêmico. <br/> </h1>
                                <h4>outubro 2018 - outubro 2019</h4>
                            </div>
                        </button>
                        <div id ="ca-modal" className = "modal">
                            <div className = "modal-content">
                            <span className = "close" onClick = {caspanOnClick} >&times;</span>
                            <Catron/>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <button id="emsw-btn" onClick = {emswbtnOnClick} onMouseEnter={emswOnMouseEnter}
                            onMouseLeave={emswOnMouseLeave}>
                            <img src={ensinamais} alt="Ensina Mais turma da Mônica"/>
                            <div className="overlay" id = "emsw-overlay">
                                <h4>Ensina Mais Turma da Mônica</h4>
                                <h1>Professora de robótica para crianças. <br/></h1>
                                <h4>fevereiro 2019 - março 2020</h4>
                            </div>
                        </button>
                        <div id ="emsw-modal" className = "modal">
                            <div className = "modal-content">
                            <span className = "close" onClick = {emswspanOnClick} >&times;</span>
                            <Emsw/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="curriculo">
                    <h1>
                        Faça o download do meu currículo <br/>
                        <a href="https://drive.google.com/file/d/1lY9wmxBkUBZuWpEVsc7Ze6o7Eu8jakNA/view?usp=sharing">
                            <img src={download} alt="Download currículo" width = "100vw" />
                        </a>
                    </h1>
                </div>
            </section>
            <Credits/>
        </div>
    );
}