import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-coffee py-6 mt-12">
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        textAlign: 'center',
        padding: '0 1rem'
      }}>
        <div style={{ marginBottom: '1rem' }}>
          <p style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>
            © 2025 Berry Bora Coffee Hub | Empowering Kenyan Coffee Farmers
          </p>
        </div>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem', 
          flexWrap: 'wrap',
          fontSize: '0.875rem'
        }}>
          <a 
            href="tel:22000" 
            style={{ 
              color: 'white', 
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              opacity: 0.9,
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
          >
            <i className="fas fa-message"></i>
            <span>SMS: 22000</span>
            <i className="fas fa-phone"></i>
            <span>Call: 0712345678</span>
          </a>
          <a 
            href="mailto:support@berrybora.ke" 
            style={{ 
              color: 'white', 
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              opacity: 0.9,
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
          >
            <i className="fas fa-envelope"></i>
            <span>support@berrybora.ke</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
