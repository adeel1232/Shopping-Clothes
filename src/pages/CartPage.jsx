import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, addToCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer'; // ✅ Footer import کیا

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div style={styles.container}>
        <h2>Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul style={styles.list}>
              {cartItems.map((item) => (
                <li key={item.id} style={styles.item}>
                  <img src={item.image} alt={item.name} style={styles.img} />
                  <div style={styles.details}>
                    <h4>{item.name}</h4>
                    <p>
                      ${item.price} x {item.quantity} = ${item.price * item.quantity}
                    </p>
                    <div style={styles.buttons}>
                      <button onClick={() => dispatch(addToCart(item))}>➕</button>
                      <button onClick={() => dispatch(removeFromCart(item.id))}>➖</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <h3 style={styles.total}>Total: ${total.toFixed(2)}</h3>

            <div style={styles.actions}>
              <button style={styles.clearBtn} onClick={() => dispatch(clearCart())}>
                🗑️ Clear Cart
              </button>
              <button style={styles.payBtn} onClick={() => navigate('/contact')}>
                💳 Proceed to Payment
              </button>
            </div>
          </>
        )}
      </div>
      
      <Footer /> {/* ✅ Footer صرف ایک بار نیچے render ہوگا */}
    </>
  );
};

const styles = {
  container: {
    padding: '30px',
    maxWidth: '800px',
    margin: 'auto',
    background: '#f8fafc',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    minHeight: '80vh', // ✅ footer نیچے دھکیلنے کے لیے
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  item: {
    display: 'flex',
    gap: '20px',
    borderBottom: '1px solid #ccc',
    padding: '15px 0',
  },
  img: {
    width: '100px',
    height: '100px',
    borderRadius: '8px',
    objectFit: 'cover',
  },
  details: {
    flex: 1,
  },
  buttons: {
    marginTop: '8px',
    display: 'flex',
    gap: '10px',
  },
  total: {
    marginTop: '20px',
    fontSize: '20px',
    color: '#1e293b',
  },
  actions: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
  },
  clearBtn: {
    padding: '10px 20px',
    background: '#e11d48',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  payBtn: {
    padding: '10px 20px',
    background: '#16a34a',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default CartPage;
