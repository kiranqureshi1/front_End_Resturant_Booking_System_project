import React from 'react';

const NewCustomer = (props) => {
  return (
    <div>
    <h2>Customer Details</h2>
    <form>
    Name <br>
    <input type="text" name="Name" value={customer.name}> //Not sure about this
    <input type="submit" value="Submit">
    </form>
    </div>
  )
}

export default NewCustomer;
