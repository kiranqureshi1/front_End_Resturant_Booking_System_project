import React, { Component } from 'react';
import RestaurantViewContainer from "./containers/RestaurantViewContainer";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewBookingContainer from "./containers/NewBookingContainer.js";
import CustomerListContainer from "./containers/CustomerListContainer.js"
import Request from "./helpers/requests.js";
import CustomerBookings from "./Components/CustomerBookings"

import './App.css';
import NavBar from "./NavBar.js";

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
            <Route exact path = "/customers" render = {(props) => {

                return <CustomerListContainer customers = {this.state.customers}/>
                }} />
                <Route exact path = "/customerbookings/:id" render = {(props) => {
                      const id = props.match.params.id;
                      let customerWithBookings;
                      for (let customer of this.state.customers) {
                        if (customer.id == id) {
                          customerWithBookings = customer;
                        }
                      }

                    return <CustomerBookings customer={customerWithBookings}/>
                    }} />
          </Switch>
        </React.Fragment>
    </Router>
    );
  }
}

export default App;
