import React, { useState, useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

const TimelineItem = ({ number, label, isActive, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const theme = useContext(ThemeContext);
    const currentTheme = theme[theme.mode];

    return (
        <div
            className="relative flex items-center cursor-pointer"
            style={{
                color: isActive ? currentTheme.accent : isHovered ? currentTheme.accent : currentTheme.font,
                opacity: isHovered ? 1 : 0.8,
                transition: 'color 0.3s, opacity 0.3s'
            }}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid',
                borderColor: isActive || isHovered ? currentTheme.accent : currentTheme.font,
                backgroundColor: isActive || isHovered ? (currentTheme.accent + '33') : 'transparent',
                transition: 'background-color 0.3s, border-color 0.3s'
            }}>
                <span className="text-lg">{number}</span>
            </div>
            <span className="ml-2 md:ml-4 font-semibold">{label}</span>
            {isActive && (
                <div
                    className="hidden md:block absolute left-4 top-8 w-0.5 h-16"
                    style={{ backgroundColor: currentTheme.accent }}
                ></div>
            )}
        </div>
    );
};

export default TimelineItem;