import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  const navigate = useNavigate();
  const { cart = [], cartSummary, updateCartItem, removeFromCart, clearCart, checkout } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [shippingAddress, setShippingAddress] = useState({
    street: '',
    city: '',
    state: '',
    zip: ''
  });

  const handleQuantityChange = (serviceId, packageName, newQuantity) => {
    if (newQuantity > 0) {
      updateCartItem(serviceId, packageName, newQuantity);
    }
  };

  const handleRemoveItem = (serviceId, packageName) => {
    removeFromCart(serviceId, packageName);
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    try {
      setIsCheckingOut(true);
      const result = await checkout(shippingAddress, {});
      alert('Order placed successfully! Order ID: ' + result.orderId);
      navigate('/');
    } catch (error) {
      alert('Error during checkout. Please try again.');
    } finally {
      setIsCheckingOut(false);
    }
  };

  if (!cart) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Loading cart...</h2>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Your cart is empty</h2>
          <p className="mt-4 text-gray-500">
            Browse our services to add items to your cart
          </p>
          <button
            onClick={() => navigate('/products')}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            View Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow-sm rounded-lg">
            {cart.map((item, index) => (
              <div
                key={`${item.serviceId}-${item.packageName}`}
                className={`p-6 ${
                  index !== cart.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.serviceName}
                    </h3>
                    <p className="text-gray-600">{item.packageName} Package</p>
                    <p className="text-sm text-gray-500">
                      Delivery: {item.deliveryTime}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-gray-900">
                      ${item.price * item.quantity}
                    </p>
                    <p className="text-sm text-gray-500">
                      ${item.price} per unit
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          item.serviceId,
                          item.packageName,
                          item.quantity - 1
                        )
                      }
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <RemoveIcon />
                    </button>
                    <span className="text-gray-900">{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          item.serviceId,
                          item.packageName,
                          item.quantity + 1
                        )
                      }
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <AddIcon />
                    </button>
                  </div>
                  <button
                    onClick={() =>
                      handleRemoveItem(item.serviceId, item.packageName)
                    }
                    className="text-red-600 hover:text-red-800"
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={clearCart}
            className="mt-4 text-red-600 hover:text-red-800"
          >
            Clear Cart
          </button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Order Summary
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-900">${cartSummary.subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (10%)</span>
                <span className="text-gray-900">${cartSummary.tax}</span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-gray-900">
                    Total
                  </span>
                  <span className="text-lg font-semibold text-gray-900">
                    ${cartSummary.total}
                  </span>
                </div>
              </div>
            </div>

            {!isCheckingOut ? (
              <button
                onClick={() => setIsCheckingOut(true)}
                className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
              >
                Proceed to Checkout
              </button>
            ) : (
              <form onSubmit={handleCheckout} className="mt-6">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Street Address"
                    required
                    value={shippingAddress.street}
                    onChange={(e) =>
                      setShippingAddress({
                        ...shippingAddress,
                        street: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    required
                    value={shippingAddress.city}
                    onChange={(e) =>
                      setShippingAddress({
                        ...shippingAddress,
                        city: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border rounded-md"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="State"
                      required
                      value={shippingAddress.state}
                      onChange={(e) =>
                        setShippingAddress({
                          ...shippingAddress,
                          state: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="ZIP Code"
                      required
                      value={shippingAddress.zip}
                      onChange={(e) =>
                        setShippingAddress({
                          ...shippingAddress,
                          zip: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border rounded-md"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 