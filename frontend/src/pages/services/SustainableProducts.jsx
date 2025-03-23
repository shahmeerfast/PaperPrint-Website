import React from 'react';
import { motion } from 'framer-motion';
import NatureIcon from '@mui/icons-material/Nature';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import OpacityIcon from '@mui/icons-material/Opacity';
import BoltIcon from '@mui/icons-material/Bolt';


const SustainableProducts = () => {
  const features = [
    {
      icon: <NatureIcon className="text-green-600 text-4xl" />,
      title: 'Eco-Friendly Materials',
      description: 'Using recycled and sustainably sourced materials'
    },
    {
      icon: <AutorenewIcon className="text-green-600 text-4xl" />,
      title: 'Recyclable Products',
      description: '100% recyclable and biodegradable products'
    },
    {
      icon: <OpacityIcon className="text-green-600 text-4xl" />,
      title: 'Water-Based Inks',
      description: 'Non-toxic, eco-friendly printing inks'
    },
    {
      icon: <BoltIcon className="text-green-600 text-4xl" />,
      title: 'Energy Efficient',
      description: 'Using renewable energy in our production'
    }
  ];

  const products = [
    {
      title: 'Recycled Business Cards',
      description: '100% recycled paper with eco-friendly inks',
      image: 'https://via.placeholder.com/300x200',
      price: 'Starting at $59.99'
    },
    {
      title: 'Biodegradable Packaging',
      description: "Custom packaging that's kind to the environment",
      image: 'https://via.placeholder.com/300x200',
      price: 'Starting at $149.99'
    },
    {
      title: 'Eco-Friendly Labels',
      description: 'Sustainable labels for your products',
      image: 'https://via.placeholder.com/300x200',
      price: 'Starting at $89.99'
    },
    {
      title: 'Green Marketing Materials',
      description: 'Sustainable marketing collateral',
      image: 'https://via.placeholder.com/300x200',
      price: 'Starting at $199.99'
    }
  ];

  const certifications = [
    {
      name: 'FSC Certified',
      description: 'Forest Stewardship Council certification for responsible forestry',
      image: 'https://via.placeholder.com/100'
    },
    {
      name: 'Green Seal',
      description: 'Meeting environmental standards for sustainability',
      image: 'https://via.placeholder.com/100'
    },
    {
      name: 'Carbon Neutral',
      description: 'Zero carbon footprint in our production process',
      image: 'https://via.placeholder.com/100'
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
              Sustainable Products
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Eco-friendly printing solutions and materials
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
          Sustainable Products
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
                  <span className="text-green-600 font-medium">{product.price}</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Environmental Impact Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Our Environmental Impact
            </h2>
            <p className="text-xl text-gray-500">
              Making a difference with sustainable printing solutions
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">75%</div>
              <p className="text-gray-500">Reduction in carbon emissions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <p className="text-gray-500">Renewable energy powered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
              <p className="text-gray-500">Trees saved annually</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Our Certifications
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <img
                src={cert.image}
                alt={cert.name}
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-lg font-medium text-gray-900 mb-2">{cert.name}</h3>
              <p className="text-gray-500">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to go green?
            </h2>
            <p className="mt-4 text-xl text-green-100">
              Switch to sustainable printing solutions today
            </p>
            <button className="mt-8 bg-white text-green-600 px-8 py-3 rounded-md font-medium hover:bg-green-50">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SustainableProducts; 