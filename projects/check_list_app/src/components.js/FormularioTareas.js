import React, {useState} from "react";
/* Importación de UUID para la creación automática 
de identificadores únicos */
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'

const FormularioTareas = ({tareas, cambiarTareas}) => {
    const [inputTarea, cambiarInputTarea] = useState(''); 

    const handleInput = (e) => {
        cambiarInputTarea(e.target.value);
    }
    
    const handleSubmit = (e) => {
        // Evita que se recargue la página con cada click
        e.preventDefault();

        cambiarTareas(
            [
                /* Al poner los tres puntos antes del atributo
                retoma las tareas anteriores y agrega la nueva */
                ...tareas,
                {
                    /* Cada vez que se ejecuta la función de 
                    uuid se crea un id único que se le asigna 
                    a cada tarea */
                    id: uuidv4(),
                    texto: inputTarea,
                    completada: false
                }
            ]
        );
        /* Uso este string vacío para que el campo de escribir 
        nueva tarea quede limpio después de agregar una tarea nueva */
        cambiarInputTarea('');
    }
    
    return (
        <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="formulario-tareas__input"
                placeholder="Escribe una tarea"
                value={inputTarea}
                onChange={(e) => handleInput(e)}
                />
                <button 
                    type="submit"
                    className="formulario-tareas__btn"
                >
                    <FontAwesomeIcon 
                        icon={faPlusSquare} 
                        className="formulario-tareas__icono-btn"
                    />
                </button>
        </form>
    );
}

export default FormularioTareas;