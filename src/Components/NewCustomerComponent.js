import React from 'react';
import "./css/NewCustomerComponent.css";

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
    <input type="submit" value="Submit"/>
    </form>
    </div>
  )
}

export default NewCustomer;
