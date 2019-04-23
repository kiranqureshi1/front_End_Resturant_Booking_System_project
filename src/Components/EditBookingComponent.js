import React, {Component } from "react";
import Request from "../helpers/requests.js"

class EditBookingComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      date: null,
      time: null,
      table: null,
      customer: null,
      error: false
    }
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
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
    } else {
      this.props.editBooking({
        id: this.state.id,
        date: this.state.date,
        time: time,
        table: table,
        customer: this.state.customer
      })
      this.props.updateData()
    }
  }



  verifyDuplicate(time, table) {
    for (const existingBooking of this.props.allBookings) {
      if ((existingBooking.time == time) &&
        (existingBooking.date == this.state.date) &&
        (existingBooking.restaurantTable.tableNumber == table)) {
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

    const error = (this.state.error) ? <p>Duplicate found, choose a different table/time</p>
      : <p></p>


    return (<div>

      <form onSubmit={this.handleUpdate}>
      Table number: <select name="table">
        {tables}
      </select>
        New Date <input type="text" onChange={this.handleDateChange} />
      New Time <select name="time">
          <option value="3">15:00</option>
          <option value="4">16:00</option>
          <option value="5">17:00</option>
          <option value="6">18:00</option>
          <option value="7">19:00</option>
          <option value="8">20:00</option>
          <option value="9">21:00</option>
          <option value="10">22:00</option>
        </select>
        Save <input type="submit" />
      </form>
      {error}
    </div>)
  }
}


export default EditBookingComponent;
