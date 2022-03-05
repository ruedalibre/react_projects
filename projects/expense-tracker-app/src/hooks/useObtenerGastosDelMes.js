import {useState, useEffect} from "react";
import {db} from './../firebase/firebaseConfig';
/* Librería para manejo de inicio y fin en rango de fechas */
import { startOfMonth, endOfMonth, getUnixTime } from "date-fns";
import {useAuth} from '../contextos/AuthContext';
import { collection, onSnapshot, query, orderBy, where } from "firebase/firestore";

const useObtenerGastosDelMes = () => {
    const [gastos, establecerGastos] = useState([]);
    /* Necesito validar el usuario antes de ejectura el filtro */
    const {usuario} = useAuth();

    /* Estado para filtrar los gastos por mes */
    useEffect(() => {
        /* Los valores se deben convertir a Unix para poder hacer el cálculo del rango de tiempo */
        const inicioDeMes = getUnixTime(startOfMonth(new Date()));
        const finDeMes = getUnixTime(endOfMonth(new Date()));
        
        if(usuario){
            const consulta = query(
                collection(db, 'gastos'),
                orderBy('fecha', 'desc'),
                where('fecha', '>=', inicioDeMes),
                where('fecha', '<=', finDeMes),
                /* Valido usuario */
                where('uidUsuario', '==', usuario.uid)
            );
            
            const unsuscribe = onSnapshot(consulta, (snapshot) => {
                /* Guarda el arreglo resultante en el estado */
                establecerGastos(snapshot.docs.map((documento) => {  
                    /* Los ... sirven para extraer todas las propiedades de un objeto */
                    return {...documento.data(), id: documento.id}
                }))
            }, (error) => {console.log(error)});
            /* Este return cierra la conexión después de usar el hook */
            return unsuscribe;
        }
    }, [usuario]);

    return gastos;
}
 
export default useObtenerGastosDelMes;