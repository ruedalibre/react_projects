import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contenedor from './elementos/Contenedor';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
/* Carga de todos los componentes de la aplicación */
import EditarGasto from './componentes/EditarGasto';
import GastosPorCategoria from './componentes/GastosPorCategoria';
import InicioSesion from './componentes/InicioSesion';
import ListaDeGastos from './componentes/ListaDeGastos';
import RegistroUsuarios from './componentes/RegistroUsuarios';
import {Helmet} from 'react-helmet';
import favicon from './imagenes/logo.png';
import Fondo from './elementos/Fondo';


/* La configuración por defecto fue cambiada, para mayor limpieza, 
por la siguiente: */

/* Este código es para trabajar las fuentes de Google con Webfontloader */

WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});

const Index = () => {
  return ( 
    <>
      {/* Para poder usar Helmet, debo ponerlo por fuera de 
      BrowserRouter y encierro todo dentro de un fragmento */}
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
      </Helmet>
      {/* Todo va encerrado en BrowserRouter, el cual manejará 
      las rutas entre páginas */}
      <BrowserRouter>
        {/* A su vez, todos el diseño de la aplicación irá 
        encerrado en un contenedor general */}
        <Contenedor>
          <Routes>
            <Route path="/iniciar-sesion" element={<InicioSesion/>}/>
            <Route path="/crear-cuenta" element={<RegistroUsuarios/>}/>
            <Route path="/categorias" element={<GastosPorCategoria/>}/>
            <Route path="/lista" element={<ListaDeGastos/>}/>
            <Route path="/editar/:id" element={<EditarGasto/>}/>
            <Route path="/" element={<App/>}/>
          </Routes>
        </Contenedor>
      </BrowserRouter>

      <Fondo/>
    </>
   );
}

ReactDOM.render(<Index/>, document.getElementById('root'));
