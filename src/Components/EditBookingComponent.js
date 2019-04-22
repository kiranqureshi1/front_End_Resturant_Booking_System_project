import React, {Component } from "react";
import Request from "../helpers/requests.js"

class EditBookingComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentBooking: null,
      id: this.props.id,
      date: null,
      time: null
    }
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)

}

  componentWillMount() {
        console.log(this.props.allBookings)
  }

  handleDateChange(event) {
    this.setState({date: event.target.value})
  }

  handleTimeChange(event) {
    this.setState({time: event.target.value})
  }

  handleUpdate(event) {
    event.preventDefault()

    this.props.newBooking()
    request.patch('bookings/', {})
}
  // findCustomer(id) {
  //   for (let booking of this.state.allBookings) {
  //     if (booking.id == id) {
  //       return booking
  //     }
  //   }
  // }

  render() {
    return (<div>
      <form onSubmit={this.handleUpdate}>
        New Date <input type="text" onChange={this.handleDateChange} />
        New Time <input type="text" onChange={this.handleTimeChange} />
        Save <input type="submit" />
      </form>
    </div>)
  }
}


export default EditBookingComponent;
