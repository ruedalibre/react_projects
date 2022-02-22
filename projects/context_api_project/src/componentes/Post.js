import React from "react";
import posts from "../data/posts";
/* Este hook permite acceder de manera 
dinámica a los posts meidante sus 
parámetros */
import { useParams, Navigate } from "react-router-dom";

const Post = () => {
    const {id} = useParams();

    return (
        /* Meto todo dentro de un fragmento 
        para poder incluir antes del div una 
        expresión de .js que capture un posible
        error en el ingreso de datos del usuario */ 
        <>
            {/* Si el post existe, lo muestra en pantalla */}
            {posts[id -1] ? 
                <div>
                    {/* Debo especificar id -1 porque 
                    la iteración comienza en cero pero 
                    la numeración de los post empiezan 
                    con uno */}
                    <h1>{posts[id -1].titulo}</h1>
                    {/* Para acceder al texto del post */}
                    <p>{posts[id -1].texto}</p>
                </div>
            :
                /* Si el post no existe, navigate redirecciona 
                a la página de inicio */
                <Navigate replace to="/"/>
            }
        </>
    );
}

export default Post;
