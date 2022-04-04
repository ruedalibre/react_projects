import React from "react";
// Importación de la librerería de íconos
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
/* Solo importo los íconos con los que voya trabajar.
Los nombres de los íconos se toman del buscador de Fontawesome.  
Los nombres fa-eye y fa-eye-slash se escriben sin guión y con camelcase */
import {faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons'

const Header = ({mostrarCompletadas, cambiarMostrarCompletadas}) => {
    const toggleCompletadas= () => {
        cambiarMostrarCompletadas(!mostrarCompletadas);
    };
    
    return (
        <header className="header">
            {/* Nombro el titulo haciendo referencia a 
            su padre, para diferenciarlo de los demás */}
            <h1 className="header__titulo">Lista de tareas</h1>
            {mostrarCompletadas ?
                /* Este botón se muestra o se oculta según el 
                estado de "mostrar tareas completadas" */
                <button 
                    className="header__button"
                    onClick={() => toggleCompletadas()}
                >
                    No mostrar completadas
                    <FontAwesomeIcon icon={faEyeSlash}
                    className="header__icono-button"/>
                </button>
            :
                <button 
                    className="header__button"
                    onClick={() => toggleCompletadas()}
                >
                    Mostrar completadas
                    <FontAwesomeIcon icon={faEye}
                    className="header__icono-button"/>
                </button>
            }
        </header>
    );
}

export default Header;