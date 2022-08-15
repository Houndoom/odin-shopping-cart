import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Shop from './components/Shop';
import Cart from './components/Cart';
import React, { useState } from 'react';
import items from './components/items';

function App() {

  const [cart, setCart] = useState(Array(items.length).fill(0));

  const addToCart = (e) => {
    const id = e.currentTarget.getAttribute('data-id');
    const quantity = parseInt(document.getElementById(`quantity${id}`).value);
    setCart(currentCart => {
      let newCart = [...currentCart];
      newCart[id] = Math.min(99, newCart[id] + quantity);
      return newCart;
    });
  }

  return (
    <div className="App">
      <Router>
        <Header num={cart.reduce((a, b) => a + b, 0)} />
        <div className="main">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/shop" element={<Shop addToCartFunc={addToCart} />} />
            <Route path="/cart" element={<Cart cart={[cart, setCart]} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
