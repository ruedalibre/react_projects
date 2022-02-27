import React from "react";
import styled from "styled-components";
import { ReactComponent as IconoFlecha } from "./../imagenes/flecha.svg";
/* Este es el hook que me permite moverme entre las páginas 
de la aplicación */
import { useNavigate } from "react-router-dom";

const Btn = styled.button`
    display: block;
    width: 3.12rem; /* 50px */
    height: 3.12rem; /* 50px */
    line-height: 3.12rem; /* 50px */
    text-align: center;
    margin-right: 1.25rem; /* 20px */
    border: none;
    background: #000;
    color: #fff;
    /* Con flex puedo centrar el ícono de forma
    horizontal y vertical */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.31rem; /* 5px */
    cursor: pointer;
 
    @media(max-width: 60rem){ /* 950px */
        width: 2.5rem; /* 40px */
        height: 2.5rem; /* 40px */
        line-height: 2.5rem; /* 40px */
    }
`;
 
const Icono = styled(IconoFlecha)`
    width: 50%;
    height: auto;
    fill: #fff;
`;

/* Puedo indicarle a Navigate a qué ruta quiero enviar 
mi página al hacer click o por defecto que vaya a la raíz (/)
de la aplicación  */
const BtnRegresar = ({ruta = '/'}) => {
    /* Aquí implemento el hook y abajo le especifico 
    la acción que quiero que realice */
    const navigate = useNavigate();

    return ( 
        <Btn onClick={() => navigate(ruta)}><Icono /></Btn>
     );
}
 
export default BtnRegresar;


