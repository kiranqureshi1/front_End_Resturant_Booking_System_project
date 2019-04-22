import React from "react";

const NewBookingContainer = (props) =>  {
  const tableNum = props.id
  const customers = props.customers

  const customerOptions = customers.map((customer, index) => {
    return <option key="index">{customer.name}</option>
  })

    return (
      <div>
      <h4>New booking</h4>
        <form>
        Customers:
          <select id="customers">
            {customerOptions}
          </select>
          <p> Table: {tableNum}</p>

        </form>
      </div>
    )
  }

export default NewBookingContainer;
