import React from "react";
import "../Components/css/CustomerComponent.css"

import CustomerComponent from '../Components/CustomerComponent'
import "./css/CustomerList.css";

const CustomerList = (props) => {
  const sortedCustomers = props.customers.sort((a, b) => {
    return b.bookings.length - a.bookings.length
  })
  console.log(sortedCustomers);

  const customers = sortedCustomers.map((customer) => {
    return (
      <div key={customer.id} className="component-item">
      <CustomerComponent  customer={customer} />
    </div>
  )
  })

  return (
		<div className="component-list">
    <h3>Customers:</h3>
	    {customers}
	  </div>

	)
}

export default CustomerList;
