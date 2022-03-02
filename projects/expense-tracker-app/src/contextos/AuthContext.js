import React, { useState, useContext, useEffect } from "react";
import { auth } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

/* Con esta línea se activa el CONTEXTO GLOBAL para manejar la seguridad de la app y los permisos para que los usuarios ingresen */
const AuthContext = React.createContext(); 

/* Utilizo este HOOK para acceder al Contexto Global */
const useAuth = () => {
    return useContext(AuthContext);
}

/* Este provider es el componente PADRE que encierra la app y le inyecta el estado global que indica si el usuario ya inicio sesión o no */

const AuthProvider = ({children}) => {
    const [usuario, cambiarUsuario] = useState(); 
    /* Creo un state para saber cuándo termina de cargar la comprobación de onAuthStateChanged */
    const [cargando, cambiarCargando] = useState(true);
    /* Este efecto ejecuta la comprobación una sola vez */
    useEffect(() => {
        /* Compruebo si hay un usuario */
        const cancelarSuscripcion = onAuthStateChanged(auth, (usuario) => {
            cambiarUsuario(usuario);
            cambiarCargando(false);
        });
        /* Este return cancela la función cuando el usuario cierre la sesión */
        return cancelarSuscripcion; 
        /* Se necesita agregar las llaves vacías para que haga la comprobación una sola vez */
    }, []);
    
    return ( 
        /* El value  */
        <AuthContext.Provider value={{usuario: usuario}}>
            {/* Mientras no esté cargando la información, no debe mostrar los elementos hijo porque el usuario aún no está autenticado y no debe tener acceso */}
            {!cargando && children}
        </AuthContext.Provider>
     );
}
 
export {AuthProvider, AuthContext, useAuth};