import React from "react";
<<<<<<< HEAD
import {Link} from 'react-router-dom'

=======
>>>>>>> cc617ebe62cd9f8ea880b2f6369d73685a96a4b5
import "./css/TableListComponent.css";


const TableList = (props) => {

  const tables = props.tables.map((table, index) => {
    if (table.taken) {
      return <div className="table taken" key={index}>
      {table.tableNumber}
      </div>

    } else {
<<<<<<< HEAD
      return <Link to={`/newbooking/${table.tableNumber}/${props.date}`} key={index}><div className="table" key={index}>
      {table.tableNumber}
    </div></Link>
    }
    })


=======
      return <div className="table" key={index} onClick={props.handleNewBooking}>
      {table.tableNumber}
      </div>
    }
    })

>>>>>>> cc617ebe62cd9f8ea880b2f6369d73685a96a4b5
  return(
    <div className="table-list">
      {tables}
    </div>
  )
}

export default TableList;
