import React, { Component } from 'react';
import RestaurantViewContainer from "./containers/RestaurantViewContainer";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import NavBar from "./NavBar.js";

class App extends Component {
  render() {
    return (
      <Router >
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route exact path = "/home" component={RestaurantViewContainer} />
          </Switch>
        </React.Fragment>
    </Router>
    );
  }
}

export default App;
