import styled from "styled-components";

/* ----------------------------------
    CREACIÓN DE UN COMPONENTE 
    PARA EL ESTILO DE LOS
    BOTONES
----------------------------------- */

const Button = styled.button`
    background: #83d394;
    display: inline-block;
    padding: 20px;
    border: none;
    border-radius: 3px;
    font-weight: bold;
    font-family: Arial, sans-serif;
    cursor: pointer;
    transition: .3s ease all;
    
    /* Esta es la manera de agregar pseudoelementos y 
    pseudoclases. El ampersan hace referencia al elemento
    en el que estoy trabajando, en este caso Button */
    &:hover {
        background: #44a559;
    color: #fff;
    }
`;
/* Debo exportar el botón para que pueda ser 
usado en otros archivos */
export default Button; 




