import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartSummary, setCartSummary] = useState({
    totalItems: 0,
    subtotal: 0,
    tax: 0,
    total: 0
  });
  const [loading, setLoading] = useState(true);

  // For demo purposes, using a hardcoded userId
  const userId = "user123";

  // Fetch cart on component mount
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/api/cart/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch cart');
      }
      const data = await response.json();
      setCart(data);
      await fetchCartSummary();
    } catch (error) {
      console.error('Error fetching cart:', error);
      setCart([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchCartSummary = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/${userId}/summary`);
      if (!response.ok) {
        throw new Error('Failed to fetch cart summary');
      }
      const data = await response.json();
      setCartSummary(data);
    } catch (error) {
      console.error('Error fetching cart summary:', error);
      setCartSummary({
        totalItems: 0,
        subtotal: 0,
        tax: 0,
        total: 0
      });
    }
  };

  const addToCart = async (serviceId, packageName, quantity = 1) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/${userId}/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ serviceId, packageName, quantity }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to add item to cart');
      }
      
      const data = await response.json();
      if (!data.cart) {
        throw new Error('Invalid response from server');
      }
      
      setCart(data.cart);
      await fetchCartSummary();
      return data;
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
  };

  const updateCartItem = async (serviceId, packageName, quantity) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/${userId}/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ serviceId, packageName, quantity }),
      });
      const data = await response.json();
      setCart(data.cart);
      await fetchCartSummary();
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  const removeFromCart = async (serviceId, packageName) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/${userId}/remove`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ serviceId, packageName }),
      });
      const data = await response.json();
      setCart(data.cart);
      await fetchCartSummary();
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const clearCart = async () => {
    try {
      await fetch(`http://localhost:5000/api/cart/${userId}/clear`, {
        method: 'DELETE',
      });
      setCart([]);
      setCartSummary({
        totalItems: 0,
        subtotal: 0,
        tax: 0,
        total: 0
      });
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  const checkout = async (shippingAddress, paymentDetails) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/${userId}/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ shippingAddress, paymentDetails }),
      });
      const data = await response.json();
      if (response.ok) {
        setCart([]);
        setCartSummary({
          totalItems: 0,
          subtotal: 0,
          tax: 0,
          total: 0
        });
      }
      return data;
    } catch (error) {
      console.error('Error during checkout:', error);
      throw error;
    }
  };

  const value = {
    cart,
    cartSummary,
    loading,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart,
    checkout
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}; 