/* ESTE ES EL ESTADO GLOBAL QUE VA A GUARDAR 
LA CONFIGURACIÓN DE LA PAGINA */
import React, { useState } from "react";
/* De esta forma ya queda creado EL CONTEXTO 
que corresponde al ESTADO GLOBAL */
const ContextoTema = React.createContext();
/* Este componente será EL PROVEEDOR del estado 
global de la aplicación */
/* Todos los componentes al interior del estado 
global son sus hijos y pueden ser accedidos de 
esta manera: */
const ProveedorTema = ({children}) => {
    const [tema, cambiarTema] = useState(
        {
            alineado: 'center', 
            fuente: 20
        }
    );
    
    return(
        /* Se value simpre se pasa en forma de 
        {objeto} */
        <ContextoTema.Provider value={{tema}}>
            {/* Inyecta el contexto a todos 
            los elementos hijo */}
            {children}
        </ContextoTema.Provider>
    );
}

/* Esta es manera de hacer la exportación del 
estado global */
export {ContextoTema, ProveedorTema};