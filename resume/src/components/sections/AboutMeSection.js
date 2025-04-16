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
            <SectionHeader number="1" title="About Me" />
            
            <div className="mb-8">
                <p className="mb-4">
                Software Engineer with a strong track record of success in designing, developing, and scaling high-performance, secure, and distributed backend applications. Expertise in Java, Spring Boot, RESTful APIs, and cloud technologies, with a strong background in BNFS, HRMS and Retail Domain. Proven leadership in guiding teams, coordinating cross-functional projects, and driving engineering excellence. Adept at fostering collaborative environments, driving innovation, and mentoring teams to deliver impactful solutions. Passionate about building scalable solutions, optimizing performance, and mentoring teams.
                </p>
            </div>

        </section>
    );
});

export default AboutMeSection; 