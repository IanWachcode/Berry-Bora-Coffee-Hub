import React from 'react';

const Prices = () => {
  const priceData = [
    { grade: 'Arabica AA', price: 550, change: '+5.0%', trend: 'up' },
    { grade: 'Arabica AB', price: 520, change: '+3.2%', trend: 'up' },
    { grade: 'Arabica C', price: 480, change: '-1.5%', trend: 'down' },
    { grade: 'Robusta', price: 420, change: '+2.1%', trend: 'up' },
  ];

  return (
    <div style={{ padding: '1rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 'bold', marginBottom: '0.5rem' }}>
        Current Coffee Prices
      </h2>
      <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '1rem' }}>
        Live prices from Nairobi Coffee Exchange (KSh per kg)
      </p>

      {/* Mobile: Card Layout, Desktop: Table */}
      <div style={{ display: 'none' }} className="desktop-table">
        <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden', marginBottom: '1rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ backgroundColor: '#6d4c41', color: 'white' }}>
              <tr>
                <th style={{ textAlign: 'left', padding: '0.75rem', fontWeight: '600' }}>Grade</th>
                <th style={{ textAlign: 'right', padding: '0.75rem', fontWeight: '600' }}>Price</th>
                <th style={{ textAlign: 'right', padding: '0.75rem', fontWeight: '600' }}>Change</th>
              </tr>
            </thead>
            <tbody>
              {priceData.map((item, index) => (
                <tr key={index} style={{ borderBottom: index < priceData.length - 1 ? '1px solid #e5e7eb' : 'none' }}>
                  <td style={{ padding: '0.75rem', fontWeight: '600' }}>{item.grade}</td>
                  <td style={{ padding: '0.75rem', textAlign: 'right', fontSize: '1.125rem', fontWeight: 'bold' }}>{item.price}</td>
                  <td style={{ 
                    padding: '0.75rem', 
                    textAlign: 'right', 
                    fontWeight: '600',
                    color: item.trend === 'up' ? '#2f855a' : '#c53030'
                  }}>
                    <i className={`fas fa-arrow-${item.trend === 'up' ? 'up' : 'down'}`} style={{ marginRight: '0.25rem' }}></i>
                    {item.change}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="mobile-cards" style={{ display: 'block' }}>
        {priceData.map((item, index) => (
          <div key={index} style={{ 
            backgroundColor: 'white', 
            borderRadius: '0.5rem', 
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)', 
            padding: '1rem',
            marginBottom: '1rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h3 style={{ fontWeight: '600', fontSize: '1.125rem' }}>{item.grade}</h3>
              <span style={{ 
                fontWeight: '600',
                fontSize: '0.875rem',
                color: item.trend === 'up' ? '#2f855a' : '#c53030'
              }}>
                <i className={`fas fa-arrow-${item.trend === 'up' ? 'up' : 'down'}`} style={{ marginRight: '0.25rem' }}></i>
                {item.change}
              </span>
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#6d4c41' }}>
              KSh {item.price}/kg
            </div>
          </div>
        ))}
      </div>

      <div style={{ 
        backgroundColor: '#eff6ff', 
        borderLeft: '4px solid #3b82f6', 
        padding: '0.75rem', 
        borderRadius: '0.25rem',
        fontSize: '0.875rem'
      }}>
        <i className="fas fa-info-circle" style={{ color: '#3b82f6', marginRight: '0.5rem' }}></i>
        Prices updated daily at 10:00 AM EAT. Contact your local cooperative for bulk rates.
      </div>

      <style>{`
        @media (min-width: 768px) {
          .desktop-table {
            display: block !important;
          }
          .mobile-cards {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Prices;