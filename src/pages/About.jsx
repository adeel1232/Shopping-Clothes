import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>About Brand Lahore Clothes</h2>
      <p style={styles.text}>
        Brand Lahore Clothes is a modern e-commerce platform offering a curated selection of
        stylish and affordable clothing. We bring the latest fashion trends directly to your
        doorstep, combining comfort, quality, and affordability.
      </p>

      <div style={styles.infoBox}>
        <h3 style={styles.subheading}>Why Choose Brand Lahore?</h3>
        <ul style={styles.list}>
          <li>✅ Premium Quality Clothes for All Ages</li>
          <li>🚚 Fast & Free Delivery on Orders Over Rs. 3000</li>
          <li>💳 Cash on Delivery Available Nationwide</li>
          <li>🛍️ 100% Original & Trendy Products</li>
          <li>🔁 7-Day Hassle-Free Return & Exchange</li>
          <li>📞 24/7 Friendly Customer Support</li>
          <li>🎁 Exciting Discounts & Bundle Offers Every Month</li>
          <li>🌐 Secure Website with Safe Checkout</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '50px 20px',
    maxWidth: '900px',
    margin: '0 auto',
    minHeight: '80vh',
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  },
  text: {
    fontSize: '18px',
    textAlign: 'center',
    marginBottom: '40px',
    lineHeight: '1.6',
  },
  infoBox: {
    backgroundColor: '#f1f5f9',
    padding: '30px',
    borderLeft: '6px solid #2563eb',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  subheading: {
    fontSize: '24px',
    marginBottom: '15px',
    color: '#1e3a8a',
  },
  list: {
    listStyle: 'none',
    paddingLeft: '0',
    fontSize: '17px',
    lineHeight: '1.8',
  },
};

export default About;

