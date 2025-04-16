import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

const TimelineContentItem = ({ title, date, organization, description, liveLink, codeLink }) => {
    const theme = useContext(ThemeContext);
    const currentTheme = theme[theme.mode];

    return (
        <div className="relative mb-6">
            {/* Bullet point */}
            <div style={{
                position: 'absolute',
                left: '-1.75rem',
                top: '0',
                width: '1rem',
                height: '1rem',
                backgroundColor: currentTheme.accent,
                borderRadius: '9999px'
            }}></div>
            
            <div className="mb-2 flex flex-col md:flex-row md:justify-between">
                <h3 className="font-bold text-lg">{title} {liveLink && <sameline> | <a href={liveLink} target="_blank" rel="noopener noreferrer">live</a> </sameline> } {codeLink &&  <sameline> | <a href={codeLink} target="_blank" rel="noopener noreferrer">code</a> </sameline>}  </h3>
                {date && <span style={{ color: currentTheme.font + '99' }}>{date}</span>}
            </div>
            {organization && (
                <div className="mb-1 font-semibold" style={{ color: currentTheme.accent }}>{organization}</div>
            )}
            <div style={{ color: currentTheme.font + 'CC' }}>
                {description}
            </div>
        </div>
    );
};

export default TimelineContentItem;