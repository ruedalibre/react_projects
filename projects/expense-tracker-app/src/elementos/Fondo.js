import React from "react";
import styled from "styled-components";
/* Las imagenes svg se importan como componentes de React */
import {ReactComponent as Puntos} from './../imagenes/puntos.svg'

const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
    path {
        fill: rgba(135,182,194, .15);
    }
`;
 
const PuntosArriba = styled(Puntos)`
    position: fixed;
    z-index: 1;
    top: 2.5rem; /* 40px */
    left: 2.5rem; /* 40px */
`;
 
const PuntosAbajo = styled(Puntos)`
    position: fixed;
    z-index: 1;
    bottom: 2.5rem; /* 40px */
    right: 2.5rem; /* 40px */
`;

const Fondo = () => {
	return (
		<>
            <PuntosArriba />
            {/* La etiqueta svg fue cambiado a Svg porque se va 
            a trabajar como un componente para darle los estilos. 
            También se agregó el parámetro preserveAspectRatio para
            que la imagen de fondo se adapte al tamaño de la pantalla
            y no queden espacios vacíos en los márgenes */}
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path 
                    /* El nombre de fill-opacity fue cambiado a camelcase para que se adapate al formato JSX */
                    fillOpacity="1" 
                    d="M0,160L48,133.3C96,107,192,53,288,42.7C384,32,480,64,576,106.7C672,149,768,203,864,197.3C960,192,1056,128,1152,101.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
            </Svg>
            <PuntosAbajo />
        </>
    );
}
 
export default Fondo;