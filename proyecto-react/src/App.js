import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from './Screens/Home/Home';
import CrearCuenta from './Screens/CrearCuenta/CrearCuenta';
import Login from './Screens/Login/Login';
import Peliculas from './Screens/Peliculas/Peliculas';
import Series from './Screens/Series/Series';
import Detalle from './Screens/Detalle/Detalle';
import Resultados from './Screens/Resultados/Resultados';
import NotFound from './Screens/NotFound/NotFound'
import Favoritos from './Screens/Favoritos/Favoritos';
import "./styles.css"



function App() {
  return (
    <React.Fragment>
      <h1 className= "titulo">UdeSA Movies</h1>
      <Header />
      <Switch>
        <Route path = "/" exact = {true} component= {Home}/>
        <Route path = "/home" exact = {true} component= {Home}/>
        <Route path = "/registro" component = {CrearCuenta}/>
        <Route path = "/login" component = {Login}/>
        <Route path = "/peliculas" component = {Peliculas}/>
        <Route path="/favoritos" component={Favoritos}/>
        <Route path = "/series" component = {Series}/> 
        <Route path = "/detalle/:id" component = {Detalle}/>
        <Route path="/busqueda/:query" component={Resultados}/>
        <Route path = "/detalle/:tipo/:id" component = {Detalle} />
        <Route path = "" component = {NotFound}/>
      </Switch>

      <Footer />
    

    </React.Fragment>
  );
}
export default App;