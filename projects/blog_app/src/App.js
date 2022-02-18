import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/Header";
import Inicio from "./componentes/Inicio";
import Blog from "./componentes/Blog";
import AcercaDe from "./componentes/AcercaDe";
import styled from 'styled-components';

const App = () => {
  /* Toda la aplicación dentro de las etiquetas de React Router
    A su vez, todo el contenido del componente debe ir
    siempre dentro de un contenedor div.
    Todas las Route van dentro de una etiqueta general Routes
    Puedo crear una ruta dentro de una sola etiqueta Route 
    El path le dice a React cuál página debe cargar en cada div */
  return (
    <BrowserRouter>
      <ContendorPrincipal>
        <Header/>
        <Main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/acerca-de" element={<AcercaDe />} />
          </Routes>
        </Main>
      </ContendorPrincipal>
    </BrowserRouter>
  );
}

const ContendorPrincipal = styled.div`
  padding: 40px;
  width: 90%;
  max-width: 700px;
  `;

const Main = styled.main`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

export default App;