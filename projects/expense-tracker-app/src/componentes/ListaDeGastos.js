import React from "react";
import {Header, Titulo} from './../elementos/Header';
import {Helmet} from "react-helmet";
import BtnRegresar from "../elementos/BtnRegresar";
import {useAuth} from './../contextos/AuthContext';

/* Aquí accedo al contexto global y puedo extraer sus valores true, false y null según sea el caso y usar condicionales para mostrar u ocultar el contenido de la app */
const ListaDeGastos = () => {   
    return ( 
        <>
            <Helmet>
                <title>Expense-Tracker</title>
            </Helmet>
        
            <Header>
                <BtnRegresar />
                <Titulo>Lista de Gastos</Titulo>
            </Header>
       </>
    );
}
 
export default ListaDeGastos;