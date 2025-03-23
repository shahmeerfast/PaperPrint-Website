import React from 'react';
import { motion } from 'framer-motion';
import EditIcon from '@mui/icons-material/Edit';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import DownloadIcon from '@mui/icons-material/Download';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const LogoDesign = () => {
  const features = [
    {
      icon: <EditIcon className="text-blue-600 text-4xl" />,
      title: 'Custom Design',
      description: 'Unique logos tailored to your brand identity'
    },
    {
      icon: <ColorLensIcon className="text-blue-600 text-4xl" />,
      title: 'Color Variations',
      description: 'Multiple color schemes for different applications'
    },
    {
      icon: <DownloadIcon className="text-blue-600 text-4xl" />,
      title: 'File Formats',
      description: 'All necessary file formats for web and print'
    },
    {
      icon: <AccessTimeIcon className="text-blue-600 text-4xl" />,
      title: 'Quick Turnaround',
      description: 'Fast delivery without compromising quality'
    }
  ];

  const packages = [
    {
      name: 'Basic',
      price: 299,
      features: [
        '2 Initial Concepts',
        '2 Revisions',
        'Basic File Formats',
        '5 Days Delivery'
      ]
    },
    {
      name: 'Professional',
      price: 499,
      features: [
        '4 Initial Concepts',
        '4 Revisions',
        'All File Formats',
        'Color Variations',
        '3 Days Delivery'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: 799,
      features: [
        '6 Initial Concepts',
        'Unlimited Revisions',
        'All File Formats',
        'Color Variations',
        'Brand Guidelines',
        '48h Delivery'
      ]
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
              Professional Logo Design
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Create a lasting impression with a unique and memorable logo that represents your brand
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
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

      {/* Pricing Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Choose Your Package
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-sm overflow-hidden ${
                  pkg.popular ? 'ring-2 ring-blue-600' : 'border'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                  <p className="mt-4">
                    <span className="text-4xl font-extrabold text-gray-900">${pkg.price}</span>
                  </p>
                  <ul className="mt-6 space-y-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg
                          className="h-5 w-5 text-blue-600"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="ml-3 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`mt-8 w-full py-3 px-4 rounded-md shadow ${
                      pkg.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
                    } font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Our Design Process
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">1</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Discovery</h3>
            <p className="text-gray-500">Understanding your brand and requirements</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">2</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Concepts</h3>
            <p className="text-gray-500">Creating initial design concepts</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">3</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Revisions</h3>
            <p className="text-gray-500">Refining based on your feedback</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">4</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Delivery</h3>
            <p className="text-gray-500">Providing final files in all formats</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to create your brand identity?
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              Get started with your logo design project today
            </p>
            <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50">
              Contact Us Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LogoDesign; 