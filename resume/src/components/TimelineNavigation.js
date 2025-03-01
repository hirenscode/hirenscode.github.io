import React from 'react';
import TimelineItem from './TimelineItem';

const TimelineNavigation = ({ activeSection, scrollToSection }) => {
    return (
        <div className="md:w-1/6 mb-6 md:mb-0">
            <div className="sticky top-6 flex flex-row md:flex-col justify-around md:justify-start space-y-0 md:space-y-16">
                <TimelineItem
                    number="1"
                    label="About Me"
                    isActive={activeSection === 'aboutMe'}
                    onClick={() => scrollToSection('aboutMe')}
                />

                <TimelineItem
                    number="2"
                    label="Work"
                    isActive={activeSection === 'experience'}
                    onClick={() => scrollToSection('experience')}
                />

                <TimelineItem
                    number="3"
                    label="Education"
                    isActive={activeSection === 'education'}
                    onClick={() => scrollToSection('education')}
                />

                <TimelineItem
                    number="4"
                    label="Awards"
                    isActive={activeSection === 'awards'}
                    onClick={() => scrollToSection('awards')}
                />

                <TimelineItem
                    number="5"
                    label="Projects"
                    isActive={activeSection === 'projects'}
                    onClick={() => scrollToSection('projects')}
                />

                <TimelineItem
                    number="6"
                    label="Skills"
                    isActive={activeSection === 'skills'}
                    onClick={() => scrollToSection('skills')}
                />
            </div>
        </div>
    );
};

export default TimelineNavigation;