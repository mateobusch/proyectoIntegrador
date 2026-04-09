import React, { Component } from 'react'
import { Link } from 'react-router-dom';
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
        

        
      </div>
    )
  }
}
export default Home;
