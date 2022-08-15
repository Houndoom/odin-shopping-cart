import React from 'react';
import items from './items';
import Card from './Card';

const Shop = (props) => {
  return (
    <div className='shop'>
      {
        items.map((item, i) => {
          const { name, price, img } = item;
          return <Card name={name} price={price} img={img} key={name} id={i} addToCartFunc={props.addToCartFunc} />;
        })  
      }
    </div>
  )
}

export default Shop;