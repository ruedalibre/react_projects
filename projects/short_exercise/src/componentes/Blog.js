import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import useObtenerArticulos from "../hooks/useObtenerArticulos";

const Blog = () => {
    /* Para implementar el hook personalizado
    debo crear la constante y dentro del arreglo
    llamar el return del hook */
    const [articulos, cargando] = useObtenerArticulos();

    return (
        /* Puedo personalizar el nombre de 
        las etiquetas pero estas van a seguir 
        teniendo la función que tenían 
        originalmente */ 
        <ContenedorBlog>
            <Titulo>Blog</Titulo>
            {cargando === true ?
                <p>Cargando...</p>
            :
                <div>
                {/* Itera sobre la lista de artículos y devuelve su 
                título con base en su id */}
                {articulos.map((articulo) => {
                    return <Articulo key={articulo.id}>{articulo.titulo}</Articulo>
                })}
                </div>
            }
        </ContenedorBlog>
    );
}
/* Aparece como div porque ContenedorBlog era 
originalmente un div */
const ContenedorBlog = styled.div`
    margin: 40px 0 20px 0;
`;
const Titulo = styled.h2`
    margin-bottom: 10px;
`;
const Articulo = styled.p`
    padding: 10px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
`;
export default Blog;