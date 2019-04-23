import React, {Component} from "react";
import Request from "../helpers/requests.js";
import NewCustomer from "../Components/NewCustomerComponent";

class NewBookingContainer extends Component {
  constructor (props)  {
    super(props)

    this.customers = this.props.customers;

    this.handleNewBookingSubmit = this.handleNewBookingSubmit.bind(this);
    this.handleNewCustomer = this.handleNewCustomer.bind(this);
  }

  componentDidMount() {
    console.log('triggered')
  }

  handleNewBookingSubmit(event) {
    event.preventDefault()
    console.log(this.props.id, this.props.date, this.props.time)
    // console.log(event.target.customers.value)
    const request = new Request();
    request.post('/bookings', {
      "customer": "http://localhost:8080/customers/" + event.target.customers.value,
      "restaurantTable": "http://localhost:8080/restaurantTable/" + this.props.id,
      "date": this.props.date,
      "time": this.props.time
    })
    this.props.getData()
  }
  handleNewCustomer(newCustomer){
    const request = new Request();
    request.post('/customers', {name: newCustomer})
    this.props.getData()
  }
  render() {

    const customerOptions = this.customers.map((customer, index) => {
      return <option key={index} value={customer.id}>{customer.name}</option>
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

      </form>


      <form>

      <NewCustomer handleNewCustomer={this.handleNewCustomer} />
      </form>
      </div>
    )
  }
}


export default NewBookingContainer;
