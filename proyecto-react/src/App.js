import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <React.Fragment>
      <h1>UdeSA Movies</h1>
      <Header />

      <Switch>
        <Route path= "/" exact = {true}/>
      </Switch>

      <Footer />
    

    </React.Fragment>
  );
}

export default App;
