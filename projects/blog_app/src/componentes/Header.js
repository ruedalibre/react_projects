import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <header>
            <h1>Blog de Ruedalibre</h1>
            <nav>
                {/* /* Cambio las etiquetas <a> por Navlink */}
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/acerca-de">Acerca de</NavLink>
            </nav>
        </header>
    )
};

export default Header;