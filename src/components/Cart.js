import React from 'react';
import items from './items';
import CartItem from './CartItem';
import pokedollar from '../images/pokedollar.png';

const Cart = (props) => {

  const [cart, ] = props.cart;

  let totalCost = 0;

  if (cart.reduce((a, b) => a + b, 0) === 0) {
    return <div>There is nothing in your cart.</div>
  } else return (
    <div className="cart">
      {
        cart.map((quantity, i) => {
          if (quantity > 0) {
            totalCost += quantity * items[i].price;
            return <CartItem key={items[i].name} quantity={quantity} img={items[i].img} name={items[i].name} price={items[i].price} cart={props.cart} id={i} />
          }
        })
      }
      <div className="total-cost">
        Total Cost: 
        <div className="price">
          <img src={pokedollar} alt="pokedollars" className='pokedollar' />{totalCost}
        </div>
      </div>
    </div>
  )
}

export default Cart;