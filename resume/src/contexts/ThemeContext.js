import { createContext } from 'react';

const ThemeContext = createContext({
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
    mode: 'light',
    toggleTheme: () => {}
});

export default ThemeContext;