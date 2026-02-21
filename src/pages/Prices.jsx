import React from 'react';

const Prices = () => {
  const priceData = [
    { grade: 'Arabica AA', price: 550, change: '+5.0%', trend: 'up' },
    { grade: 'Arabica AB', price: 520, change: '+3.2%', trend: 'up' },
    { grade: 'Arabica C', price: 480, change: '-1.5%', trend: 'down' },
    { grade: 'Robusta', price: 420, change: '+2.1%', trend: 'up' },
  ];

  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className="text-2xl font-bold mb-1">Current Coffee Prices</h2>
      <p className="text-sm text-gray-600 mb-4">Live prices from Nairobi Coffee Exchange (KSh per kg)</p>

      <div className="bg-white rounded-lg shadow overflow-hidden mb-4">
        <table className="w-full table-fixed">
          <thead className="bg-coffee-dark text-white">
            <tr>
              <th className="text-left p-3 font-semibold">Grade</th>
              <th className="text-right p-3 font-semibold">Price</th>
              <th className="text-right p-3 font-semibold">Change</th>
            </tr>
          </thead>
          <tbody>
            {priceData.map((item, index) => (
              <tr key={index} className="border-b last:border-b-0 hover:bg-coffee-highlight">
                <td className="p-3 font-semibold">{item.grade}</td>
                <td className="p-3 text-right text-lg font-bold">{item.price}</td>
                <td className={`p-3 text-right font-semibold ${item.trend === 'up' ? 'price-up' : 'price-down'}`}>
                  <i className={`fas fa-arrow-${item.trend === 'up' ? 'up' : 'down'} mr-1`}></i>
                  {item.change}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded text-sm">
        <i className="fas fa-info-circle text-blue-500 mr-2"></i>
        Prices updated daily at 10:00 AM EAT. Contact your local cooperative for bulk rates.
      </div>
    </div>
  );
};

export default Prices;