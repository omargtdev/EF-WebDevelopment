import { useState } from "react";


export const useLocalStorage = (key: string, defaultValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key); 
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      return defaultValue;
    }
  });

  const setValue = (value: any) => {
    try {
      setStoredValue(value); 
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error); 
    } 
  }

  return [storedValue, setValue];
};