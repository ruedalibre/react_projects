/* ESTA FUNCIÓN LE DA FORMATO A LA MONEDA  */

const formatearCantidad = (cantidad) => {
    /* El método Intl maneja los formatos de valores interacionales. En este caso el formato en dólares puede servir también para expresar el valor en pesos */
    return new Intl.NumberFormat(
        'en-US',
        {style: 'currency', currency: 'USD', minimumFractionDigits: 2}
    ).format(cantidad);
}
 
export default formatearCantidad;