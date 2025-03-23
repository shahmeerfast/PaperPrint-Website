import React from 'react';
import { motion } from 'framer-motion';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import BrushIcon from '@mui/icons-material/Brush';
import SpeedIcon from '@mui/icons-material/Speed';
import VerifiedIcon from '@mui/icons-material/Verified';

const MarketingMaterials = () => {
  const products = [
    {
      title: 'Business Cards',
      description: 'Premium quality business cards with various finishes',
      image: 'https://via.placeholder.com/300x200',
      price: 'Starting at $49.99'
    },
    {
      title: 'Brochures',
      description: 'Professional brochures in various sizes and folds',
      image: 'https://via.placeholder.com/300x200',
      price: 'Starting at $99.99'
    },
    {
      title: 'Flyers',
      description: 'Eye-catching flyers for promotions and events',
      image: 'https://via.placeholder.com/300x200',
      price: 'Starting at $79.99'
    },
    {
      title: 'Banners',
      description: 'Large format banners for indoor and outdoor use',
      image: 'https://via.placeholder.com/300x200',
      price: 'Starting at $129.99'
    },
    {
      title: 'Posters',
      description: 'High-quality posters in various sizes',
      image: 'https://via.placeholder.com/300x200',
      price: 'Starting at $39.99'
    },
    {
      title: 'Postcards',
      description: 'Custom postcards for direct mail campaigns',
      image: 'https://via.placeholder.com/300x200',
      price: 'Starting at $29.99'
    }
  ];

  const features = [
    {
      icon: <LocalPrintshopIcon className="text-blue-600 text-4xl" />,
      title: 'High-Quality Printing',
      description: 'State-of-the-art printing technology for exceptional results'
    },
    {
      icon: <BrushIcon className="text-blue-600 text-4xl" />,
      title: 'Custom Design',
      description: 'Professional design services to make your materials stand out'
    },
    {
      icon: <SpeedIcon className="text-blue-600 text-4xl" />,
      title: 'Quick Turnaround',
      description: 'Fast printing and delivery to meet your deadlines'
    },
    {
      icon: <VerifiedIcon className="text-blue-600 text-4xl" />,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee on all printed materials'
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
              Marketing Materials
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              High-quality prints for all your marketing needs
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
          Our Products
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                  <span className="text-blue-600 font-medium">{product.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Order Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Need Custom Marketing Materials?
            </h2>
            <p className="text-xl text-gray-500 mb-8">
              We can help you create custom marketing materials tailored to your needs
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700">
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              What file formats do you accept?
            </h3>
            <p className="text-gray-500">
              We accept PDF, AI, PSD, EPS, and JPEG files. For best results, we recommend using PDF files with embedded fonts.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              What is your turnaround time?
            </h3>
            <p className="text-gray-500">
              Standard turnaround time is 3-5 business days. Rush orders are available for an additional fee.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Do you offer design services?
            </h3>
            <p className="text-gray-500">
              Yes, our professional designers can help create custom designs for all your marketing materials.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              What about bulk orders?
            </h3>
            <p className="text-gray-500">
              We offer special pricing for bulk orders. Contact us for a custom quote.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MarketingMaterials; 