import './App.css';
import Header from './components.js/Header';

/* Se cambió "function" a "const" para trabajar
con el mismo método en todos los archivos */
const App = () => {
  return (
    <div className="contenedor">
      <Header/>
      
    </div>
  );
}

export default App;
