import React from "react";
import { Helmet } from "react-helmet";
import {Header, Titulo, ContenedorHeader} from './../elementos/Header';
import Boton from './../elementos/Boton';
import { Formulario, Input, ContenedorBoton} from './../elementos/ElementosDeFormulario';
import {ReactComponent as SvgLogin} from './../imagenes/registro.svg';
import styled from "styled-components";

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 6.25rem; /* 100px */
    margin-button: 1.25rem; /* 20px */
`;

const RegistroUsuarios = () => {
    return ( 
        <>
            <Helmet>
                <title>Expense Tracker</title>
            </Helmet>

            <Header>
                {/* Debo implementar el contenedor Header porque contiene valores de media que se van a necesitar */}
                <ContenedorHeader>
                    <Titulo>Crear Cuenta</Titulo>
                    <div>
                        <Boton to="/iniciar-sesion">Iniciar Sesión</Boton>
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
                <Input 
                    type="password"
                    name="password2"
                    placeholder="Repeat password"
                />
                <ContenedorBoton>
                    {/* El argumento de botón "primario"
                    está definido en Boton.js */}
                    <Boton as="button" type="submit " primario>Crear Cuenta</Boton>
                </ContenedorBoton>
            </Formulario>

        </>
     );
}
 
export default RegistroUsuarios;