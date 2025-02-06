type StorageType = 'local' | 'session';

const getStorage = (type: StorageType): Storage => {
  return type === 'local' ? localStorage : sessionStorage;
};

export const setItem = (key: string, value: unknown, type: StorageType = 'local'): void => {
  try {
    const storage = getStorage(type);
    storage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting ${key} in ${type}Storage`, error);
  }
};

export const getItem = <T>(key: string, type: StorageType = 'local'): T | null => {
  try {
    const storage = getStorage(type);
    const item = storage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  } catch (error) {
    console.error(`Error getting ${key} from ${type}Storage`, error);
    return null;
  }
};

export const removeItem = (key: string, type: StorageType = 'local'): void => {
  try {
    const storage = getStorage(type);
    storage.removeItem(key);
  } catch (error) {
    console.error(`Error removing ${key} from ${type}Storage`, error);
  }
};

export const clearStorage = (type: StorageType = 'local'): void => {
  try {
    const storage = getStorage(type);
    storage.clear();
  } catch (error) {
    console.error(`Error clearing ${type}Storage`, error);
  }
};
