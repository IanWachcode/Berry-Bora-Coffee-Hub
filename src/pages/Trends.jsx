import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { useAppStore } from '../store/appStore';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Trends = () => {
  const priceData = useAppStore((state) => state.priceData);
  const demandData = useAppStore((state) => state.demandData);

  const priceChartData = {
    labels: priceData.labels,
    datasets: [
      {
        label: 'Arabica AA (KSh/kg)',
        data: priceData.values,
        borderColor: '#3d8b3d',
        backgroundColor: 'rgba(61, 139, 61, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const demandChartData = {
    labels: demandData.labels,
    datasets: [
      {
        label: 'Demand (tons)',
        data: demandData.values,
        backgroundColor: '#3d8b3d',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className="text-2xl font-bold mb-1">Market Trends</h2>
      <p className="text-sm text-gray-600 mb-4">Visual insights into coffee market performance</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold mb-3">Price Trends (6 Months)</h3>
          <div className="h-64">
            <Line data={priceChartData} options={chartOptions} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold mb-3">Global Demand</h3>
          <div className="h-64">
            <Bar data={demandChartData} options={chartOptions} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="font-semibold mb-2">Key Insights</h3>
        <ul className="space-y-1 text-sm text-gray-700">
          <li>→ Arabica AA prices increased 8% over 6 months</li>
          <li>→ European market shows strongest demand at 350 tons</li>
          <li>→ Local consumption up 15% year-over-year</li>
        </ul>
      </div>
    </div>
  );
};

export default Trends;