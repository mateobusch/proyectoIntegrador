import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/MovieCard'
import Loader from '../../components/Loader/Loader';

class Peliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            peliculasFiltradas: [],
            proximaPagina: 1,
            valorFiltro: "",
            cargando: true
        };
    }

    componentDidMount() {
        this.traerPeliculas();
    }

    traerPeliculas() {
        this.setState({
            cargando: true
        })
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4606c83ccea5f9b56977aeac833b6148&page=${this.state.proximaPagina}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    peliculas: this.state.peliculas.concat(data.results),
                    peliculasFiltradas: this.state.peliculasFiltradas.concat(data.results),
                    proximaPagina: this.state.proximaPagina + 1,
                    cargando: false
                });
            })
            .catch(error => console.log(error));
    }

    filtrarPeliculas(valor) {
        const peliculasFilter = this.state.peliculas.filter((elm) => elm.title.toLowerCase().includes(valor.toLowerCase()) ) 
        this.setState({
            peliculasFiltradas: peliculasFilter,
            valorFiltro: valor
        })
    }
    render() {
        return (
            <div>
           <h2 className= "titulo-peliculas">Peliculas</h2>
           <input className= "input-peliculas" type='text'
           placeholder="Buscar pelicula"
           onChange={(event) => this.filtrarPeliculas(event.target.value)}
           ></input>
           {this.state.cargando ? <Loader/>
           : <section className= "row cards" id= "movies">
            {this.state.peliculasFiltradas.map((pelicula, index) => 
                <MovieCard
                  key={pelicula.id}
                  datos={pelicula}
                  clase= "single-card-movie"
                  />
              )
            }
        </section>
           }
        <button className= "cargar-mas" onClick={() => this.traerPeliculas()}>
            Cargar más
        </button>
        </div>

        );
    }
}

export default Peliculas;