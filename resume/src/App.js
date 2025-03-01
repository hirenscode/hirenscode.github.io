import React, { useState, useEffect } from 'react';
import Resume from './components/Resume';
import ThemeContext from './contexts/ThemeContext';

const App = () => {
  // Check if it's daytime or nighttime based on the current hour
  const isDaytime = () => {
    const currentHour = new Date().getHours();
    // Consider daytime between 7 AM and 7 PM (7-19)
    return currentHour >= 7 && currentHour < 19;
  };

  // Initialize darkMode based on time of day
  const [darkMode, setDarkMode] = useState(!isDaytime());

  // Update theme based on time of day when component mounts
  useEffect(() => {
    // Check if user has manually set a preference in localStorage
    const savedTheme = localStorage.getItem('preferredTheme');
    
    if (savedTheme !== null) {
      // Use the saved preference if it exists
      setDarkMode(savedTheme === 'dark');
    } else {
      // Otherwise use time-based theme
      setDarkMode(!isDaytime());
    }
  }, []);

  // Toggle theme and save preference
  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    // Save user preference to localStorage
    localStorage.setItem('preferredTheme', newMode ? 'dark' : 'light');
  };

  const theme = {
    dark: {
      accent: '#FF8811',
      font: '#FFF8F0',
      main: '#003049',
      background: '#121212',
      secondary: '#1E1E1E',
      border: '#333333'
    },
    light: {
      accent: '#F3DB63',
      font: '#141B00',
      main: '#9CC5D9',
      background: '#FFFFFF',
      secondary: '#F5F5F5',
      border: '#E0E0E0'
    },
    mode: darkMode ? 'dark' : 'light',
    toggleTheme: toggleTheme
  };

  return (
      <ThemeContext.Provider value={theme}>
         <Resume/>
      </ThemeContext.Provider>
  );
};

export default App;