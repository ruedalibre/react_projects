
/* La función reducer recibe dos propiedades: 
    - Estado actual
    - Acción */

/* El estado va a ser la BD de la lista de productos, 
que aquí se va a estar dentro de un objeto llamadao 
estadoInicial, el cual contiene dicha BD y va a funcionar
como valor de la propiedad "estado" de reducer */

const estadoInicial = {
    productos: [
		{id: 1, nombre: 'Producto A'},
		{id: 2, nombre: 'Producto B'},
		{id: 3, nombre: 'Producto C'},
		{id: 4, nombre: 'Producto D'}
    ],

    carrito: [1,2,3]
}

const reducer = (estado = estadoInicial, accion) => {
    return estado;
    
}
 
export default reducer;