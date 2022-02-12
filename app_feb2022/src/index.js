import React from 'react';
import ReactDOM from 'react-dom';
import Usuario from './componentes/Usuario';
// IMPORTACIONES INICIALES
/* Los elementos JSX pueden almacenar código 
javascript y a partir de esto puedo crear 
plantillas para trabajar de una forma muy 
dinámica en el diseño de la aplicación */
const sesion = true;

/* Creación de una FUNCIÓN con COMPONENTES: el nombre 
de los compoonentes siempre debe comenzar con letra 
mayúscula. Si el nombre está compuesto por varias palabras, 
se debe usar notación tipo CamelCase */

const App = () => {
  return (
    /* Los div se pueden se pueden sintetizar como "fragmentos"
    con la notación <> </> y cumplen la misma función que un div*/
    
    /* PARA USAR CON EL MÉTODO 2 usando condicional ternario */
    <>
      {sesion === true ? 
      <>
        {/* Los componentes se insertan con una notación similar 
        a las etiquetas HTML */}
        <Usuario/>
        <Usuario/>
        <Usuario/>
        <Usuario/>
      </>
      : 
      <p>No has iniciado sesión</p>}
      </>
  );
};

    /* Las clases en JSX se denotan como className.
    Puedo asignar estilos en la misma línea del elemento
    pasando los atributos entre corchetes. El primer 
    corchete me permite acceder al elemento, y el segundo
    a los atributos que le quiero dar. */
    /* Para poder reutilizar atributos, puedo guardarlos
    en una variable y después llamo el nombre de la variable
    en vez de valor como tal */
/* CONDICIONALES: Ejemplo de inicio de sesión con una FUNCIÓN FLECHA*/
/*--------------------------------------
            METODO 1                    
---------------------------------------*/
/* const verificarSesion = (sesion) => {
  if(sesion === true) {
    return JSX;
  } else {
    return <h1>No has iniciado sesión</h1>
  }
} */
/* Esta es la forma como React pinta los elementos, indicando el contenedor 
'root' (tipo div) donde va a ir ubicado todo el contenido de la aplicación */
// ReactDOM.render(verificarSesion(sesion), document.getElementById('root'));

/*--------------------------------------
            METODO 2                    
---------------------------------------*/
ReactDOM.render(<App/>,document.getElementById('root'));

