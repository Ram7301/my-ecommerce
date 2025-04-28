'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) setCartItems(JSON.parse(stored));
  }, []);

  // Save cart items to localStorage whenever cartItems change
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    } else {
      // Optional: Remove cart from localStorage if it's empty
      localStorage.removeItem('cart');
    }
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(p => p.id === product.id);
      if (existing) {
        return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => setCartItems(prev => prev.filter(p => p.id !== id));

  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(p =>
      p.id === id ? { ...p, quantity: Math.max(1, p.quantity + delta) } : p
    ));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
