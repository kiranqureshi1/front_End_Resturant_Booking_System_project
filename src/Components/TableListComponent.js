import React from "react";
import "./css/TableListComponent.css";


const TableList = (props) => {

  const tables = props.tables.map((table, index) => {
    if (table.taken) {
      return <div className="table taken" key={index}>
      {table.tableNumber}
      </div>

    } else {
      return <div className="table" key={index} onClick={props.handleNewBooking}>
      {table.tableNumber}
      </div>
    }
    })

  return(
    <div className="table-list">
      {tables}
    </div>
  )
}

export default TableList;
