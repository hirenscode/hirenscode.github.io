import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

const TimelineSection = ({ children }) => {
    const theme = useContext(ThemeContext);
    const currentTheme = theme[theme.mode];

    return (
        <div style={{
            borderLeftWidth: '2px',
            borderLeftStyle: 'solid',
            borderLeftColor: currentTheme.accent,
            paddingLeft: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
        }}>
            {children}
        </div>
    );
};

export default TimelineSection;