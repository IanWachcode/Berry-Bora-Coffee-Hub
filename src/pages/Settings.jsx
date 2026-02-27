import React, { useState } from 'react';
import { useAppStore } from '../store/appStore';

const Settings = () => {
  const userName = useAppStore((state) => state.userName);
  const settings = useAppStore((state) => state.settings);
  const setUserName = useAppStore((state) => state.setUserName);
  const updateSettings = useAppStore((state) => state.updateSettings);
  const clearWeightRecords = useAppStore((state) => state.clearWeightRecords);
  const showNotification = useAppStore((state) => state.showNotification);
  
  const [tempName, setTempName] = useState(userName);
  const [language, setLanguage] = useState(settings.language || 'en');
  const [notifications, setNotifications] = useState(settings.notifications !== false);

  const handleSave = (e) => {
    e.preventDefault();
    setUserName(tempName);
    updateSettings({ language, notifications });
    showNotification('Settings saved successfully!');
  };

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear all weight records? This cannot be undone.')) {
      clearWeightRecords();
      showNotification('All weight records cleared!');
    }
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 'bold', marginBottom: '0.5rem' }}>
        Settings
      </h2>
      <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '1rem' }}>
        Manage your preferences
      </p>

      <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '1.5rem' }}>
        <form onSubmit={handleSave} style={{ marginBottom: '1.5rem' }}>
          {/* Name Input */}
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>
              Your Name
            </label>
            <input
              type="text"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.375rem',
                fontSize: '1rem'
              }}
            />
          </div>

          {/* Language Select */}
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>
              Language
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.375rem',
                fontSize: '1rem'
              }}
            >
              <option value="en">English</option>
              <option value="sw">Swahili</option>
              <option value="ki">Kikuyu</option>
            </select>
          </div>

          {/* Notifications Toggle */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem',
            backgroundColor: '#f9fafb',
            borderRadius: '0.375rem',
            marginBottom: '1rem'
          }}>
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>
                Push Notifications
              </p>
              <p style={{ fontSize: '0.75rem', color: '#666' }}>
                Receive alerts about prices and weather
              </p>
            </div>
            <button
              type="button"
              onClick={() => setNotifications(!notifications)}
              style={{
                position: 'relative',
                display: 'inline-flex',
                height: '1.5rem',
                width: '2.75rem',
                alignItems: 'center',
                borderRadius: '9999px',
                backgroundColor: notifications ? '#16a34a' : '#d1d5db',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  height: '1rem',
                  width: '1rem',
                  transform: notifications ? 'translateX(1.5rem)' : 'translateX(0.25rem)',
                  borderRadius: '9999px',
                  backgroundColor: 'white',
                  transition: 'transform 0.2s'
                }}
              />
            </button>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#6d4c41',
              color: 'white',
              fontWeight: '600',
              padding: '0.75rem',
              borderRadius: '0.375rem',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <i className="fas fa-save" style={{ marginRight: '0.5rem' }}></i>
            Save Settings
          </button>
        </form>

        {/* Data Management Section */}
        <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #e5e7eb' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem' }}>
            Data Management
          </h3>
          <button
            onClick={handleClearData}
            style={{
              width: '100%',
              backgroundColor: '#ef4444',
              color: 'white',
              fontWeight: '600',
              padding: '0.75rem',
              borderRadius: '0.375rem',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <i className="fas fa-trash" style={{ marginRight: '0.5rem' }}></i>
            Clear All Weight Records
          </button>
          <p style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.5rem', textAlign: 'center' }}>
            This will permanently delete all your weight records
          </p>
        </div>

        {/* About Section */}
        <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e5e7eb' }}>
          <h3 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.75rem' }}>
            About Berry Bora
          </h3>
          <a href='/about' style={{ color: '#6d4c41', textDecoration: 'none' }}>View About Page</a>
        </div>
      </div>
    </div>
  );
};

export default Settings;