import { mdiPrinterPos } from '@mdi/js';
import React from 'react';

const CartNumber = (props) => {
  if (props.num > 0) return (
    <div className="cart-number">
      {props.num}
    </div>
  )
}

export default CartNumber;