import React from 'react';
import NewCustomer from '../components/NewCustomerComponent';
import NavBar from './NavBar';

class NewCustomerContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {                 // Not sure what states will be required for
      customers: [],               // New Customer component
      currentCustomer: null,
    };
    this.handleCustomerSelected = this.handleCustomerSelected.bind(this);
  }
  // componentDidMount(){
  //   const url = ''
  //   const request = new XMLHttpRequest();      Not sure how this will work
  //   request.open('GET',url);
  //   request.addEventListener("load",()=>{
  //     if (request.status !== 200) return;
  //     const jsonString = request.responseText;
  //     const data = JSON.parse(jsonString);
  //     this.setState({countries:data});
  //   });
  //   request.send();
  // }

  handleCustomerSelected(index){
    const selectedCustomer = this.state.customers[index];
    this.setState({currentCustomer:selectedCustomer});
  }

  render(){
    return (
      <div>
      <NavBar/>
      <h2>Register New Customer</h2>
      <NewCustomer customers={this.state.customers}
      currentCustomer={this.handleCustomerSelected}
      customer={this.state.currentCustomer}/>
      </div>
    );
  }
}

export default NewCustomerContainer;
