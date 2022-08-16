import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';
import CartNumber from './CartNumber';

const Header = (props) => {

  return (
    <div className="header">
      <div className="shop-name">Houndoom's Pokémart</div>
      <nav>
        <Link to="/">About</Link>
        <Link to="/shop">Shop</Link>
      </nav>
      <Link to="/cart" className="to-cart" aria-label="Shopping Cart">
        <Icon path={mdiCart} title="Shopping Cart" size='3rem'/>
        <CartNumber num={props.num} />
      </Link>
    </div>
  )
}

export default Header;