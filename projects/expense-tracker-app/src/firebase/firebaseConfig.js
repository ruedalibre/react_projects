/* La carpeta que contiene este archivo y el archivo mismo 
fueron creados manualmente. Todas las líneas de código están 
basadas en la documentación de Firebase */
import { initializeApp } from "firebase/app";
/* Import para iniciar Firestore */
import { getFirestore } from "firebase/firestore";
/* Import para iniciar el administrador de identidades de Firebase */
import { getAuth } from "firebase/auth";

/* Estas líneas fueron modificadas con variables de ambiente para proteger la seguridad de la aplicación. El archivo .env.local debe
estar en la raíz del proyecto */
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};

initializeApp(firebaseConfig);

/* Para exportar las funciones de Firestore y Auth, primero 
guardo las funciones en una variable */
const auth = getAuth();
const db = getFirestore();
/* Al exportar ambas variables, puedo acceder a estos servicios desde cualquier lugar de la app */
export {db, auth};