import React from "react";
import posts from "../data/posts";
import { NavLink } from "react-router-dom";
/* Importar el hook de useContext para 
poder conectarme al estado global (contexto)*/
import { useCallback, useContext } from "react";
/* Aquí entro directamente al contexto global */
// import { ContextoTema } from "../contextos/contextoTema";
import Controles from "./Controles";

const Blog = () => {

    return(
        <div>
            <h2>Blog</h2>
            <ul>
                {/* Con map itero sobre la lista de artículos a través
                de su respectivo key(id). Incluyo Navlink para acceder 
                a cada post e indicar la ruta de cada enlace entre
                back-ticks*/}
                {posts.map((post) => {
                    return <li key={post.id}>
                                <NavLink to={`/post/${post.id}`}>
                                    {post.titulo}
                                </NavLink>
                            </li>
                })}
            </ul>
            <Controles/>
      </div>
    );
};

export default Blog;