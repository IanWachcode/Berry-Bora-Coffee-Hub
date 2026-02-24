import { API_CONFIG, fetchWithErrorHandling, MOCK_WEATHER } from '../utils/api';

/**
 * Fetch current weather data for Nairobi
 */
export const fetchWeatherData = async () => {
  const apiKey = API_CONFIG.openweather.apiKey;

  // Check if API key exists
  if (!apiKey) {
    console.warn('No OpenWeather API key found, using mock data');
    return {
      success: true,
      data: MOCK_WEATHER,
      source: 'mock',
    };
  }

  // Build API URL for Nairobi
  const city = API_CONFIG.openweather.defaultCity;
  const url = `${API_CONFIG.openweather.baseUrl}/weather?q=${city},KE&appid=${apiKey}&units=metric`;

  console.log('Fetching weather from:', url.replace(apiKey, 'API_KEY_HIDDEN'));

  try {
    const result = await fetchWithErrorHandling(url);

    if (result.success && result.data) {
      console.log('Weather API Success:', result.data);
      return {
        success: true,
        data: transformWeatherData(result.data),
        source: 'openweather',
      };
    }

    // Fallback to mock data
    console.warn('Weather API failed, using mock data');
    return {
      success: true,
      data: MOCK_WEATHER,
      source: 'mock',
    };
  } catch (error) {
    console.error('OpenWeather API Error:', error);
    return {
      success: true,
      data: MOCK_WEATHER,
      source: 'mock',
    };
  }
};

/**
 * Transform OpenWeather data to our format
 */
const transformWeatherData = (data) => {
  return {
    temp: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),
    description: data.weather[0].description,
    main: data.weather[0].main,
    icon: data.weather[0].icon,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    windSpeed: data.wind.speed,
    clouds: data.clouds.all,
    city: data.name,
    country: data.sys.country,
  };
};

/**
 * Generate weather alerts based on conditions
 */
export const generateWeatherAlerts = (weatherData) => {
  const alerts = [];

  // High temperature alert
  if (weatherData.temp > 30) {
    alerts.push({
      id: Date.now() + 1,
      type: 'weather',
      message: `High temperature alert: ${weatherData.temp}°C. Ensure adequate irrigation for your coffee plants.`,
      severity: 'warning',
      date: new Date(),
    });
  }

  // Low temperature alert
  if (weatherData.temp < 15) {
    alerts.push({
      id: Date.now() + 2,
      type: 'weather',
      message: `Low temperature warning: ${weatherData.temp}°C. Protect your coffee plants from cold damage.`,
      severity: 'warning',
      date: new Date(),
    });
  }

  // Good weather for harvesting
  if (weatherData.temp >= 18 && weatherData.temp <= 28) {
    alerts.push({
      id: Date.now() + 3,
      type: 'weather',
      message: `Ideal weather for coffee farming: ${weatherData.temp}°C. Perfect conditions for harvesting.`,
      severity: 'success',
      date: new Date(),
    });
  }

  // High humidity
  if (weatherData.humidity > 80) {
    alerts.push({
      id: Date.now() + 4,
      type: 'weather',
      message: `High humidity alert: ${weatherData.humidity}%. Monitor for fungal diseases.`,
      severity: 'info',
      date: new Date(),
    });
  }

  return alerts;
};