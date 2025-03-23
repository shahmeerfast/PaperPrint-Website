import React from 'react';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Contact = () => {
  const contactInfo = [
    {
      icon: <EmailIcon className="text-3xl text-blue-600" />,
      title: "Email",
      details: ["info@paperprint.com", "support@paperprint.com"],
      action: "mailto:info@paperprint.com"
    },
    {
      icon: <PhoneIcon className="text-3xl text-blue-600" />,
      title: "Phone",
      details: ["+1 (123) 456-7890", "+1 (123) 456-7891"],
      action: "tel:+11234567890"
    },
    {
      icon: <LocationOnIcon className="text-3xl text-blue-600" />,
      title: "Address",
      details: ["123 Print Street", "New York, NY 10001"],
      action: "https://maps.google.com"
    },
    {
      icon: <AccessTimeIcon className="text-3xl text-blue-600" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM"],
      action: null
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
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Get in touch with our team for any inquiries or support
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                {info.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{info.title}</h3>
              {info.details.map((detail, i) => (
                <p key={i} className="text-gray-600">{detail}</p>
              ))}
              {info.action && (
                <a
                  href={info.action}
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View →
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
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
              <div>
                <label className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Message subject"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">What are your delivery times?</h3>
                <p className="text-gray-600">Standard delivery takes 3-5 business days. Express shipping options are available for urgent orders.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do you offer bulk discounts?</h3>
                <p className="text-gray-600">Yes, we offer special pricing for bulk orders. Contact our sales team for a custom quote.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What file formats do you accept?</h3>
                <p className="text-gray-600">We accept PDF, AI, PSD, and most other standard design file formats.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I track my order?</h3>
                <p className="text-gray-600">Yes, you'll receive a tracking number once your order ships.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact; 