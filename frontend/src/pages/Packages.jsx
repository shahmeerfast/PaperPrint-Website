import React from 'react';
import { motion } from 'framer-motion';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const Packages = () => {
  const packages = [
    {
      title: "Party Collection",
      icon: <CelebrationIcon className="text-5xl text-blue-600" />,
      description: "Make your celebration unique with our custom party printing collection",
      items: [
        { name: "Custom Menus", price: "from $2.99/piece" },
        { name: "Personalized Napkins", price: "from $1.99/piece" },
        { name: "Place Settings", price: "from $3.99/set" },
        { name: "Tablecloths", price: "from $24.99/piece" }
      ],
      popular: true
    },
    {
      title: "Clothing Line",
      icon: <CheckroomIcon className="text-5xl text-blue-600" />,
      description: "High-quality custom printed apparel for any occasion",
      items: [
        { name: "Custom Hoodies", price: "from $39.99" },
        { name: "Printed Sweatshirts", price: "from $29.99" },
        { name: "Gym Wear", price: "from $24.99" },
        { name: "Beanie Hats", price: "from $14.99" }
      ],
      popular: false
    },
    {
      title: "Office Essentials",
      icon: <BusinessCenterIcon className="text-5xl text-blue-600" />,
      description: "Professional printing solutions for your business needs",
      items: [
        { name: "Advertising Boards", price: "from $49.99" },
        { name: "Custom Diaries", price: "from $19.99" },
        { name: "Branded Notepads", price: "from $9.99" },
        { name: "Storage Solutions", price: "from $29.99" }
      ],
      popular: false
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
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Personalised Packages</h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Choose from our curated collection of printing packages
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${
                pkg.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg">
                  Popular
                </div>
              )}
              <div className="p-8">
                <div className="flex items-center justify-center mb-6">
                  {pkg.icon}
                </div>
                <h2 className="text-2xl font-semibold text-center mb-4">{pkg.title}</h2>
                <p className="text-gray-600 text-center mb-8">{pkg.description}</p>
                <ul className="space-y-4">
                  {pkg.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex justify-between items-center">
                      <span className="text-gray-700">{item.name}</span>
                      <span className="text-blue-600 font-semibold">{item.price}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-8 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                  Customize Package
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Package?</h2>
          <p className="text-gray-600 mb-8">
            We can create a personalized package tailored to your specific requirements
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
            Contact for Custom Package
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Packages; 