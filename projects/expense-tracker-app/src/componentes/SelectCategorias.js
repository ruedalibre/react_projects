import React, {useState} from "react";
import styled from "styled-components";
import theme from "../theme";
import {ReactComponent as IconoDown} from './../imagenes/down.svg'; 

const ContenedorSelect = styled.div`
    background: ${theme.grisClaro};
    cursor: pointer;
    border-radius: 0.625rem; /* 10px */
    position: relative;
    height: 5rem; /* 80px */
    width: 40%;
    padding: 0px 1.25rem; /* 20px */
    font-size: 1.5rem; /* 24px */
    text-align: center;
    display: flex;
    align-items: center;
    transition: .5s ease all;
    &:hover {
        background: ${theme.grisClaro2};
    }
`;
 
const OpcionSeleccionada = styled.div`
    width: 100%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
        width: 1.25rem; /* 20px */
        height: auto;
        margin-left: 1.25rem; /* 20px */
    }
`;
 
const Opciones = styled.div`
    background: ${theme.grisClaro};
    position: absolute;
    top: 5.62rem; /* 90px */
    left: 0;
    width: 100%;
    border-radius: 0.625rem; /* 10px */
    max-height: 18.75rem; /* 300px */
    overflow-y: auto;
`; 
 
const Opcion = styled.div`
    padding: 1.25rem; /* 20px */
    display: flex;
    svg {
        width: 28px;
        height: auto;
        margin-right: 1.25rem; /* 20px */
    }
    &:hover {
        background: ${theme.grisClaro2};
    }
`;

const SelectCategorias = ({categoria, cambiarCategoria}) => {
    /* Este estado mantiene ocultas las opciones del menú desplegable de categorías, hasta que el usuario haga click en la flecha */
    const [mostrarSelect, cambiarMostrarSelect] = useState(false);
    /* Este arreglo contiene la LISTA DE CATEGORÍAS que se pueden elegir del menú desplegable */
    const categorias = [
        {id: 'comida', texto: 'Comida'},
        {id: 'cuentas y pagos', texto: 'Cuentas y pagos'},
        {id: 'hogar', texto: 'Hogar'},
        {id: 'transporte', texto: 'Transporte'},
        {id: 'ropa', texto: 'Ropa'},
        {id: 'salud e higiene', texto: 'Salud e higiene'},
        {id: 'compras', texto: 'Compras'},
        {id: 'diversion', texto: 'Diversión'},
    ]

    const handleClick = (e) => {
        /* Este es el valor que va a tomar cambiarCatergoria en el momento que el usuario selecciona la categoría de la lista */
        cambiarCategoria(e.currentTarget.dataset.valor); 
    }

    return ( 
        /* El signo de (!) hace que al hacer click sobre la flecha del menú, se pliegue o despliegue el mismo */
        <ContenedorSelect onClick={() => cambiarMostrarSelect(!mostrarSelect)}>
            <OpcionSeleccionada>{categoria} <IconoDown/></OpcionSeleccionada>
            {/* Si despliego el menú, se muestran las opciones */}
            {mostrarSelect &&
                <Opciones>
                    {categorias.map((categoria) =>{
                        return <Opcion 
                                    key={categoria.id}
                                    data-valor={categoria.id}
                                    onClick={handleClick}
                                >
                                    {categoria.texto}
                                </Opcion>
                    })}
                </Opciones>
            }
        </ContenedorSelect>
     );
}
 
export default SelectCategorias;
