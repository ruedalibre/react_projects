import React, {useState, useEffect} from "react";
import styled from "styled-components";
/* ------IMPORTACIONES DE FIREBASE--------*/
import db from "../firebase/firebaseConfig";
/* Collection me permite acceder a un db y sus valores y 
onSnapshot es una función que devuelve una vista de la db 
con toda su información. Esta función siempre estará actualizada
con cada cambio en la db */
import { collection, onSnapshot } from "firebase/firestore";
import Contacto from "./Contacto";

const ListaContactos = () => {
    const [contactos, cambiarContactos] = useState([]);

    /* useEffect + onSnapshot permite que al cargar la página por primera vez cargue 
    la db en su estado actual para que todos los datos estén disponibles */
    useEffect(() => {
        /* Debo pasar el nombre de la base de datos. Firebase usa snapshot
        para dejar un canal abierto que escucha todos los cambios realizados a la db. 
        Cuando hay un cambio, se ejecuta esta función:  */
        onSnapshot(
            collection(db, 'usuarios'), 
            /* snapshot es un objeto de Firstore que almacena los datos y mucha 
            información adicional */
            (snapshot) => {
                /* El método map se encarga de crear un arreglo con el 
                contenido de la db y sus objetos */
                const arregloUsuarios = snapshot.docs.map((documento) => {
                    /* Trae todos los datos actuales incluyendo su id*/
                    return {...documento.data(), id: documento.id}
                })
                cambiarContactos(arregloUsuarios);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    return (
        /* Con esta línea hago que el componente 
        de contactos únicamente se muestre si hay 
        contactos guardados. Si no, no lo muestra. */
        contactos.length > 0 &&
        /* En este contenedor voy a cargar toda 
        la lista de contactos */
        <ContenedorContactos>
            {contactos.map((contacto) => (
                <Contacto 
                    key={contacto.id}
                    id={contacto.id} 
                    nombre={contacto.nombre}
                    correo={contacto.correo}
                /> 
            ))}
        </ContenedorContactos>
     );
}

const ContenedorContactos = styled.div`
    margin-top: 40px;
`;

export default ListaContactos;