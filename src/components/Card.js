import React, { useState } from 'react';
import pokedollar from '../images/pokedollar.png';

const Card = (props) => {

  const [quantity, setQuantity] = useState(0);

  const addQuantity = () => {
    if (quantity < 99) setQuantity(i => i + 1);
  }

  const minusQuantity = () => {
    if (quantity > 0) setQuantity(i => i - 1);
  }

  const changeQuantity = (e) => {
    setQuantity(parseInt(e.target.value));
  }

  return (
    <div className="card">
      <img src={props.img} alt={props.name} />
      <div className="name">{props.name}</div>
      <div className="price">
        <img src={pokedollar} alt="pokedollars" class='pokedollar' />{props.price}
      </div>
      <div className="quantity">
        <div onClick={minusQuantity}>–</div>
        <input type="text" pattern="\d*" maxlength="2" aria-label={props.name} value={quantity} onChange={changeQuantity} />
        <div onClick={addQuantity}>+</div>
      </div>
    </div>
  )
}

export default Card;