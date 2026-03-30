import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <React.Fragment>

      <Switch>
        <Route path= "/" exact = {true} component = {Header}/>
      </Switch>
    

    </React.Fragment>
  );
}

export default App;
