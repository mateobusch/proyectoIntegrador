import React, {Component} from "react";
import {withRouter} from "react-router-dom"
import  { useState, useEffect } from 'react'


function Buscador(props) {
   const [search, setSearch] = useState("");
   
    function onSubmit(event){
        event.preventDefault()
        if (search !== "") {
            props.history.push("/busqueda/" + search);
        }
    }
    function guardarBusqueda(event){
        setSearch(event.target.value);
        
    }
    
        return (
            <div>
                <form className="search-form" onSubmit={onSubmit}>
                    <input
                     placeholder="Que queres ver hoy?" 
                     onChange={guardarBusqueda}
                     value={search}/>
                    <button type="submit" className="btn btn-success btn-sm">Buscar</button>
                </form>
            </div>
        )
    }

export default withRouter(Buscador);
