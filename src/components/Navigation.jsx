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
      <div className="container mx-auto">
        <ul className="flex justify-between">
          {navItems.map((item) => (
            <li key={item.path} className="flex-1 text-center">
              <Link
                to={item.path}
                className={`block py-3 transition-colors ${
                  location.pathname === item.path
                    ? 'navbar-active'
                    : 'text-gray-600 hover:text-coffee-dark'
                }`}
              >
                <i className={`fas ${item.icon} text-lg`}></i>
                <span className="navbar-text text-xs block mt-1">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;