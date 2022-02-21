
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
            console.log(accion.nombre);
            return estado;
        default:
            return estado;
    }
}
 
export default reducer;