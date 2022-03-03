import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

/* --------------------------------------------------------
    Esta función se encarga de publicar los datos 
    ingresados en el formulario en la BASE DE DATOS 
-----------------------------------------------------------*/

/* Dentro de la función accedo a los valores del objeto creado en FormularioGastos y extraigo para enviarlos a la DB */
const agregarGasto = ({categoria, descripcion, cantidad, fecha, uidUsuario}) => {
    /* Me conecto a la base de datos y, si no hay una db creada, la va a crear en el momento que se empiecen a ingresar registros por parte del usuario.
    En esta función ya todas las propiedades están adaptadas a los formatos necesarios para su ingreso a la base de datos */
    return addDoc(collection(db, 'gastos'), {
        categoria: categoria,
        descripcion: descripcion,
        cantidad: Number(cantidad),
        fecha: fecha,
        uidUsuario: uidUsuario
    });
}
/* Esta función se encarga de publicar los datos ingresados en el formulario */
 
export default agregarGasto;