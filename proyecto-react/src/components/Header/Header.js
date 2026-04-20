    import React, { Component } from 'react'
    import Menu from "../Menu/Menu"
    import {Link} from "react-router-dom"
    import "./styles.css"
    import Cookies from "universal-cookie"
    
    const cookies = new Cookies()

    class Header extends Component {
        constructor(props){
            super(props)
            this.state = {
                haySesion: false
            }
        }
        componentDidMount(){
            let usuarioLogeado = cookies.get("usuario");

            if (usuarioLogeado){
                this.setState({
                    haySesion: true
                })
            }
        }

        cerrarSesion(){
            cookies.remove("usuario", {path : "/"})
            
            this.setState({
                haySesion: false
            })
            
            window.location.reload()
        }
        render() {
        
        return (
            
            <nav>
                <ul className="nav nav-tabs my-4">
                    <li className   ="nav-item">
                        <Link className="nav-link" to= "/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to= "/peliculas">Peliculas</Link>
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

                    {this.state.haySesion ?
                        <li className="nav-item ml-auto">
                            <button className= "nav-link logout" onClick={() => this.cerrarSesion()}>
                                Cerrar Sesion
                            </button>
                    </li>
                    : null}
                </ul>
            </nav>
        )
    }
    }

    export default Header
