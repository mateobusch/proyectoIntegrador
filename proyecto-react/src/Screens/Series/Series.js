import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SerieCard from '../../components/SerieCard/SerieCard';
import Loader from '../../components/Loader/Loader';

class Series extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            seriesFiltradas: [],
            proximaPagina: 1,
            valorFiltro: "",
            cargando: true
        };
    }

    componentDidMount() {
        this.traerSeries();
    }

    traerSeries() {
        this.setState({
            cargando: true
        })
        fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=4606c83ccea5f9b56977aeac833b6148&page=${this.state.proximaPagina}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    series: this.state.series.concat(data.results),
                    seriesFiltradas: this.state.seriesFiltradas.concat(data.results),
                    proximaPagina: this.state.proximaPagina + 1,
                    cargando: false
                });
            })
            .catch(error => console.log(error));
    }

    filtrarSeries(valor) {
        const seriesFilter = this.state.series.filter((e) => e.name.toLowerCase().includes(valor.toLowerCase()) ) 
        this.setState({
            seriesFiltradas: seriesFilter,
            valorFiltro: valor
        })
    }
    render() {
        return (
            <div>
           <h2>Series</h2>
           <input type='text'
           placeholder="Series"
           onChange={(event) => this.filtrarSeries(event.target.value)}
           ></input>
           <section className= "row cards" id= "movies">
            {this.state.cargando ? (
                        <Loader />
                    ) : (
                        this.state.seriesFiltradas.map((serie) => (
                            <SerieCard
                                key = {serie.id}
                                datos = {serie}
                                clase = "single-card-movie"
                            />
                        ))
                    )}
            
            

        </section>
        <button onClick={() => this.traerSeries()}>
            Cargar más
        </button>
        </div>

        );
    }
}

export default Series;