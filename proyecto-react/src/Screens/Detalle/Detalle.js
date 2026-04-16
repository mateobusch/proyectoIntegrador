import React, { Component } from 'react';

class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: null, // Aca vamos a guardar los datos de la API
            cargando: true,
            haySesion: false
        };
    }

    componentDidMount() {
        // 1. Capturamos el ID de la URL usando las props que nos da React Router
        const id = this.props.match.params.id;

        // 2. Verificamos si hay sesión
        let usuarioLogueado = localStorage.getItem("usuario");
        if (usuarioLogueado !== null) {
            this.setState({ haySesion: true });
        }

        // 3. Pedimos los datos específicos a la API
        // Nota: Use 'movie', pero se podria adaptar para series
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4606c83ccea5f9b56977aeac833b6148&language=es-ES`)
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
        // Si todavía no cargó, mostramos un mensaje para que no rompa
        if (this.state.cargando) {
            return <h2 className="text-center">Cargando detalles...</h2>;
        }

        const { item, haySesion } = this.state;

        return (
            <div className="container my-5">
                <div className="row">
                    {/* Foto de la portada */}
                    <div className="col-md-4">
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} 
                            alt={item.title} 
                            className="img-fluid rounded shadow" 
                        />
                    </div>

                    {/* Información detallada */}
                    <div className="col-md-8">
                        <h2 className="display-4">{item.title || item.name}</h2>
                        <p className="badge badge-warning p-2">Rating: {item.vote_average}</p>
                        <p className="text-muted">Fecha de estreno: {item.release_date || item.first_air_date}</p>
                        <p><strong>Duración:</strong> {item.runtime || "N/A"} minutos</p>
                        <p><strong>Género:</strong> {item.genres.map(g => g.name).join(", ")}</p>
                        
                        <hr />
                        <h4>Sinopsis</h4>
                        <p className="lead">{item.overview || "Sin descripción disponible."}</p>

                        {/* Solo mostramos favoritos si existe la sesión */}
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