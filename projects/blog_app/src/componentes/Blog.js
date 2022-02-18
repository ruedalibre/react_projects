import React from "react";
import posts from "../data/posts";
import { NavLink } from "react-router-dom";

const Blog = () => {
    return(
        <div>
            <h2>Blog</h2>
            <ul>
                {/* Con map itero sobre la lista de artículos a través
                de su respectivo key(id). debo incluir Navlink para acceder 
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
      </div>
    );
};

export default Blog;