import React, { useState } from 'react';
import items from './items';
import CartItem from './CartItem';

const Cart = (props) => {

  const [cart, setCart] = props.cart;

  if (cart.reduce((a, b) => a + b, 0) === 0) {
    return <div>There is nothing in your cart.</div>
  } else return (
    <div className="cart">
      {
        cart.map((quantity, i) => {
          if (quantity > 0) return <CartItem key={items[i].name} quantity={quantity} img={items[i].img} name={items[i].name} price={items[i].price} cart={props.cart} id={i} />
        })
      }
    </div>
  )
}

export default Cart;