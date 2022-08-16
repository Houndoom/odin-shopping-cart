import React from 'react';

const Quantity = (props) => {

  const [minusQuantity, addQuantity, changeQuantity] = props.funcs;

  return (
    <div className="quantity">
      <button onClick={minusQuantity} data-id={props.id}>−</button>
      <input type="text" pattern="\d*" maxLength="2" aria-label={props.name} value={props.quantity} onChange={changeQuantity} data-id={props.id} />
      <button onClick={addQuantity} data-id={props.id}>+</button>
    </div>
  )
}

export default Quantity;