import React, {Component} from "react";
import Request from "../helpers/requests.js";
import NewCustomer from "../Components/NewCustomerComponent";

class NewBookingContainer extends Component {
  constructor (props)  {
    super(props)



  this.handleNewBookingSubmit = this.handleNewBookingSubmit.bind(this);
  this.handleNewCustomer = this.handleNewCustomer.bind(this);
}
// const tableNum = this.props.id;
// const date = this.props.date;
// const time = this.props.time;
// const customers = this.props.customers


  handleNewBookingSubmit(event) {
    event.preventDefault()
    console.log(this.props.id, this.props.date, this.props.time)
    // console.log(event.target.customers.value)
    this.handleNewCustomer("joe")
  }
  handleNewCustomer(newCustomer){
    const request = new Request();
    request.post('/customers', {"name" : newCustomer})
  }
  render() {

    const customerOptions = this.props.customers.map((customer, index) => {
      return <option key="index" value={customer.id}>{customer.name}</option>
    })

    return (
      <div>
      <h4>New booking</h4>
        <form onSubmit={this.handleNewBookingSubmit}>
        Customers:
          <select id="customers">
            {customerOptions}
          </select>
          <p> Table: {this.props.id}</p>
          <p> Date: {this.props.date} </p>
          <p> Time: {this.props.time} </p>
          <input type="submit" />


          <NewCustomer handleNewCustomer={this.handleNewCustomer} />


        </form>
      </div>
    )
  }
}


export default NewBookingContainer;
