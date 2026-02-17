import React from 'react';
import { useAppStore } from '../store/appStore';

const Header = () => {
  const userName = useAppStore((state) => state.userName);

  return (
    <header className="coffee-gradient text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <i className="fas fa-coffee text-2xl"></i>
          <h1 className="text-xl font-bold">Berry Bora</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-sm">
            Welcome, {userName}
          </span>
          <i className="fas fa-user-circle text-xl"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;