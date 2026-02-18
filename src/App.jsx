import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { useAppStore } from './store/appStore';

const Home = () => {
  <div className="container mx-auto px-4 py-8">
    <div className="bg-white rounded-xl shadow-lg p-8 text-center">
      <i className="fas fa-seedling text-6xl text-coffee-dark mb-4"></i>
      <h2 className="text-4xl font-bold text-coffee-dark mb-4">Home Page</h2>
      <p className="text-gray-600">Welcome to Berry Bora Coffee Platform</p>
  </div>
  </div>
};

const Prices = () => {
  const showNotification = useAppStore((state)=> state.showNotification);

  return (
  <div className="container mx-auto px-4 py-8">
    <div className="bg-white rounded-xl shadow-lg p-8 text-center">
      <i className="fas fa-tag text-6xl text-coffee-dark mb-4"></i>
      <h2 className="text-3xl font-bold text-coffee-dark mb-4">Price Page</h2>
      <p className="text-gray-600 mb-6">Coffee prices will be displayed here</p>
      {/*test notification button*/}
      <button
      onClick={() => showNotification('Price alert: Arabica AA increased by 5%!')}
          className="bg-green-primary hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          <i className="fas fa-bell mr-2"></i>
          Test Notification
        </button>
    </div>
    </div>
  );
};

const Trends = () => {
  <div className="container mx-auto px-4 py-8">
    <div className="bg-white rounded-xl shadow-lg p-8 text-center">
      <i className="fas fa-chart-line text-6xl text-coffee-dark mb-4"></i>
      <h2 className="text-3xl font-bold text-coffee-dark mb-4">Trends Page</h2>
      <p className="text-gray-600">Market trends and charts will be shown here</p>
    </div>
  </div>
};

const Alerts = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="bg-white rounded-xl shadow-lg p-8 text-center">
      <i className="fas fa-exclamation-triangle text-6xl text-coffee-dark mb-4"></i>
      <h2 className="text-3xl font-bold text-coffee-dark mb-4">Alerts Page</h2>
      <p className="text-gray-600">Important alerts and notifications</p>
    </div>
  </div>
);

const Weights = () => {
  <div className="container mx-auto px-4 py-8">
    <div className="bg-white rounded-xl shadow-lg p-8 text-center">
      <i className="fas fa-weight text-6xl text-coffee-dark mb-4"></i>
      <h2 className="text-3xl font-bold text-coffee-dark mb-4">Weights Page</h2>
      <p className="text-gray-600">Record your harvest weights here</p>
    </div>
  </div>
};

const Settings = () => {
  <div className="container mx-auto px-4 py-8">
    <div className="bg-white rounded-xl shadow-lg p-8 text-center">
      <i className="fas fa-cog text-6xl text-coffee-dark mb-4"></i>
      <h2 className="text-3xl font-bold text-coffee-dark mb-4">Settings Page</h2>
      <p className="text-gray-600">Manage your account and preferences</p>
    </div>
  </div>
};

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="/prices" replace />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/weights" element={<Weights />} />
          <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App