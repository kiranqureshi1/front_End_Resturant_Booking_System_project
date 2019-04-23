import React, { Component } from "react";
import {browserHistory} from 'react-router';
import Request from "../helpers/requests.js";
import "./css/RestaurantViewContainer.css";
import BookingList from "../containers/BookingListContainer.js";
import TableList from "../Components/TableListComponent.js";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class RestaurantViewContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tables: [],
      customers: this.props.customers,
      bookings: [],
      date: new Date(),
      month: null,
      time: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewBooking = this.handleNewBooking.bind(this);
  }


  handleChange(date) {
    this.setState({
      date: date,
      month: date.getMonth() + 1
    });
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
    const day = this.state.date.getDate()
    const month = this.state.date.getMonth() + 1
    let time = event.target.time.value;
    if ((typeof(time) == "string") && (time != 0)) {
      this.setState({time: time})
    } else {
        this.setState({time: null})
        time = null;
    }

    if (!time) {
      console.log('by day_month', time)
      console.log(day, month)
      this.props.getBookingsByDate(`bookings/day/${day}/month/${month}`)
    } else {
      console.log('by hour', time)
      this.props.getBookingsByHour(`bookings/day/${day}/month/${month}/time/${time}`)
    }
  }

  handleNewBooking(event) {
    const tableToBook = event.target.textContent;
    this.props.history.push(`/newbooking/${tableToBook}`)
  }
  // Date <input type="text" onChange={this.handleDateChange} />

  render() {

    const day = this.state.date.getDate()
    const month = this.state.date.getMonth() + 1

    return(
      <React.Fragment>
          <div className="top-section">
            <form onSubmit={this.handleSubmit}>
                    <DatePicker
              selected={this.state.date}
              onChange={this.handleChange}
            />
            <select name="time">
              <option value="0">Any Time</option>
              <option value="3">15:00</option>
              <option value="4">16:00</option>
              <option value="5">17:00</option>
              <option value="6">18:00</option>
              <option value="7">19:00</option>
              <option value="8">20:00</option>
              <option value="9">21:00</option>
              <option value="10">22:00</option>
            </select>
              Search <input type="submit" />
            </form>
          </div>
          <div className="grid">
            <TableList tables={this.props.tables} time={this.state.time} day={day} month={month} handleNewBooking={this.handleNewBooking} editBooking={this.props.editBooking}/>
            <BookingList bookings={this.props.bookings}/>
          </div>
      </React.Fragment>
    )
  }
}

export default RestaurantViewContainer;
