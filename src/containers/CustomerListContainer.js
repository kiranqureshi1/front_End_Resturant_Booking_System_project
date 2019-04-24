import React from "react";
import "../Components/css/CustomerComponent.css"

import CustomerComponent from '../Components/CustomerComponent'

const CustomerList = (props) => {
  const sortedCustomers = props.customers.sort((a, b) => {
    return b.bookings.length - a.bookings.length
  })
  console.log(sortedCustomers);

  const customers = sortedCustomers.map((customer) => {
    return (
      <li key={customer.id} className="component-item">
        <div className = "component">

      <CustomerComponent  customer={customer} />
    </div>
    </li>
  )
  })

  return (
		<ul >
    <div className="component-list">
    <h3 className="customers">Customers</h3> <h3 className="booking-number">Number Of Bookings </h3>
    </div>
	    {customers}
	  </ul>

	)
}

export default CustomerList;
