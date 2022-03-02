import React from "react";
import {ReactComponent as IconoCerrarSesion} from "./../imagenes/log-out.svg";
import Boton from "./Boton";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const BotonCerrarSesion = () => {
    const navigate = useNavigate();
    const cerrarSesion = async () => {
        try {
            /* Esta función de Firebase se encarga de cerrar la sesión. Debe ser una función asíncrona para que no se ejecute nada más hasta que no se cierre la sesión */
            await signOut(auth);
            /* Uso navigate para que, después de cerrar la sesión la app se dirija a la página de inicio */
            navigate('/iniciar-sesion');
        } catch(error) {
            console.log(error);
        }
    }
    return( 
        <Boton iconoGrande as="button" onClick={cerrarSesion}>
            <IconoCerrarSesion />
        </Boton>
    );  
} 
export default BotonCerrarSesion;