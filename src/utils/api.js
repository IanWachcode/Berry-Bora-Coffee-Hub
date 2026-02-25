export const API_CONFIG = {
  openweather: {
    baseUrl: import.meta.env.VITE_OPENWEATHER_API_URL || 'https://api.openweathermap.org/data/2.5',
    apiKey: import.meta.env.VITE_OPENWEATHER_API_KEY,
    defaultCity: import.meta.env.VITE_DEFAULT_CITY || 'Nairobi',
    defaultLat: import.meta.env.VITE_DEFAULT_LAT || '-1.2921',
    defaultLon: import.meta.env.VITE_DEFAULT_LON || '36.8219',
  },
  
  kilimo: {
    baseUrl:'https://statistics.kilimo.go.ke',
    endpoints: {
      prices: '/en/kilimostat-api/download-prices/',
      crops: '/en/kilimostat-api/download-crops/',
      weather: '/en/kilimostat-api/download-weather/',
    },
  },
};
 

//wrapper with error handling
export const fetchWithErrorHandling = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('API Error:', error);
    return { success: false, error: error.message };
  }
};

// Mock weather data
export const MOCK_WEATHER = {
  temp: 24,
  description: 'Partly cloudy',
  main: 'Clouds',
  humidity: 65,
  city: 'Nairobi',
  country: 'KE',
};

//Mock coffee price data
export const MOCK_COFFEE_PRICES = [
  { grade: 'Arabica AB', price: 100, change: '+5.0%', trend: 'up' },
  { grade: 'Bourbon', price: 120, change: '-2.0%', trend: 'down' },
  { grade: 'Robusta', price: 110, change: '-3.0%', trend: 'down' },
  { grade: 'Liberica', price: 140, change: '+2.5%', trend: 'up' },
  { grade: 'Excelsa', price: 130, change: '-1.0%', trend: 'down' },
];