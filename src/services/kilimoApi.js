import { API_CONFIG, fetchWithErrorHandling, MOCK_COFFEE_PRICES } from "../utils/api";

export const fetchCoffeePrices = async () => {
    const url = `${API_CONFIG.kilimo.baseUrl}${API_CONFIG.kilimo.endpoints.prices}`;

    console.log('📊 Fetching coffee prices from kilimoSTAT...');

    try {
        const result = await fetchWithErrorHandling(url);

        if (result.success && result.data) {
            console.log('✅ kilimoSTAT API response received');

            const coffeeData = Array.isArray(result.data) ? result.data.filter(item =>
                item.product && item.product.toLowerCase().includes('coffee')
            ) : [];

            if (coffeeData.length > 0) {
                console.log(`☕ Found ${coffeeData.length} coffee price entries`);
                return { success: true, data: transformKilimoData(coffeeData), source: 'kilimo' };
            } else {
                console.warn('⚠️ No coffee price data found, using mock data');
            }
        }

        console.info('ℹ️ Using mock coffee price data');
        return { success: true, data: MOCK_COFFEE_PRICES, source: 'mock' };
    } catch (error) {
        console.error('Error fetching coffee prices:', error);
        return { success: true, data: MOCK_COFFEE_PRICES, source: 'mock' };
    }
};
const transformKilimoData = (data) => {
  return data.map((item) => {
    // Extract price and calculate change if available
    const price = parseFloat(item.price) || parseFloat(item.average_price) || 0;
    const previousPrice = parseFloat(item.previous_price) || price;
    
    // Calculate percentage change
    const change = previousPrice > 0
      ? (((price - previousPrice) / previousPrice) * 100).toFixed(1)
      : 0;

    // Determine grade from product name
    const productName = item.product || 'Coffee';
    let grade = 'Unknown';
    
    if (productName.toLowerCase().includes('arabica aa')) {
      grade = 'Arabica AA';
    } else if (productName.toLowerCase().includes('arabica ab')) {
      grade = 'Arabica AB';
    } else if (productName.toLowerCase().includes('arabica')) {
      grade = 'Arabica';
    } else if (productName.toLowerCase().includes('robusta')) {
      grade = 'Robusta';
    } else {
      grade = productName;
    }

    return {
      grade: grade,
      price: Math.round(price),
      change: `${change >= 0 ? '+' : ''}${change}%`,
      trend: change >= 0 ? 'up' : 'down',
      source: 'kilimo',
      rawData: item, // Keep original data for debugging
    };
  });
};

/**
 * Fetch crop production data (optional - for future use)
 */
export const fetchCropData = async () => {
  const url = `${API_CONFIG.kilimo.baseUrl}${API_CONFIG.kilimo.endpoints.crops}`;

  try {
    const result = await fetchWithErrorHandling(url);
    return result;
  } catch (error) {
    console.error('Crop Data Error:', error);
    return { success: false, error: error.message };
  }
};
