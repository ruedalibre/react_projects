import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  /* Para que todas las rutas empiecen a ser 
    adminstradas por BrowserRouter, debo encapsular
    App en su interior  */
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);