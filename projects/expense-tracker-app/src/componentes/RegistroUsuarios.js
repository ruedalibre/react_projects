import React, {useState} from "react";
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
    /* Debo definir un estado para cada input del registro */
    const [correo, establecerCorreo] = useState('');
    const [password, establecerPassword] = useState('');
    const [password2, establecerPassword2] = useState('');
    /* Y esta es la función que va a aplicar el cambio de estado */
    /* El parámetro (e) hace referencia al evento, es decir, 
    al elemento que recibió el cambio en el input. Luego puedo 
    acceder a sus valores */
    const handleChange = (e) => {
        switch(e.target.name){
            case 'email':
                establecerCorreo(e.target.value);
                break;
            case 'password':
                establecerPassword(e.target.value);
                break;            
            case 'password2':
                establecerPassword2(e.target.value);
                break;
            default:
                break;
        }
    } 
    /* Esta es la función que va a manejar las acciones del envío de los datos del formulario */
    const handleSubmit = (e) => {
        e.preventDefault();
        /* Para comprobar que el correo ingresado sea válido utilizo una expresión regular que toma en cuenta todas 
        las características que debe tener un correo */
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        /* En caso de que el input no coincida con la expresión */
        if( !expresionRegular.test(correo) ) {
            console.log("Por favor ingresa un correo válido");
            /* El return lo uso para salir de la función en caso 
            de que se cumpla la condición y no continúe evaluando las demás porque ya no sería necesario */
            return;
        }
        /* En caso de que el usuario no ingrese ningún dato en  cualquiera de los input del formulario */
        if(correo === '' || password === '' || password2 === '') {
            console.log('Por favor ingresa todos los datos');
            return;
        }
        /* Verifico que la contraseña y su confirmación coincidan  */
        if(password !== password2) {
            console.log('Las contraseñas no coinciden');
            return;
        } 
        /* Mensaje para registro exitoso */
        console.log('Registro exitoso')
    }

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
            <Formulario onSubmit={handleSubmit}>
                <Svg />
                <Input 
                    type="email"
                    name="email"
                    placeholder="example@mail.com"
                    value={correo}
                    onChange={handleChange}
                />
                <Input 
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={handleChange}
                />
                <Input 
                    type="password"
                    name="password2"
                    placeholder="Repeat password"
                    value={password2}
                    onChange={handleChange}
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