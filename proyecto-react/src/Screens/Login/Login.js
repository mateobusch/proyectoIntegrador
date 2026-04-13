import React, { Component } from 'react';
import Cookies from "universal-cookie"

const cookies = new Cookies()
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        };
    }

    
    capturarCambios(evento) {
        this.setState({
            [evento.target.name]: evento.target.value
        });
    }

    
    procesarLogin(evento) {
        evento.preventDefault();

        if (this.state.email === "" || this.state.password === "") {
            this.setState({ error: "Todos los campos son obligatorios" });
        } else {
            
           cookies.set("usuario", this.state.email, { path: "/" });
           
            
            
            this.props.history.push('/');
            
            
            window.location.reload();
        }
    }

    render() {
        return (
            <div className="container login">
                <h2 className="alert alert-primary">Iniciar sesión</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={(e) => this.procesarLogin(e)}>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    className="form-control" 
                                    onChange={(e) => this.capturarCambios(e)}
                                    value={this.state.email}
                                />
                            </div>
                            <div className="form-group">
                                <label for="password">Contraseña</label>
                                <input 
                                    type="password" 
                                    name="password"
                                    className="form-control" 
                                    onChange={(e) => this.capturarCambios(e)}
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