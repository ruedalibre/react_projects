import { db } from "./firebaseConfig";
import {doc, deleteDoc} from 'firebase/firestore';

/* Para borrar un gasto debo especificar la base de datos, la colección y el id del objeto que quiero borrar. Debo usar await para que la app no ejecute más código hasta que no se haga efectivo el borrado del gasto */
const borrarGasto = async(id) => {
    await deleteDoc(doc(db, 'gastos', id));
}

export default borrarGasto;