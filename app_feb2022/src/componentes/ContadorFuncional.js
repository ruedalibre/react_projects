/* Aquí se implementan los hook the useState 
y useEffect */
import React, {useState, useEffect} from "react";
import styles from './ContadorFuncional.module.css';
import Button from "../elementos/Button";

/* Los hook siempre se deben trabajar dentro de un 
componente funcional y no se pueden incluir dentro 
de condicionales */
const ContadorFuncional = (props) => {
    /* cuenta = cuenta actual 
    cambiarCuenta = actualiza el valor con 
    el incremento o decremento. Debo 
    inicializar el estado en cero (0) */
    const [cuenta, cambiarCuenta] = useState(0);
    
    /* Cada vez que el componente se renderiza, 
    el hook también actualiza su estado. Este hook 
    useEffect equivale a componentDidMount (primera 
    carga y componentDidUpdate (actualización de 
    estado) que se usan con las clases */
    // useEffect(() => {
    //     console.log('El componente se renderizó')
    // });

    /* Al usar corchetes dentro de un hook, 
    este se ejecutará solamente una vez con 
    la primera carga. Esto sirve por ejemplo 
    al conectarse con una API, para no estar 
    concetando con la BD cada vez que haya una 
    acción en la página. Esto corresponde al 
    componentDisMount de las clases  */
    // useEffect(() => {
    //     console.log('El componente cargó por primera vez')
    // }, []);

    /* Si quiero ver cuando un estado en particular cambió, 
    en este caso el estado "cuenta" */
    // useEffect(() => {
    //     console.log('El estado del contador cambió')
    //     // Entre corchetes pueden ir uno o varios estados
    // }, [cuenta]);

    /* Para ejecutar un código al desmontar un componente, 
    sirve por ejemplo para cerrar la conexión a una API */
    useEffect(() => {
        // Código del efecto
        return(() => {
            console.log("Adiós componente");
        });
        /* Nuevamente, debe llevar al final los 
            corchetes para que el código se ejecute
            una sola vez al finalizar el componente */
    }, []);
    
    /* Aquí creo la función para incrementar
    el contador accediendo al parámetro cantidad*/
    const incrementar = (cantidad) => cambiarCuenta(cuenta + cantidad)
    const disminuir = (cantidad) => cambiarCuenta(cuenta - cantidad)

    return (
        <div>
            <h1>Contador: {cuenta}</h1>
            {/* Le puedo especificar entre paréntesis en 
            qué medida incrementar el contador */}
            {/* <button className={styles.button} onClick={() => incrementar(props.cantidadAIncrementar)}>Incrementar</button>
            <button className={styles.button} onClick={() => disminuir(props.cantidadADisminuir)}>Disminuir</button> */}
            {/* La propiedad "negro" es un estilo que está definido 
            en el comoponente Botón */}
            <Button negro marginRight onClick={() => incrementar(props.cantidadAIncrementar)}>Incrementar</Button>
            <Button negro onClick={() => disminuir(props.cantidadADisminuir)}>Disminuir</Button>
        </div>
    );
}

export default ContadorFuncional;