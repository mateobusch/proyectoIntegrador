import React, { Component } from 'react'
import Menu from "../Menu/Menu"
import {Link} from "react-router-dom"

 class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            haySesion: false
        }
    }
    componentDidMount(){
        let cookies = document.cookie
        if (cookies.includes("session=")){
            this.setState({
                haySesion: true
            })
        }
    }
    render() {
    
    return (
         <nav>
            <ul class="nav nav-tabs my-4">
                <li class="nav-item">
                    <Link to= "/home">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to= "/peliculas">Peliculas</Link>
                </li>
                <li class="nav-item">
                    <Link to= "/series">Series</Link>
                </li>
                {this.state.haySesion ?
                <li class="nav-item">
                    <Link to= "/favoritos">Favoritos</Link>
                </li>
                : null}
                {!this.state.haySesion ? 
                <li class="nav-item ml-auto">
                    <Link to= "/registro">Registro</Link>
                </li>
                : null}
                {!this.state.haySesion ?
                <li class="nav-item">
                   <Link to= "/login">Login</Link>
                </li>
                : null}
            </ul>
        </nav>
    )
  }
}

export default Header
