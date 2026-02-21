import React from 'react';
import { useAppStore } from '../store/appStore';

const Alerts = () => {
  const alerts = useAppStore((state) => state.alerts);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'success': return 'bg-green-50 border-green-500';
      case 'warning': return 'bg-amber-50 border-amber-500';
      case 'info': return 'bg-blue-50 border-blue-500';
      default: return 'bg-gray-50 border-gray-500';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'price': return 'fa-tag';
      case 'weather': return 'fa-cloud-sun-rain';
      case 'market': return 'fa-chart-line';
      default: return 'fa-bell';
    }
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className="text-2xl font-bold mb-1">Alerts & Notifications</h2>
      <p className="text-sm text-gray-600 mb-4">Important market and weather updates</p>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`border-l-4 p-3 rounded shadow-sm ${getSeverityColor(alert.severity)}`}
          >
            <div className="flex items-start">
              <i className={`fas ${getTypeIcon(alert.type)} text-lg mr-3 mt-0.5`}></i>
              <div className="flex-1">
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-semibold uppercase">{alert.type}</span>
                  <span className="text-gray-500">
                    {new Date(alert.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm">{alert.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alerts;