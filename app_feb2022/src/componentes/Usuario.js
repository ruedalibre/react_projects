import React from "react";
import {Titulo} from './Titulo';

const Usuario = () =>  {
    const pais = null;
    const amigos = ['Juan Gonzalo ', 'Mauricio ', 'Juan David '];

    return(
      <div>
        <Titulo usuario="Carlos"/>
        <Titulo usuario="Mauricio" color="blue"/>
        {pais && <p>Página de {pais}</p>}
        <p>Esta es tu lista de contactos</p>
        <ul>
          {amigos.map((amigo, index) => <li key={index}>{amigo}</li>)}
        </ul>
        <p>¡Que tengas un buen día! Saludos.</p>
      </div>
    );
  };

// Es necesario exportar el componente para que quede 
//  conectado con el resto de la aplicación
export default Usuario;

