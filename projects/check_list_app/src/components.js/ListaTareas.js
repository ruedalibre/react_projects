import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({tareas}) => {
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