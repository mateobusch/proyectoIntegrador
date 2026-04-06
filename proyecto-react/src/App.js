import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from './Screens/Home/Home';
import Login from './Screens/Login/Login';


function App() {
  return (
    <React.Fragment>
      <h1>UdeSA Movies</h1>
      <Header />

      <Switch>
        <Route path= "/" exact = {true} component= {Home}/>
        <Route path = "/Login" component = {Login}/>
        <Route path= "/" exact = {true}/>
      </Switch>

      <Footer />
    

    </React.Fragment>
  );
}
export default App;