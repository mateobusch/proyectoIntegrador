import React, { Component } from 'react'
import Cookies from 'universal-cookie';
import MovieCard from '../../components/MovieCard/MovieCard';
import SerieCard from '../../components/SerieCard/SerieCard';

const cookies = new Cookies()
class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculasFavoritas: [],
            seriesFavoritas: [],
            haySesion: false,
        };
    }

    componentDidMount() {
        let usuario = cookies.get("usuario")
        let favoritos = cookies.get("favoritos")
        if (usuario !== null) {
            this.setState({
                haySesion: true
            })
        }
        if (favoritos) {
            let peliculas = favoritos.filter(fav => fav.queEs === "pelicula")
            let series = favoritos.filter(fav => fav.queEs === "serie")
            this.setState({
                peliculasFavoritas: peliculas,
                seriesFavoritas: series
            })
        }
        else {
            this.setState({
            peliculasFavoritas: [],
            seriesFavoritas: []
    })
}
    }
    render() {
        if (this.state.haySesion === false) {
            return (
                <h2 className="alert alert-danger">No hay ninguna sesion iniciada</h2>
            )
        }
        return (
            <div className="container">
                <h2 className="alert alert-primary">Peliculas favoritas</h2>
                {this.state.peliculasFavoritas.length === 0 ?
                <p>No hay peliculas favoritas</p>
                :
                <section className="row cards">
                    {this.state.peliculasFavoritas.map(pelicula => (
                        <MovieCard
                            key={pelicula.id}
                            datos={pelicula}
                            clase="single-card-movie"
                        />
                    ))}
                </section>
                }

            <h2 className="alert alert-warning">Series favoritas</h2>

            {this.state.seriesFavoritas.length === 0 ?
                <p>No hay series favoritas</p>
                :
                <section className="row cards">
                    {this.state.seriesFavoritas.map(serie => (
                        <SerieCard
                            key={serie.id}
                            datos={serie}
                            clase="single-card-movie"
                        />
                    ))}
                </section>
            }
            </div>
        );
    }
}

export default Favoritos;
