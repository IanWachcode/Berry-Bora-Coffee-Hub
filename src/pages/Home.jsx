import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1600&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 bg-black/30 p-10 rounded-3xl max-w-3xl mx-4 backdrop-blur-md border border-white/20 shadow-2xl fade-in">
          <div className="mx-auto mb-6 w-28 h-28 bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
            <i className="fas fa-coffee text-6xl text-coffee-dark"></i>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Welcome to Berry Bora
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 font-light">
            Empowering Kenyan Coffee Farmers with Real-Time Market Insights
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/prices"
              className="bg-amber-600 hover:bg-amber-700 text-white py-4 px-10 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <i className="fas fa-tag mr-2"></i>
              View Prices
            </Link>
            <Link
              to="/trends"
              className="bg-white/20 hover:bg-white/30 text-white py-4 px-10 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm border-2 border-white/30 transform hover:scale-105"
            >
              <i className="fas fa-chart-line mr-2"></i>
              Market Trends
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-[#f8f6f2] to-white">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-4">
            Why Choose Berry Bora?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to succeed in coffee farming, all in one place
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center card-hover border-t-4 border-green-primary">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-transform duration-300">
              <i className="fas fa-chart-line text-4xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-coffee-dark mb-4">
              Real-Time Prices
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Get up-to-date coffee prices from Nairobi Coffee Exchange and local markets, updated daily.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center card-hover border-t-4 border-amber-500">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-transform duration-300">
              <i className="fas fa-bell text-4xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-coffee-dark mb-4">
              Smart Alerts
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Receive timely alerts about weather changes, price fluctuations, and market opportunities.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center card-hover border-t-4 border-blue-500">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-transform duration-300">
              <i className="fas fa-mobile-alt text-4xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-coffee-dark mb-4">
              SMS Support
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Access key features via SMS commands - no internet required for basic functionality.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-coffee-dark to-coffee-medium rounded-3xl p-12 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="fade-in">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Active Farmers</div>
            </div>
            <div className="fade-in">
              <div className="text-5xl font-bold mb-2">KSh 550</div>
              <div className="text-sm opacity-90">Avg. Price/kg</div>
            </div>
            <div className="fade-in">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">SMS Support</div>
            </div>
            <div className="fade-in">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">Free to Use</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;