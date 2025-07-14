import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    Address: '',
    message: '',
  });
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    const { name, email, message, Address } = formData;
    if (!name || !email || !message || !Address) {
      alert('❗ Please fill all fields');
      return;
    }
    setShowPaymentOptions(true);
  };

  const handlePaymentSelect = (method) => {
    setSelectedPayment(method);
  };

  const handleFinalSubmit = () => {
    alert(`🎉 Congratulations!\nYour message has been sent.\nPayment Method: ${selectedPayment}`);
    setFormData({ name: '', email: '', Address: '', message: '' });
    setSelectedPayment('');
    setShowPaymentOptions(false);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📩 Contact Us</h2>

      {!showPaymentOptions && (
        <form onSubmit={handleSubmitMessage} style={styles.form}>
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            name="Address"
            placeholder="Your Address"
            value={formData.Address}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <textarea
            name="message"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
            required
          />
          <button type="submit" style={styles.sendButton}>
            🚀 Send Message
          </button>
        </form>
      )}

      {showPaymentOptions && (
        <>
          <h3 style={styles.paymentHeading}>💳 Choose Payment Method</h3>
          <div style={styles.paymentButtons}>
            {['JazzCash', 'EasyPaisa', 'Google Pay'].map((method) => (
              <button
                key={method}
                onClick={() => handlePaymentSelect(method)}
                style={{
                  ...styles.payButton,
                  backgroundColor:
                    method === 'JazzCash'
                      ? '#e70909'
                      : method === 'EasyPaisa'
                      ? '#22c55e'
                      : '#dff442ff',
                  boxShadow:
                    selectedPayment === method
                      ? '0 0 10px #000'
                      : '0 0 6px rgba(0,0,0,0.2)',
                  transform: selectedPayment === method ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                {method === 'JazzCash' && '🧾 '}
                {method === 'EasyPaisa' && '💸 '}
                {method === 'Google Pay' && '💳 '}
                {method}
              </button>
            ))}
          </div>

          {selectedPayment && (
            <button onClick={handleFinalSubmit} style={styles.submitPayBtn}>
              ✅ Submit Payment
            </button>
          )}
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '40px 30px',
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '20px',
    boxShadow: '0 12px 30px rgba(0,0,0,0.2)',
    backdropFilter: 'blur(10px)',
  },
  heading: {
    fontSize: '30px',
    marginBottom: '25px',
    fontWeight: 'bold',
    color: '#1e3a8a',
    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  input: {
    padding: '12px 16px',
    fontSize: '16px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    outline: 'none',
    transition: '0.3s ease',
    boxShadow: '0 0 8px rgba(0,0,0,0.05)',
  },
  textarea: {
    padding: '12px 16px',
    fontSize: '16px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    height: '120px',
    resize: 'none',
    outline: 'none',
    boxShadow: '0 0 8px rgba(0,0,0,0.05)',
  },
  sendButton: {
    padding: '14px',
    fontSize: '16px',
    borderRadius: '12px',
    backgroundColor: '#2563eb',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    transition: '0.3s ease',
  },
  paymentHeading: {
    marginTop: '30px',
    fontSize: '22px',
    color: '#0f172a',
    marginBottom: '10px',
  },
  paymentButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '14px',
    marginBottom: '20px',
  },
  payButton: {
    padding: '10px 20px',
    fontSize: '15px',
    color: '#fff',
    borderRadius: '8px',
    cursor: 'pointer',
    border: 'none',
    transition: '0.3s ease',
    minWidth: '120px',
  },
  submitPayBtn: {
    padding: '12px 20px',
    fontSize: '16px',
    borderRadius: '10px',
    backgroundColor: '#16a34a',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
  },
};

export default Contact;

