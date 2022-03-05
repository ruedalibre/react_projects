import React from "react";
import {Header, Titulo} from './../elementos/Header';
import {Helmet} from "react-helmet";
import BtnRegresar from "../elementos/BtnRegresar";
import BarraTotalGastado from "./BarraTotalGastado";
import FormularioGasto from "./FormularioGasto";
/* Permite acceder a los parámetros que se encuentran en la barra de direcciones del explorardor  */
import { useParams } from "react-router-dom";
import useObtenerGasto from "../hooks/useObtenerGasto";

const EditarGasto = () => {
    const {id} = useParams();
    const [gasto] = useObtenerGasto(id);

    return ( 
        <>
            <Helmet>
                <title>Expense-Tracker</title>
            </Helmet>
            {/* En este caso no uso contenedor para los 
            botones porque solo usaré un botón y el título */}
            <Header>
                {/* Debe incluir la ruta de regreso a la lista */}
                <BtnRegresar ruta="/lista"/>
                <Titulo>Editar Gasto</Titulo>
            </Header>
            {/* Para acceder al gasto desde el formulario: */}
            <FormularioGasto gasto={gasto}/>

            <BarraTotalGastado/>
       </>
     );
}
 
export default EditarGasto;