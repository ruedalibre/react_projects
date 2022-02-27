import React from "react";
import {Header, Titulo} from './../elementos/Header';
import {Helmet} from "react-helmet";
import BtnRegresar from "../elementos/BtnRegresar";

const GastosPorCategoria = () => {
    return ( 
        <>
            <Helmet>
                <title>Expense-Tracker</title>
            </Helmet>
            {/* En este caso no uso contenedor para los 
            botones porque solo usaré un botón y el título */}
            <Header>
                <BtnRegresar />
                <Titulo>Gastos por Categoría</Titulo>
            </Header>
       </>
    );
}
 
export default GastosPorCategoria;