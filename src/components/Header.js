import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';

const Header = () => {

  return (
    <div className="header">
      <div className="shop-name">Houndoom's Pokémart</div>
      <nav>
        <Link to="/">About</Link>
        <Link to="/shop">Shop</Link>
      </nav>
      <Link to="/cart" className="to-cart"><Icon path={mdiCart} title="Shopping Cart" size='2rem'/></Link>
    </div>
  )
}

export default Header;