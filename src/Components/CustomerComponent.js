import React  from 'react';
import {Link} from 'react-router-dom';
import BookingListComponent from './BookingListComponent.js';


const CustomerComponent= (props) => {

  return (
    <React.Fragment>
       <Link to = {"/customerbookings/" + props.customer.id} className="name">
       {props.customer.name}
       </Link>
      </React.Fragment>
  )
}

export default CustomerComponent;
