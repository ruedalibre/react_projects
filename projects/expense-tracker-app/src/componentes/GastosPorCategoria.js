import React from "react";
import {Header, Titulo, ContenedorHeader, ContenedorBotones} from './../elementos/Header';
import {Helmet} from "react-helmet";

const GastosPorCategoria = () => {
    return ( 
        <>
            <Helmet>
                <title>Expense-Tracker</title>
            </Helmet>

            <Header>
                <ContenedorHeader>
                    <Titulo>Gastos por Categoría</Titulo>
                </ContenedorHeader>
            </Header>
       </>
    );
}
 
export default GastosPorCategoria;