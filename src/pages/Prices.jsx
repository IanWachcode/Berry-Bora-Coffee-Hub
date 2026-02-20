import React from 'react';
import { useAppStore } from '../store/appStore';

const Prices = () => {
  const showNotification = useAppStore((state) => state.showNotification);

  const priceData = [
    { grade: 'Arabica AA', price: 550, change: '+5.0%', trend: 'up', quality: 'Premium' },
    { grade: 'Arabica AB', price: 520, change: '+3.2%', trend: 'up', quality: 'High' },
    { grade: 'Arabica C', price: 480, change: '-1.5%', trend: 'down', quality: 'Standard' },
    { grade: 'Robusta', price: 420, change: '+2.1%', trend: 'up', quality: 'Commercial' },
  ];

  const handlePriceAlert = (grade, price) => {
    showNotification(`${grade} is now KSh ${price}/kg - Great time to sell!`);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl fade-in">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-4xl font-bold text-coffee-dark mb-2">
              Coffee Prices
            </h2>
            <p className="text-gray-600 flex items-center">
              <i className="fas fa-sync-alt mr-2 text-green-primary"></i>
              Last updated: Today at 10:00 AM EAT
            </p>
          </div>
          <button className="bg-green-primary hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
            <i className="fas fa-download mr-2"></i>
            Export Prices
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg p-6 border border-green-200 card-hover">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold text-green-700">↑ 75%</div>
              <div className="text-sm text-gray-600 mt-1">Prices Up</div>
            </div>
            <i className="fas fa-arrow-trend-up text-4xl text-green-500 opacity-20"></i>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-coffee-dark to-coffee-medium rounded-xl shadow-lg p-6 text-white card-hover">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold">KSh 518</div>
              <div className="text-sm opacity-90 mt-1">Avg Price</div>
            </div>
            <i className="fas fa-coins text-4xl opacity-20"></i>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-6 border border-blue-200 card-hover">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold text-blue-700">High</div>
              <div className="text-sm text-gray-600 mt-1">Demand</div>
            </div>
            <i className="fas fa-chart-line text-4xl text-blue-500 opacity-20"></i>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-lg p-6 border border-amber-200 card-hover">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold text-amber-700">+3.7%</div>
              <div className="text-sm text-gray-600 mt-1">This Week</div>
            </div>
            <i className="fas fa-calendar-week text-4xl text-amber-500 opacity-20"></i>
          </div>
        </div>
      </div>

      {/* Price Table */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-coffee-dark to-coffee-medium text-white">
              <tr>
                <th className="text-left p-5 font-semibold">Coffee Grade</th>
                <th className="text-left p-5 font-semibold">Quality</th>
                <th className="text-right p-5 font-semibold">Price (KSh/kg)</th>
                <th className="text-right p-5 font-semibold">24h Change</th>
                <th className="text-right p-5 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {priceData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b last:border-b-0 hover:bg-gradient-to-r hover:from-coffee-highlight hover:to-transparent transition-all duration-200"
                >
                  <td className="p-5">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-coffee-dark rounded-full flex items-center justify-center mr-3">
                        <i className="fas fa-coffee text-white"></i>
                      </div>
                      <span className="font-bold text-gray-800 text-lg">{item.grade}</span>
                    </div>
                  </td>
                  <td className="p-5">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">
                      {item.quality}
                    </span>
                  </td>
                  <td className="p-5 text-right">
                    <span className="text-2xl font-bold text-coffee-dark">
                      {item.price}
                    </span>
                  </td>
                  <td className="p-5 text-right">
                    <span className={`inline-flex items-center font-bold text-lg ${
                      item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <i className={`fas fa-arrow-${
                        item.trend === 'up' ? 'up' : 'down'
                      } mr-2`}></i>
                      {item.change}
                    </span>
                  </td>
                  <td className="p-5 text-right">
                    <button
                      onClick={() => handlePriceAlert(item.grade, item.price)}
                      className="bg-green-primary hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all transform hover:scale-105 font-medium"
                    >
                      <i className="fas fa-bell mr-2"></i>
                      Set Alert
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 rounded-xl shadow-lg">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <i className="fas fa-info text-white text-xl"></i>
            </div>
          </div>
          <div className="ml-4">
            <h4 className="font-bold text-blue-900 mb-2 text-lg">Price Update Information</h4>
            <p className="text-blue-800">
              Prices are updated daily at <strong>10:00 AM EAT</strong> from Nairobi Coffee Exchange. 
              Contact your local cooperative for bulk purchase rates and current availability. 
              SMS <strong>PRICE</strong> to <strong>22000</strong> for instant price updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;