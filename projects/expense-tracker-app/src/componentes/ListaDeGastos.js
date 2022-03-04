import React, { useEffect } from "react";
import {Header, Titulo} from './../elementos/Header';
import {Helmet} from "react-helmet";
import BtnRegresar from "../elementos/BtnRegresar";
import {useAuth} from './../contextos/AuthContext';
import BarraTotalGastado from "./BarraTotalGastado";
import useObtenerGastos from "../hooks/useObtenerGastos";

/* Aquí accedo al contexto global y puedo extraer sus valores true, false y null según sea el caso y usar condicionales para mostrar u ocultar el contenido de la app */
const ListaDeGastos = () => {   
    const [gastos] = useObtenerGastos();
    /* El hook debe ejecutarse una sola vez. Para eso uso useEffect. */
    useEffect(() => {

    }, []);
    
    return ( 
        <>
            <Helmet>
                <title>Expense-Tracker</title>
            </Helmet>
        
            <Header>
                <BtnRegresar />
                <Titulo>Lista de Gastos</Titulo>
            </Header>

            <BarraTotalGastado/>
       </>
    );
}
 
export default ListaDeGastos;