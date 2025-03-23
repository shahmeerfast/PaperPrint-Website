import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import PaletteIcon from '@mui/icons-material/Palette';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const PersonalizedProducts = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = async (packageName) => {
    try {
      setLoading(true);
      setSelectedProduct(packageName);
      console.log('Adding to cart:', { packageName });
      await addToCart(4, packageName, 1); // Using 4 as the ID for personalized products service
      console.log('Successfully added to cart');
      navigate('/cart');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart. Please try again.');
    } finally {
      setLoading(false);
      setSelectedProduct(null);
    }
  };

  const features = [
    {
      icon: <PaletteIcon className="text-blue-600 text-4xl" />,
      title: 'Custom Design',
      description: 'Unique designs tailored to your preferences'
    },
    {
      icon: <AutoFixHighIcon className="text-blue-600 text-4xl" />,
      title: 'Premium Quality',
      description: 'High-quality materials and printing techniques'
    },
    {
      icon: <LocalShippingIcon className="text-blue-600 text-4xl" />,
      title: 'Fast Delivery',
      description: 'Quick turnaround and reliable shipping'
    },
    {
      icon: <SupportAgentIcon className="text-blue-600 text-4xl" />,
      title: 'Expert Support',
      description: 'Professional guidance throughout the process'
    }
  ];

  const products = [
    {
      title: 'Custom Stationery',
      description: 'Personalized letterheads, envelopes, and notepads',
      image: 'https://via.placeholder.com/300x200',
      price: 199,
      packageName: 'Basic'
    },
    {
      title: 'Photo Products',
      description: 'Custom photo books, calendars, and prints',
      image: 'https://via.placeholder.com/300x200',
      price: 399,
      packageName: 'Pro'
    },
    {
      title: 'Branded Merchandise',
      description: 'Custom apparel, mugs, and promotional items',
      image: 'https://via.placeholder.com/300x200',
      price: 699,
      packageName: 'Premium'
    },
    {
      title: 'Event Materials',
      description: 'Invitations, programs, and event signage',
      image: 'https://via.placeholder.com/300x200',
      price: 399,
      packageName: 'Pro'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Design Consultation',
      description: 'Discuss your vision and requirements with our design experts'
    },
    {
      step: 2,
      title: 'Custom Design',
      description: 'Our team creates unique designs based on your preferences'
    },
    {
      step: 3,
      title: 'Review & Revise',
      description: 'Review the designs and request any necessary revisions'
    },
    {
      step: 4,
      title: 'Production',
      description: 'High-quality printing of your approved designs'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Personalized Products
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Custom designs for your unique requirements
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Our Custom Products
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-500 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-medium">${product.price}</span>
                  <button 
                    onClick={() => handleAddToCart(product.packageName)}
                    disabled={loading && selectedProduct === product.packageName}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading && selectedProduct === product.packageName ? 'Adding...' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Our Design Process
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-500 mb-4">
              "The personalized stationery exceeded my expectations. The quality is outstanding!"
            </p>
            <div className="font-medium text-gray-900">- Sarah Johnson</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-500 mb-4">
              "Great attention to detail and excellent customer service throughout the process."
            </p>
            <div className="font-medium text-gray-900">- Michael Chen</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-500 mb-4">
              "The custom photo books are beautiful. Will definitely order again!"
            </p>
            <div className="font-medium text-gray-900">- Emily Rodriguez</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to create something unique?
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              Let's bring your ideas to life
            </p>
            <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PersonalizedProducts; 