import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Header = () => {
    return(
        <ContenedorHeader>
            <Titulo>Blog de Ruedalibre</Titulo>
            <Menu>
                {/* /* Cambio las etiquetas <a> por Navlink */}
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/acerca-de">Acerca de</NavLink>
            </Menu>
        </ContenedorHeader>
    )
};

/*-------------------ESTILOS--------------------------
Tener presente qué tipo de elemento es cada etiqueta
----------------------------------------------------*/

const ContenedorHeader = styled.header`
    text-align: center;
    margin-bottom: 40px;
`;

const Titulo = styled.h1`
    margin-bottom: 10px;
    font-size: 26px;
    text-transform: uppercase;
`;

const Menu = styled.nav`
    a {
        text-decoration: none;
        color: #165168;
        margin: 0 10px;
    }
    a:hover {
        color: #191668;
    }
    a.active {
        border-bottom: 2px solid #165168;
        padding-bottom: 5px;
    }
`;

export default Header;