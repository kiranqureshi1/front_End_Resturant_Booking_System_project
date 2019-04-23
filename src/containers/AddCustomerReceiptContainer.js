import React from 'react';
import Request from '../../helpers/request';

import AddCustomersReceipt from '../Components/AddCustomersReceipt';

const  AddCustomersReceiptContainer = (props) => {

  function handleReceiptPost(receipt){
  const request = new Request();
  request.post('/bookings', receipt).then(() => {
    window.location = '/'
  })

  return (
    <AddCustomersReceipt handleReceiptPost = {this.handleReceiptPost}/>
  )

}
export default AddCustomersReceiptContainer;
