import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar.js'

import CustomerListContainer from "./containers/CustomerListContainer";

class App extends Component {
  render() {
    return (
      <Router>
       <React.Fragment>
        <NavBar/>
         <Switch>
          <Route exact path= '/customers' component={CustomerListContainer}/>
          />
         </Switch>
        </React.Fragment>
      </Router>

    );
  }
}

export default App;
