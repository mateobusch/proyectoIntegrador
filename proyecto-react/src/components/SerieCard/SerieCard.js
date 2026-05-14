import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Cookies from "universal-cookie"
import { useEffect, useState } from "react"

const cookies = new Cookies()

function SerieCard(props){
    
    const [verDescripcion, setVerDescripcion] = useState(false)
    const [haySesion, setHaySesion] = useState(false)
    const [esFavorito, setEsFavorito] = useState(false)
    useEffect( ()=> {
        let usuarioLogeado = cookies.get("usuario")
        let favoritosGuardados = cookies.get("favoritos")

        if (usuarioLogeado != null){
            this.setState({
                haySesion: true
            })
        }

        if (favoritosGuardados != null){
            let favoritos = favoritosGuardados

            for(let i = 0; i < favoritos.length; i++){
                if(favoritos[i].id === this.props.datos.id){
                    this.setState({
                        esFavorito: true
                    })
                }
            }
        }
    }, [])
   


    function mostrarDescripcion(){
        setVerDescripcion(!verDescripcion)
    }

    function agregarFavoritos(){
        let favoritosGuardados = cookies.get("favoritos")
        let favoritos = []

        if (favoritosGuardados != null){
            favoritos = favoritosGuardados
        }

        if (esFavorito){
            let nuevosFavoritos = []

            for(let i = 0; i < favoritos.length; i++){
                if(favoritos[i].id !== props.datos.id){
                    nuevosFavoritos.push(favoritos[i])
                }
            }

            cookies.set("favoritos", nuevosFavoritos, {path : "/"})

            setEsFavorito(false)
        } else{
            let favoritoNuevo = {
                id: props.datos.id,
                title: props.datos.name,
                poster_path: props.datos.poster_path,
                overview: props.datos.overview,
                queEs: "serie"
            }

            favoritos.push(favoritoNuevo)
            cookies.set("favoritos", favoritos, {path : "/"})

            setEsFavorito(true)
        }
    }

    
        let imagen = "https://image.tmdb.org/t/p/w500" + props.datos.poster_path

        return (
            <article className={props.clase}>
                <img src={imagen} className="card-img-top" alt={props.datos.name} />
           
                <div className="cardBody">
                    <h5 className="card-title">{props.datos.name}</h5>

                    {verDescripcion ? 
                        <p className="card-text">{props.datos.overview}</p>
                    : null}
                
                    <button className="btn btn-primary" onClick={() => mostrarDescripcion()}>
                        {verDescripcion ? "Ocultar descripcion" : "Ver descripcion"}
                    </button>
            
                    <Link to={"/detalle/serie/" + props.datos.id} className="btn btn-primary">
                        Ir a detalle
                    </Link>

                    {haySesion ?
                        <button className="btn alert-primary" onClick={() => agregarFavoritos()}>
                            {esFavorito ? "♥️" : "🩶"}
                        </button>
                    : null}
                </div>
            </article>
        )
    }


export default SerieCard