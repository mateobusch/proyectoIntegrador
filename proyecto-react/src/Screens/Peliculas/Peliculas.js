import React, { Component } from 'react';

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
           <p>Peliculas</p>
        )
    }
}

export default Peliculas;