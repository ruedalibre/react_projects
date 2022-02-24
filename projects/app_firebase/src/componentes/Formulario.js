import React, { useState } from "react";
import styled from "styled-components";
/* Estas importaciones son de la configuración 
de Firestore (ver documentación) y son las 
que le dan el acceso a React a la BASE DE DATOS */
import db from './../firebase/firebaseConfig';
/* La collection es la tabla donde se va a guardar 
la información de los usuarios, y addDoc son los registros
que identifican (ID) a cada usuario */
import { collection, addDoc } from "firebase/firestore";

const Formulario = () => {
    /* Quiero que el valor del input esté vacío 
    por defecto */
    const [nombre, cambiarNombre] = useState('');
    const [correo, cambiarCorreo] = useState('');

    /* Debo agregar async para trabajar con las promesas 
    de Node que indican el orden y momento en que se deben 
    ejecutar las líneas de código */
    const onSubmit = async (e) => {
        /* Para evitar que la página haga refresh sin cargar
        la información ingresada en el input */
        e.preventDefault();
        /* Es importante incluir try / catch para el caso en que
        suceda un error en el ingreso de los input */
        try {
            /* Para indicar que quiero agreagar un usuario (documento)
            al hacer click al botón. De esta manera al app se comunica
            con Firebase y agrega el usuario a la DB */
            /* Debo incluir await para que al app no limpie el input 
            hasta que no estemos seguros de que los datos ya ingresaron 
            a la base de datos */
            await addDoc(collection(db, 'usuarios'), {
                /* Después de acceder a la DB le puedo pasar los 
                objetos al interior. En este caso le paso solo el 
                nombre de la variable genérica para no quemar el input: */
                nombre: nombre,
                correo: correo
            });
        } catch(error){
            /* En caso de error paso un mensaje al usuario y muestro en 
            el inspector el error que se produjo */
            alert('Hubo un error al intentar guardar el usuario');
            console.log(error);
        }
        /* Agrego estas líneas para limpiar las celdas del input 
        después de agregar un nuevo objeto (usuario) */
        cambiarNombre('');
        cambiarCorreo('');
    }

    return ( 
        /* Para que la acción tengo efecto, primero debo 
        haber creado la BD en Cloud Firestore */
        <form action="" onSubmit={onSubmit}>
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