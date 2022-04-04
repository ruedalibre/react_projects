import React, {useContext} from "react";
import styled from "styled-components";
import { ContextoTema } from "../contextos/contextoTema";

const Controles = () => {
    /* Aqui implemento el contexto para el manejo 
    de los botones. Puedo acceder directamente a la 
    propiedad aumentarFuente*/
    const {
        aumentarFuente, 
        disminuirFuente, 
        alinearIzquierda, 
        alinearCentro, 
        alinearDerecha} = useContext(ContextoTema);

    return ( 
        <ContenedorControles>
            <div>
                <Boton onClick={aumentarFuente}>Aumentar fuente</Boton>
                <Boton onClick={disminuirFuente}>Disminuir fuente</Boton>
            </div>
            <div>
                <Boton onClick={alinearIzquierda}>Izquierda</Boton>
                <Boton onClick={alinearCentro}>Centro</Boton>
                <Boton onClick={alinearDerecha}>Derecha</Boton>
            </div>
        </ContenedorControles>
     );
}

/* Este componente es el contenedor de los controles
de los botones */
const ContenedorControles = styled.div`
    margin-top: 20px;
`;
/* Estilos para los botones */
const Boton = styled.button`
    background: #165168;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 12px;
    padding: 7px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 3px;

    &:hover {
        background: #191668;
    }
`;

export default Controles;