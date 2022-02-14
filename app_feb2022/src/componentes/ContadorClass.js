import React, {Component} from "react";

class Contador extends Component {
    /* Para trabajar con clases es necesario pasar 
    un método constructor y luego crear los métodos
    para implementarlos  */
    constructor(props) {
        super(props);
        /* Esta es la manera de agregar estados al 
        trabajar con métodos */
        this.state = {contador: 0}
    }
    
    /* -------------------------------------------
        MÉTODOS DE CICLO DE VIDA DE LA APP
        para trabajo con clases
    ---------------------------------------------*/
    componentDidMount() {
        /* Esto permite crear funciones que se carguen
        automáticamente al abrir la página. También podría, 
        por ejemplo, llamar una API */ 
        console.log('El componente se cargó en el DOM');
    }

    componentDidUpdate(propiedadesAnteriores, estadoAnterior) {
        /* Permite comprobar si un componente 
        volvió a rederizarse mediante un update 
        del estado */
        console.log('El componente se actualizó');
        console.log('Propiedades anteriores del componente', propiedadesAnteriores);
        console.log('Estado anterior del componente', estadoAnterior);
    }

    componentWillUnmount() {
        /* Permite crear una acción al cerrar 
        un componente. Por ejemplo, puede terminar 
        el proceso de llamada a la API, o puede ejecutar
        un procedimiento de limpieza*/
        console.log('Adión componente')
    }

    /* Las clases no pueden tener dentro funciones, 
    en su lugar trabajan con métodos, de la siguiente
    forma: */
    incrementar(cantidad) {
        this.setState((estadoAnterior) => {
            /* Para sumar una unidad cada vez 
            que haga click sobre el botón incrementar: */
            return {
                /* De esta forma devuelvo un objeto para 
                el nuevo estado */
                contador: estadoAnterior.contador + cantidad
            }
        } );
    }

    disminuir (cantidad) {
        this.setState((estadoAnterior) => {
            return {
                contador: estadoAnterior.contador - cantidad
            }
        } ); 
    }

    render() {
        return(
            <div>
                <h1>Contador: {this.state.contador}</h1>
                {/* Aquí debo llamar los métodos dentro de cada botón */}
                <button onClick={() => this.incrementar(this.props.cantidadAIncrementar)}>Incrementar</button>
                <button onClick={() => this.disminuir(this.props.cantidadADisminuir)}>Disminuir</button>
            </div>
        );
    }
}

export default Contador;