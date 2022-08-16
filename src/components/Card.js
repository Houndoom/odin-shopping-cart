import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiCartArrowDown } from '@mdi/js';
import Quantity from './Quantity';
import ItemDisplay from './ItemDisplay';

const Card = (props) => {

  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    if (quantity < 99) setQuantity(i => i + 1);
  }

  const minusQuantity = () => {
    if (quantity > 0) setQuantity(i => i - 1);
  }

  const changeQuantity = (e) => {
    setQuantity(parseInt(e.target.value) || 0);
  }

  return (
    <div className="card">
      <ItemDisplay name={props.name} img={props.img} price={props.price} />
      <Quantity name={props.name} id={props.id} quantity={quantity} funcs={[minusQuantity, addQuantity, changeQuantity]} />
      <button className="add-to-cart" data-id={props.id} onClick={props.addToCartFunc} aria-label="Add to cart">
        <Icon path={mdiCartArrowDown} title="Add to cart" size="1rem" />
        <div className="add-text">Add To Cart</div>
      </button>
    </div>
  )
}

export default Card;