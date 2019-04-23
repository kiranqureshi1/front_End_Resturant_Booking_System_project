import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Booking from "../Components/Booking.js";
import AddCustomersReceipt from "../Components/AddCustomersReceipt";

class BookingList extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    const allBookings = this.props.bookings.map((booking, index) => {
      return (
        <div>
        <Booking key={index} booking={booking}/>
      
        </div>
      )

    })

    return (
      <div>
        {allBookings}
      </div>
    )
  }
}

export default BookingList;
