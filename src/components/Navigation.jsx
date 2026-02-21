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
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <ul style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '2rem', 
          padding: '0.75rem 0',
          listStyle: 'none',
          margin: 0 
        }}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  textDecoration: 'none'
                }}
                className={
                  location.pathname === item.path
                    ? 'text-green-600 font-semibold'
                    : 'text-gray-600 hover:text-gray-800'
                }
              >
                <i className={`fas ${item.icon}`}></i>
                <span className="text-sm">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;