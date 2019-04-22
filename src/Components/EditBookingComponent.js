import React from "react";

const EditBookingComponent = (props) => {

const allBookings = props.bookings
  //   return (<div key={index}>
  //     Customer: {booking.customer.name} <br />
  //     Table: {booking.restaurantTable.number} <br />
  //     Time: {booking.time} PM
  //   </div>)
  // })
  // return (<h1>all bookings</h1>)
  return <p>EditBookingComponent. props: {JSON.stringify(props)}</p>
}

export default EditBookingComponent;
