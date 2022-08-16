import React from 'react';
import pokedollar from '../images/pokedollar.png';
import Quantity from './Quantity';
import ItemDisplay from './ItemDisplay';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

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
    if (cart[id] > 1) setCart(currentCart => {
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

  const remove = (e) => {
    const id = e.currentTarget.getAttribute('data-id');
    if (window.confirm("Are you sure you want to remove this item?")) {
      setCart(currentCart => {
        const newCart = [...currentCart];
        newCart[id] = 0;
        return newCart;
      });
    }
  }

  return (
    <div className="cart-item">
      <ItemDisplay name={props.name} img={props.img} price={props.price} />
      <Quantity name={props.name} id={props.id} quantity={props.quantity} funcs={[minusQuantity, addQuantity, changeQuantity]} />
      <div className="price">
        <img src={pokedollar} alt="pokedollars" className='pokedollar' />{props.quantity * props.price}
      </div>
      <button aria-label="Remove" data-id={props.id} class='remove' onClick={remove}>
        <Icon path={mdiClose} size='1rem' />
      </button>
    </div>
  )
}

export default CartItem;