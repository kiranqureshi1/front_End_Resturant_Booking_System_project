import React from 'react';
import TableList from '../components/TableListComponent';
import Customer from '../components/CustomerComponent';
import NavBar from './NavBar';

class NewBookingContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {                 // Not sure how date and time will factor into this,
      customers: [],               // Will they be passed as props from restaurantContainer?
      currentCustomer: null,
      tables: [],
      currentTable: null
    };
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

  handleTableSelected(index){
    const selectedTable = this.state.tables[index]; // This will also change if we
    this.setState({currentTable:selectedTable});    // Can work out how to fill in the field based on
                                                    // The table that was clicked
  }
  render(){
    return (
      <div>
      <NavBar/>
      <h2>Create a New Booking</h2>
      <Customer customers={this.state.customers}
      currentCustomer={this.handleCustomerSelected}/>
      <TableList tables={this.state.tables}
      currentTable={this.handleTableSelected}/>
      </div>
    );
  }
}

export default NewBookingContainer;
