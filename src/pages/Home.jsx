import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // External CSS

const dummyProduct = {
  name: 'Fahad Fashion Look',
  price: 59.99,
  image: '/images/model1.webp',
  description: 'Stylish and trendy outfit from Fahad Clothes. Perfect for every occasion.',
};

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);

  const handleImageClick = (product) => {
    setModalProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleAddToCart = () => {
    alert(`✅ ${modalProduct.name} added to cart!`);
    setShowModal(false);
  };

  return (
    <div className="home-container">
      {/* 👇 Full-width video section */}
      <div className="video-wrapper">
        <video autoPlay muted loop playsInline className="home-video">
          <source src="/videos/fashion.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h1>Welcome to Fahad Clothes Online Market</h1>
      <p>Discover stylish and modern clothing curated just for you.</p>

      <div className="image-wrapper">
        <img
          src="/images/model1.webp"
          alt="Fashion Model 1"
          className="product-image"
          onClick={() => handleImageClick(dummyProduct)}
        />
        <img
          src="/images/model2.jpg"
          alt="Fashion Model 2"
          className="product-image"
          onClick={() =>
            handleImageClick({
              ...dummyProduct,
              image: '/images/model2.jpg',
              name: 'Elegant Winter Collection',
              price: 79.99,
            })
          }
        />
      </div>

      <Link to="/shop">
        <button className="shop-button">🛒 Shop Now</button>
      </Link>

      {showModal && modalProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <img src={modalProduct.image} alt={modalProduct.name} className="modal-image" />
            <h3>{modalProduct.name}</h3>
            <p>{modalProduct.description}</p>
            <p><strong>Price:</strong> Rs. {modalProduct.price}</p>
            <button onClick={handleAddToCart} className="cart-button">Add to Cart</button>
            <button onClick={closeModal} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;




