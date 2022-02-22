import { useState, useEffect } from 'react';

/*  Este elemento es un HOOK PERSONALIZADO donde 
puedo usar useState y useEffect. 
La diferencia entre una función y un hook, es que 
con el hook puedo trabajar con otros hooks dentro. 
El hook es similar a un componente funcional, 
la única diferencia es que no retorna código JSX,
solo puede retornar un valor o un arreglo  */
const useObtenerArticulos = () => {
    const [articulos, establecerArticulos] = useState([]);
    const [cargando, establecerCargando] = useState(true);

    /* Este elemento simula una respuesta de un servidor y 
    todo este código va a aparecer al cargar el 
    componente por primera vez, llenando los espacios 
    para los títulos del Blog después de pasados 3segundos */
    useEffect(() => {
        /* setTimeout recibe una función 
        y un tiempo de ejecutarla (en milisegundos */
        setTimeout(() => {
            establecerArticulos([
                {
                    id: 1,
                    titulo: 'Titulo del primer artículo'
                },
                {
                    id: 2,
                    titulo: 'Titulo del segundo artículo'
                },
                {
                    id: 3,
                    titulo: 'Titulo del tercer artículo'
                }
            ]);
            /* Una vez los articulos son cargados en pantalla
            se debe desactivar el aviso de carga */
            establecerCargando(false)
        }, 3000);
    }, []);

    
    return [articulos, cargando];
}

export default useObtenerArticulos;





