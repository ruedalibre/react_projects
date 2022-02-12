import React from "react";

const  TituloRojo = () => {
    const nombre = "Ruedalibre";
    const color = 'red';

    return (<h1 className="titulo" style={{color: color}}>¡Bienvenido {nombre}!</h1>);
}

const  TituloAzul = () => {
    const nombre = "Ruedalibre";
    const color = 'blue';

    return (<h1 className="titulo" style={{color: color}}>¡Bienvenido {nombre}!</h1>);
}

export {TituloRojo,TituloAzul};