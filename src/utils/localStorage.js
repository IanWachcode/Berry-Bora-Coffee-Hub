const STORAGE_KEYS = {
    USER_NAME: 'userName',
    WEIGHT_RECORDS: 'weightRecords',
    SETTINGS: 'settings',
};

export const saveToLocalStorage = (key, data) => {
    try {
        const serialized = JSON.stringify(data);
        localStorage.setItem(key, serialized);
        return true;
     } catch (error) {
        console.error('Error saving to Storage', error);
        return false;
    }
};

export const loadFromLocalStorage = (key, defaultValue = null) => {
    try {
        const item = localStorage.getItem(key);
        if (item === null) {
            return defaultValue;
        }
        return JSON.parse(item);
    } catch (error) {
        console.error('Error loading from Storage', error);
        return defaultValue;
    }
};

export const removeFromLocalStorage = (key) => {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (error) {
        console.error('Error removing from Storage', error);
        return false;
    }
};

export const clearLocalStorage = () => {
    try {
        localStorage.clear();
        return true;
    } catch (error) {
        console.error('Error clearing Storage', error);
        return false;
    }
};

export { STORAGE_KEYS };