import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
  import './ProductCard.css'; // ✅ CSS import
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <>
      <div style={styles.card}>
        <img
          src={product.image}
          alt={product.name}
          style={styles.image}
          onClick={() => setShowModal(true)}
        />
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
        <button onClick={handleAddToCart} style={styles.button}>
          {added ? '✅ Added!' : 'Add to Cart'}
        </button>
      </div>

      {showModal && (
        <div style={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={product.image} alt={product.name} style={styles.modalImage} />
            <h2>{product.name}</h2>
            <p style={styles.price}>Price: ${product.price.toFixed(2)}</p>
            <p>{product.description}</p>

            {product.extra && (
              <p><strong>Details:</strong> {product.extra}</p>
            )}

            <p>⭐ 4.4 out of 5 stars (264M+ reviews)</p>
            <p>📦 50+ bought in past month</p>
            <p>📅 Delivery by <strong>Tue, Jul 14,2025</strong></p>

            <button onClick={handleAddToCart} style={styles.modalButton}>
              {added ? '✅ Added!' : 'Add to Cart'}
            </button>

            <button onClick={() => setShowModal(false)} style={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  card: {
    padding: '20px',
    border: '1px solid #e5e7eb',
    borderRadius: '10px',
    background: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'left',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px',
    cursor: 'pointer',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw', height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    background: '#fff',
    padding: '30px',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '500px',
    textAlign: 'left',
    position: 'relative',
  },
  modalImage: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '15px',
  },
  price: {
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: '10px',
  },
  modalButton: {
    backgroundColor: '#16a34a',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '15px',
  },
  closeButton: {
    backgroundColor: '#dc2626',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '15px',
    marginLeft: '10px',
  },
};

export default ProductCard;

