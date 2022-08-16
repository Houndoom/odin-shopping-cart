import React from 'react';
import pokedollar from '../images/pokedollar.png';

const ItemDisplay = (props) => {
  return (
    <React.Fragment>
      <img src={props.img} alt={props.name} />
      <div className="name">{props.name}</div>
      <div className="price">
        <img src={pokedollar} alt="pokedollars" className='pokedollar' />{props.price}
      </div>
    </React.Fragment>
  )
};

export default ItemDisplay;
