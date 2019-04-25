import React from 'react';

const Receipt = (props) => {
  return (
    <div>
    <h2>Receipt Details</h2>
    <form>
    Amount<br>
    <input type="number" name="Amount">
    Discount<br>
    <input type="number" name="Discount">
    <br>
    <input type="submit" value="Submit">
    </form>
    </div>
  )
}

export default Receipt;
