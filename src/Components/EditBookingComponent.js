import React, {Component } from "react";
import "./css/EditBooking.css"

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Request from "../helpers/requests.js"

class EditBookingComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      date: new Date(),
      time: null,
      table: null,
      customer: null,
      error: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
}

  handleChange(date) {
    this.setState({
      date: date
    });
  }

  componentWillMount() {
    for (const customer of this.props.customers) {
      for (const booking of customer.bookings) {
        if (booking.id == this.state.id) {
          this.setState({ customer : customer.id })
        }
      }
    }
  }

  handleDateChange(event) {
    this.setState({date: event.target.value})
  }

  handleTimeChange(event) {
    this.setState({time: event.target.value})
  }

  handleUpdate(event) {
    event.preventDefault()
    const time = event.target.time.value;
    const table = event.target.table.value
    this.setState({table: table})
    if (!this.verifyDuplicate(time, table)) {
      this.createError()
      console.log('error created')
    } else {
      this.props.editBooking({
        id: this.state.id,
        day: this.state.date.getDate(),
        month: this.state.date.getMonth() + 1,
        time: time,
        table: table,
        customer: this.state.customer
      })
      this.props.updateData()
    }
  }



  verifyDuplicate(time, table) {
    for (const existingBooking of this.props.allBookings) {
      console.log(existingBooking.month, existingBooking.day, this.state.date.getDate(), this.state.date.getMonth() + 1)
      let day = this.state.date.getDate();
      let month = this.state.date.getMonth() + 1
      if ((existingBooking.time == time) &&
        (existingBooking.day == day) &&
        (existingBooking.month == month) &&
        (existingBooking.restaurantTable.tableNumber == table)) {
          console.log('match')
          return false
        }
    }
    return true
  }

  createError() {
    this.setState({error: true})
    console.log('error')
    setTimeout(()=>{
      this.setState({error:false})
    }, 4000)
  }



  render() {
    const tables = this.props.tables.map((table, index) => {
      return <option key={index} value={table.tableNumber}>{table.tableNumber}</option>
    })

    const error = (this.state.error) ? <p className="errorMsg">Duplicate found, choose a different table/time</p>
      : <p></p>


    return (<div className="editbooking">
        <h4>Edit Booking</h4>
      <form onSubmit={this.handleUpdate}>
      <label>Table number:</label>
       <select name="table">
        {tables}
      </select><br/>
    <label>New Date:</label> <DatePicker
      selected={this.state.date}
      onChange={this.handleChange}
      className="blue"
      /> <br />
    <label>New Time:</label> <select name="time">
          <option value="3">15:00</option>
          <option value="4">16:00</option>
          <option value="5">17:00</option>
          <option value="6">18:00</option>
          <option value="7">19:00</option>
          <option value="8">20:00</option>
          <option value="9">21:00</option>
          <option value="10">22:00</option>
        </select> <br/>
      <input type="submit" value="Save"/>
      </form>
      {error}
    </div>)
  }
}


export default EditBookingComponent;
