import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

const SkillRating = ({ skill, rating }) => {
    const theme = useContext(ThemeContext);
    const currentTheme = theme[theme.mode];

    return (
        <div className="flex flex-col">
            <span className="font-medium mb-1">{skill}</span>
            <div className="flex">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        style={{
                            width: '1rem',
                            height: '1rem',
                            borderRadius: '9999px',
                            marginRight: '0.25rem',
                            backgroundColor: i < rating ? currentTheme.accent : (currentTheme.font + '33'),
                            transition: 'background-color 0.3s'
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default SkillRating;