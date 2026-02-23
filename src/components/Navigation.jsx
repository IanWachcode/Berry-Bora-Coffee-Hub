import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/prices', icon: 'fa-tag', label: 'Prices' },
    { path: '/trends', icon: 'fa-chart-line', label: 'Trends' },
    { path: '/alerts', icon: 'fa-exclamation-triangle', label: 'Alerts' },
    { path: '/weights', icon: 'fa-weight', label: 'Weights' },
    { path: '/settings', icon: 'fa-cog', label: 'Settings' },
  ];

  return (
    <nav style={{ backgroundColor: 'white', position: 'sticky', top: 0, zIndex: 10, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 0.5rem' }}>
        <ul style={{ 
          display: 'flex', 
          justifyContent: 'space-around', 
          alignItems: 'center', 
          padding: '0.75rem 0',
          listStyle: 'none',
          margin: 0,
          flexWrap: 'wrap'
        }}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center', 
                  gap: '0.25rem',
                  color: location.pathname === item.path ? '#3d8b3d' : '#666',
                  fontWeight: location.pathname === item.path ? '600' : '400',
                  textDecoration: 'none',
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.5rem'
                }}
              >
                <i className={`fas ${item.icon}`} style={{ fontSize: '1.25rem' }}></i>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;