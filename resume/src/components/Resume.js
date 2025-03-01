import React, { useState, useEffect, useRef, useContext } from 'react';
import Header from './Header';
import TimelineNavigation from './TimelineNavigation';
import ExperienceSection from './sections/ExperienceSection';
import EducationSection from './sections/EducationSection';
import SkillsSection from './sections/SkillsSection';
import AwardsSection from './sections/AwardsSection';
import ProjectsSection from './sections/ProjectsSection';
import AboutMeSection from './sections/AboutMeSection';
import ThemeContext from '../contexts/ThemeContext';

const Resume = () => {
    const [activeSection, setActiveSection] = useState('experience');
    const theme = useContext(ThemeContext);
    const currentTheme = theme[theme.mode];
    
    // Track if user reached job status via header click
    const [fromHeaderClick, setFromHeaderClick] = useState(false);
    const [lastScrollPosition, setLastScrollPosition] = useState(0);

    // Create refs outside of useMemo
    const experienceRef = useRef(null);
    const educationRef = useRef(null);
    const skillsRef = useRef(null);
    const aboutMeRef = useRef(null);
    const awardsRef = useRef(null);
    const projectsRef = useRef(null);
    const jobStatusRef = useRef(null);
    const contactDetailsRef = useRef(null);

    // Group refs in an object
    const sectionRefs = {
        experience: experienceRef,
        education: educationRef,
        skills: skillsRef,
        aboutMe: aboutMeRef,
        awards: awardsRef,
        projects: projectsRef
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            // Determine which section is in the middle of the viewport
            let currentSection = 'experience';
            let minDistance = Infinity;

            for (const [section, ref] of Object.entries(sectionRefs)) {
                if (ref.current) {
                    const sectionTop = ref.current.offsetTop;
                    const sectionHeight = ref.current.offsetHeight;
                    const sectionMiddle = sectionTop + sectionHeight / 2;
                    const distance = Math.abs(scrollPosition - sectionMiddle);

                    if (distance < minDistance) {
                        minDistance = distance;
                        currentSection = section;
                    }
                }
            }

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initialize on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sectionRefs]);

    const scrollToSection = (section) => {
        sectionRefs[section].current.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    };

    const scrollToJobStatus = () => {
        // Save current scroll position before navigating
        setLastScrollPosition(window.scrollY);
        setFromHeaderClick(true);
        
        jobStatusRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    };
    
    const handleJobStatusBadgeClick = () => {
        if (fromHeaderClick) {
            // Return to the position where it came from
            window.scrollTo({
                top: lastScrollPosition,
                behavior: 'smooth'
            });
            setFromHeaderClick(false);
        } else {
            // Scroll to contact details section
            contactDetailsRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    };

    return (
        <div style={{
            backgroundColor: currentTheme.background,
            color: currentTheme.font,
            minHeight: '100vh',
            fontFamily: "'Overlock', cursive, sans-serif",
            transition: 'background-color 0.3s, color 0.3s'
        }}>
            <Header scrollToJobStatus={scrollToJobStatus} contactDetailsRef={contactDetailsRef} />

            <main style={{
                maxWidth: '64rem',
                margin: '0 auto',
                padding: '1.5rem',
                paddingBottom: '3rem',
                fontFamily: "'Overlock', cursive, sans-serif"
            }}>
                <div className="flex flex-col md:flex-row">
                    <TimelineNavigation
                        activeSection={activeSection}
                        scrollToSection={scrollToSection}
                    />

                    <div className="md:w-5/6 md:pl-8">
                        <AboutMeSection
                            ref={aboutMeRef}
                            isActive={activeSection === 'aboutMe'}
                        />

                        <ExperienceSection
                            ref={experienceRef}
                            isActive={activeSection === 'experience'}
                        />

                        <EducationSection
                            ref={educationRef}
                            isActive={activeSection === 'education'}
                        />

                        <AwardsSection
                            ref={awardsRef}
                            isActive={activeSection === 'awards'}
                        />

                        <ProjectsSection
                            ref={projectsRef}
                            isActive={activeSection === 'projects'}
                        />

                        <SkillsSection
                            ref={skillsRef}
                            isActive={activeSection === 'skills'}
                        />
                    </div>
                </div>
                
                {/* Job Status Banner */}
                <div 
                    ref={jobStatusRef}
                    className="mt-12 py-4 border-t border-gray-200 dark:border-gray-700"
                >
                    <JobStatusBadge onBadgeClick={handleJobStatusBadgeClick} />
                </div>
                <div className="mt-12 text-center" style={{ color: currentTheme.font + '99' }}>
                    <p>&copy; Hiren Parmar - {new Date().getFullYear()}</p>
                </div>
            </main>
        </div>
    );
};

const JobStatusBadge = ({ onBadgeClick }) => {
    const theme = useContext(ThemeContext);
    const currentTheme = theme[theme.mode];
    
    // Define all status options
    const statusOptions = [
        { id: "active", label: "Actively Looking", color: "#10b981" }, // Green
        { id: "open", label: "Open to Good Opportunities", color: "#f59e0b" }, // Amber
        { id: "considering", label: "Might be Interested", color: "#3b82f6" }, // Blue
        { id: "closed", label: "Not Looking for Change", color: "#6b7280" }  // Gray
    ];
    
    // Set the active status ID
    const activeStatusId = "active";
    const activeStatus = statusOptions.find(option => option.id === activeStatusId);
    
    return (
        <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-3">Current Job Status</h3>
            <div className="flex flex-col items-center mb-4">
                <div 
                    className="py-2 px-4 rounded-full text-white text-sm font-medium mb-3 cursor-pointer hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: activeStatus.color }}
                    onClick={onBadgeClick}
                    title="Click to navigate back"
                >
                    {activeStatus.label}
                </div>
                
                <p className="text-center max-w-lg" style={{ color: currentTheme.font + 'CC' }}>
                    I'm actively seeking new opportunities and available for immediate interviews.
                </p>
            </div>
            
            {/* Display all statuses but make them non-interactive */}
            <div className="flex gap-2 flex-wrap justify-center mt-2">
                {statusOptions.map(option => (
                    <div
                        key={option.id}
                        className={`text-sm px-3 py-1 rounded border transition-colors cursor-default ${
                            option.id === activeStatusId 
                            ? 'border-current font-bold shadow-md' 
                            : 'border-gray-300 opacity-40'
                        }`}
                        style={{ 
                            color: option.color,
                            backgroundColor: option.id === activeStatusId 
                                ? (theme.mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)') 
                                : 'transparent'
                        }}
                    >
                        {option.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resume;