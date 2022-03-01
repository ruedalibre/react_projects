import React, {useState} from "react";
import { Helmet } from "react-helmet";
import {Header, Titulo, ContenedorHeader} from './../elementos/Header';
import Boton from './../elementos/Boton';
import { Formulario, Input, ContenedorBoton} from './../elementos/ElementosDeFormulario';
import {ReactComponent as SvgLogin} from './../imagenes/login.svg';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Alerta from "../elementos/Alerta";

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 12.5rem; /* 200px */
    margin-bottom: 1.25rem; /* 20px */
`;

const InicioSesion = () => {
    const navigate = useNavigate();
    /* Debo definir un estado para cada input del registro */
    const [correo, establecerCorreo] = useState('');
    const [password, establecerPassword] = useState('');
    /* El estado por defecto de la alerta debe ser false para que la alerta no se dispare cada vez que se abra la página  */
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] =useState({});

    const handleChange = (e) => {
        /* A diferencia del registro, no es necesario usar un switch porque solo se necesita evaluar dos casos */
        if(e.target.name === 'email'){
            establecerCorreo(e.target.value);
        } else if (e.target.name === 'password') {
            establecerPassword(e.target.value);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        cambiarEstadoAlerta(false);
        /* Como son varios mensajes de alerta, el valor debe quedar vacío y solo tomará un valor según el tipo de alerta que se dispare */
        cambiarAlerta({});
        /* Para comprobar que el correo ingresado sea válido utilizo una expresión regular que toma en cuenta todas 
        las características que debe tener un correo */
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        /* En caso de que el input no coincida con la expresión */
        if( !expresionRegular.test(correo) ) {
            /* La alerta cambia a su estado activo únicamente cuando los datos ingresados presentan problemas */
            cambiarEstadoAlerta(true);
            cambiarAlerta({
                tipo: 'error',
                mensaje: 'Por favor ingrese un correo electrónico válido'
            })
            /* El return lo uso para salir de la función en caso de que se cumpla la condición y no continúe evaluando las demás porque ya no sería necesario */
            return;
        }
        /* En caso de que el usuario no ingrese ningún dato en  cualquiera de los input del formulario */
        if(correo === '' || password === '') {
            cambiarEstadoAlerta(true);
            cambiarAlerta({
                tipo: 'error',
                mensaje: 'Por favor ingresa todos los datos'
            });
            return;
        } 
         /* Esta es la función que usa Firebase para el ingreso de usuario con email y contraseña. Debe esperar a que el usuario ingrese y, en caso de algún error, puede luego proceder a mostrar la alerta */
        try {
            await signInWithEmailAndPassword(auth, correo, password);
            navigate('/');
        } catch(error) {
            cambiarEstadoAlerta(true);                        
            let mensaje;
            switch(error.code) {
                case 'auth/wrong-password':
                    mensaje = 'La contraseña no es correcta'
                    break;
                case 'auth/user-not-found':
                    mensaje = 'No se encontró ninguna cuenta con este correo electrónico'
                    break;
                default:
                    mensaje = 'Hubo un error al intentar crear la cuenta.'
                break;
            }
            cambiarAlerta({tipo: 'error', mensaje: mensaje});
        }
    }


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
                <ContenedorBoton>
                    {/* El argumento de botón "primario"
                    está definido en Boton.js */}
                    <Boton as="button" type="submit " primario>Iniciar Sesión</Boton>
                </ContenedorBoton>
            </Formulario>

            <Alerta 
                tipo={alerta}
                mensaje={alerta.mensaje}
                estadoAlerta={estadoAlerta}
                cambiarEstadoAlerta={cambiarEstadoAlerta}
            />
        </>
     );
}
 
export default InicioSesion;