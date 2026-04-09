    import React, { Component } from 'react'
    import Menu from "../Menu/Menu"
    import {Link} from "react-router-dom"
    import "./styles.css"

    class Header extends Component {
        constructor(props){
            super(props)
            this.state = {
                haySesion: false
            }
        }
        componentDidMount(){
            let usuarioLogeado = localStorage.getItem("usuario");
            if (usuarioLogeado !== null){
                this.setState({
                    haySesion: true
                })
            }
        }
        render() {
        
        return (
            
            <nav>
                <ul className="nav nav-tabs my-4">
                    <li className   ="nav-item">
                        <Link to= "/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to= "/peliculas">Peliculas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to= "/series">Series</Link>
                    </li>
                    {this.state.haySesion ?
                    <li className="nav-item">
                        <Link className="nav-link" to= "/favoritos">Favoritos</Link>
                    </li>
                    : null}
                    {!this.state.haySesion ? 
                    <li className="nav-item ml-auto">
                        <Link className="nav-link" to= "/registro">Registro</Link>
                    </li>
                    : null}
                    {!this.state.haySesion ?
                    <li className="nav-item">
                    <Link className="nav-link" to= "/login">Login</Link>
                    </li>
                    : null}
                </ul>
            </nav>
        )
    }
    }

    export default Header
