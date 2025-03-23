import React from 'react';
import { motion } from 'framer-motion';
import HistoryIcon from '@mui/icons-material/History';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import GroupsIcon from '@mui/icons-material/Groups';
import PublicIcon from '@mui/icons-material/Public';

const About = () => {
  const features = [
    {
      icon: <HistoryIcon className="text-4xl text-blue-600" />,
      title: "Our History",
      description: "Founded in 2010, PaperPrint has grown from a small local print shop to a leading provider of printing solutions."
    },
    {
      icon: <EmojiObjectsIcon className="text-4xl text-blue-600" />,
      title: "Our Mission",
      description: "To provide innovative and sustainable printing solutions that help businesses and individuals bring their ideas to life."
    },
    {
      icon: <GroupsIcon className="text-4xl text-blue-600" />,
      title: "Our Team",
      description: "A dedicated team of printing experts and designers committed to delivering excellence in every project."
    },
    {
      icon: <PublicIcon className="text-4xl text-blue-600" />,
      title: "Global Reach",
      description: "Serving customers worldwide with efficient shipping and localized support services."
    }
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "50K+", label: "Projects Completed" },
    { number: "100+", label: "Countries Served" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">About PaperPrint</h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Your trusted partner in printing excellence
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-blue-600 rounded-lg p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                <div>
                  <h3 className="font-semibold mb-1">Quality First</h3>
                  <p className="text-gray-600">We never compromise on quality, ensuring every print meets our high standards.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                <div>
                  <h3 className="font-semibold mb-1">Innovation</h3>
                  <p className="text-gray-600">Constantly updating our technology and methods to provide cutting-edge solutions.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                <div>
                  <h3 className="font-semibold mb-1">Sustainability</h3>
                  <p className="text-gray-600">Committed to eco-friendly practices and sustainable printing solutions.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-gray-600 mb-6">
              We're always looking for talented individuals to join our growing team. If you're passionate about printing and design, we'd love to hear from you.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About; 