import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center text-white">
      {/* Background Image - More Visible */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1600&q=80)',
        }}
      >
        {/* Darker overlay for better text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content Card - More Transparent */}
      <div className="relative z-10 bg-black bg-opacity-20 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-4">
        <div className="mx-auto mb-4 w-24 h-24 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg">
          <i className="fas fa-coffee text-5xl text-coffee-dark"></i>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
          Welcome to Berry Bora
        </h1>
        <p className="text-lg md:text-xl mb-6 drop-shadow-md">
          Empowering Kenyan Coffee Farmers with Real-Time Market Insights & Local Support
        </p>
        
        {/* Buttons - Always Horizontal */}
        <div className="flex flex-row justify-center gap-4 flex-wrap">
          <Link 
            to="/prices" 
            className="bg-amber-700 hover:bg-amber-800 text-white py-3 px-8 rounded-md font-semibold shadow-lg transition-all hover:shadow-xl whitespace-nowrap"
          >
            Get Started
          </Link>
          <Link 
            to="/trends" 
            className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white py-3 px-8 rounded-md font-semibold border-2 border-white border-opacity-50 transition-all whitespace-nowrap"
          >
            View Trends
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;