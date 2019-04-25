import React from 'react';
import "./css/NewCustomerComponent.css"

const NewCustomer = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const newCustomer = event.target.name.value;
    props.handleNewCustomer(newCustomer);
  }
  return (
    <div className="newcustomer">
      <h2>Create New Customer</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Customer Name" name="name"/>
        <div className="submitbutton">
          <input type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  )
}

export default NewCustomer;
