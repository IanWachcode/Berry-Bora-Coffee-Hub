import { create } from 'zustand';
import { fetchWeatherData, generateWeatherAlerts } from '../services/weatherApi';
import { fetchCoffeePrices } from '../services/kilimoApi';
import { saveToLocalStorage, loadFromLocalStorage, STORAGE_KEYS } from '../utils/localStorage';

export const useAppStore = create((set, get) => ({
  // User state - load from localStorage
  userName: loadFromLocalStorage(STORAGE_KEYS.USER_NAME, 'Farmer'),
  
  // Notification state
  notification: {
    show: false,
    message: '',
  },
  
  // Help dialog state
  helpDialogOpen: false,
  
  // Coffee Prices state
  coffeePrices: [],
  pricesLoading: false,
  pricesError: null,
  pricesSource: 'mock',
  
  // Weather data
  weatherData: null,
  weatherLoading: false,
  weatherError: null,
  weatherSource: 'mock',
  
  // Weight records - load from localStorage
  weightRecords: loadFromLocalStorage(STORAGE_KEYS.WEIGHT_RECORDS, []),
  
  // Settings - load from localStorage
  settings: loadFromLocalStorage(STORAGE_KEYS.SETTINGS, {
    language: 'en',
    notifications: true,
  }),
  
  // Price trend data (for charts)
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
      type: 'market',
      message: 'High demand from European buyers',
      date: new Date('2025-02-13'),
      severity: 'success',
    },
  ],
  
  // Actions
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
  
  // Save user name to localStorage
  setUserName: (name) => {
    saveToLocalStorage(STORAGE_KEYS.USER_NAME, name);
    set(() => ({ userName: name }));
  },
  
  // Add weight record and save to localStorage
  addWeightRecord: (record) => set((state) => {
    const newRecord = {
      ...record,
      id: Date.now(),
      date: new Date().toISOString(),
    };
    const newRecords = [...state.weightRecords, newRecord];
    
    // Save to localStorage
    saveToLocalStorage(STORAGE_KEYS.WEIGHT_RECORDS, newRecords);
    
    return { weightRecords: newRecords };
  }),
  
  // Delete weight record
  deleteWeightRecord: (id) => set((state) => {
    const newRecords = state.weightRecords.filter(record => record.id !== id);
    saveToLocalStorage(STORAGE_KEYS.WEIGHT_RECORDS, newRecords);
    return { weightRecords: newRecords };
  }),
  
  // Clear all weight records
  clearWeightRecords: () => {
    saveToLocalStorage(STORAGE_KEYS.WEIGHT_RECORDS, []);
    set({ weightRecords: [] });
  },
  
  // Update settings
  updateSettings: (newSettings) => set((state) => {
    const updatedSettings = { ...state.settings, ...newSettings };
    saveToLocalStorage(STORAGE_KEYS.SETTINGS, updatedSettings);
    return { settings: updatedSettings };
  }),
  
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
  
  // Fetch coffee prices from KilimoSTAT
  fetchPrices: async () => {
    set({ pricesLoading: true, pricesError: null });
    
    try {
      const result = await fetchCoffeePrices();
      
      if (result.success) {
        set({
          coffeePrices: result.data,
          pricesSource: result.source,
          pricesLoading: false,
        });
      } else {
        set({
          pricesError: 'Failed to fetch prices',
          pricesLoading: false,
        });
      }
    } catch (error) {
      set({
        pricesError: error.message,
        pricesLoading: false,
      });
    }
  },
  
  // Fetch weather data
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
      } else {
        set({
          weatherError: 'Failed to fetch weather',
          weatherLoading: false,
        });
      }
    } catch (error) {
      set({
        weatherError: error.message,
        weatherLoading: false,
      });
    }
  },
  
  // Initialize all data
  initialize: async () => {
    const { fetchPrices, fetchWeather } = get();
    console.log('🚀 Initializing Berry Bora...');
    console.log('📦 Loaded from localStorage:', {
      userName: get().userName,
      weightRecords: get().weightRecords.length,
      settings: get().settings,
    });
    
    await Promise.all([
      fetchPrices(),
      fetchWeather(),
    ]);
    
    console.log('✅ Initialization complete');
  },
}));