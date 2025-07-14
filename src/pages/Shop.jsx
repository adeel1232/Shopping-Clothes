import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Shop.css'; // ✅ External CSS

const Shop = () => {
  return (
    <div className="shop-container">
      <h2 className="shop-heading">Shop Our Products</h2>
      <div className="shop-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
