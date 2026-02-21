import React from 'react';
import { Link } from 'react-router-dom';
import { useAppStore } from '../store/appStore';

const Header = () => {
  const userName = useAppStore((state) => state.userName);

  return (
    <header className="coffee-gradient text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
          <i className="fas fa-coffee text-2xl mr-2"></i>
          <h1 className="text-xl font-bold">Berry Bora</h1>
        </Link>
        <div className="flex items-center">
          <span className="hidden sm:inline text-sm mr-2">Welcome, {userName}</span>
          <i className="fas fa-user-circle text-xl"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;