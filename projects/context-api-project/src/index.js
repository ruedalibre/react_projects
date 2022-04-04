import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/* La importación se debe hacer entre llaves 
porque el proveedor fue exportado de la misma manera */
import {ProveedorTema} from './contextos/contextoTema'

ReactDOM.render(
  <React.StrictMode>
    {/* Para que funcionen los estilos globales
    se debe encapsular la app con el proveedor
    del tema */}
    <ProveedorTema>
      <App />
    </ProveedorTema>
  </React.StrictMode>,
  document.getElementById('root')
);