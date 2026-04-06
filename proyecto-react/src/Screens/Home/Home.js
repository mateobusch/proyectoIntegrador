import React, { Component } from 'react'
import Buscador from '../../components/Buscador/Buscador'

class Home extends Component {
    constructor(props){
        super(props)
        this.state= {
            populares: [],
            enCartel: [],
            cargando: true
        }
    }
    componentDidMount(){
        let urlPopulares ="https://api.themoviedb.org/3/movie/popular?api_key=TU_API_KEY&language=es-ES"
        let urlEnCartel= "https://api.themoviedb.org/3/movie/now_playing?api_key=TU_API_KEY&language=es-ES"

        fetch(urlPopulares)
          .then((response) => response.json())
          .then((data) =>{
            this.setState({
                enCartel:data.results,
                cargando: false
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
        <Buscador/>

        <h2 className= "alert alert-primary"> Popular movies this week <Link to = "/peliculas/populares"> Ver todas</Link></h2>
        <section className="row cards" id="movies">
    {this.state.populares.length > 0 ?
        this.state.populares.map((pelicula, index) => {
            if(index < 4){
                return (
                    <MovieCard
                        key={pelicula.id + index}
                        datos={pelicula}
                        tipo="movie"
                        clase="single-card-movie"
                    />
                )
            } else {
                return null
            }
        })
    : <p>Cargando películas populares...</p>}
</section>

        
      </div>
    )
  }
}
export default Home;
