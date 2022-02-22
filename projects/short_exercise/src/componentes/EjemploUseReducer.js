import React, {useReducer} from "react";
import Button from './../elementos/Button'

/* Estado inicial del reducer */
const contadorInicial = {contador: 0};
/* Reducer. La accion es la misma que se encuentra
en el dispatch. El reducer es un compendio de todos 
los comportamientos que puede realizar un elemeto y 
su acción por defecto, en caso de que ninguna se ejecute */
const reducer = (estado, accion) => {
    switch(accion.tipo){
        case 'INCREMENTAR':
            return {contador: estado.contador + 1}
        case 'DISMINUIR':
            return {contador: estado.contador -1}
        case 'REINICIAR':
            return {contador: 0}
        default:
            return estado;
    } 
}

/* Componente funcional con useReducer */
const EjemploUseReducer = () => {
    const [estado, dispatch] = useReducer(reducer, contadorInicial);
    
    
    return (
        <div>
            <h1>Contador: {estado.contador}</h1>
            <Button 
                negro 
                marginRight 
                /* Dispatch hace referncia a la acción 
                que quiero ejecutar para el estado. 
                Ejemplo: una acción de tipo incrementar */ 
                onClick={() => dispatch({tipo: 'INCREMENTAR'})}
                >Incrementar
            
            </Button>
            
            <Button 
                negro 
                marginRight 
                onClick={() => dispatch({tipo: 'DISMINUIR'})}
                >Disminuir
            </Button>

            <Button 
                negro 
                onClick={() => dispatch({tipo: 'REINICIAR'})}
                >Reiniciar
            </Button>

            
        </div>
    );
}

export default EjemploUseReducer;