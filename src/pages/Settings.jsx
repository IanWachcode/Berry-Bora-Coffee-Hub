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
    showNotification('Settings saved successfully!');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-coffee-dark mb-2">Settings</h2>
        <p className="text-gray-600">Manage your account and preferences</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <form onSubmit={handleSave} className="space-y-6">
          {/* User Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-dark focus:border-transparent"
            />
          </div>

          {/* Language */}
          <div>
            <label
              htmlFor="language"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Language
            </label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-dark focus:border-transparent"
            >
              <option value="en">English</option>
              <option value="sw">Swahili (Kiswahili)</option>
              <option value="ki">Kikuyu (Gĩkũyũ)</option>
            </select>
          </div>

          {/* Notifications Toggle */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-800">Push Notifications</p>
              <p className="text-sm text-gray-600">
                Receive alerts about prices and weather
              </p>
            </div>
            <button
              type="button"
              onClick={() => setNotifications(!notifications)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notifications ? 'bg-green-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-coffee-dark hover:bg-coffee-medium text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            <i className="fas fa-save mr-2"></i>
            Save Settings
          </button>
        </form>

        {/* About Section */}
        <div className="mt-8 pt-6 border-t">
          <h3 className="text-lg font-semibold text-coffee-dark mb-3">
            About Berry Bora
          </h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>Version:</strong> 1.0.0
            </p>
            <p>
              <strong>Support:</strong> help@berybora.ke
            </p>
            <p>
              <strong>SMS Helpline:</strong> Send <strong>HELP</strong> to 22000
            </p>
            <p>
              <strong>Location:</strong> Nairobi, Kenya
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;