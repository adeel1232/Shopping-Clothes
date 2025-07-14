
import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  return (
    <div style={styles.container}>
      <h2>Shop Our Products</h2>
      <div style={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    marginTop: '30px',
  },
};

export default Shop;
