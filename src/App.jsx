import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success(`${product.name} has been added to your cart successfully!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  };

  return (
    <div>
      <Navbar cart={cart} />
      <ProductPage addToCart={addToCart} />
      <CartPage cart={cart} removeFromCart={removeFromCart} />
      <Footer />

      {/* Toast container for displaying toast messages */}
      <ToastContainer />
    </div>
  );
}

export default App;
