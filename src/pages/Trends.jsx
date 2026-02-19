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
  Filler,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { useAppStore } from '../store/appStore';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Trends = () => {
  const priceData = useAppStore((state) => state.priceData);
  const demandData = useAppStore((state) => state.demandData);

  // Line Chart Data (Price Trends)
  const priceChartData = {
    labels: priceData.labels,
    datasets: [
      {
        label: 'Arabica AA (KSh per kg)',
        data: priceData.values,
        borderColor: '#3d8b3d',
        backgroundColor: 'rgba(61, 139, 61, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#3d8b3d',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
      },
    ],
  };

  // Bar Chart Data (Demand)
  const demandChartData = {
    labels: demandData.labels,
    datasets: [
      {
        label: 'Demand (tons)',
        data: demandData.values,
        backgroundColor: [
          'rgba(61, 139, 61, 0.9)',
          'rgba(61, 139, 61, 0.75)',
          'rgba(61, 139, 61, 0.6)',
          'rgba(61, 139, 61, 0.45)',
          'rgba(61, 139, 61, 0.3)',
        ],
        borderColor: '#3d8b3d',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-coffee-dark mb-2">
          Market Trends & Analysis
        </h2>
        <p className="text-gray-600">
          Visual insights into coffee market performance
        </p>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Price Trends Chart */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-coffee-dark mb-4">
            <i className="fas fa-chart-line text-green-primary mr-2"></i>
            Price Trends (6 Months)
          </h3>
          <div className="h-64">
            <Line data={priceChartData} options={chartOptions} />
          </div>
        </div>

        {/* Global Demand Chart */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-coffee-dark mb-4">
            <i className="fas fa-globe text-green-primary mr-2"></i>
            Global Demand by Region
          </h3>
          <div className="h-64">
            <Bar data={demandChartData} options={chartOptions} />
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-coffee-dark mb-4">
          <i className="fas fa-lightbulb text-amber-500 mr-2"></i>
          Key Insights
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <i className="fas fa-arrow-up text-green-600 mt-1 mr-3"></i>
            <span className="text-gray-700">
              Arabica AA prices have increased by <strong>8%</strong> over the last 6 months, 
              indicating strong market demand.
            </span>
          </li>
          <li className="flex items-start">
            <i className="fas fa-globe text-blue-600 mt-1 mr-3"></i>
            <span className="text-gray-700">
              European market shows strongest demand with <strong>350 tons</strong>, 
              followed by North America at 275 tons.
            </span>
          </li>
          <li className="flex items-start">
            <i className="fas fa-chart-line text-amber-600 mt-1 mr-3"></i>
            <span className="text-gray-700">
              Local consumption growing steadily, up <strong>15%</strong> year-over-year, 
              creating new market opportunities.
            </span>
          </li>
          <li className="flex items-start">
            <i className="fas fa-leaf text-green-600 mt-1 mr-3"></i>
            <span className="text-gray-700">
              Quality Arabica varieties commanding premium prices in international markets.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Trends;