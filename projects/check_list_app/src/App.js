import React, {useState} from 'react';
import './App.css';
import Header from './components.js/Header';
import FormularioTareas from './components.js/FormularioTareas';
import ListaTareas from './components.js/ListaTareas';

/* Se cambió "function" a "const" para trabajar
con el mismo método en todos los archivos */
const App = () => {
  const [tareas, cambiarTareas] = useState(
    [
      /* Construcción de objetos tarea dentro 
      de un arreglo especificando id, tarea y su estado */
      {
        id: 1,
        texto: 'Lavar la ropa',
        completada: true
      },
      {
        id: 2,
        texto: 'Grabar tutorial',
        completada: false
      }
    ]
  ); 

  console.log(tareas);

  return (
    <div className="contenedor">
      <Header/>
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
      {/* Aquí debo pasar la propiedad y el valor */}
      <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
    </div>
  );
}

export default App;
