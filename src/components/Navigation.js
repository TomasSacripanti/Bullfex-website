import React from 'react';
import logotipo from '../images/logotipo-bullfex.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-white navegation d-flex justify-content-center">
            <div class="nav-content">
                <figure className="img-container">
                    <img src={logotipo}></img>
                </figure>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ullist">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Servicios
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Sitios web</a>
                                <a className="dropdown-item" href="#">Sitios E-commerce</a>
                                <a className="dropdown-item" href="#">Posicionamiento SEO</a>
                                <a className="dropdown-item" href="#">SEO local</a>
                                <a className="dropdown-item" href="#">Hosting y Dominio</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Propósito</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;