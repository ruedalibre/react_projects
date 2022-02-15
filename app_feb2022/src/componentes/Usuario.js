import React from "react";
import {Titulo} from './Titulo';
/* Importación para agregar estilos 
con Styled-Components*/
import styled from "styled-components"; 


const Usuario = () =>  {
    const pais = null;
    const amigos = ['Juan Gonzalo ', 'Mauricio ', 'Juan David '];

    return(
      <div>
        <Titulo usuario="Carlos"/>
        <Titulo usuario="Mauricio" color="blue"/>
        {pais && <p>Página de {pais}</p>}
        {/* Para implementar los estilos en los elementos
        cambio el nombre de la etiqueta por el de la variable */}
        <Parrafo>Esta es tu lista de contactos</Parrafo>
        <ul>
          {amigos.map((amigo, index) => <li key={index}>{amigo}</li>)}
        </ul>
        <Parrafo>¡Que tengas un buen día! Saludos.</Parrafo>
      </div>
    );
  };
/* Para agregar los estilos se crean variables para 
cada elemento y se usan las back-ticks y en su interior 
van los estilos */
const Parrafo = styled.p`
  margin: 20px 0;


`;
// Es necesario exportar el componente para que quede 
//  conectado con el resto de la aplicación
export default Usuario;

