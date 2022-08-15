import React, { useState } from 'react';
import pokedollar from '../images/pokedollar.png';
import Icon from '@mdi/react';
import { mdiCartArrowDown } from '@mdi/js';

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
      <img src={props.img} alt={props.name} />
      <div className="name">{props.name}</div>
      <div className="price">
        <img src={pokedollar} alt="pokedollars" className='pokedollar' />{props.price}
      </div>
      <div className="quantity">
        <div onClick={minusQuantity}>–</div>
        <input type="text" pattern="\d*" maxLength="2" aria-label={props.name} id={`quantity${props.id}`} value={quantity} onChange={changeQuantity} />
        <div onClick={addQuantity}>+</div>
      </div>
      <button className="add-to-cart" data-id={props.id} onClick={props.addToCartFunc}>
        <Icon path={mdiCartArrowDown} title="Add to cart" size="1rem" />
        <div className="add-text">Add To Cart</div>
      </button>
    </div>
  )
}

export default Card;