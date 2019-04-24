import React from "react";
import "./css/BookingListComponent.css"
const BookingList = (props) => {

  const bookings = props.bookings.map((booking, index) => {
    return (<div className="bookingDiv" key={index}>
      <span className="label">Customer:</span> {booking.customer.name} <br />
      Table: {booking.restaurantTable.number} <br />
      Time: {booking.time} PM
      </div>)
  })
  return (
    <div>
      {bookings}
    </div>
  )
}

export default BookingList;
