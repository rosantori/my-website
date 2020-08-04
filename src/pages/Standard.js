import React from 'react';
import {Link} from 'react-router-dom';

function Header()  {
    return (
        <div className = "menu">
            <Link className="home" to='/my-website'>
                <button>HOME</button>
            </Link>
            <Link className="sobre-mim" to="/my-website/about">
                <button>SOBRE MIM</button>
            </Link>
            <Link className="experiencias" to="/my-website/experiences">
                <button>EXPERIÊNCIAS</button>
            </Link>
            <Link className="contact" to="/contact">
                <button>CONTATO</button>
            </Link>

        </div>
        
    );
}

function Credits() {
    return (
        <div className="credits">
            <p> 
            Site feito por <a href="http://github.com/rosantori"> Rosana Ribeiro</a></p>
        </div>
    );
}

export {
    Header, Credits
};