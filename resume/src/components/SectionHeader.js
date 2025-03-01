import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

const SectionHeader = ({ number, title }) => {
    const theme = useContext(ThemeContext);
    const currentTheme = theme[theme.mode];
    const isDarkMode = theme.mode === 'dark';

    return (
        <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: currentTheme.accent }}>
            <div style={{
                width: '2rem',
                height: '2rem',
                backgroundColor: currentTheme.accent,
                color: isDarkMode ? currentTheme.main : currentTheme.font,
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '0.75rem'
            }}>{number}</div>
            {title}
        </h2>
    );
};

export default SectionHeader;