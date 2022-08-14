import React from 'react';
import pokedollar from '../images/pokedollar.png';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt={props.name} />
      <div className="name">{props.name}</div>
      <div className="price">
        <img src={pokedollar} alt="pokedollars" class='pokedollar' />{props.price}
      </div>
    </div>
  )
}

export default Card;