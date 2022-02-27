/* Toda la configuración por defecto fue reemplazada por el nuevo código: */
import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo, ContenedorHeader, ContenedorBotones } from "./elementos/Header";
import Boton from "./elementos/Boton";

const App = () => {
  return ( 
    <>
      <Helmet>
        <title>Expense-Tracker</title>
      </Helmet>

      <Header>
        <ContenedorHeader>
          <Titulo>Agregar gasto</Titulo>
          <ContenedorBotones>
            <Boton to="/categorias">Categorías</Boton>
            <Boton to="/listas">Lista de Gastos</Boton>
            <Boton to="/">X</Boton>
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
    </>
   );
}
 
export default App;