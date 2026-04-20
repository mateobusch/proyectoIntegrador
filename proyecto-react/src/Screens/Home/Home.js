import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Buscador from '../../components/Buscador/Buscador'
import MovieCard from '../../components/MovieCard/MovieCard';
import SerieCard from '../../components/SerieCard/SerieCard'
import Loader from '../../components/Loader/Loader';

class Home extends Component {
    constructor(props){
        super(props);
        this.state= {
            populares: [],
            enCartel: [],
            cargando: true
        }
    }
    componentDidMount(){
      this.setState({
            cargando: true
        })
        let urlPopulares ="https://api.themoviedb.org/3/movie/popular?api_key=4606c83ccea5f9b56977aeac833b6148&language=es-ES"
        let urlEnCartel= "https://api.themoviedb.org/3/tv/top_rated?api_key=4606c83ccea5f9b56977aeac833b6148&language=es-ES"

        fetch(urlPopulares)
          .then((response) => response.json())
          .then((data) =>{
            this.setState({
                populares: data.results,
            })
        })
          .catch((error)=> console.log(error))
        fetch(urlEnCartel)
            .then((respuesta) => respuesta.json())
            .then((data) => {
                this.setState({
                    enCartel: data.results,
                    cargando: false
                })
            })
            .catch((error) => console.log(error))
        }
    
  render() {
    return (
      <div>
        {this.state.cargando ? <Loader/>
        :
        <div>
        <Buscador/>

        <h2 className= "alert alert-primary"> Popular movies this week <Link to = "/peliculas/populares"> Ver todas</Link></h2>

        <section className= "row cards all-movies" id= "movies">
          {this.state.populares.map((pelicula, index) => {
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
         <h2 className= "alert alert-warning"> Popular Series this week <Link to = "/series/populares"> Ver todas</Link></h2>

        <section className= "row cards all-series" id= "series">
          {this.state.enCartel.map((serie, index) => {
            if (index<4){
              return(
                <SerieCard
                  key={serie.id}
                  datos={serie}
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
        }
      </div>
    )
  }
}
export default Home;
