import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
  const { cart } = useCart(); // Access cart data from context
  const navigate = useNavigate();
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: 'credit',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., payment processing)
    alert('Thank you for your order!');
    // Clear cart and navigate back to product page or order confirmation page
    navigate('/');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {/* Cart Summary */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((product) => (
              <li key={product.id} className="mb-2">
                {product.name} - Kshs.{product.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <p className="font-bold">Total: Kshs.{totalPrice.toFixed(2)}</p>
      </div>

      {/* Checkout Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="address">
            Shipping Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
          >
            <option value="credit">Credit Card</option>
            <option value="mpesa">M-Pesa</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
        >
          Complete Purchase
        </button>
      </form>
    </div>
  );
}

export default CheckoutPage;
