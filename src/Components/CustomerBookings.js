import React from "react";
import "./css/CustomerBookings.css"

import CustomerTotalAmountSpent from '../Components/CustomerTotalAmountSpent';

const CustomerBookings = (props) => {
  if (!props.customer) return null;
console.log(props.customer)
const bookings = props.customer.bookings.map((booking, index) => {
  return (<div key={index}>
    Customer: {booking.customer.name} <br />
    Table: {booking.restaurantTable.number} <br />
    Time: {booking.time} PM <br />
    Receipt: {booking.receipt}
    <br/>
    </div>)
})


const numberOfBookings = props.customer.bookings.length;
return (
  <div>
    <h3 className="heading">Customer Booking Information</h3>
    <div className="booking-list">
    <h5 className= "booking-num"> Number Of Bookings  <br/> {numberOfBookings} </h5>
    <div className="bookings">
    <h4>Bookings</h4>
   {bookings}
   </div>
   <h4 className="total-spent"><CustomerTotalAmountSpent/>Total Amount Spent</h4>
  </div>
  </div>
)



}

export default CustomerBookings;
