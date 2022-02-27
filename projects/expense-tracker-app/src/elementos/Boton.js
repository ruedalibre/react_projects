import styled from "styled-components";
/* Link me permite moverme entre las diferentes
páginas con los botones */
import { Link } from "react-router-dom";

/* Aquí le digo al componente que voy a usar Link */
const Boton = styled(Link)`
    /* El uso de props es para acceder a las propiedades del botón y 
    poder cambiar su apariencia de acuerdo a su estado actual */
    background: ${(props) => props.primario ? '#5B69E2' : '#000'};
    /* En este caso cambia la apariencia del botón dependiendo 
    si está acompañado o no de un ícono */
    width: ${(props) => props.conIcono ? '15.62rem' : 'auto'}; /* 250px */
    margin-left: 1.25rem; /* 20px */
    border: none;
    border-radius: 0.625rem; /* 10px */
    color: #fff;
    font-family: 'Work Sans', sans-serif;
    height: 3.75rem; /* 60px */
    padding: 1.25rem 1.87rem; /* 20px 30px */
    font-size: 1.25rem; /* 20px */
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    
    /* Estas dos líneas son para organizar el texto del botón 
    a al izquierda y el ícono a la derecha*/
    display: inline-flex;
    justify-content: space-between;
    
    align-items: center;
    outline: none;
    
    /* Estos son los estilos del ícono del botón */ 
    svg {
        /* La altura del ícono es variable de acuerdo al 
        tamaño del botón */
        height: ${(props) => props.iconoGrande ? '100%' : '0.75rem;'};  /* 12px */
        fill: white;
    }
`;

export default Boton;


