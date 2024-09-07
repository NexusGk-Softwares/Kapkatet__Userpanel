import React, { useState } from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

function CartPage() {
  const { cart } = useCart();
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, product) => {
      acc[product.id] = 1; // Initialize quantity for each product
      return acc;
    }, {})
  );

  const handleQuantityChange = (id, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: value,
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
          <table className="min-w-full divide-y divide-gray-200 bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cart.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${product.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="number"
                      min="1"
                      value={quantities[product.id] || 1}
                      onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                      className="border p-2 rounded w-full sm:w-auto"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${product.price * (quantities[product.id] || 1)}
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="3" className="px-6 py-3 text-right font-bold">Total Amount:</td>
                <td className="px-6 py-3 text-sm font-bold">${totalPrice.toFixed(2)}</td>
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
