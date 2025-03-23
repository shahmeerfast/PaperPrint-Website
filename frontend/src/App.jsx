import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Home/Hero';
import ProductsGrid from './components/Home/ProductsGrid';
import PersonalizedPackages from './components/Home/PersonalizedPackages';
import About from './pages/About';
import Contact from './pages/Contact';
import Packages from './pages/Packages';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import LogoDesign from './pages/services/LogoDesign';
import MarketingMaterials from './pages/services/MarketingMaterials';
import SustainableProducts from './pages/services/SustainableProducts';
import PersonalizedProducts from './pages/services/PersonalizedProducts';
import { AuthProvider } from './context/AuthContext';
import './App.css';

// Home component
const Home = () => {
  return (
    <div>
      <Hero />
      <ProductsGrid />
      <PersonalizedPackages />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsGrid />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/services/logo-design" element={<LogoDesign />} />
            <Route path="/services/marketing-materials" element={<MarketingMaterials />} />
            <Route path="/services/sustainable-products" element={<SustainableProducts />} />
            <Route path="/services/personalized-products" element={<PersonalizedProducts />} />
          </Routes>
          
          {/* Footer */}
          <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Contact Info */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                  <p>123 Print Street</p>
                  <p>Paper City, PC 12345</p>
                  <p>Phone: (555) 123-4567</p>
                  <p>Email: info@paperprint.com</p>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/packages">Packages</a></li>
                  </ul>
                </div>

                {/* Newsletter */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                  <p className="mb-4">Subscribe to our newsletter for updates and special offers!</p>
                  <form className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 rounded-md text-gray-900"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 