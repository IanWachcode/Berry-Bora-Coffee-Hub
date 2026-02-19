import React, { useState } from 'react';
import { useAppStore } from '../store/appStore';

const Weights = () => {
  const [weight, setWeight] = useState('');
  const [variety, setVariety] = useState('arabica-aa');
  
  const weightRecords = useAppStore((state) => state.weightRecords);
  const addWeightRecord = useAppStore((state) => state.addWeightRecord);
  const showNotification = useAppStore((state) => state.showNotification);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (weight && parseFloat(weight) > 0) {
      addWeightRecord({
        weight: parseFloat(weight),
        variety,
      });
      
      showNotification(`Recorded ${weight}kg of ${variety.replace('-', ' ')}!`);
      
      // Reset form
      setWeight('');
      setVariety('arabica-aa');
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const getTotalWeight = () => {
    return weightRecords.reduce((sum, record) => sum + record.weight, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-coffee-dark mb-2">
          Record Harvest Weight
        </h2>
        <p className="text-gray-600">
          Track your coffee harvest to better manage your production
        </p>
      </div>

      {/* Weight Form */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="variety"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Coffee Variety
            </label>
            <select
              id="variety"
              value={variety}
              onChange={(e) => setVariety(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-dark focus:border-transparent"
            >
              <option value="arabica-aa">Arabica AA</option>
              <option value="arabica-ab">Arabica AB</option>
              <option value="arabica-c">Arabica C</option>
              <option value="ruiru-11">Ruiru 11</option>
              <option value="batian">Batian</option>
              <option value="robusta">Robusta</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="weight"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight in kilograms"
              min="0"
              step="0.1"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-dark focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-coffee-dark hover:bg-coffee-medium text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            <i className="fas fa-save mr-2"></i>
            Record Weight
          </button>
        </form>

        {/* SMS Info */}
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <i className="fas fa-sms text-blue-600 mr-2"></i>
            You can also send <strong>WEIGHT 150KG</strong> via SMS to 22000 to record your harvest
          </p>
        </div>
      </div>

      {/* Total Stats */}
      {weightRecords.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 rounded-lg shadow p-4 text-center border border-green-200">
            <div className="text-3xl font-bold text-green-600">
              {getTotalWeight().toFixed(1)} kg
            </div>
            <div className="text-sm text-gray-600 mt-1">Total Harvest</div>
          </div>
          <div className="bg-coffee-highlight rounded-lg shadow p-4 text-center border border-coffee-light">
            <div className="text-3xl font-bold text-coffee-dark">
              {weightRecords.length}
            </div>
            <div className="text-sm text-gray-600 mt-1">Records</div>
          </div>
        </div>
      )}

      {/* Recent Records */}
      {weightRecords.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-coffee-dark mb-4">
            Recent Records
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Variety
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                    Weight (kg)
                  </th>
                </tr>
              </thead>
              <tbody>
                {weightRecords.slice().reverse().map((record) => (
                  <tr key={record.id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {formatDate(record.date)}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 capitalize">
                      {record.variety.replace('-', ' ')}
                    </td>
                    <td className="px-4 py-3 text-sm text-right font-semibold text-coffee-dark">
                      {record.weight}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Empty State */}
      {weightRecords.length === 0 && (
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <i className="fas fa-weight text-6xl text-gray-300 mb-4"></i>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No Records Yet
          </h3>
          <p className="text-gray-500">
            Start recording your harvest weights using the form above
          </p>
        </div>
      )}
    </div>
  );
};

export default Weights;