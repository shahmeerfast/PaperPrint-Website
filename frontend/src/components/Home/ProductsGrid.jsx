import React from 'react';
import { Link } from 'react-router-dom';
import BrushIcon from '@mui/icons-material/Brush';
import CampaignIcon from '@mui/icons-material/Campaign';
import RecyclingIcon from '@mui/icons-material/Recycling';
import PersonIcon from '@mui/icons-material/Person';

const ProductsGrid = () => {
  const products = [
    {
      title: "Logo Designs",
      description: "Professional logo design services for your brand identity",
      icon: <BrushIcon className="text-5xl text-blue-600" />,
      link: "/services/logo-design"
    },
    {
      title: "Marketing Materials",
      description: "High-quality prints for all your marketing needs",
      icon: <CampaignIcon className="text-5xl text-blue-600" />,
      link: "/services/marketing-materials"
    },
    {
      title: "Sustainable Products",
      description: "Eco-friendly printing solutions and materials",
      icon: <RecyclingIcon className="text-5xl text-blue-600" />,
      link: "/services/sustainable-products"
    },
    {
      title: "Personalized Products",
      description: "Custom designs for your unique requirements",
      icon: <PersonIcon className="text-5xl text-blue-600" />,
      link: "/services/personalized-products"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Products & Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Link 
              key={index}
              to={product.link}
              className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                {product.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
                <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800">
                  Explore →
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid; 