import React, { useEffect } from 'react';
import { useAppStore } from '../store/appStore';

const Notification = () => {
  const notification = useAppStore((state) => state.notification);
  const hideNotification = useAppStore((state) => state.hideNotification);

  useEffect(() => {
    if (notification.show) {
      // Auto-hide after 3 seconds
      const timer = setTimeout(() => {
        hideNotification();
      }, 3000);

      // Cleanup timer
      return () => clearTimeout(timer);
    }
  }, [notification.show, hideNotification]);

  return (
    <div className={`notification ${notification.show ? 'show' : ''}`}>
      <div className="flex items-center">
        <i className="fas fa-bell mr-2"></i>
        <span>{notification.message}</span>
      </div>
    </div>
  );
};

export default Notification;