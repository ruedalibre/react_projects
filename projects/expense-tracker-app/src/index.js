import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';

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
    <App/>
   );
}

ReactDOM.render(<Index/>, document.getElementById('root'));
