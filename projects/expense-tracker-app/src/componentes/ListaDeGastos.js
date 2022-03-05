import React from "react";
import {Header, Titulo} from './../elementos/Header';
import {Helmet} from "react-helmet";
import BtnRegresar from "../elementos/BtnRegresar";
import BarraTotalGastado from "./BarraTotalGastado";
import useObtenerGastos from "../hooks/useObtenerGastos";
/* Imports para los estilos de todos los elementos de la lista de gastos */
import { Lista, ElementoLista, Categoria, Descripcion,
	Valor, Fecha, ContenedorBotones, BotonAccion,
	BotonCargarMas, ContenedorBotonCentral,
	ContenedorSubtitulo, Subtitulo } from "../elementos/ElementosDeLista";
import IconoCategoria from "../elementos/IconoCategoria";
import convertirAMoneda from './../funciones/convertirAMoneda';
import { ReactComponent as IconoEditar} from './../imagenes/editar.svg';
import { ReactComponent as IconoBorrar} from './../imagenes/borrar.svg';
import { Link } from "react-router-dom";
import Boton from './../elementos/Boton';
/* Import para dar formato a las fechas que entrega la db */
import {format, fromUnixTime} from 'date-fns';
/* import para obtener la fecha en español */
import {es} from 'date-fns/locale';
import borrarGasto from "../firebase/borrarGasto";

/* Aquí accedo al contexto global y puedo extraer sus valores true, false y null según sea el caso y usar condicionales para mostrar u ocultar el contenido de la app */
const ListaDeGastos = () => {   
    const [gastos, obtenerMasGastos, hayMasPorCargar] = useObtenerGastos();

    /* Para dar formatear a la fecha, pasando de UnixTime a Javascript */
    const formatearFecha = (fecha) => {
        return format(fromUnixTime(fecha), "dd 'de' MMMM 'de' yyyy", {locale: es});
    }
    /* Para agrupar los gastos por fechas iguales y no repetir la etiqueta con misma feha para cada gasto del mismo día */
    const fechaEsIgual = (gastos, index, gasto) => {
        /* Si el index es diferente de 0 significa que ese gasto ya está marcado con su fecha, por lo tanto los que siguen y que tienen el mismo id, también */
        if(index !== 0) {
            const fechaActual = formatearFecha(gasto.fecha);
            const fechaGastoAnterior = formatearFecha(gastos[index -1].fecha);

            if(fechaActual === fechaGastoAnterior){
                return true;
            } else {
                return false;
            }
        }
    }
        
    return ( 
        <>
            <Helmet>
                <title>Expense-Tracker</title>
            </Helmet>
        
            <Header>
                <BtnRegresar />
                <Titulo>Lista de Gastos</Titulo>
            </Header>
            <Lista>
                {/* Itera en la lista de gastos y lista cada categoría con su respectivo ícono */}
                {gastos.map((gasto, index) => {
                    return(
                        <div key={gasto.id}>
                            {!fechaEsIgual(gastos, index, gasto) && <Fecha>{formatearFecha(gasto.fecha)}</Fecha>}
                            {/* La fecha va por fuera del elemento lista porque agrupa los gasto por fecha */}
                            <ElementoLista key={gasto.id}>
                                <Categoria>
                                    <IconoCategoria id={gasto.categoria} />
                                    {gasto.categoria}
                                </Categoria>
                                
                                <Descripcion>
                                    {gasto.descripcion}
                                </Descripcion>
                                
                                <Valor>
                                    {convertirAMoneda(gasto.cantidad)}
                                </Valor>
                                
                                <ContenedorBotones>
                                    <BotonAccion as={Link} to={`/editar/${gasto.id}`}>
                                        <IconoEditar/>
                                    </BotonAccion>
                                    <BotonAccion onClick={() => borrarGasto(gasto.id)}>
                                        <IconoBorrar/>
                                    </BotonAccion>
                                </ContenedorBotones>
                            </ElementoLista>
                        </div>
                    );
                })}
                {hayMasPorCargar &&
                    <ContenedorBotonCentral>
                        <BotonCargarMas onClick={() => obtenerMasGastos()}>Cargar más</BotonCargarMas>
                    </ContenedorBotonCentral>
                
                }
                
                {/* Si la lista de gastos está vacía, muestra este mensaje */}
                {gastos.length === 0 &&
                    <ContenedorSubtitulo>
                        <Subtitulo>No hay gastos por mostrar</Subtitulo>
                        <Boton as={Link} to="/">Agregar Gasto</Boton>
                    </ContenedorSubtitulo>
                }
            </Lista>

            <BarraTotalGastado/>
       </>
    );
}
 
export default ListaDeGastos;