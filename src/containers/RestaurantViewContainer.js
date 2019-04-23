import React, { Component } from "react";
import {browserHistory} from 'react-router';

import Request from "../helpers/requests.js";
import "./css/RestaurantViewContainer.css";

import BookingList from "../Components/BookingListComponent.js";
import TableList from "../Components/TableListComponent.js";

class RestaurantViewContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tables: [],
      customers: this.props.customers,
      bookings: [],
      date: null,
      time: null
    }

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewBooking = this.handleNewBooking.bind(this);
  }

  componentWillMount() {
    console.log('will mount')
    const request = new Request();
    request.get('customers/')
      .then(res => {
        this.setState({customers: res._embedded.customers})
      })
    this.getTables();
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

  handleDateChange(event) {
    this.setState({date: event.target.value})
  }

  handleTimeChange(event) {
    this.setState({time: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    const date = this.state.date;
    const time = this.state.time;
    if (!time) {
      this.getBookingsByDate(`bookings/date/${date}`)
    } else {
      this.getBookingsByHour(`bookings/date/${date}/time/${time}`)
    }
  }

  handleNewBooking(event) {
    const tableToBook = event.target.textContent;
    this.props.history.push(`/newbooking/${tableToBook}`)
  }

  render() {
    return(
      <React.Fragment>
          <div className="top-section">
            <form onSubmit={this.handleSubmit}>
              Date <input type="text" onChange={this.handleDateChange} />
              Time <input type="text" onChange={this.handleTimeChange} />
              Search <input type="submit" />
            </form>
          </div>
          <div className="grid">
            <TableList tables={this.state.tables} handleNewBooking={this.handleNewBooking}/>
            <BookingList bookings={this.state.bookings}/>
          </div>
      </React.Fragment>
    )
  }
}

export default RestaurantViewContainer;
