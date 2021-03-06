import React from "react";
/* BrowserRouter va a gestionar toda la navegabilidad de la web */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/Header";
import Inicio from "./componentes/Inicio";
import Blog from "./componentes/Blog";
import Post from "./componentes/Post";
import AcercaDe from "./componentes/AcercaDe";
import styled from 'styled-components';
import Error404 from "./componentes/Error404";

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
            {/* El (*) indica que debe ir allí 
            en caso de que la ruta ingresada no 
            pertenezca a ninguna de las páginas */}
            <Route path="*" element={<Error404 />}/>
            <Route path="/" element={<Inicio />} />
            <Route path="/blog" element={<Blog />} />
            {/* Accedo de manera dinámica para los 
            diferentes post del blog y también accedo
             al componente Post */}
            <Route path="/post/:id" element={<Post/>}/>
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