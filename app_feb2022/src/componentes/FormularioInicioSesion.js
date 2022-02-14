import React, {useState} from "react";

const FormularioInicioSesion = () => {
    const [usuario, cambiarUsuario] = useState('');
    const [password, cambiarPassword] = useState('');

    const onChangeUsuario = (evento) => {
        cambiarUsuario(evento.target.value);
    }
    const onChangePassword = (evento) => {
        cambiarPassword(evento.target.value);
    }

    return ( 
        <form action="">
            {/* Estas líneas de usuario y contraseña 
            permitirán ver en pantalla 
            la información que el usuario va ingresando 
            en los campos de input*/}
            <p>Usuario: {usuario}</p>
            <p>Contraseña: {password}</p>
            <div>
                <label htmlFor="usuario">Usuario</label>
                <input 
                    type="text" 
                    name="usuario"
                    id="usuario"
                    value={usuario}
                    /* La (e) hace referencia al parámetro evento
                     y contiene información del elemento que 
                    recibió el cambio */
                    onChange={onChangeUsuario}
                />
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    value={password}
                    onChange={onChangePassword}
                />
            </div>
            <button type="submit">Iniciar Sesión</button>
        </form>
     );
}
 
export default FormularioInicioSesion;