/* -------------------------------------------
    ESTE ES EL FORMULARIO PARA AGREGAR LOS
        GASTOS A LA APLICACION
-------------------------------------------- */
import React, {useState, useEffect} from "react";
import { ContenedorBotones } from "../elementos/Header";
import {ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton} from './../elementos/ElementosDeFormulario';
import Boton from "../elementos/Boton";
import {ReactComponent as IconoPlus} from './../imagenes/plus.svg';
import SelectCategorias from "./SelectCategorias";
import DatePicker from './DatePicker';
/* Este import en especifico es para el manejo de las fechas y sus formatos. Tomado de date-fns ---> UnixTime */
import fromUnixTime from "date-fns/fromUnixTime";
import getUnixTime from "date-fns/getUnixTime";
import agregarGasto from "../firebase/agregarGasto";
import { useAuth } from './../contextos/AuthContext';
import Alerta from './../elementos/Alerta';
import { useNavigate } from "react-router-dom";

const FormularioGasto = ({gasto}) => {
    /* -------------------------------------------------
                ESTADOS DEL COMPONENTE 
    ---------------------------------------------------*/
    /* Función que administra el valor de los inputs dentro de un estado */
    const [inputDescripcion, cambiarInputDescripcion] = useState('');
    const [inputCantidad, cambiarInputCantidad] = useState('');
    /* Esta función se encarga de dejar visible la categoría seleccionada en el menú desplegable. Por defecto, el menú va a mostrar la categoría Hogar */
    const [categoria, cambiarCategoria] = useState('hogar');
    /* Esta función captura la fecha del Date Picker para luego pasarsela a la DB. El valor por defecto de la fecha será al fecha actual, la cual se genera con new Date */
    const [fecha, cambiarFecha] = useState(new Date());
    /* Agrego los dos estados necesarios para mostrar la alerta del formulario */
    const [estaodAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({});
    
    /* Con este import accedo al usuario que está usando la app */
    const {usuario} = useAuth();
    const navigate = useNavigate(); 
    

    useEffect(() => {
        /* Compruebo si ya existe algún gasto y, si es así, habilito todos las propiedades para editar el gasto */
        if(gasto){
            /* Validar que el gasto a editar tenga un id identico al del usuario actual, para evitar que sea asignado a otro usuario */
            if(gasto.data().uidUsuario === usuario.uid){
                cambiarCategoria(gasto.data().categoria);
                cambiarFecha(fromUnixTime(gasto.data().fecha));
                cambiarInputDescripcion(gasto.data().descripcion);
                cambiarInputCantidad(gasto.data().cantidad); 
            } else {
                navigate('/lista');
            }
        }

    }, [gasto, usuario, navigate]); /* ----> para que se ejectue una sola vez, o cuando las dependencias cambien */

    const handleChange = (e) => {
        /* El condicional sirve para validar si estoy en modo edición de los input y, si es así, habilita el celda del input para que el usuario pueda ingresar los valores*/
        if(e.target.name === 'descripcion') {
            cambiarInputDescripcion(e.target.value);
        } else if(e.target.name === 'cantidad') {
            cambiarInputCantidad(e.target.value.replace(/[^0-9.]/g, '')); 
            /* Utilizo esta expresión regular para que el usuario solo pueda ingresar números en el input de cantidad; si ingresa otros caracteres serán reemplazados por un espacio vacío ('') */
        }
    }

    const handleSubmit = (e) => {
        /* Para que no se recargue la página al enviar el formulario */
        e.preventDefault();

        /* Para convertir los valores numéricos a float y agregarle dos decimales */
        let cantidad = parseFloat(inputCantidad).toFixed(2);

        /* Comprobación de que el usuario haya ingresado tanto la descripción como su valor. No debe haber valores vacíos en el formulario */
        if(inputDescripcion !== '' && inputCantidad !== '') {
            /* También debo comprobar que la cantidad ingresada sea válida para que el parseFloat la pueda procesar */
            if(cantidad) {
                agregarGasto({
                    /* Aquí creo el objeto con todas sus propiedades */
                    categoria: categoria,
                    descripcion: inputDescripcion,
                    cantidad: inputCantidad,
                    /* La fecha se transorma a formato UnixTime antes de pasarla a la base de datos */
                    fecha: getUnixTime(fecha),
                    /* Para que la app sepa a cuál usuario le debe agregar el objeto, debe tener acceso a su id universal (uid) creado mediante AuthContext ---> useAuth */
                    uidUsuario: usuario.uid
                })
                /* Cuando se valide que todos los valores enviado a al db son correctos, reinicio el formulario a su estado por defecto para seguir agregando elementos */
                .then(() => {
                    cambiarCategoria('hogar');
                    cambiarInputDescripcion('');
                    cambiarInputCantidad('');
                    cambiarFecha(new Date());
                    /* La alerta indica que los datos fueron ingresados correctamente */
                    cambiarEstadoAlerta(true);
                    cambiarAlerta({tipo: 'exito', mensaje: 'El gasto fue agregado correctamente'})
                })
                /* En caso de que haya un error inesperado al conectarse con la db */
                .catch((error) => {
                    cambiarEstadoAlerta(true);
                    cambiarAlerta({tipo: 'error', mensaje: 'Hubo un problema al intentar agregar tu gasto'})
                })
            } else {
                cambiarEstadoAlerta(true);
                cambiarAlerta({tipo: 'error', mensaje: 'El valor que ingresaste no es correcto'})
            }
        } else {
            cambiarEstadoAlerta(true);
            cambiarAlerta({tipo: 'error', mensaje: 'Por favor rellena todos los campos'})
        }
    }
    
    return ( 
        <Formulario onSubmit={handleSubmit}>
            <ContenedorFiltros>
                <SelectCategorias
                    categoria={categoria}
                    cambiarCategoria={cambiarCategoria}
                />
                <DatePicker fecha={fecha} cambiarFecha={cambiarFecha}/>
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
            {/* La alerta se debe incluir en los elementos del formulario, así este desactivada por defecto */}
            <Alerta 
                tipo={alerta.tipo}
                mensaje={alerta.mensaje}
                estadoAlerta={estaodAlerta}
                cambiarEstadoAlerta={cambiarEstadoAlerta}
            />       
        </Formulario>
     );
}
 
export default FormularioGasto;