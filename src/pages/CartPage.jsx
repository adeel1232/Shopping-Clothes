import React, { useState } from 'react';
import './Contact.css'; // ✅ External CSS

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
    <div className="contact-container">
      <h2 className="contact-heading">📩 Contact Us</h2>

      {!showPaymentOptions && (
        <form onSubmit={handleSubmitMessage} className="contact-form">
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="contact-input"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="contact-input"
            required
          />
          <input
            name="Address"
            placeholder="Your Address"
            value={formData.Address}
            onChange={handleChange}
            className="contact-input"
            required
          />
          <textarea
            name="message"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
            className="contact-textarea"
            required
          />
          <button type="submit" className="contact-send-button">
            🚀 Send Message
          </button>
        </form>
      )}

      {showPaymentOptions && (
        <>
          <h3 className="contact-payment-heading">💳 Choose Payment Method</h3>
          <div className="contact-payment-buttons">
            {['JazzCash', 'EasyPaisa', 'Google Pay'].map((method) => (
              <button
                key={method}
                onClick={() => handlePaymentSelect(method)}
                className={`payment-option-btn ${selectedPayment === method ? 'active' : ''} ${
                  method.toLowerCase()
                }`}
              >
                {method === 'JazzCash' && '🧾 '}
                {method === 'EasyPaisa' && '💸 '}
                {method === 'Google Pay' && '💳 '}
                {method}
              </button>
            ))}
          </div>

          {selectedPayment && (
            <button onClick={handleFinalSubmit} className="contact-submit-pay-btn">
              ✅ Submit Payment
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Contact;
