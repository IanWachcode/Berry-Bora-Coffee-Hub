import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { useAppStore } from './store/appStore';

// Import pages
import Home from './pages/Home';
import Prices from './pages/Prices';
import Trends from './pages/Trends';
import Alerts from './pages/Alerts';
import Weights from './pages/Weights';
import About from './pages/About';
import Settings from './pages/Settings';

function App() {
  const initialize = useAppStore((state) => state.initialize);

  // Initialize data on app load
  React.useEffect(() => {
    initialize();
  }, [initialize]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="prices" element={<Prices />} />
          <Route path="trends" element={<Trends />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="weights" element={<Weights />} />
          <Route path="about" element={<About />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
