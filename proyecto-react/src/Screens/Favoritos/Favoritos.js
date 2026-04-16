import React, { Component } from 'react'

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculasFavoritas: [],
            seriesFavoritas: [],
        };
    }

    componentDidMount() {
        this.peliculasFav();
        this.seriesFav();
    }

    peliculasFav() {
        
    }
    seriesFav() {
        
    }
    render() {
        return (
            <div class="container">
                <h2 class="alert alert-primary">Películas favoritas</h2>
                <section class="row cards" id="movies">

                </section>
                <h2 class="alert alert-warning">Series favoritas</h2>
                <section class="row cards" id="tv-show">

                </section>
            </div>

        );
    }
}

export default Favoritos;
