import React from "react";
import "./css/CustomerBookings.css"

const CustomerTotalAmountSpent = (props) => {
  if (!props.customer) return null;

  let total = 0
  for (const booking of props.customer.bookings){
    total += booking.receipt;
  }
  console.log(total)
  return (
    <div className="total">
    {total}
    </div>
  );

  return (
    <div>
     {total}
    </div>
  )

}

export default CustomerTotalAmountSpent;
