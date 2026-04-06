import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        };
    }

    // Función para capturar lo que el usuario escribe
    controlarCambios(evento) {
        this.setState({
            [evento.target.name]: evento.target.value
        });
    }

    // Función que se ejecuta al darle al botón "Iniciar sesión"
    procesarLogin(evento) {
        evento.preventDefault(); // Evita que la página se refresque

        if (this.state.email === "" || this.state.password === "") {
            this.setState({ error: "Todos los campos son obligatorios" });
        } else {
            // Guardamos la cookie como hacés en el Header
            document.cookie = "session=" + this.state.email + "; max-age=3600; path=/";
            
            // Redirigimos al home usando las props de React Router
            this.props.history.push('/');
            
            // Refrescamos para que el Header lea la nueva cookie
            window.location.reload();
        }
    }

    render() {
        return (
            <div className="container mt-5">
                <h2 className="alert alert-primary">Iniciar sesión</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={(e) => this.procesarLogin(e)}>
                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    className="form-control" 
                                    onChange={(e) => this.controlarCambios(e)}
                                    value={this.state.email}
                                />
                            </div>
                            <div className="form-group">
                                <label>Contraseña</label>
                                <input 
                                    type="password" 
                                    name="password"
                                    className="form-control" 
                                    onChange={(e) => this.controlarCambios(e)}
                                    value={this.state.password}
                                />
                            </div>
                            {this.state.error !== "" ? <p className="text-danger">{this.state.error}</p> : null}
                            <button type="submit" className="btn btn-primary btn-block">Iniciar sesión</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;