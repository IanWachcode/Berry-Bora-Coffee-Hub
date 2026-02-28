import React from 'react';
import { Link } from 'react-router-dom';
import { useAppStore } from '../store/appStore';

const Header = () => {
  const userName = useAppStore((state) => state.userName);

  return (
    <header className="coffee-gradient text-white p-4 shadow-md">
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        gap: '1rem'
      }}>
        {/* Left spacer */}
        <div></div>
        
        {/* Center - Logo */}
        <Link 
          to="/" 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
            color: 'white',
            justifyContent: 'center'
          }}
        >
          <i className="fas fa-coffee" style={{ fontSize: '1.5rem' }}></i>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>Berry Bora</h1>
        </Link>
        
        {/* Right - User Info */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.875rem' }} className="hidden sm:inline">
            Welcome, {userName}
          </span>
          <Link to="/settings" style={{ color: 'white' }}>
          <i className="fas fa-user-circle" style={{ fontSize: '1.25rem' }}></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;