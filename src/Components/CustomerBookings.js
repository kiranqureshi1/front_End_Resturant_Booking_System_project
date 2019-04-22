import React from "react";

const CustomerBookings = (props) => {
console.log(props.customer)
const bookings = props.customer.bookings.map((booking, index) => {
  return (<div key={index}>
    Customer: {booking.customer.name} <br />
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

export default CustomerBookings;
