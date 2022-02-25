import React, {useState} from "react";
import styled from "styled-components";
import db from "../firebase/firebaseConfig";
import Contacto from "./Contacto";

const ListaContactos = () => {
    const [contactos, cambiarContactos] = useState([
        {id: 1, nombre: 'Andrés', correo: 'ejemplo@correo.com'},
        {id: 2, nombre: 'Ruedalibre', correo: 'ejemplo2@correo.com'} 
    ]);

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