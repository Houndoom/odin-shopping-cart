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
    setCart(current => {
      current[id] = Math.min(99, current[id] + quantity);
      return current;
    });
  }

  const addQuantity = (e) => {
    const id = e.currentTarget.getAttribute('data-id');
    if (cart[id] < 99) setCart(currentCart => {
      currentCart[id] += 1;
      return [...currentCart];
    });
  }

  const minusQuantity = (e) => {
    const id = e.currentTarget.getAttribute('data-id');
    if (cart[id] > 0) setCart(currentCart => {
      currentCart[id] -= 1;
      return [...currentCart];
    });
  }

  const changeQuantity = (e) => {
    const id = e.target.getAttribute('data-id');
    setCart(currentCart => {
      currentCart[id] = parseInt(e.target.value) || 1;
      return [...currentCart];
    });
  }

  return (
    <div className="App">
      <Router>
        <Header />
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
