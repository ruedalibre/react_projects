/* ESTE HOOK SE ENCARGARÁ DE TRAER TODOS LOS OBJETOS
 DE BASE DE DATOS PARA LISTARLOS EN LA PANTALLA */

import {useState, useEffect} from "react";
/* Import para acceder a la base de datos */
import {db} from './../firebase/firebaseConfig';
import { useAuth } from "../contextos/AuthContext";
/* Nuevas funciones de Firebase para el manejo de la base de datos y la administración de la lista de gastos */
import { collection, onSnapshot, query, orderBy, where, limit, startAfter } from "firebase/firestore";

const useObtenerGastos = () => {
    /* Primero debo identificar al usuario que inició sesión para llamar únicamente los datos de este usuarios */
    const {usuario} = useAuth();
    /* Este es el estado que va a manejar los cambios en la lista de gastos */
    const [gastos, cambiarGastos] = useState([]);
    const [ultimoGasto, cambiarUltimoGasto] = useState(null);
	const [hayMasPorCargar, cambiarHayMasPorCargar] = useState(false);

    const obtenerMasGastos = () => {
		const consulta = query(
			collection(db, 'gastos'),
			where('uidUsuario', '==', usuario.uid),
			orderBy('fecha', 'desc'),
			limit(10),
			startAfter(ultimoGasto)
		);

		onSnapshot(consulta, (snapshot) => {
			if(snapshot.docs.length > 0){
				cambiarUltimoGasto(snapshot.docs[snapshot.docs.length -1]);

				cambiarGastos(gastos.concat(snapshot.docs.map((gasto) => {
					return {...gasto.data(), id: gasto.id}
				})))
			} else {
				cambiarHayMasPorCargar(false);
			}
		}, error => {console.log(error)});
	}
    
    /* El hook debe ejecutarse una sola vez. Para eso uso useEffect. */
    useEffect(() => {
        /* De esta forma se construye el query para hacer la consulta a la base de datos */
        const consulta = query(
            collection(db, 'gastos'),
            where('uidUsuario', '==', usuario.uid),
            /* Una vez cargados los datos del usuario actual, quiero poder ordenarlos gastos por fecha. Este paso requiere crear un índice compuesto en Firebase (ver documentación) */
            orderBy('fecha', 'desc'),
            /* Aquí le indico cuántos gastos quiero que me muestre por pantalla */
            limit(10)
        );

        const unsuscribe = onSnapshot(consulta, (snapshot) => {
            if(snapshot.docs.lenght > 0) {
                cambiarUltimoGasto(snapshot.docs[snapshot.docs.lenght -1]);
                cambiarHayMasPorCargar(true);
            } else {
                cambiarHayMasPorCargar(false);
            }
            cambiarGastos(snapshot.docs.map((gasto) => {
                return {...gasto.data(), id: gasto.id}
            }));
        });
       
        /* Es necesario poner el return al final para cerrar la db al salir de la lista de gastos. Si queda abierta, se bloquea la app */
        return unsuscribe;
    }, [usuario]); /* -----> es necesario para que la app reconozca si hay un cambio de usuario y carge una nueva lista y no la actual */

    return [gastos, obtenerMasGastos,hayMasPorCargar];
}

export default useObtenerGastos;