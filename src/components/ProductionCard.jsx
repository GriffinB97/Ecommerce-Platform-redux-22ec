import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductionCard() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // etch the product details from an API
    fetch(`/api/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add more product details as needed */}
    </div>
  );
}

export default ProductionCard;
