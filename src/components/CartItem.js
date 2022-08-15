import React from 'react';
import pokedollar from '../images/pokedollar.png';

const CartItem = (props) => {

  const [cart, setCart] = props.cart;

  const addQuantity = (e) => {
    const id = e.currentTarget.getAttribute('data-id');
    if (cart[id] < 99) setCart(currentCart => {
      const newCart = [...currentCart];
      newCart[id] += 1;
      return newCart;
    });
  }

  const minusQuantity = (e) => {
    const id = e.currentTarget.getAttribute('data-id');
    if (cart[id] > 0) setCart(currentCart => {
      const newCart = [...currentCart];
      newCart[id] -= 1;
      return newCart;
    });
  }

  const changeQuantity = (e) => {
    const id = e.target.getAttribute('data-id');
    setCart(currentCart => {
      const newCart = [...currentCart];
      newCart[id] = parseInt(e.target.value) || 1;
      return newCart;
    });
  }

  return (
    <div className="cart-item">
      <img src={props.img} alt={props.name} />
      <div className="name">{props.name}</div>
      <div className="price">
        <img src={pokedollar} alt="pokedollars" className='pokedollar' />{props.price}
      </div>
      <div className="quantity">
        <div onClick={minusQuantity} data-id={props.id}>–</div>
        <input type="text" pattern="\d*" maxLength="2" aria-label={props.name} value={props.quantity} onChange={changeQuantity} data-id={props.id} />
        <div onClick={addQuantity} data-id={props.id}>+</div>
      </div>
      <div className="price">
        <img src={pokedollar} alt="pokedollars" className='pokedollar' />{props.quantity * props.price}
      </div>
    </div>
  )
}

export default CartItem;