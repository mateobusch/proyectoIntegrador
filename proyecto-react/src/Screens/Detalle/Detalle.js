import React, { Component } from 'react';
import Cookies from "universal-cookie";

const cookies = new Cookies();


class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: null,
            cargando: true,
            haySesion: false
        };
    }

    componentDidMount() {
        
        const id = this.props.match.params.id;
        const tipo = this.props.match.params.tipo;

        let usuarioLogueado = cookies.get("usuario");
        if (usuarioLogueado !== null) {
            this.setState({ haySesion: true });
        }

        let endpoint= "";

        if (tipo === "serie") {
            endpoint = `https://api.themoviedb.org/3/tv/${id}?api_key=4606c83ccea5f9b56977aeac833b6148&language=es-ES`;
        } else {
            endpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=4606c83ccea5f9b56977aeac833b6148&language=es-ES`;
        }

        
        fetch(endpoint)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    item: data,
                    cargando: false
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        
        if (this.state.cargando) {
            return <h2 className="text-center">Cargando detalles...</h2>;
        }

        const { item, haySesion } = this.state;

        return (
            <div className="container my-5">
                <div className="row">
                    
                    <div className="col-md-4">
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} 
                            alt={item.title} 
                            className="img-fluid rounded shadow" 
                        />
                    </div>

                    
                    <div className="col-md-8">
                        <h2 className="display-4">{item.title || item.name}</h2>
                        <p className="badge badge-warning p-2">Rating: {item.vote_average}</p>
                        <p className="text-muted">Fecha de estreno: {item.release_date || item.first_air_date}</p>
                        <p><strong>Duración:</strong> {item.runtime || "N/A"} minutos</p>
                        <p><strong>Género:</strong> {item.genres.map(g => g.name).join(", ")}</p>
                        
                        <hr />
                        <h4 className="titulo-sinopsis">Sinopsis</h4>
                        <p className="lead">{item.overview || "Sin descripción disponible."}</p>

                        
                        {haySesion ? (
                            <button className="btn btn-danger mt-3">
                                ❤️ Agregar a favoritos
                            </button>
                        ) : (
                            <p className="alert alert-secondary mt-3">Logueate para agregar a favoritos</p>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Detalle;