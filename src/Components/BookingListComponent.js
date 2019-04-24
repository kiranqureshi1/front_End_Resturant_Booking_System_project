import React from "react";
const BookingList = (props) => {

  const bookings = props.bookings.map((booking, index) => {
    return (<div key={index}>
    {booking.customer.name} <br />
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
