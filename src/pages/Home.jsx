import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center text-white">
      <img 
        src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1600&q=80" 
        alt="Coffee farm" 
        className="absolute inset-0 w-50 h-50 object-cover opacity-20"
      />
      <div className="relative z-10 bg-black bg-opacity-30 p-8 rounded-2xl max-w-2xl mx-4">
        <div className="mx-auto mb-4 w-24 h-24 bg-white rounded-full flex items-center justify-center">
          <i className="fas fa-coffee text-5xl text-coffee-dark"></i>
        </div>
        <h1 className="text-4xl font-bold mb-2">Welcome to Berry Bora</h1>
        <p className="text-lg mb-6">
          Empowering Kenyan Coffee Farmers with Real-Time Market Insights & Local Support
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            to="/prices" 
            className="bg-amber-700 hover:bg-amber-800 text-white py-2 px-6 rounded-md"
          >
            Get Started
          </Link>
          <Link 
            to="/trends" 
            className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white py-2 px-6 rounded-md"
          >
            View Trends
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;