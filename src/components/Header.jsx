import React from 'react';
import { Link } from 'react-router-dom';
import { useAppStore } from '../store/appStore';

const Header = () => {
  const userName = useAppStore((state) => state.userName);

  return (
    <header className="coffee-gradient text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group logo-hover" title='Go to Home'>
          <i className="fas fa-coffee text-2xl"></i>
          <h1 className="text-xl font-bold">Berry Bora</h1>
        </Link>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-sm">
            Welcome, {userName}
          </span>
          <i className="fas fa-coffee text-2xl"></i>
          </div>
          <h1 className="text-xl font-bold">Berry Bora</h1>
        </div>
    </header>
  );
};

export default Header;