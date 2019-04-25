import React, {Component} from "react";
import Booking from "../Components/Booking.js";
import "./css/BookingListContainer.css";

class BookingList extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    const allBookings = this.props.bookings.map((booking, index) => {
      return <Booking key={index} booking={booking}/>
    })

    return (
      <div className="bookingsList">
        <h4 className="bookingsHeading">Bookings</h4>
        {allBookings}
      </div>
    )
  }
}

export default BookingList;
