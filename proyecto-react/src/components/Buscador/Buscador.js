import React, {Component} from "react";
import {withRouter} from "react-router-dom"

class Buscador extends Component {
    constructor(props){
        super(props)
        this.state = {
            search: ""
        }
    }

    onSubmit(event) {
        event.preventDefault()
        console.log("props de buscador", this.props)
        this.props.history.push("/busqueda/" + this.state.search)
    }

    guardarBusqueda(event) {
        this.setState(
            {search: event.target.value},
        () => console.log("log desde el setState extendido: ", this.state.search))
        console.log("El valor en estado es: ", this.state.search)
    }

    render() {
        return (
            <div>
                <form class="search-form" onSubmit={(event)=> this.onSubmit(event)}>
                    <input placeholder="Que queres ver hoy?" onChange={(event)=> this.guardarBusqueda(event)} value={this.state.search}/>
                    <button type="submit" class="btn btn-success btn-sm">Buscar</button>
                </form>
            </div>
        )
    }
}
export default withRouter(Buscador);
