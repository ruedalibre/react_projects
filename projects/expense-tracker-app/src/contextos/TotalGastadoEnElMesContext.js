import React, {useState, useEffect, useContext} from "react";
import useObtenerGastosDelMes from "../hooks/useObtenerGastosDelMes";

const TotalGastadoContext = React.createContext();
/* Esta función me permite acceder al total gastado del mes */
const useTotalDelMes = () => useContext(TotalGastadoContext);

const TotalGastadoProvider = ({children}) => {
    const [total, cambiarTotal] = useState(0);
    /* Puedo usar el contexto que ya tienen los gastos del mes. Cada vez que sumo un gasto, se actuliza el nuevo valor acumulado */
    const gastos = useObtenerGastosDelMes();

    useEffect(() => {
        let acumulado = 0;
        gastos.forEach((gasto) => {
            /* Para sumar las nuevas cantidades al acumulado */
            acumulado += gasto.cantidad
        })
        cambiarTotal(acumulado);
    }, [gastos]);

    return( 
        <TotalGastadoContext.Provider value={{total: total}}>
            {children}
        </TotalGastadoContext.Provider>
    );
}

export {TotalGastadoProvider, useTotalDelMes};
