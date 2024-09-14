import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CartPage({ cart=[] , removeFromCart }) {
  // Ensure cart is an array and has default values
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, product) => {
      acc[product.id] = 1; // Initialize quantity for each product
      return acc;
    }, {})
  );

  // Handle quantity increment
  const handleIncrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 1) + 1, // Increment by 1
    }));
  };

  // Handle quantity decrement
  const handleDecrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(1, (prevQuantities[id] || 1) - 1), // Decrement by 1 but not below 1
    }));
  };

  const totalPrice = cart.reduce((total, product) => {
    return total + product.price * (quantities[product.id] || 1);
  }, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>

      {cart.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Breed</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Milk per Day</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cart.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{product.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{product.breed}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{product.age} years</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{product.milkPerDay} liters</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Kshs.{product.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleDecrement(product.id)}
                        className="px-2 py-1 bg-gray-300 rounded"
                      >
                        --
                      </button>
                      <span className="px-2">{quantities[product.id] || 1}</span>
                      <button
                        onClick={() => handleIncrement(product.id)}
                        className="px-2 py-1 bg-gray-300 rounded"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="6" className="px-6 py-3 text-right font-bold">Total Amount:</td>
                <td className="px-6 py-3 text-sm font-bold">Kshs. {totalPrice.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 text-center">
            <Link to="/checkout">
              <button className="px-4 py-2 bg-blue-500 text-white rounded">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-center">Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartPage;
