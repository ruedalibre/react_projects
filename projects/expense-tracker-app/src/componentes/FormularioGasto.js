/* -------------------------------------------
    ESTE ES EL FORMULARIO PARA AGREGAR LOS
        GASTOS A LA APLICACION
-------------------------------------------- */
import React, {useState} from "react";
import { ContenedorBotones } from "../elementos/Header";
import {ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton} from './../elementos/ElementosDeFormulario';
import Boton from "../elementos/Boton";
import {ReactComponent as IconoPlus} from './../imagenes/plus.svg';
import SelectCategorias from "./SelectCategorias";

const FormularioGasto = () => {
    /* Función que administra el valor de los inputs dentro de un estado */
    const [inputDescripcion, cambiarInputDescripcion] = useState('');
    const [inputCantidad, cambiarInputCantidad] = useState('');
    /* Esta función se encarga de dejar visible la categoría seleccionada en el menú desplegable. Por defecto, el menú va a mostrar la categoría Hogar */
    const [categoria, cambiarCategoria] = useState('hogar');

    const handleChange = (e) => {
        /* El condicional sirve para validar si estoy en modo edición de los input y, si es así, habilita el celda del input para que el usuario pueda ingresar los valores*/
        if(e.target.name === 'descripcion') {
            cambiarInputDescripcion(e.target.value);
        } else if(e.target.name === 'cantidad') {
            cambiarInputCantidad(e.target.value.replace(/[^0-9.]/g, '')); 
            /* Utilizo esta expresión regular para que el usuario solo pueda ingresar números en el input de cantidad; si ingresa otros caracteres serán reemplazados por un espacio vacío ('') */
        }
    }

    return ( 
        <Formulario>
            <ContenedorFiltros>
                <SelectCategorias
                    categoria={categoria}
                    cambiarCategoria={cambiarCategoria}
                />
            </ContenedorFiltros>

            <div>
                <Input
                    type="text"
                    name="descripcion"
                    id="descripcion"
                    placeholder="Descripción"
                    value={inputDescripcion}
                    onChange={handleChange}
                />
                <InputGrande
                    type="text"
                    name="cantidad"
                    id="cantidad"
                    placeholder="$0.00"
                    value={inputCantidad}
                    onChange={handleChange}
                />

            </div>
            <ContenedorBotones>
                {/* Debo pasar el parámetro "button" porque, por defecto, el botón tiene como valor un link (ver Boton) */}
                <Boton as="button" primario conIcono type="submit">
                    Agregar Gasto <IconoPlus />
                </Boton>
            </ContenedorBotones>       
        </Formulario>
     );
}
 
export default FormularioGasto;