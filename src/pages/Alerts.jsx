import React, { useEffect } from 'react';
import { useAppStore } from '../store/appStore';

const Alerts = () => {
  const alerts = useAppStore((state) => state.alerts);
  const weatherData = useAppStore((state) => state.weatherData);
  const weatherLoading = useAppStore((state) => state.weatherLoading);
  const fetchWeather = useAppStore((state) => state.fetchWeather);

  // Fetch weather when page loads
  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);UPWORK

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'success': return { bg: '#dcfce7', border: '#16a34a', text: '#166534' };
      case 'warning': return { bg: '#fef3c7', border: '#f59e0b', text: '#92400e' };
      case 'info': return { bg: '#dbeafe', border: '#3b82f6', text: '#1e40af' };
      default: return { bg: '#f3f4f6', border: '#6b7280', text: '#374151' };
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
    <div style={{ padding: '1rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 'bold', marginBottom: '0.5rem' }}>
        Alerts & Notifications
      </h2>
      <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '1rem' }}>
        Important market and weather updates
      </p>

      {/* Current Weather Card */}
      {weatherData && (
        <div style={{
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          padding: '1rem',
          marginBottom: '1rem',
          border: '2px solid #3b82f6'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ fontWeight: '600', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <i className="fas fa-cloud-sun" style={{ color: '#3b82f6' }}></i>
                Current Weather - {weatherData.city}
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#666', textTransform: 'capitalize', marginBottom: '0.5rem' }}>
                {weatherData.description}
              </p>
              <div style={{ fontSize: '0.75rem', color: '#666', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <span>💧 Humidity: {weatherData.humidity}%</span>
                <span>🌬️ Wind: {weatherData.windSpeed} m/s</span>
                <span>☁️ Clouds: {weatherData.clouds}%</span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#6d4c41' }}>
                {weatherData.temp}°C
              </div>
              <div style={{ fontSize: '0.875rem', color: '#666' }}>
                Feels like {weatherData.feelsLike}°C
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Weather Loading */}
      {weatherLoading && (
        <div style={{ 
          textAlign: 'center', 
          padding: '2rem', 
          backgroundColor: 'white', 
          borderRadius: '0.5rem', 
          marginBottom: '1rem' 
        }}>
          <div style={{ 
            width: '2rem', 
            height: '2rem', 
            border: '3px solid #f3f4f6',
            borderTop: '3px solid #6d4c41',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto'
          }}></div>
          <p style={{ marginTop: '0.5rem', color: '#666', fontSize: '0.875rem' }}>
            Loading weather data...
          </p>
        </div>
      )}

      {/* Alerts List */}
      <div>
        {alerts.map((alert) => {
          const colors = getSeverityColor(alert.severity);
          return (
            <div
              key={alert.id}
              style={{
                backgroundColor: colors.bg,
                borderLeft: `4px solid ${colors.border}`,
                padding: '0.75rem',
                borderRadius: '0.25rem',
                marginBottom: '0.75rem',
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
                <i 
                  className={`fas ${getTypeIcon(alert.type)}`} 
                  style={{ fontSize: '1.25rem', color: colors.text, marginTop: '0.125rem' }}
                ></i>
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    marginBottom: '0.25rem', 
                    flexWrap: 'wrap', 
                    gap: '0.5rem' 
                  }}>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      fontWeight: '600', 
                      textTransform: 'uppercase',
                      color: colors.text
                    }}>
                      {alert.type}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: colors.text, opacity: 0.75 }}>
                      {new Date(alert.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: colors.text, margin: 0 }}>
                    {alert.message}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Spinner Animation */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Alerts;