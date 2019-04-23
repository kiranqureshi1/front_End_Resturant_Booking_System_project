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
      customer: null
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
    const table = event.target.table.value
    if (!this.verifyDuplicate()) {
      console.log('try again')
    } else {
      this.props.editBooking({
        id: this.state.id,
        date: this.state.date,
        time: this.state.time,
        table: table,
        customer: this.state.customer
      })
    }
}
  verifyDuplicate() {
    for (const existingBooking of this.props.allBookings) {
      if ((existingBooking.time == this.state.time) &&
        (existingBooking.date == this.state.date) &&
        (existingBooking.restaurantTable.tableNumber == this.state.table)) {
          return false
        }
    } return true
  }



  render() {
    const tables = this.props.tables.map((table, index) => {
      return <option key={index} value={table.tableNumber}>{table.tableNumber}</option>
    })
    return (<div>
      <form onSubmit={this.handleUpdate}>
      Table number: <select name="table">
        {tables}
      </select>
        New Date <input type="text" onChange={this.handleDateChange} />
        New Time <input type="text" onChange={this.handleTimeChange} />
        Save <input type="submit" />
      </form>
    </div>)
  }
}


export default EditBookingComponent;
