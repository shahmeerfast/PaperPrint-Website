import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageError, setImageError] = useState(false);

  const slides = [
    {
      title: "Worldwide Shipping",
      subtitle: "We deliver quality prints across the globe",
      image: `${process.env.PUBLIC_URL}/images/hero-shipping.jpg`,
      bgPosition: "center"
    },
    {
      title: "Premium Printing Solutions",
      subtitle: "High-quality printing services for all your needs",
      image: `${process.env.PUBLIC_URL}/images/hero-printing.jpg`,
      bgPosition: "center"
    },
    {
      title: "Sustainable Practices",
      subtitle: "Eco-friendly printing solutions for a better tomorrow",
      image: `${process.env.PUBLIC_URL}/images/hero-eco.jpg`,
      bgPosition: "center"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleImageError = (e) => {
    console.error('Image failed to load:', e.target.src);
    setImageError(true);
  };

  return (
    <div className="relative h-screen max-h-[600px] overflow-hidden">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gray-900"
        >
          {!imageError ? (
            <img 
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                filter: 'brightness(0.4)'
              }}
              onError={handleImageError}
            />
          ) : (
            <div className="absolute inset-0 bg-gray-800" />
          )}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))'
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full flex items-center justify-center text-center z-10">
        <div className="max-w-4xl px-4">
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            {slides[currentSlide].title}
          </motion.h1>
          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-white mb-8"
          >
            {slides[currentSlide].subtitle}
          </motion.p>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            onClick={() => window.location.href = '/products'}
          >
            Start Creating
          </motion.button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-blue-600' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero; 