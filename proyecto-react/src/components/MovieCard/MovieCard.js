import React, { Component } from 'react'
import {Link} from "react-router-dom    "

class MovieCard extends Component {
  constructor(props){
    super(props)
    this.state ={
        verDescripcion: false,
        haySesion: false,
        esFavorito: false
    }

  }
  componentDidMount(){
    let usuarioLogeado = localStorage.getItem("usuario")

    if (usuarioLogeado!= null){
        this.setState({
            haySesion: true
        })
    }
    let favoritosGuardados = localStorage.getItem("favoritos")
    let favoritos = []

    if (favoritosGuardados!= null){
        this.setState({
            esFavorito: true
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

    if (favoritosGuardados!= null){
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
    return (
        
      <div>MovieCard</div>
    )
  }
}
  

export default MovieCard