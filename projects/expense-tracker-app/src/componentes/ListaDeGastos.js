import React, { useEffect } from "react";
import {Header, Titulo} from './../elementos/Header';
import {Helmet} from "react-helmet";
import BtnRegresar from "../elementos/BtnRegresar";
import {useAuth} from './../contextos/AuthContext';
import BarraTotalGastado from "./BarraTotalGastado";
import useObtenerGastos from "../hooks/useObtenerGastos";
/* Imports para los estilos de todos los elementos de la lista de gastos */
import { Lista, ElementoLista, ListaDeCategorias,
	ElementoListaCategorias, Categoria, Descripcion,
	Valor, Fecha, ContenedorBotones, BotonAccion,
	BotonCargarMas, ContenedorBotonCentral,
	ContenedorSubtitulo, Subtitulo } from "../elementos/ElementosDeLista";
import IconoCategoria from "../elementos/IconoCategoria";
import convertirAMoneda from './../funciones/convertirAMoneda';
import { ReactComponent as IconoEditar} from './../imagenes/editar.svg';
import { ReactComponent as IconoBorrar} from './../imagenes/borrar.svg';
import { Link } from "react-router-dom";
import Boton from './../elementos/Boton';

/* Aquí accedo al contexto global y puedo extraer sus valores true, false y null según sea el caso y usar condicionales para mostrar u ocultar el contenido de la app */
const ListaDeGastos = () => {   
    const [gastos] = useObtenerGastos();
        
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
                {gastos.map((gasto) => {
                    return(
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
                                <BotonAccion>
                                    <IconoBorrar/>
                                </BotonAccion>
                            </ContenedorBotones>
                            
                        </ElementoLista>
                    )
                })}
                <ContenedorBotonCentral>
                    <BotonCargarMas>Cargar más</BotonCargarMas>
                </ContenedorBotonCentral>
                {/* Si la lista de gastos está vacía, muestra este mensaje */}
                {gastos.length === 0 &&
                    <ContenedorSubtitulo>
                        <Subtitulo>No hay gastos por mostrar</Subtitulo>
                        <Boton as={Link} to="/">Agregar Gasto</Boton>
                    </ContenedorSubtitulo>}
            </Lista>

            <BarraTotalGastado/>
       </>
    );
}
 
export default ListaDeGastos;