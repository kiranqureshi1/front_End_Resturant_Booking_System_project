import React from 'react';
import Request from "../helpers/requests.js";

import AddCustomerReceipt from '../Components/AddCustomerReceipt';

const  AddCustomerReceiptContainer = (props) => {

  function handleReceiptPost(receipt){
  const request = new Request();
  request.post('/bookings', receipt).then(() => {
    window.location = '/'
  })

  return (
    <AddCustomerReceipt handleReceiptPost = {handleReceiptPost}/>
  )

}
export default AddCustomerReceiptContainer;
