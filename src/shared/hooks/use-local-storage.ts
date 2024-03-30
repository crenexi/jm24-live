import { useState, useEffect, useCallback } from 'react';

// Define a type for the setter function, which can take a new value directly or a function to update based on the previous value.
type SetValue<T> = T | ((prevValue: T) => T);

// Generic hook for managing state synchronized with local storage.
function useLocalStorage<T>(key: string, initialValue: T) {
  // Initialize state with value from local storage or the provided initial value.
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Setter function to update both state and local storage.
  const setValue = useCallback(
    (value: SetValue<T>) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.error(error);
      }
    },
    [key, storedValue],
  );

  // Function to clear the stored value, resetting it to the initial value.
  const clearValue = useCallback(() => {
    try {
      setStoredValue(initialValue);
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  }, [key, initialValue]);

  // Effect to synchronize state with local storage changes from other tabs/windows.
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        setStoredValue(
          event.newValue ? JSON.parse(event.newValue) : initialValue,
        );
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key, initialValue]);

  return [storedValue, setValue, clearValue] as const;
}

export default useLocalStorage;
