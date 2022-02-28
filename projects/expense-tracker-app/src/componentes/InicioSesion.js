import React from "react";
import { Helmet } from "react-helmet";
import {Header, Titulo, ContenedorHeader} from './../elementos/Header';
import Boton from './../elementos/Boton';
import { Formulario, Input, ContenedorBoton} from './../elementos/ElementosDeFormulario';
import {ReactComponent as SvgLogin} from './../imagenes/login.svg';
import styled from "styled-components";

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 12.5rem; /* 200px */
    margin-bottom: 1.25rem; /* 20px */
`;

const InicioSesion = () => {
    return ( 
        <>
            <Helmet>
                <title>Expense Tracker</title>
            </Helmet>

            <Header>
                {/* Debo implementar el contenedor Header porque contiene valores de media que se van a necesitar */}
                <ContenedorHeader>
                    <Titulo>Iniciar Sesión</Titulo>
                    <div>
                        {/* El Botón debe ser de la página de registro 
                        que es la alternativa a iniciar sesión, y vicseversa */}
                        <Boton to="/crear-cuenta">Registrarse</Boton>
                    </div>
                </ContenedorHeader>
            </Header>
            <Formulario>
                <Svg />
                <Input 
                    type="email"
                    name="email"
                    placeholder="example@mail.com"
                />
                <Input 
                    type="password"
                    name="password"
                    placeholder="password"
                />
                <ContenedorBoton>
                    {/* El argumento de botón "primario"
                    está definido en Boton.js */}
                    <Boton as="button" type="submit " primario>Iniciar Sesión</Boton>
                </ContenedorBoton>
            </Formulario>

        </>
     );
}
 
export default InicioSesion;