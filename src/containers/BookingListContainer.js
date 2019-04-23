<<<<<<< HEAD
import React, {Component} from "react";
import Booking from "../Components/Booking.js";

class BookingList extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    const allBookings = this.props.bookings.map((booking, index) => {
      return <Booking key={index} booking={booking}/>
    })

    return (
      <div>
        {allBookings}
      </div>
    )
  }
}

export default BookingList;
=======

>>>>>>> cc617ebe62cd9f8ea880b2f6369d73685a96a4b5
