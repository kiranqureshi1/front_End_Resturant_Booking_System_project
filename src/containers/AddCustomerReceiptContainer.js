import React from 'react';
import Request from '../../helpers/request';

import AddCustomersReceiptContainer from '../Components/AddCustomersReceipt';

const  AddCustomersReceiptContainer = (props) => {

  handleReceiptPost(receipt){
  const request = new Request();
  request.post('/bookings', receipt).then(() => {
    window.location = '/bookings
    '
  })

  return (
    <AddCustomersReceipt handleReceiptPost = {this.handleReceiptPost}/>
  )

}
export default AddCustomersReceiptContainer;
