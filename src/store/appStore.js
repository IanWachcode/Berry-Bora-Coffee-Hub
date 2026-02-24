import { create } from 'zustand';
import { fetchWeatherData, generateWeatherAlerts } from '../services/weatherApi';

export const useAppStore = create((set) => ({
  // User state
  user: {
    name: 'Farmer',
    isAuthenticated: true,
  },
  userName: 'Farmer',
  
  // Notification state
  notification: {
    show: false,
    message: '',
  },
  
  // Help dialog state
  helpDialogOpen: false,

  // Weather data
  weatherData: null,
  weatherLoading: false,
  weatherError: null,
  weatherSource: 'mock',
  
  // Weight records
  weightRecords: [],
  
  // Price data (mock data for now)
  priceData: {
    labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
    values: [510, 495, 520, 530, 525, 550],
  },
  
  // Demand data (for charts)
  demandData: {
    labels: ['Europe', 'North America', 'Asia', 'Local', 'Other'],
    values: [350, 275, 210, 120, 90],
  },
  
  // Alerts
  alerts: [
    {
      id: 1,
      type: 'price',
      message: 'Coffee prices increased by 5% this week',
      date: new Date('2025-02-10'),
      severity: 'info',
    },
    {
      id: 2,
      type: 'weather',
      message: 'Heavy rainfall expected in the next 48 hours',
      date: new Date('2025-02-12'),
      severity: 'warning',
    },
    {
      id: 3,
      type: 'market',
      message: 'High demand from European buyers',
      date: new Date('2025-02-13'),
      severity: 'success',
    },
  ],
  
  // Actions (functions to modify state)
  showNotification: (message) => set(() => ({
    notification: { show: true, message },
  })),
  
  hideNotification: () => set(() => ({
    notification: { show: false, message: '' },
  })),
  
  toggleHelpDialog: () => set((state) => ({
    helpDialogOpen: !state.helpDialogOpen,
  })),
  
  closeHelpDialog: () => set({ helpDialogOpen: false }),
  
  setUserName: (name) => set((state) => ({
    userName: name,
    user: { ...state.user, name },
  })),
  
  addWeightRecord: (record) => set((state) => ({
    weightRecords: [
      ...state.weightRecords,
      {
        ...record,
        id: Date.now(),
        date: new Date(),
      },
    ],
  })),
  
  addAlert: (alert) => set((state) => ({
    alerts: [
      {
        ...alert,
        id: Date.now(),
        date: new Date(),
      },
      ...state.alerts,
    ],
  })),

  fetchWeather: async () => {
    set({ weatherLoading: true, weatherError: null });

    try {
      const result = await fetchWeatherData();
      
      if (result.success) {
        const weatherAlerts = generateWeatherAlerts(result.data);
        set((state) => ({
          weatherData: result.data,
          weatherSource: result.source,
          weatherLoading: false,
          alerts: [...weatherAlerts, ...state.alerts],
        }));
      }
        else {
          set({
            weatherError: 'Failed to fetch weather data',
            weatherLoading: false,
          });
        }
      } catch (error) {
        set({
          weatherError: error.message || 'An error occurred while fetching weather data',
          weatherLoading: false,
        });
      }
    },
}));
        