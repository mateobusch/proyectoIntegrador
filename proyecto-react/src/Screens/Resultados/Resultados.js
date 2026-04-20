import React, {Component} from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import SerieCard from "../../components/SerieCard/SerieCard";
import Loader from "../../components/Loader/Loader";

class Resultados extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculas: [],
            series: [],
            cargando: true
        }
    }
    componentDidMount() {
        this.busqueda()
    }
    
    busqueda() {
        let query = this.props.match.params.query
        this.setState({ cargando: true })
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=4606c83ccea5f9b56977aeac833b6148&query=${query}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                peliculas: data.results
            })
        })
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=4606c83ccea5f9b56977aeac833b6148&query=${query}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                series: data.results,
                cargando: false
            })
        })
    }
    render(){
        return(
            <div className="container">
                <h2 className="alert alert-primary">
                    Resultados de tu busqueda: "{this.props.match.params.query}"
                </h2>
                {this.state.cargando ? 
                <Loader/> :
                <div>
                    <h3 className="alert alert-primary">Películas</h3>
                    {this.state.peliculas.length === 0 ? 
                        <p>No hay peliculas relacionadas con tu busqueda</p>
                    :
                    <section className="row cards">
                        {this.state.peliculas.map(pelicula => (
                            <MovieCard
                                key={pelicula.id}
                                datos={pelicula}
                                clase="single-card-movie"
                            />
                        ))}
                    </section>
                    }
                    <h3 className="alert alert-warning">Series</h3>
                    {this.state.series.length === 0 ? 
                        <p>No hay series relacionadas con tu busqueda</p>
                    :
                    <section className="row cards">
                        {this.state.series.map(serie => (
                            <SerieCard
                                key={serie.id}
                                datos={serie}
                                clase="single-card-movie"
                            />
                        ))}
                    </section>
                    }
                </div>
                }
            </div>
        )
    }
}
export default Resultados