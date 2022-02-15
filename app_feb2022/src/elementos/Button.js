/* Esta importación debe incluir {css} para 
poder acceder a los atributos particulares 
de cada componente */
import styled, {css} from "styled-components";


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
    
    /* Puedo elegir que uno de los valores 
    del componente botón sea diferente para 
    una de las propiedades específicas.
    Aquí estoy diciendo: si el botón contiene la 
    propiedada "largo", entonces su ancho será del 
    100% o de lo contrario será automático */
    width: ${props => props.largo ? '100%': 'auto'};
    
    /* Esta es la manera de agregar pseudoelementos y 
    pseudoclases. El ampersan hace referencia al elemento
    en el que estoy trabajando, en este caso Button */
    &:hover {
        background: #44a559;
    color: #fff;
    }

    /* Aquí defino los parámetros para la propiedad 
    "negro" que hace parte de los botones que se 
    encuentran en el ContadorFuncional. Con esta 
    notación estoy accediendo a las propiedades y 
    les estoy asignando sus propias características */

    ${props => props.negro && css`
        background: #000;
        color: #fff;
    `}

    ${props => props.marginTop && css` margin-top: 10px;`}
    ${props => props.marginRight && css` margin-right: 10px;`}
`;
/* Debo exportar el botón para que pueda ser 
usado en otros archivos */
export default Button; 




