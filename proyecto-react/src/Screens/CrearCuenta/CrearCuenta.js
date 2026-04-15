import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CrearCuenta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        };
    }

    controlarCambios(evento) {
        this.setState({
            [evento.target.name]: evento.target.value
        });
    }

    procesarRegistro(evento) {
        evento.preventDefault();
        const { email, password } = this.state;

        
        if (email === "" || password === "") {
            this.setState({ error: "Todos los campos son obligatorios" });
            return;
        }

        
        if (password.length < 6) {
            this.setState({ error: "La contraseña debe tener al menos 6 caracteres" });
            return;
        }

        
        let usuariosRegistrados = localStorage.getItem("usuarios");
        let listaUsuarios = [];

        if (usuariosRegistrados !== null) {
            listaUsuarios = JSON.parse(usuariosRegistrados);
        }

       
        let existe = listaUsuarios.find(usuario => usuario.email === email);
        if (existe) {
            this.setState({ error: "Este email ya se encuentra registrado" });
            return;
        }

        
        let nuevoUsuario = {
            email: email,
            password: password
        };

        listaUsuarios.push(nuevoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));

        
        this.props.history.push('/login');
    }

    render() {
        return (
            <div className="container my-5">
                <h2 className="alert alert-primary">Registro</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={(e) => this.procesarRegistro(e)}>
                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    className="form-control" 
                                    placeholder="Ingresá tu email"
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
                                    placeholder="Mínimo 6 caracteres"
                                    onChange={(e) => this.controlarCambios(e)}
                                    value={this.state.password}
                                />
                            </div>
                            
                            {this.state.error !== "" ? <p className="text-danger">{this.state.error}</p> : null}
                            
                            <button type="submit" className="btn btn-primary btn-block">Registrarse</button>
                        </form>
                        <p className="mt-3 text-center">
                            ¿Ya tenés cuenta? <Link to="/login">Iniciar sesión</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CrearCuenta;