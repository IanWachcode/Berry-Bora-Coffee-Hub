export const API_CONFIG = {
  openweather: {
    baseUrl: import.meta.env.VITE_OPENWEATHER_API_URL || 'https://api.openweathermap.org/data/2.5',
    apiKey: import.meta.env.VITE_OPENWEATHER_API_KEY,
    defaultCity: import.meta.env.VITE_DEFAULT_CITY || 'Nairobi',
    defaultLat: import.meta.env.VITE_DEFAULT_LAT || '-1.2921',
    defaultLon: import.meta.env.VITE_DEFAULT_LON || '36.8219',
  },
};

// Generic fetch wrapper with error handling
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

// Mock weather data fallback
export const MOCK_WEATHER = {
  temp: 24,
  description: 'Partly cloudy',
  humidity: 65,
  city: 'Nairobi',
};