
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import CartPage from './pages/CartPage';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
