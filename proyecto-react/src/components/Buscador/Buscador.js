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
        if (this.state.search !== "") {
            this.props.history.push("/busqueda/" + this.state.search)
        }
    }
    guardarBusqueda(event) {
        this.setState(
            {search: event.target.value}
        )
    }
    render() {
        return (
            <div>
                <form className="search-form" onSubmit={(event)=> this.onSubmit(event)}>
                    <input placeholder="Que queres ver hoy?" onChange={(event)=> this.guardarBusqueda(event)} value={this.state.search}/>
                    <button type="submit" className="btn btn-success btn-sm">Buscar</button>
                </form>
            </div>
        )
    }
}
export default withRouter(Buscador);
