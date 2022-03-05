/* ------------------------------------------------------
    NOTA: ESTE HOOK ES DIFERENTE A useObtenerGastos 
    porque va a manejar cada gasto de manera individual, 
    no la lista de gastos total. 
--------------------------------------------------------*/

import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import {useNavigate} from 'react-router-dom';
import {doc, getDoc} from 'firebase/firestore';

const useObtenerGasto = (id) => {
    const navigate = useNavigate();
    const [gasto, establecerGasto] = useState('');
    
    useEffect(() => {
        /* Necesito esperar que firebase revise la db y luego proceder con el siguiente código */
        const obtenerGasto = async() => {
            const documento = await getDoc(doc(db, 'gastos', id));

            /* Primero compruebo que el gasto exista */
            if(documento.exists){
                establecerGasto(documento);
            /* Si el usuario elige o escribe en la barra de navegación un id de un gasto no existente, lo envío de nuevo a la lista de gastos */    
            } else {
                navigate('/lista');
            }
        }
        /* En esta línea es donde la función se ejecuta como tal */
        obtenerGasto();

    }, [navigate, id]);
    
    return [gasto];
}
 
export default useObtenerGasto;