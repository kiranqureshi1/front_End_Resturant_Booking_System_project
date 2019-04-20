import React, {Component} from 'react';
import CustomerListComponent from '../Components/CustomerListComponent';

import Request from '../helpers/Request.js';

class CustomerListContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      customers: []
    }
  }

  componentDidMount(){
    let request = new Request()
    request.get('/customers').then((data) => {
      this.setState({customers: data._embeded.customers})
    })
  }

  render(){
    return(
      <CustomerListComponent customers= {this.state.customers}/>
    )
  }
}

export default CustomerListContainer;
