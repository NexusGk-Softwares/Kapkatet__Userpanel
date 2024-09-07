import React from 'react';
import { useParams } from 'react-router-dom';
import { sampleProducts } from './ProductPage'; // Assuming the products data is shared

function ProductDetailsPage() {
  const { productId } = useParams(); // Get product ID from the URL
  const product = sampleProducts.find((item) => item.id === parseInt(productId)); // Find the product by ID

  if (!product) {
    return <p className="text-center">Product not found.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">{product.name}</h1>
      <div className="flex flex-col items-center">
        <img src={product.imageUrl} alt={product.name} className="w-full max-w-sm object-cover mb-4" />
        <p><strong>Breed:</strong> {product.breed}</p>
        <p><strong>Age:</strong> {product.age} years</p>
        <p><strong>Milk per day:</strong> {product.milkPerDay} liters</p>
        <p><strong>Price:</strong> Kshs. {product.price}</p>
        <p><strong>Description:</strong> This {product.breed} cow is {product.age} years old and produces {product.milkPerDay} liters of milk per day. A valuable addition to your farm!</p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
