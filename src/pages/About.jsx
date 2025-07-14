import React from 'react';
import './About.css'; // ✅ Import external CSS

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">About Brand Lahore Clothes</h2>
      <p className="about-text">
        Brand Lahore Clothes is a modern e-commerce platform offering a curated selection of
        stylish and affordable clothing. We bring the latest fashion trends directly to your
        doorstep, combining comfort, quality, and affordability.
      </p>

      <div className="about-info-box">
        <h3 className="about-subheading">Why Choose Brand Lahore?</h3>
        <ul className="about-list">
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

export default About;


