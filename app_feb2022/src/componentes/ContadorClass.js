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
    
    /* Las clases no pueden tener dentro funciones, 
    en su lugar trabajan con métodos, de la siguiente
    forma: */
    incrementar() {
        console.log('+1');
    }

    disminuir () {
        console.log('-1');
    }

    render() {
        return(
            <div>
                <h1>Contador: {this.state.contador}</h1>
                {/* Aquí debo llamar los métodos dentro de cada botón */}
                <button onClick={() => this.incrementar()}>Incrementar</button>
                <button onClick={() => this.disminuir()}>Disminuir</button>
            </div>
        );
    }
}

export default Contador;