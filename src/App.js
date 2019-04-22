import React, { Component } from 'react';
import RestaurantViewContainer from "./containers/RestaurantViewContainer";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewBookingContainer from "./containers/NewBookingContainer.js";
import EditBookingComponent from "./Components/EditBookingComponent.js";
import CustomerListContainer from "./containers/CustomerListContainer.js"
import Request from "./helpers/requests.js";

import './App.css';
import NavBar from "./NavBar.js";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tables: [],
      customers: [],
      bookings: []
    }

    this.getBookingsByDate = this.getBookingsByDate.bind(this)
    this.getBookingsByHour = this.getBookingsByHour.bind(this)

  }

  componentWillMount() {
    const request = new Request();
    request.get('/customers')
      .then(res => {
        this.setState({customers: res._embedded.customers})
      })

    this.getTables()
  }

  getTables() {
    const request = new Request();
    request.get('restaurantTables/')
      .then(res => {
        this.setState({tables: res._embedded.restaurantTables})
        const allTables = this.state.tables
        for (const table of allTables) {
          table.taken = false;
        }
        this.setState({tables: allTables})
      })
  }

  getBookingsByDate(url) {
    const request = new Request();
    request.get(url)
      .then(res => {
        this.setState({bookings: res})
        this.getTables()
      })
  }

  getBookingsByHour(url) {
    const request = new Request();
    request.get(url)
      .then(res => {
        this.setState({bookings: res})
        this.updateTakenTables()
      })
  }

  updateTakenTables() {
    const newTableState = this.state.tables;
    for (const booking of this.state.bookings) {
      for (const freeTable of newTableState) {
        if (booking.restaurantTable.id === freeTable.tableNumber) {
          freeTable.taken = true;
        }
      }
    }
    this.setState({tables: newTableState})
  }

  componentDidMount() {
    console.log(this.state)
  }

  render() {
    return (
      <Router >
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route exact path = "/" render = {(props) => {
              return <RestaurantViewContainer
              getAllCustomers={this.componentWillMount}
              getBookingsByDate={this.getBookingsByDate}
              getBookingsByHour={this.getBookingsByHour}
              customers={this.state.customers}
              bookings={this.state.bookings}
              tables={this.state.tables}/>
              }}

              />
              <Route exact path="/newbooking/:id" render = {(props) =>{
                const id = props.match.params.id;
                return <NewBookingContainer id = {id} customers = {this.state.customers}/>
                }}
              />
            <Route exact path="/editbooking/:id" render = {(props) =>{
                const id = props.match.params.id;
                return <EditBookingComponent id = {id} />
                }}
              />
            <Route exact path = "/customers" render = {(props) => {

                return <CustomerListContainer customers = {this.state.customers}/>
                }} />
          </Switch>
        </React.Fragment>
    </Router>
    );
  }
}

export default App;
