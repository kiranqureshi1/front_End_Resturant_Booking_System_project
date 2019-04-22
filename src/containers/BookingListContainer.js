import React, {Component} from "react";
import Booking from "../Components/Booking.js";

class BookingList extends Component {
  constructor(props) {
    super(props)

    // this.hello = this.hello.bind(this)
  }

  // hello(hey) {
  //   console.log(hey)
  // }

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
