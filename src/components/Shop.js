import React from 'react';
import items from './items';
import Card from './Card';

const Shop = () => {
  return (
    <div className='shop'>
      {
        items.map((item) => {
          const { name, price, img } = item;
          console.log(name, price);
          return <Card name={name} price={price} img={img} />;
        })  
      }
    </div>
  )
}

export default Shop;