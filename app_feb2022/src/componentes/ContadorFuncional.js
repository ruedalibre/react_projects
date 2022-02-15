import React, {useState} from "react";
import styles from './ContadorFuncional.module.css';
import Button from "../elementos/Button";

const ContadorFuncional = (props) => {
    /* cuenta = cuenta actual 
    cambiarCuenta = actualiza el valor con 
    el incremento o decremento. Debo 
    inicializar el estado en cero (0) */
    const [cuenta, cambiarCuenta] = useState(0);
        
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
            <Button onClick={() => incrementar(props.cantidadAIncrementar)}>Incrementar</Button>
            <Button onClick={() => disminuir(props.cantidadADisminuir)}>Disminuir</Button>
        </div>
    );
}

export default ContadorFuncional;