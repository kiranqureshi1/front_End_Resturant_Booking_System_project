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

const amountSpent =   <CustomerTotalAmountSpent customer={props.customer}/>

const numberOfBookings = props.customer.bookings.length;
return (
  <div>
    <h2 className="heading">Customer Booking Information</h2>
    <div className="booking-list">
    <div className= "booking-num">
    <h3 className="book-heading"> Number Of Bookings </h3>
    {numberOfBookings}
    </div>
    <div className="bookings">
    <h3 className="book">Bookings</h3>
   {bookings}
   </div>
   <div className="spent">
   <h3 className="total-spent">Total Amount Spent</h3>
   {amountSpent}
   </div>
  </div>
  </div>
)



}

export default CustomerBookings;
