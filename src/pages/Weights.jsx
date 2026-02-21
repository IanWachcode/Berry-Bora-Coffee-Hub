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
      addWeightRecord({ weight: parseFloat(weight), variety });
      showNotification(`Recorded ${weight}kg!`);
      setWeight('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className="text-2xl font-bold mb-1">Record Harvest Weight</h2>
      <p className="text-sm text-gray-600 mb-4">Track your coffee harvest production</p>

      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Coffee Variety</label>
            <select
              value={variety}
              onChange={(e) => setVariety(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-coffee-dark focus:border-transparent"
            >
              <option value="arabica-aa">Arabica AA</option>
              <option value="arabica-ab">Arabica AB</option>
              <option value="arabica-c">Arabica C</option>
              <option value="robusta">Robusta</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight"
              min="0"
              step="0.1"
              required
              className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-coffee-dark focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-coffee-dark hover:bg-coffee-medium text-white font-semibold py-2 rounded"
          >
            <i className="fas fa-save mr-2"></i>Record Weight
          </button>
        </form>

        <div className="mt-3 p-2 bg-blue-50 rounded text-sm">
          <i className="fas fa-sms mr-2"></i>
          SMS: <strong>WEIGHT 150KG</strong> to 22000
        </div>
      </div>

      {weightRecords.length > 0 && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <h3 className="font-semibold p-3 border-b">Recent Records</h3>
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-2">Date</th>
                <th className="text-left p-2">Variety</th>
                <th className="text-right p-2">Weight</th>
              </tr>
            </thead>
            <tbody>
              {weightRecords.slice().reverse().map((record) => (
                <tr key={record.id} className="border-b last:border-b-0">
                  <td className="p-2">{new Date(record.date).toLocaleDateString()}</td>
                  <td className="p-2 capitalize">{record.variety.replace('-', ' ')}</td>
                  <td className="p-2 text-right font-semibold">{record.weight} kg</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Weights;