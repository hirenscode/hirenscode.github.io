import React, { forwardRef, useContext } from 'react';
import SectionHeader from '../SectionHeader';
import ThemeContext from '../../contexts/ThemeContext';

const AboutMeSection = forwardRef(({ isActive }, ref) => {
    return (
        <section
            ref={ref}
            className="mb-12 transition-opacity duration-500"
            style={{ opacity: isActive ? 1 : 0.5 }}
        >
            <SectionHeader number="5" title="About Me" />
            
            <div className="mb-8">
                <p className="mb-4">
                    I am a passionate and results-oriented software engineer with over 14 years of experience in building and deploying complex enterprise applications. I have a strong foundation in Java, Spring, and other technologies, and I am proficient in developing both frontend and backend applications. I am also a quick learner and I am always eager to learn new technologies and improve my skills.
                </p>
            </div>

            <SectionHeader number="5.1" title="Contact" />
        </section>
    );
});

export default AboutMeSection; 