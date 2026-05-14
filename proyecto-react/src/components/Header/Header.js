    import React, { Component } from 'react'
    import Menu from "../Menu/Menu"
    import {Link} from "react-router-dom"
    import "./styles.css"
    import Cookies from "universal-cookie"
    import  { useState, useEffect } from 'react'
    
    const cookies = new Cookies()

    function Header(props) {
        const [haySesion, setHaySesion] = useState("");

        useEffect( () => {
            let usuarioLogeado = cookies.get("usuario");

            if (usuarioLogeado){
                setHaySesion(true)
            }
        },[])

        function cerrarSesion(){
            cookies.remove("usuario", {path : "/"})
            
            setHaySesion(false)
            
            window.location.reload()
        }
        
        
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
                    {haySesion ?
                    <li className="nav-item">
                        <Link className="nav-link" to= "/favoritos">Favoritos</Link>
                    </li>
                    : null}
                    {!haySesion ? 
                    <li className="nav-item ml-auto">
                        <Link className="nav-link" to= "/registro">Registro</Link>
                    </li>
                    : null}
                    {!haySesion ?
                    <li className="nav-item">
                    <Link className="nav-link" to= "/login">Login</Link>
                    </li>
                    : null}

                    {haySesion ?
                        <li className="nav-item ml-auto">
                            <button className= "nav-link logout" onClick={cerrarSesion}>
                                Cerrar Sesion
                            </button>
                    </li>
                    : null}
                </ul>
            </nav>
        )
    }
    

    export default Header
