import { useEffect, useState } from "react";
import useObtenerGastosDelMes from './useObtenerGastosDelMes';

const useObtenerGastosDelMesPorCategoria = () => {
    const [gastosPorCategoria, cambiarGastosPorCategoria] = useState([]);
    const gastos = useObtenerGastosDelMes();

    useEffect(() => {
        /* Reduce es un método que me devuelve un objeto que contiene la suma  de cada categoría. objetoResultante es el valor que va a ir acumulado la suma de valores por categoría*/
        const sumaDeGastos = gastos.reduce((objetoResultante, objetoActual) => {
            /* Este callback es una función que se ejecuta por cada elemento que tengo dentro del arreglo de gastos, obteniendo su categoría y su cantidad */
            const categoriaActual = objetoActual.categoria;
            const cantidadActual = objetoActual.cantidad;

            objetoResultante[categoriaActual] += cantidadActual;

            return objetoResultante;
        }, {
            /* Este es el objeto incial para comenzar a hace la suma de los valores por categoría */
            'comida': 0,
            'cuentas y pagos': 0,
            'hogar': 0,
            'transporte': 0,
            'ropa': 0,
            'salud e higiene': 0,
            'compras': 0,
            'diversion': 0
        }); 
        /* Aquí ya puedo acceder a cada objeto y específicamente a sus valores de categoría y cantidad */
        cambiarGastosPorCategoria(Object.keys(sumaDeGastos).map((elemento) => {
            return {categoria: elemento, cantidad: sumaDeGastos[elemento]}
        }));

    }, [gastos, cambiarGastosPorCategoria]);
    
    return gastosPorCategoria;
}
 
export default useObtenerGastosDelMesPorCategoria;

