import React, {useState} from "react";
import styled from "styled-components";
import { NavLink, Routes, Route } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import Blog from "./componentes/Blog";
import Tienda from "./componentes/Tienda";
import Error404 from "./componentes/Error404";
import Carrito from "./componentes/Carrito";

const App = () => {
    /* Esta constante hace las veces de BD */
    const productos = [
      {id:1, nombre: 'Producto 1'},
      {id:2, nombre: 'Producto 2'},
      {id:3, nombre: 'Producto 3'},
      {id:4, nombre: 'Producto 4'}
  ];

  /* El carrito necesita usar estados porque siempre 
   va a estar cambiando */
  const [carrito, cambiarCarrito] = useState([]);

  const agregarProductoAlCarrito = (idProductoAAgregar, nombre) => {
    /* Creo un condicional para el caso en que aún no haya 
    ningún producto agregado al carrito */
    if(carrito.lenght === 0) {
      cambiarCarrito([{
        id: idProductoAAgregar, 
        nombre: nombre, 
        cantidad: 1
    }]);
    } else {
      /* Luego reviso que el carrito no tenga el producto que quiero agregar.
      Si ya está el producto, actualizo los valores. Si el producto no existe 
      lo agrego al carrito.
      Para poder editar el carrito debo clonarlo, lo cual me carga todos los 
      productos actuales del carrito */
      const nuevoCarrito = [...carrito];
      /* Itero con filter para ver si el carrito ya tiene el id del 
      producto que quiero agregar */
      const yaEstaEnCarrito = nuevoCarrito.filter((productoDeCarrito) => {
        return productoDeCarrito.id === idProductoAAgregar
      }).length > 0;
      /* Si el producto está en el arreglo, lo tengo que actualizar */
      if(yaEstaEnCarrito){
        /* Debo buscar la posición del id que coincide con el 
        producto ingresado */
        nuevoCarrito.forEach((productoDeCarrito, index) => {
          if(productoDeCarrito.id === idProductoAAgregar) {
            /* Si el producto ya está en el carrito, aumento 
            la cantidad de veces que está el producto. */
            const cantidad = nuevoCarrito[index].cantidad;
            nuevoCarrito[index] = {
              id: idProductoAAgregar, 
              nombre: nombre, 
              cantidad: cantidad +1 
            }
          }
        });
      } else {
        /* Si el producto no está en el carrito, con push 
        le agrego el nuevo producto al arreglo */
        nuevoCarrito.push(
          {
            id: idProductoAAgregar, 
            nombre: nombre,
            cantidad: 1
          }
        );
      }
      /* Por último actualizo el carrito con la 
      información actualizada */
      cambiarCarrito(nuevoCarrito);
    }
  }

  return ( 
    <Contenedor>
      <Menu>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/tienda">Tienda</NavLink>
      </Menu>
      <main>
        <Routes>
          <Route path="*" element={<Error404/>}/>
          <Route path="/" element={<Inicio />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/tienda" element={
                  <Tienda
                      productos={productos}
                      agregarProductoAlCarrito={agregarProductoAlCarrito}
                  />
          } />
        </Routes>
      </main>
      <aside>
        <Carrito carrito={carrito}/>
      </aside>
    </Contenedor>
   );
}

const Contenedor = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
 
const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }
 
    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;

export default App;