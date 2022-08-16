import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';
import CartNumber from './CartNumber';

const Header = (props) => {

  return (
    <div className="header">
      <div className="shop-name">Houndoom's Pokémart</div>
      <nav>
        <NavLink to="/" className={({isActive}) => isActive ? 'active' : undefined}> About</NavLink>
        <NavLink to="/shop" className={({isActive}) => isActive ? 'active' : undefined}>Shop</NavLink>
      </nav>
      <Link to="/cart" className="to-cart" aria-label="Shopping Cart">
        <Icon path={mdiCart} color='navy' title="Shopping Cart" size='3rem'/>
        <CartNumber num={props.num} />
      </Link>
    </div>
  )
}

export default Header;