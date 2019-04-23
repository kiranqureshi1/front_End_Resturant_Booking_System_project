import React from "react";
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
		<ul className="component-list">
    <h3>Customers</h3>
	    {customers}
	  </ul>

	)
}

export default CustomerList;
