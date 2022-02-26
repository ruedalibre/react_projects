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
    /* Todo va encerrado en BrowserRouter, el cual manejará 
    las rutas entre páginas */
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
   );
}

ReactDOM.render(<Index/>, document.getElementById('root'));
