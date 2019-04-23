import React from "react";

const NewBookingContainer = (props) =>  {
<<<<<<< HEAD
  const tableNum = props.id;
  // const date = props.date;
  // const time = props.time;
  const customers = props.customers

  const customerOptions = customers.map((customer, index) => {
    return <option key="index" value={customer.id}>{customer.name}</option>
  })

  props.getAllCustomers()

=======
  const tableNum = props.id
  const customers = props.customers

  const customerOptions = customers.map((customer, index) => {
    return <option key="index">{customer.name}</option>
  })

>>>>>>> cc617ebe62cd9f8ea880b2f6369d73685a96a4b5
    return (
      <div>
      <h4>New booking</h4>
        <form>
        Customers:
          <select id="customers">
            {customerOptions}
          </select>
          <p> Table: {tableNum}</p>
<<<<<<< HEAD
          <p> Time: </p>
          <p> Date: </p>
=======
>>>>>>> cc617ebe62cd9f8ea880b2f6369d73685a96a4b5

        </form>
      </div>
    )
  }

export default NewBookingContainer;
