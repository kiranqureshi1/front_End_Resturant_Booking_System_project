import React from "react";

const NewBookingContainer = (props) =>  {
  const tableNum = props.id;
  // const date = props.date;
  // const time = props.time;
  const customers = props.customers

  const customerOptions = customers.map((customer, index) => {
    return <option key="index" value={customer.id}>{customer.name}</option>
  })

  props.getAllCustomers()

    return (
      <div>
      <h4>New booking</h4>
        <form>
        Customers:
          <select id="customers">
            {customerOptions}
          </select>
          <p> Table: {tableNum}</p>
          <p> Time: </p>
          <p> Date: </p>

        </form>
      </div>
    )
  }

export default NewBookingContainer;
