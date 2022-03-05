import React, {useState, useEffect, useContext} from "react";

const TotalGastadoContext = React.createContext();

const TotalGastadoProvider = ({children}) => {
    const [total, cambiarTotal] = useState(7);

    return( 
        <TotalGastadoContext.Provider value={{total: total}}>
            {children}
        </TotalGastadoContext.Provider>
    );
}

export {TotalGastadoProvider};
