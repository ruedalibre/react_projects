/* ESTE ARCHIVO Y SU CARPETA NO VIENEN INCLUIDOS POR DEFECTO, 
HAY QUE CREARLOS Y EL SCRIPT ESTA EN LA PAGINA DE FIREBASE, 
DEBAJO DEL npm install firebase */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/* Esta es una de las utilidades disponibles en la página de 
Firebase. De allí se copian y se pegan aquí */
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* ESTE OBJETO CONTINE LA CONFIGURACION DEL PROJECTO EN FIREBASE */
/* Estas configuraciones fueron modificadas (.env.local) manualmente para garantizar s
su seguridad al subirse a repositorios públicos. Ver video #63 del 
curso React y Firebase de FalconMasters (Udemy)  */
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;

