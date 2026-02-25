import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section style={{ 
      position: 'relative', 
      minHeight: '80vh',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      textAlign: 'center', 
      color: 'white',
      padding: '1rem'
    }}>
      {/* Background Image */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundColor: 'rgba(0, 0, 0, 0.4)' 
        }}></div>
      </div>

      {/* Content Card */}
      <div style={{ 
        position: 'relative', 
        zIndex: 10, 
        backgroundColor: 'rgba(0, 0, 0, 0.2)', 
        backdropFilter: 'blur(8px)',
        padding: '2rem 1.5rem',
        borderRadius: '1rem',
        maxWidth: '40rem',
        width: '100%'
      }}>
        <div style={{ 
          margin: '0 auto 1rem', 
          width: '5rem', 
          height: '5rem', 
          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <i className="fas fa-coffee" style={{ fontSize: '3rem', color: '#6d4c41' }}></i>
        </div>
        
        <h1 style={{ 
          fontSize: 'clamp(1.75rem, 5vw, 3rem)', 
          fontWeight: 'bold', 
          marginBottom: '0.5rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}>
          Welcome to Berry Bora
        </h1>
        
        <p style={{ 
          fontSize: 'clamp(1rem, 3vw, 1.25rem)', 
          marginBottom: '1.5rem',
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
        }}>
          Empowering Kenyan Coffee Farmers with Real-Time Market Insights & Local Support
        </p>
        
        {/* Buttons */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center'
        }}>
          <Link 
            to="/prices" 
            style={{
              backgroundColor: '#b45309',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '0.375rem',
              fontWeight: '600',
              textDecoration: 'none',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              width: '100%',
              maxWidth: '15rem',
              display: 'block'
            }}
          >
            Get Started
          </Link>
          <Link 
            to="/trends" 
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '0.375rem',
              fontWeight: '600',
              textDecoration: 'none',
              border: '2px solid rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(8px)',
              width: '100%',
              maxWidth: '15rem',
              display: 'block'
            }}
          >
            View Trends
          </Link>
          <Link 
            to="/alerts" 
            style={{
              backgroundColor: '#b45309',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '0.375rem',
              fontWeight: '600',
              textDecoration: 'none',
              border: '2px solid rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(8px)',
              width: '100%',
              maxWidth: '15rem',
              display: 'block'
            }}
          >
            View Alerts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;