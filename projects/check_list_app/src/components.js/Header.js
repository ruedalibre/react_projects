import React from "react";
// Importación de la librerería de íconos
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
/* Solo importo los íconos con los que voya trabajar.
Los nombres de los íconos se toman del buscador de Fontawesome.  
Los nombres fa-eye y fa-eye-slash se escriben sin guión y con camelcase */
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header className="header">
            {/* Nombro el titulo haciendo referencia a 
            su padre, para diferenciarlo de los demás */}
            <h1 className="header__titulo">Lista de tareas</h1>
            <button className="header__button">
                No mostrar completadas
                <FontAwesomeIcon icon={faEyeSlash}
                className="header__icono-button"/>
            </button>
        </header>
    );
}

export default Header;