import React from 'react';
import { useAppStore } from '../store/appStore';

const Alerts = () => {
  const alerts = useAppStore((state) => state.alerts);

  const getSeverityStyles = (severity) => {
    switch (severity) {
      case 'success':
        return 'bg-green-100 border-green-500 text-green-800';
      case 'warning':
        return 'bg-amber-100 border-amber-500 text-amber-800';
      case 'info':
        return 'bg-blue-100 border-blue-500 text-blue-800';
      default:
        return 'bg-gray-100 border-gray-500 text-gray-800';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'price':
        return 'fa-tag';
      case 'weather':
        return 'fa-cloud-sun-rain';
      case 'market':
        return 'fa-chart-line';
      default:
        return 'fa-bell';
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-coffee-dark mb-2">
          Alerts & Notifications
        </h2>
        <p className="text-gray-600">
          Stay updated with important market and weather alerts
        </p>
      </div>

      {/* Alerts List */}
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`border-l-4 p-4 rounded-lg shadow-md ${getSeverityStyles(
              alert.severity
            )}`}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <i className={`fas ${getTypeIcon(alert.type)} text-2xl mr-3`}></i>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-white bg-opacity-50">
                    {alert.type.toUpperCase()}
                  </span>
                  <span className="text-sm opacity-75">
                    {formatDate(alert.date)}
                  </span>
                </div>
                <p className="text-base font-medium">{alert.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (if no alerts) */}
      {alerts.length === 0 && (
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <i className="fas fa-bell-slash text-6xl text-gray-300 mb-4"></i>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No Alerts Yet
          </h3>
          <p className="text-gray-500">
            You'll receive notifications here when there are important updates
          </p>
        </div>
      )}

      {/* Alert Stats */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">
            {alerts.filter((a) => a.severity === 'info').length}
          </div>
          <div className="text-xs text-gray-600 mt-1">Info</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-amber-600">
            {alerts.filter((a) => a.severity === 'warning').length}
          </div>
          <div className="text-xs text-gray-600 mt-1">Warnings</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-green-600">
            {alerts.filter((a) => a.severity === 'success').length}
          </div>
          <div className="text-xs text-gray-600 mt-1">Success</div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;