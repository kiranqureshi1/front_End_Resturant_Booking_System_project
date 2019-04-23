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
      bookings: [],
      allBookings: []
    }
    this.getBookingsByDate = this.getBookingsByDate.bind(this)
    this.getBookingsByHour = this.getBookingsByHour.bind(this)
  }

  componentWillMount() {
    const request = new Request();
    request.get('/customers')
      .then(res => {
        this.setState({customers: res._embedded.customers})
        console.log(this.state.customers)
      })

    this.getTables()
    this.allBookings()
  }

  allBookings(){
    const request = new Request();
    request.get('bookings/')
      .then(res => {
        this.setState({allBookings: res._embedded.bookings})
      })
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
    console.log('date')
    const request = new Request();
    request.get(url)
      .then(res => {
        this.setState({bookings: res})
        this.getTables()
      })
  }

  getBookingsByHour(url) {
    console.log('hour')
    const request = new Request();
    request.get(url)
      .then(res => {
        this.setState({bookings: res})
        this.updateTakenTables()
      })
  }

  resetTables() {
    const newTableState = this.state.tables;
      for (const table of newTableState) {
        table.taken = false;
        }
      }


  updateTakenTables() {
    this.resetTables()
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

  editBooking({id, date, time, table, customer}) {
    console.log(id, date, time, table, customer)
    const request = new Request();
    request.patch(`/bookings/${id}`, {
       "date": date,
       "time": time,
        "customer_id": customer,
        "restaurant_table_id": table
     })
  }

  componentDidMount() {
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
            <Route exact path="/newbooking/:id/:date/:time" render = {(props) =>{
                const id = props.match.params.id;
                const date = props.match.params.date;
                const time = props.match.params.time;
                return <NewBookingContainer id = {id} date = {date} time={time} customers = {this.state.customers}/>
                }}
              />

            <Route exact path="/editbooking/:id" render = {(props) =>{
                const id = props.match.params.id;
                return <EditBookingComponent id = {id}
                  allBookings={this.state.allBookings}
                  editBooking={this.editBooking}
                  tables={this.state.tables}
                  customers={this.state.customers}
                  />
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
