import React, { useState } from "react";
import styled from "styled-components";

const Formulario = () => {
    /* Quiero que el valor del input esté vacío 
    por defecto */
    const [nombre, cambiarNombre] = useState('');
    const [correo, cambiarCorreo] = useState('');

    return ( 
        <form action="">
            <Input
                type="text"
                name="nombre"
                value={nombre}
                /* Cuando el usuario hace un cambio al formulario
                se aplica una función que toma el valor del 
                input (e) y lo cambia por el valor ingresado */
                onChange={(e) => cambiarNombre(e.target.value)}
                placeholder="Nombre"
            />
            <Input
                type="email"
                name="correo"
                value={correo}
                onChange={(e) => cambiarCorreo(e.target.value)}
                placeholder="name@example.com"
            />
            <Boton type="submit">Agregar</Boton>
        </form>
     );
}

const Input = styled.input`
    padding: 10px;
    border: 2px solid rgba(0,0,0,.2);
    border-radius: 3px;
    width: 100%;
    margin-bottom: 10px;
    transition: .2s ease all;
    outline: none;
    text-align: center;

    &:focus {
        border: 2px solid #3D76E9;
    }
`;

const Boton = styled.button`
    padding: 10px 30px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    transition: .3s ease all;
    outline: none;
    background: #c4c4c4;
    color: #fff;
    font-size: 12px;

    &:hover {
        background: #3d76e9;
    }
`;

export default Formulario;