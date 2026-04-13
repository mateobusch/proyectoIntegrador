
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/MovieCard'

class Peliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            peliculasFiltradas: [],
            proximaPagina: 1,
            valorFiltro: ""
        };
    }

    componentDidMount() {
        this.traerPeliculas();
    }

    traerPeliculas() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4606c83ccea5f9b56977aeac833b6148&page=${this.state.proximaPagina}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    peliculas: data.results,
                    peliculasFiltradas: data.results,
                    proximaPagina: this.state.proximaPagina + 1
                });
            })
            .catch(error => console.log(error));
    }
    render() {
        return (
            <div>
           <h2>Peliculas</h2>
          
           <section className= "row cards" id= "movies">
          {this.state.traerPeliculas.map((pelicula, index) => {
            if (index<4){
              return(
                <MovieCard
                  key={pelicula.id}
                  datos={pelicula}
                  clase= "single-card-movie"
                  />
              )
            }
            else{
              return null
            }
          }
        )}

        </section>
        </div>

        )
    }
}

export default Peliculas;
