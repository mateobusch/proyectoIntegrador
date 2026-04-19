import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <div className="my-5 text-center">
                <h1 className="alert alert-danger">404</h1>
                <h2 className="alert alert-danger">Contenido Inexistente</h2>
                <p className="texto404">Lo sentimos, la página que estás buscando no existe en UdeSA Movies.</p>
                <img 
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGIycWp6Zmt6Zmt6Zmt6Zmt6Zmt6Zmt6Zmt6Zmt6Zmt6Zmt6JmU9Zw/h2P01cZLZzMK4/giphy.gif" 
                    alt="Not Found" 
                    className="img-fluid mb-4" 
                    style={{maxWidth: '300px'}}
                />
                <br />
                
            </div>
        );
    }
}

export default NotFound;