import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Prices from './pages/Prices';
import Trends from './pages/Trends';
import Alerts from './pages/Alerts';
import Weights from './pages/Weights';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="prices" element={<Prices />} />
          <Route path="trends" element={<Trends />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="weights" element={<Weights />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
