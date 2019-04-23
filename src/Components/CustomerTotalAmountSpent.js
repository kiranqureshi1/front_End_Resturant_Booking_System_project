import React from "react";

const CustomerTotalAmountSpent = (props) => {
  if (!props.customer) return null;

  let total = 0
  for (const booking of props.customer.bookings){
    total += booking.receipt;
  }
  console.log(total)
  return total;

  return (
    <div>
     {total}
    </div>
  )

}

export default CustomerTotalAmountSpent;
