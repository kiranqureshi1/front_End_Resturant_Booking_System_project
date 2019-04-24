import React from "react";
import {Link} from 'react-router-dom'

import "./css/TableListComponent.css";


const TableList = (props) => {

  const tables = props.tables.map((table, index) => {
    if (table.taken) {
      return <div className="table taken" key={index}>
      {table.tableNumber}
      </div>

    } else {
      return <Link to={`/newbooking/${table.tableNumber}/${props.day}/${props.month}/${props.time}`} key={index}><div className="table free" key={index}>
      {table.tableNumber}
    </div></Link>
    }
    })


  return(
    <div className="table-list">
      {tables}
    </div>
  )
}

export default TableList;
