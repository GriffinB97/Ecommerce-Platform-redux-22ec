// src/components/ProductionList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions';
import ProductionCard from './ProductionCard';

function ProductionList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      // Mock fetching products from an API or a static JSON file
      const products = [
        { id: 1, name: 'Product 1', price: 100, image: '/images/product1.jpg' },
        { id: 2, name: 'Product 2', price: 150, image: '/images/product2.jpg' },
        // Add more products as needed
      ];
      dispatch(setProducts(products));
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductionCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductionList;
