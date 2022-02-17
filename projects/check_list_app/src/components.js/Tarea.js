import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheckSquare, faEdit, faSquare, faTimes} from '@fortawesome/free-solid-svg-icons'

const Tarea = ({tarea, toggleCompletada, editarTarea, borrarTarea}) => {
    /* El valor por defecto del estado es false 
    para evitar que, al cargar la página, ingrese
    directamente a modo edición */ 
    const [editandoTarea, cambiarEditandoTarea] = useState(false);
    /* Debo poner en estado por defecto tarea.texto para que, 
    cuando ingrese a editar el input, continúe estando allí 
    el texto visualizado previamente */
    const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);
    /* Esta función maneja las acciones del botón actualizar tarea */
    const handleSubmit = (e) => {
        e.preventDefault();
        /* Primero accede a la tarea por su id y luego 
        le asigna la nueva tarea */
        editarTarea(tarea.id, nuevaTarea);
        cambiarEditandoTarea(false);
    }

    return (
        <li className="lista-tareas__tarea">
            <FontAwesomeIcon 
                /* Condicional: Dependiendo si la tarea 
                esta completada o no, muestra el 
                respectivo ícono */
                icon={tarea.completada ? faCheckSquare : faSquare}
                className="lista-tareas__icono lista-tareas__icono-check"
                /* */
                onClick={() => toggleCompletada(tarea.id)}
                />
            <div className="lista-tareas__texto">
                {/* Si useState es true, muestra este formulario */}
                {editandoTarea ? 
                    <form action="" className="formulario-editar-tarea"
                        onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="formulario-editar-tarea__input"
                            value={nuevaTarea}
                            onChange={(e) => cambiarNuevaTarea(e.target.value)}
                        />
                        <button 
                            type="submit"
                            className="formulario-editar-tarea__btn"
                        >
                            Actualizar
                        </button>
                    </form>
                /* Si useState es false muestra la tarea */
                : tarea.texto
                }
            </div>
            <div className="lista-tareas__contenedor-botones">
                <FontAwesomeIcon 
                    icon={faEdit}
                    className="lista-tareas__icono lista-tareas__icono-accion"
                    /* El onClick se encarga de cambiar el useState de 
                    false a true (y visceversa) para que, al hacer click 
                    sobre el botón, se active o descative la edición de 
                    la información */
                    onClick={() => cambiarEditandoTarea(!editandoTarea)}
                />
                <FontAwesomeIcon 
                    icon={faTimes}
                    className="lista-tareas__icono lista-tareas__icono-accion"
                    onClick={() => borrarTarea(tarea.id)}
                />
            </div>
        </li>
    );
}

export default Tarea;