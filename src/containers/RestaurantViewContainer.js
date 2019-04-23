import React, { Component } from "react";
import {browserHistory} from 'react-router';

import Request from "../helpers/requests.js";
import "./css/RestaurantViewContainer.css";

import BookingList from "../containers/BookingListContainer.js";
import TableList from "../Components/TableListComponent.js";

class RestaurantViewContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: null,
      time: null
    }

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewBooking = this.handleNewBooking.bind(this);
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
    const time = event.target.time.value;
    if ((typeof(time) == "string") && (time !== 0)) {
      this.setState({time: time})
    } else {
        this.setState({time: null})
    }

    if (!time || (time !== 0)) {
      this.props.getBookingsByDate(`bookings/date/${date}`)
    } else {
      this.props.getBookingsByHour(`bookings/date/${date}/time/${time}`)
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
            <TableList tables={this.props.tables} date={this.state.date} handleNewBooking={this.handleNewBooking} editBooking={this.props.editBooking}/>
            <BookingList bookings={this.props.bookings}/>
          </div>
      </React.Fragment>
    )
  }
}

export default RestaurantViewContainer;
