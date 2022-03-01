import React, {useEffect, useState} from "react";
/* Keyframes permite dar animación a las alertas */
import styled, {keyframes} from "styled-components";
import theme from "../theme";

/* ANIMACION para que las alertas aparezcan en la pantalla mediante una animación */
const slideDown = keyframes`
    0% {
        transform: translateY(-1.25rem); /* 20px */
        opacity: 0;
    }
 
    10% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
    
    90% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
 
    100% {
        transform: translateY(1.25rem);
        opacity: 0;
    }
`;
 
const ContenedorAlerta = styled.div`
    /* El z-index de 1000 hace que aparezca por encima de todos los elementos */
    z-index: 1000;
    width: 100%;
    left: 0;
    top: 1.25rem; /* 20px */
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${slideDown} 4s ease forwards;
 
    p {
        background: ${(props) => {
            if(props.tipo === 'error'){
                return theme.rojo;
            } else if (props.tipo === 'exito') {
                return theme.verde;
            } else {
                return '#000';
            }
        }};
        color: #fff;
        padding: 1.25rem 2.5rem; /* 20px 40px */
        border-radius: 0.31rem; /* 5px */
        box-shadow: 0px 0px 15px rgba(0,0,0,.1);
        text-align: center;
    }
`;
/* Los estados hacen que las alertas únicamente se activen 
en caso de que sea necesario */
const Alerta = ({tipo, mensaje, estadoAlerta, cambiarEstadoAlerta}) => {
    /* Es necesario devolver el estado de alerta a su estado orginal despúes de cierto tiempo para que no quede inactiva su función */
    useEffect(() => {
        let tiempo;
        /* Este contador hace que la alerta desaparezca después de cierto tiempo para que el usuario pueda hacer un nuevo intento de ingresar la info correctamente */
        if(estadoAlerta === true) {
            tiempo = setTimeout(() => {
                cambiarEstadoAlerta(false);
            }, 4000);
        }
        /* Esta función resetea el contador de tiempo, en caso de que sean necesarios más intentos de ingresar la información */
        return(() => clearTimeout(tiempo));
    }, [estadoAlerta, cambiarEstadoAlerta]);
    return ( 
        <>
            {/* Significa: si hay estado de alerta, muestro este componente */}
            {estadoAlerta &&
                <ContenedorAlerta tipo={tipo}>
                    <p>{mensaje}</p>
                </ContenedorAlerta>
            }
        </>
       
     );
}
 
export default Alerta;