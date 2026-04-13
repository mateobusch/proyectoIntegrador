import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from './Screens/Home/Home';
import Login from './Screens/Login/Login';
import Peliculas from './Screens/Peliculas/Peliculas';
import Detalle from './Screens/Detalle/Detalle';
import NotFound from './Screens/NotFound/NotFound'
import "./styles.css"


function App() {
  return (
    <React.Fragment>
      <h1>UdeSA Movies</h1>
      <Header />

      <Switch>
        <Route path= "/Home" exact = {true} component= {Home}/>
        <Route path = "/Login" component = {Login}/>
        <Route path = "/Peliculas" component = {Peliculas}/>
        <Route path = "/" exact = {true}/>
        <Route path = "/Detalle/:id" component = {Detalle} />
        <Route path = "" component = {NotFound}/>
      </Switch>

      <Footer />
    

    </React.Fragment>
  );
}
export default App;