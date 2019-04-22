import React, { Component } from 'react';
<<<<<<< HEAD
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar.js'

import CustomerListContainer from "./containers/CustomerListContainer";
=======
import RestaurantViewContainer from "./containers/RestaurantViewContainer";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewBookingContainer from "./containers/NewBookingContainer.js";
import Request from "./helpers/requests.js";

import './App.css';
import NavBar from "./NavBar.js";
>>>>>>> front_end_test

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customers: []
    }
  }

  componentWillMount() {
    const request = new Request();
    request.get('/customers')
      .then(res => {
        this.setState({customers: res._embedded.customers})
      })
  }

  render() {
    return (
<<<<<<< HEAD
      <Router>
       <React.Fragment>
        <NavBar/>
         <Switch>
          <Route exact path= '/customers' component={CustomerListContainer}/>
          />
         </Switch>
        </React.Fragment>
      </Router>

=======
      <Router >
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route exact path = "/" getAllCustomers={this.componentWillMount} component={RestaurantViewContainer} />
              <Route exact path="/newbooking/:id" render = {(props) =>{
                const id = props.match.params.id;
                return <NewBookingContainer id = {id} customers = {this.state.customers}/>
                }}
              />
          </Switch>
        </React.Fragment>
    </Router>
>>>>>>> front_end_test
    );
  }
}

export default App;
