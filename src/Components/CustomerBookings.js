import React from "react";
import CustomerTotalAmountSpent from "./CustomerTotalAmountSpent"

const CustomerBookings = (props) => {
  if (!props.customer) return null;
console.log(props.customer)
const bookings = props.customer.bookings.map((booking, index) => {
  return (<div key={index}>
    Customer: {booking.customer.name} <br />
    Table: {booking.restaurantTable.number} <br />
    Time: {booking.time} PM <br />
    Receipt: {booking.receipt} <br/>
    </div>)
})

const amountSpent = <CustomerTotalAmountSpent customer={props.customer}/>



const numberOfBookings = props.customer.bookings.length;
return (
  <div>
    <h5> Number Of Bookings  <br/> {numberOfBookings} </h5>
    <h4>Bookings</h4>
   {bookings}
   <h4>Total Amount Spent</h4>
   {amountSpent}
  </div>
)



}

export default CustomerBookings;
