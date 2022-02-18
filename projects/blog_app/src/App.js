import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    /* Toda la aplicación dentro de las etiquetas de React Router*/
    <BrowserRouter>
    {/* A su vez, todo el contenido del componente debe ir
    siempre dentro de un contenedor div */}
      <div>
        <header>
          <h1>Blog de Ruedalibre</h1>
          <nav>
            {/* /* Cambio las etiquetas <a> por Navlink */}
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/acerca-de">Acerca de</NavLink>
          </nav>
        </header>
        <main>
          {/* Todas las Route van dentro de una etiqueta general Routes */}
          <Routes>
            {/* Puedo crear una ruta dentro de una sola etiqueta Route 
            El path le dice a React cuál página debe cargar en cada div*/}
            <Route path="/"element={
              <div>
                <h2>Página de inicio</h2>
                <p>Esta es la página principal de nuestro sitio</p>
              </div>
            } />
            <Route path="/blog"element={
              <div>
                <h2>Blog</h2>
                  <ul>
                    <li>Artículo #1</li>
                    <li>Artículo #2</li>
                    <li>Artículo #3</li>
                  </ul>
              </div>
            } />
            <Route path="/acerca-de"element={
              <div>
                <h2>Acerca de</h2>
                <p>Andrés Ruedalibre developer</p>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;