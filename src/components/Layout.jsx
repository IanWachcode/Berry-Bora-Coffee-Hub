import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import Notification from './Notification';
import HelpButton from './HelpButton';

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#f8f6f2] flex flex-col">
      {/* Header */}
      <Header />

      {/* Navigation */}
      <Navigation />

      {/* Main Content - Pages will render here */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Components */}
      <Notification />
      <HelpButton />
    </div>
  );
};

export default Layout;