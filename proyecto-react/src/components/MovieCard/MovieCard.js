import React, { Component } from 'react'
import { Link } from "react-router-dom"

class MovieCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            verDescripcion: false,
            haySesion: false,
            esFavorito: false
        }
    }

    componentDidMount(){
        let usuarioLogeado = localStorage.getItem("usuario")

        if (usuarioLogeado != null){
            this.setState({
                haySesion: true
            })
        }
    }

    mostrarDescripcion(){
        this.setState({
            verDescripcion: !this.state.verDescripcion
        })
    }

    agregarFavoritos(){
        let favoritosGuardados = localStorage.getItem("favoritos")
        let favoritos = []

        if (favoritosGuardados != null){
            favoritos = JSON.parse(favoritosGuardados)
        }

        if (this.state.esFavorito){
            let nuevosFavoritos = []

            for(let i = 0; i < favoritos.length; i++){
                if(favoritos[i].id !== this.props.datos.id){
                    nuevosFavoritos.push(favoritos[i])
                }
            }

            localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos))

            this.setState({
                esFavorito: false
            })
        } else{
            let favoritoNuevo = {
                id: this.props.datos.id,
                title: this.props.datos.title,
                poster_path: this.props.datos.poster_path,
                overview: this.props.datos.overview
            }

            favoritos.push(favoritoNuevo)
            localStorage.setItem("favoritos", JSON.stringify(favoritos))

            this.setState({
                esFavorito: true
            })
        }
    }

    render() {
        let imagen = "https://image.tmdb.org/t/p/w500" + this.props.datos.poster_path

        return (
            <article className={this.props.clase}>
                <img src={imagen} className="card-img-top" alt={this.props.datos.title} />
           
                <div className="cardBody">
                    <h5 className="card-title">{this.props.datos.title}</h5>

                    {this.state.verDescripcion ? 
                        <p className="card-text">{this.props.datos.overview}</p>
                    : null}
                
                    <button className="btn btn-primary" onClick={() => this.mostrarDescripcion()}>
                        {this.state.verDescripcion ? "Ocultar descripcion" : "Ver descripcion"}
                    </button>
            
                    <Link to={"/detalle/" + this.props.datos.id} className="btn btn-primary">
                        Ir a detalle
                    </Link>

                    {this.state.haySesion ?
                        <button className="btn alert-primary" onClick={() => this.agregarFavoritos()}>
                            {this.state.esFavorito ? "♥️" : "🩶"}
                        </button>
                    : null}
                </div>
            </article>
        )
    }
}

export default MovieCard