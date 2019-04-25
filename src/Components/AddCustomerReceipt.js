import React from 'react';
import Request from "../helpers/requests.js";

const AddCustomerReceipt = (props) => {


   function handleSubmit(event){
       event.preventDefault();
       const receipt = {
           "receipt": event.target.receipt.value
         }
       props.handleReceiptPost(receipt);

     }
   if (!props.receipt) return null;
   return (
     <form onSubmit= {handleSubmit}>
     <input type="number" placeholder="receipt" name="receipt"/>
     <button type="submit">Add Receipt</button>
     </form>
   )

}

export default AddCustomerReceipt;
