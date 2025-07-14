import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css'; // ✅ CSS import

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <div className="logo-img">
          <img src="/images/adeel.jpg" alt="logo" />
        </div>
        <span>Brand Lahore Clothes</span>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation */}
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/cart" onClick={() => setMenuOpen(false)}>🛒 Cart ({totalQuantity})</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
