import React, { useState } from 'react';
import { useAppStore } from '../store/appStore';

const Settings = () => {
  const userName = useAppStore((state) => state.userName);
  const setUserName = useAppStore((state) => state.setUserName);
  const showNotification = useAppStore((state) => state.showNotification);
  
  const [tempName, setTempName] = useState(userName);
  const [language, setLanguage] = useState('en');
  const [notifications, setNotifications] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    setUserName(tempName);
    showNotification('Settings saved!');
  };

  return (
    <div className="container mx-auto px-4 py-4 max-w-xl">
      <h2 className="text-2xl font-bold mb-1">Settings</h2>
      <p className="text-sm text-gray-600 mb-4">Manage your preferences</p>

      <div className="bg-white rounded-lg shadow p-4">
        <form onSubmit={handleSave} className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-coffee-dark"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-coffee-dark"
            >
              <option value="en">English</option>
              <option value="sw">Swahili</option>
              <option value="ki">Kikuyu</option>
            </select>
          </div>

          <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
            <div>
              <p className="text-sm font-medium">Push Notifications</p>
              <p className="text-xs text-gray-500">Receive alerts</p>
            </div>
            <button
              type="button"
              onClick={() => setNotifications(!notifications)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                notifications ? 'bg-green-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  notifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-coffee-dark hover:bg-coffee-medium text-white font-semibold py-2 rounded"
          >
            Save Settings
          </button>
        </form>

        <div className="mt-4 pt-4 border-t text-xs text-gray-600 space-y-1">
          <p><strong>Version:</strong> 1.0.2</p>
          <p><strong>SMS:</strong> 22000</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;