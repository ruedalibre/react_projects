import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({tareas, cambiarTareas}) => {
    /* Dado que ListaTareas es el padre de Tareas, 
    voy a colocar en su interior las funciones 
    que modifican las Tarea */

    /* Este toggle es el encargado de adminstrar el 
    estado de las tareas completadas o pendientes*/
    const toggleCompletada = (id) => {
        cambiarTareas(tareas.map((tarea) => {
            /* Al hacer la iteración, verifica 
            cuál id de la lista es igual al id 
            de la tarea que quiero modificar */
            if(tarea.id === id){
                /* De esta carga todos los valores 
                que ya tenía pero sobreescribe 
                únicamente el seleccionado. 
                El signo (!) hace que el estaod 
                se cambie al estado opuesto al actual */
                return {...tarea, completada: !tarea.completada}
                }
                return tarea;
        }));
    }

    return (
        <ul className="lista-tareas">
            {/* Aquí hago el llamado de las tareas. 
            Si hay tareas guardadas, las muestra en 
            una lista */}
            {
            tareas.length > 0 ? tareas.map((tarea) => {
                return <Tarea 
                            key={tarea.id}
                            tarea={tarea}
                            /* De esta manera ya puedo acceder 
                            a la función de toggle */
                            toggleCompletada={toggleCompletada}
                        />
            })
            /* Si no hay tareas guardadas, muestra el 
            respectivo mensaje */
            : <div className="lista-tareas__mensaje">
                ~ No hay tareas agregadas ~</div>
            }
        </ul>
    );
}

export default ListaTareas;