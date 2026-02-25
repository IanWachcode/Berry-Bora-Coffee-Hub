import React, { useEffect } from 'react';
import { useAppStore } from '../store/appStore';

const Prices = () => {
  const coffeePrices = useAppStore((state) => state.coffeePrices);
  const pricesLoading = useAppStore((state) => state.pricesLoading);
  const pricesError = useAppStore((state) => state.pricesError);
  const pricesSource = useAppStore((state) => state.pricesSource);
  const fetchPrices = useAppStore((state) => state.fetchPrices);

  // Fetch prices on component mount
  useEffect(() => {
    fetchPrices();
  }, [fetchPrices]);

  // Use fetched prices or fallback to mock
  const displayData = coffeePrices.length > 0 ? coffeePrices : [
    { grade: 'Arabica AA', price: 550, change: '+5.0%', trend: 'up' },
    { grade: 'Arabica AB', price: 520, change: '+3.2%', trend: 'up' },
    { grade: 'Arabica C', price: 480, change: '-1.5%', trend: 'down' },
    { grade: 'Robusta', price: 420, change: '+2.1%', trend: 'up' },
  ];

  return (
    <div style={{ padding: '1rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Page Header */}
      <div style={{ marginBottom: '1rem' }}>
        <h2 style={{ 
          fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
          fontWeight: 'bold', 
          marginBottom: '0.5rem' 
        }}>
          Current Coffee Prices
        </h2>
        <div style={{ 
          fontSize: '0.875rem', 
          color: '#666', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem', 
          flexWrap: 'wrap' 
        }}>
          <span>Live prices from Nairobi Coffee Exchange (KSh per kg)</span>
          {pricesSource && (
            <span style={{ 
              fontSize: '0.75rem', 
              backgroundColor: pricesSource === 'kilimo' ? '#dcfce7' : '#fef3c7',
              color: pricesSource === 'kilimo' ? '#166534' : '#92400e',
              padding: '0.125rem 0.5rem',
              borderRadius: '0.25rem',
              fontWeight: '500'
            }}>
              {pricesSource === 'kilimo' ? '🇰🇪 KilimoSTAT{}' : '📊 Mock Data'}
            </span>
          )}
        </div>
      </div>

      {/* Loading State */}
      {pricesLoading && (
        <div style={{ 
          textAlign: 'center', 
          padding: '3rem',
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          marginBottom: '1rem'
        }}>
          <div style={{ 
            width: '3rem', 
            height: '3rem', 
            border: '4px solid #f3f4f6',
            borderTop: '4px solid #6d4c41',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 1rem'
          }}></div>
          <p style={{ color: '#666' }}>Loading coffee prices...</p>
        </div>
      )}

      {/* Error State */}
      {pricesError && (
        <div style={{
          backgroundColor: '#fef2f2',
          borderLeft: '4px solid #ef4444',
          padding: '1rem',
          borderRadius: '0.25rem',
          marginBottom: '1rem'
        }}>
          <p style={{ color: '#991b1b', fontWeight: '500' }}>
            ⚠️ {pricesError}
          </p>
          <button
            onClick={() => fetchPrices()}
            style={{
              marginTop: '0.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '0.25rem',
              cursor: 'pointer'
            }}
          >
            Retry
          </button>
        </div>
      )}

      {/* Mobile Card View */}
      <div>
        {displayData.map((item, index) => (
          <div key={index} style={{ 
            backgroundColor: 'white', 
            borderRadius: '0.5rem', 
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)', 
            padding: '1rem',
            marginBottom: '1rem'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginBottom: '0.5rem' 
            }}>
              <h3 style={{ fontWeight: '600', fontSize: '1.125rem' }}>
                {item.grade}
              </h3>
              <span style={{ 
                fontWeight: '600',
                fontSize: '0.875rem',
                color: item.trend === 'up' ? '#2f855a' : '#c53030'
              }}>
                <i className={`fas fa-arrow-${item.trend === 'up' ? 'up' : 'down'}`} 
                   style={{ marginRight: '0.25rem' }}></i>
                {item.change}
              </span>
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#6d4c41' }}>
              KSh {item.price}/kg
            </div>
          </div>
        ))}
      </div>

      {/* Info Notice */}
      <div style={{ 
        backgroundColor: '#eff6ff', 
        borderLeft: '4px solid #3b82f6', 
        padding: '0.75rem', 
        borderRadius: '0.25rem',
        fontSize: '0.875rem',
        marginTop: '1rem'
      }}>
        <i className="fas fa-info-circle" style={{ color: '#3b82f6', marginRight: '0.5rem' }}></i>
        Prices updated daily at 10:00 AM EAT. Contact your local cooperative for bulk rates.
      </div>

      {/* Loading Animation */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Prices;