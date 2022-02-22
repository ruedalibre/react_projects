import React from "react";
/* Las propiedades son objetos que personalizan los componentes.
Pueden ser revisados en la consola del navegador */
const  Titulo = ({usuario = 'usuario', color = 'green'}) => {
    /* Si especifico el valor entre corchetes, debo 
    especiificar siempre todos los valores a los que 
    quiera acceder separando por coma, por ej: usuario
    y edad */
    /* Si le asigno un valor a los argumentos, ese será 
    el valor que asumirá por defecto el argumento*/
    return (<h1 className="titulo" style={{color: color}}>¡Bienvenido {usuario}!</h1>);
}

// const  TituloAzul = (props) => {
    /* con props se accede a las propiedades de manera 
     general y luego se especifica el valor al que 
    quiero acceder */
    // const nombre = props.usuario;
    // const color = 'blue';

//     return (<h1 className="titulo" style={{color: color}}>¡Bienvenido {nombre}!</h1>);
// }

export {Titulo};