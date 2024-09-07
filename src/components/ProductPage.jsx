import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import { useCart } from './CartContext';

// Sample data for products
const sampleProducts = [
  { id: 1, name: 'Jersey Cow', breed: 'Jersey', age: 2, price: 1500, milkPerDay: 20, imageUrl: 'https://www.istockphoto.com/photos/cow' },
  { id: 2, name: 'Holstein Cow', breed: 'Holstein', age: 3, price: 1800, milkPerDay: 25, imageUrl: 'holstein.jpg' },
  { id: 3, name: 'Guernsey Cow', breed: 'Guernsey', age: 1, price: 1400, milkPerDay: 18, imageUrl: 'guernsey.jpg' },
  { id: 4, name: 'Jersey Cow', breed: 'Jersey', age: 2, price: 1500, milkPerDay: 20, imageUrl: 'jersey.jpg' },
  { id: 5, name: 'Holstein Cow', breed: 'Holstein', age: 3, price: 1800, milkPerDay: 25, imageUrl: 'holstein.jpg' },
  { id: 6, name: 'Guernsey Cow', breed: 'Guernsey', age: 1, price: 1400, milkPerDay: 18, imageUrl: 'guernsey.jpg' },
  { id: 7, name: 'Jersey Cow', breed: 'Jersey', age: 2, price: 1500, milkPerDay: 20, imageUrl: 'jersey.jpg' },
  { id: 8, name: 'Holstein Cow', breed: 'Holstein', age: 3, price: 1800, milkPerDay: 25, imageUrl: 'holstein.jpg' },
  
];

function ProductPage() {
  const [products, setProducts] = useState(sampleProducts); // Store products data
  const [filters, setFilters] = useState({
    breed: '',
    age: '',
    price: '',
  });
  const { addToCart } = useCart(); // Use the cart context

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleAddToCart = (product) => {
    addToCart(product); // Update cart state
    alert(`${product.name} has been added to your cart successfully!`);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (filters.breed ? product.breed === filters.breed : true) &&
      (filters.age ? product.age === parseInt(filters.age) : true) &&
      (filters.price ? product.price <= parseInt(filters.price) : true)
    );
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Products</h1>

      {/* Filter Section */}
      <div className="flex space-x-4 mb-8 justify-center">
        <select
          name="breed"
          value={filters.breed}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="">All Breeds</option>
          <option value="Jersey">Jersey</option>
          <option value="Holstein">Holstein</option>
          <option value="Guernsey">Guernsey</option>
        </select>

        <select
          name="age"
          value={filters.age}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="">All Ages</option>
          <option value="1">1 year</option>
          <option value="2">2 years</option>
          <option value="3">3 years</option>
        </select>

        <input
          type="number"
          name="price"
          value={filters.price}
          onChange={handleFilterChange}
          placeholder="Max Price"
          className="border p-2 rounded"
        />
      </div>

      {/* Product Listing */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 shadow-lg text-center">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-32 object-cover mb-2"
              />
              <h2 className="text-md font-bold mb-1">{product.name}</h2>
              <p className="text-sm">Breed: {product.breed}</p>
              <p className="text-sm">Age: {product.age} years</p>
              <p className="text-sm">Milk per day: {product.milkPerDay} liters</p>
              <p className="text-sm font-bold">Price: Kshs.{product.price}</p>

              {/* Add to Cart Button */}
              <div className="flex justify-center mt-4">
               
              <button onClick={() => handleAddToCart(product)} color="primary" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                </svg>
                Buy now
                </button>
               </div>
               <br />
               <Link to={`/products/${product.id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5">
                View Details
              </Link>

            </div>
          ))
        ) : (
          <p className="text-center">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
