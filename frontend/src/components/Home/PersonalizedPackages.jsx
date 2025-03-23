import React from 'react';
import { Link } from 'react-router-dom';

const PersonalizedPackages = () => {
  const packages = [
    {
      title: "Party Collection",
      items: ["Menus", "Napkins", "Place settings", "Tablecloths"],
      image: "/images/party-collection.jpg",
      link: "/packages/party"
    },
    {
      title: "Clothing Line",
      items: ["Hoodies", "Sweatshirts", "Gym wear", "Beanie hats"],
      image: "/images/clothing-line.jpg",
      link: "/packages/clothing"
    },
    {
      title: "Office Essentials",
      items: ["Advertising boards", "Diaries", "Notepads", "Storage solutions"],
      image: "/images/office-essentials.jpg",
      link: "/packages/office"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Personalised Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Link
              key={index}
              to={pkg.link}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${pkg.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{pkg.title}</h3>
                  <ul className="space-y-2">
                    {pkg.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        className="flex items-center text-gray-600"
                      >
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 text-blue-600 font-semibold group-hover:text-blue-800">
                    View Package →
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalizedPackages; 