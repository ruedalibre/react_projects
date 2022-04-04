/* ESTE ES EL ESTADO GLOBAL (CONTEXTO) QUE VA A GUARDAR 
LA CONFIGURACIÓN DE LA PAGINA */
import React, { useState } from "react";

/* De esta forma ya queda creado EL CONTEXTO 
que corresponde al ESTADO GLOBAL */
const ContextoTema = React.createContext();

/* Este componente será EL PROVEEDOR del estado 
global de la aplicación */
/* Todos los componentes al interior del estado 
global son sus hijos (como App) y pueden ser 
accedidos de  esta manera: */
const ProveedorTema = ({children}) => {
    /* En este caso, "tema" manejará los estilos 
    globales de la aplicación dentro del nuevo
    estado creado  */
    const [tema, cambiarTema] = useState(
        {
            alineado: 'center', 
            fuente: 20
        }
    );
    /* Aquí creo las funciones que van a manejar 
    las acciones de los botones para cambiar los estados
    del tema */ 

    /* Tomo las propiedades anteriores de alineado y 
    fuente y agrega/modifica lo siguiente */
    const aumentarFuente = () => cambiarTema( {...tema, fuente: tema.fuente +1});
    const disminuirFuente = () => cambiarTema( {...tema, fuente: tema.fuente -1});

    const alinearIzquierda = () => cambiarTema( {...tema, alineado: 'left'});
    const alinearCentro = () => cambiarTema( {...tema, alineado: 'center'});
    const alinearDerecha = () => cambiarTema( {...tema, alineado: 'right'});
             
           
    
    
    return(
        /* El value simpre se pasa en forma de 
        {objeto} La etiqueta del provider es el 
        componente que encierra el elemento hijo*/
        <ContextoTema.Provider 
            value={
                {
                    tema, aumentarFuente, disminuirFuente, 
                    alinearIzquierda, alinearCentro, alinearDerecha}}>
                {/* Inyecta el contexto a todos 
                los elementos hijo */}
                {children}
        </ContextoTema.Provider>
    );
}

/* Esta es manera de hacer la exportación del 
estado global y el proveedor */
export {ContextoTema, ProveedorTema};