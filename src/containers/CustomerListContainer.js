import React from "react";
<<<<<<< HEAD

const CustomerList = (props) => {
  return (
    <ul>
    </ul>
  )
=======
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
	    {customers}
	  </ul>

	)
>>>>>>> cc617ebe62cd9f8ea880b2f6369d73685a96a4b5
}

export default CustomerList;
