import React from 'react';
import { motion } from 'framer-motion';
import PrintIcon from '@mui/icons-material/Print';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ColorLensIcon from '@mui/icons-material/ColorLens';

const Products = () => {
  const services = [
    {
      title: "Digital Printing",
      description: "High-quality digital printing services for all your needs. Fast turnaround and vibrant colors guaranteed.",
      icon: <PrintIcon className="text-4xl text-blue-600" />,
      features: ["Quick turnaround", "High resolution", "Color matching", "Various paper options"]
    },
    {
      title: "Design Services",
      description: "Professional design services to help bring your vision to life. From logos to complete branding packages.",
      icon: <DesignServicesIcon className="text-4xl text-blue-600" />,
      features: ["Logo design", "Brand identity", "Marketing materials", "Custom illustrations"]
    },
    {
      title: "Offset Printing",
      description: "Traditional offset printing for larger quantities with exceptional quality and cost-effectiveness.",
      icon: <LocalPrintshopIcon className="text-4xl text-blue-600" />,
      features: ["Large volumes", "Consistent quality", "Pantone colors", "Special finishes"]
    },
    {
      title: "Custom Solutions",
      description: "Tailored printing solutions for unique requirements and special projects.",
      icon: <ColorLensIcon className="text-4xl text-blue-600" />,
      features: ["Custom sizes", "Special materials", "Unique finishes", "Expert consultation"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Products & Services</h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Discover our comprehensive range of printing and design solutions
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                {service.icon}
                <h2 className="text-2xl font-semibold ml-4">{service.title}</h2>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Custom Quote</h2>
          <p className="text-gray-600 mb-8">
            Need something specific? Get a custom quote for your printing needs.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">Project Details</label>
              <textarea
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Describe your project"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
                Get Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Products; 