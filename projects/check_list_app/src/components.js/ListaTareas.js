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

    const editarTarea = (id, nuevoTexto) => {
        cambiarTareas(tareas.map((tarea) => {
            if(tarea.id === id){
                /* Identifica la tarea por su id
                y cambia el texto actual por el 
                nuevo texto */
                return {...tarea, texto: nuevoTexto}
                }
                return tarea;
        }));
    }

    const borrarTarea = (id) => {
        /* Uso el método filter para definir cuáles 
        tareas va a volver a cargar y cuáles no */
        cambiarTareas(tareas.filter((tarea) => {
            /* De esta manera muestra en la lista 
            únicamente las tareas que NO SON la que 
            le estoy indicando, o sea, la que 
            quiero borrar */
            if(tarea.id !== id){
                return tarea;
                }
                return;
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
                            a las funciones de toggle y editar
                            tarea*/
                            toggleCompletada={toggleCompletada}
                            editarTarea={editarTarea}
                            borrarTarea={borrarTarea}
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