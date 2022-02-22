import React, {useState} from "react";
/* Para trabajar los estilos css por módulos, las 
importaciones se deben hacer de esta forma */
import styles from './FormularioInicioSesion.module.css';
import Button from "../elementos/Button";

const FormularioInicioSesion = (props) => {
    const [usuario, cambiarUsuario] = useState('');
    const [password, cambiarPassword] = useState('');

    // const onChangeUsuario = (evento) => {
    //     cambiarUsuario(evento.target.value);
    // }
    // const onChangePassword = (evento) => {
    //     cambiarPassword(evento.target.value);
    // }
    /* Esta función global sirve para controlar
    el estado tanto del nombre de usuario como de
    la contraseña */
    const onChange = (evento) => {
        if(evento.target.name === 'usuario'){
            cambiarUsuario(evento.target.value);
        } else if (evento.target.name === 'password'){
            cambiarPassword(evento.target.value);
        }
    }

    const onSubmit = (e) => {
        /* Para evitar el comportamiento por 
        defecto, que es enviar los datos*/
        e.preventDefault();
        
        if(usuario === "Ruedalibre" && password === "123"){
            props.cambiarEstadoSesion(true);
        } else {
            alert('Datos ingresados son incorrectos');
            /* Para que el campo del input quede de nuevo 
            en blanco, en caso de que el usuario ingrese
            los datos incorrectos */
            cambiarUsuario('');
            cambiarPassword('');
        }
    }

    return ( 
        <form action="" onSubmit={onSubmit} className={styles.formulario}>
            <h1>No has iniciado sesión</h1>
            <div>
                <label htmlFor="usuario" className={styles.label}>Usuario</label>
                <input 
                    type="text" 
                    name="usuario"
                    id="usuario"
                    value={usuario}
                    /* La (e) hace referencia al parámetro evento
                     y contiene información del elemento que 
                    recibió el cambio */
                    onChange={onChange}
                    className={styles.input}
                />
            </div>
            <div>
                <label htmlFor="password" className={styles.label}>Contraseña</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    value={password}
                    onChange={onChange}
                    className={styles.input}
                />
            </div>
            {/* <button type="submit" className={styles.button}>Iniciar Sesión</button> */}
            <div>
                <Button largo type="submit">Iniciar Sesión</Button>
            </div>
        </form>
     );
}
 
export default FormularioInicioSesion;