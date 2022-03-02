/* ------------------------------------------------
    Esta ruta está creada para limitar la 
    navegación de los usuarios que no estén 
    logueados, de forma que no tengan aceeso 
    a páginas diferentes a las de registro y
    login de usuario
------------------------------------------------ */
import React from "react";
import { useAuth } from "../contextos/AuthContext";
import { Navigate } from "react-router-dom";

/* Debo incluir el parámetro children para poder acceder a todas las rutas que están encapsuladas dentro de RutaPrivada */
const RutaProtegida = ({children}) => {
    /* Uso condicionales para validar si el usuario ya inició sesión para devoverle el componente o no */
    const{usuario} = useAuth();
    /* Los elementos children son los que se encuentran encapsulados dentro de RutaPrivada en el index.js */
    if(usuario) {
        return children;
    } else {
        return <Navigate to="/iniciar-sesion"/>;
    }
}
 
export default RutaProtegida;