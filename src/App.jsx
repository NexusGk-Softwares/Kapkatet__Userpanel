// App.js

import React from 'react';
import { CartProvider } from './components/CartContext';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
     <CartProvider>
      
      <Navbar/>
      <ProductPage />
      <CartPage />
      <Footer/>
    </CartProvider>
  );
}

export default App;
