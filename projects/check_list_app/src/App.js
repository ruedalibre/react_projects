import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components.js/Header';
import FormularioTareas from './components.js/FormularioTareas';
import ListaTareas from './components.js/ListaTareas';

/* Se cambió "function" a "const" para trabajar
con el mismo método en todos los archivos */
const App = () => {
  /* Cuando carga la página se ejecuta esta constante
  que muestra en pantalla las tareas que están en el 
  almacenamiento local en ese momento */
  const tareasGuardadas = 
    /* Si hay objetos en el almacenamiento local, los carga, 
    si no muestra un arreglo vacío */
    localStorage.getItem('tareas') ?
    JSON.parse(localStorage.getItem('tareas')) : []; 
  /* Acá establezco el estado de las tareas */
  const [tareas, cambiarTareas] = useState(tareasGuardadas); 
  /* Local Storage almacena localamente los datos ingresados 
  para que no se pierdan cada vez que recargo la aplicación */
  useEffect(() => {
    /* Necesito convertir los objetos del arreglo a un string
    para que puedan ser almacenados localmente */
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  /* Accedo a localStorage y compruebo si mostrarCompletadas es null
  o si tiene un valor. Utilizo la variable let porque después va a cambiar.
  Lo que hago después es que establezco una configuración para que, 
  al recargar la página conserve el estado de mostrar o no las tareas 
  completadas */
  let configMostrarCompletadas = '';
  if(localStorage.getItem('mostrarCompletadas') === null) {
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }

  /* Creo un estado que me muestra y oculta las tareas completadas */
  const [mostrarCompletadas, cambiarMostrarCompletadas] =useState(configMostrarCompletadas);
  /* Este estado sirve para que, al cargar la página muestre o no las 
  tareas completadas */
  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  

  return (
    <div className="contenedor">
      <Header 
        mostrarCompletadas={mostrarCompletadas} 
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
      {/* Aquí debo pasar la propiedad y el valor */}
      <ListaTareas 
        tareas={tareas} 
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}
        />
    </div>
  );
}

export default App;
