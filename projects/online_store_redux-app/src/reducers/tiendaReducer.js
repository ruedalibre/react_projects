
/* La función reducer va a controlar el estado global 
de la aplicación y recibe dos propiedades: 
    - Estado inicial (actual)
    - Acción */

/* El estado va a ser la BD de la lista de productos, 
que aquí va a estar dentro de un objeto llamadao 
estadoInicial, el cual contiene dicha BD y va a funcionar
como valor de la propiedad "estado" de reducer */

const estadoInicial = {
    productos: [
		{id: 1, nombre: 'Producto 1'},
		{id: 2, nombre: 'Producto 2'},
		{id: 3, nombre: 'Producto 3'},
		{id: 4, nombre: 'Producto 4'}
    ],

    carrito: []
}

const reducer = (estado = estadoInicial, accion) => {
    /* El switch se encargará de ejecutar la acción 
    que cambia el estado */ 
    switch(accion.type) {
        case 'AGREGAR_PRODUCTO_AL_CARRITO':
            const {nombre, idProductoAAgregar} = accion;
            /* Para acceder a carrito debo entrar 
            por el estado porque este está definido 
            dentro del estado */
            /* Si el carrito no tiene productos, agrego uno */
            if(estado.carrito.lenght === 0) {
                return {
                    /* Carga todo lo que ya tenía y actualiza
                    el estado con el nuevo producto agregado */
                    ...estado,
                    /* El carrito aquí contiene el arreglo 
                    con el objeto (producto) que va a ser agregado */
                    carrito: [{id: idProductoAAgregar, nombre: nombre, cantidad: 1}]
                }
            } else {
                const nuevoCarrito = [...estado.carrito];
                /*Comprobamos si el carrito ya tiene el ID del 
                producto a agregar. Si ya tiene el producto entonces 
                lo tengo que actualizar.*/
                const yaEstaEnCarrito = nuevoCarrito.filter((productoDeCarrito) => {
                    return productoDeCarrito.id === idProductoAAgregar
                }).length > 0;

                if(yaEstaEnCarrito){
                    /* Para ello tenemos que buscarlo, obtener su posicion 
                    en el arreglo. Y con base a su posicion, actualizo 
                    el valor. */
                    nuevoCarrito.forEach((productoDeCarrito, index) => {
                        if(productoDeCarrito.id === idProductoAAgregar){
                            const cantidad = nuevoCarrito[index].cantidad;
                            nuevoCarrito[index] = {
                                id: idProductoAAgregar, 
                                nombre: nombre, 
                                cantidad: cantidad + 1
                            }
                        }
                    });
                /* De otra forma entonces agregamos el producto al arreglo */
                } else {
                    nuevoCarrito.push(
                        {
                            id: idProductoAAgregar,
                            nombre: nombre,
                            cantidad: 1
                        }
                    );
                }
                return {
                    ...estado,
                    carrito: nuevoCarrito
                }
            }
            return estado;
        default:
            return estado;
    }
}
 
export default reducer;