import React, { Component } from 'react'
import Menu from "../Menu/Menu"
import {Link} from "react-router-dom"

 class Header extends Component {
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
                <li class="nav-item">
                    <Link to= "/favoritos">Favoritos</Link>
                </li>
                <li class="nav-item ml-auto">
                    <Link to= "/registro">Registro</Link>
                </li>
                <li class="nav-item">
                   <Link to= "/login">Login</Link>
                </li>
            </ul>
        </nav>
    )
  }
}

export default Header
