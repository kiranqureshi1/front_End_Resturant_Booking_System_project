import React from "react";
import "./css/BookingListComponent.css"

import {Link} from 'react-router-dom'

const Booking = (props) => {

  return (
            <Link to={`/editbooking/${props.booking.id}`} className="bookingLink">
              <div className="booking">
                Customer: {props.booking.customer.name} <br />
              Table: {props.booking.restaurantTable.tableNumber} <br />
                Time: {props.booking.time} PM
              </div>
            </Link>

    )
}

export default Booking;
