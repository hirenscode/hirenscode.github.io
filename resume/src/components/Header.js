import React, { useContext, useState, useEffect } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';
import profilePic from '../assets/profile.jpg'; // Import profile picture

const Header = ({ scrollToJobStatus, contactDetailsRef }) => {
    const theme = useContext(ThemeContext);
    const currentTheme = theme[theme.mode];
    
    // State to track if image fails to load
    const [imageError, setImageError] = useState(false);
    
    // State to track image position (0-8, representing different positions)
    // 0: top-left, 1: top-center, 2: top-right
    // 3: center-left, 4: center-center, 5: center-right
    // 6: bottom-left, 7: bottom-center, 8: bottom-right
    const [imagePosition, setImagePosition] = useState(1); // default to top-center
    
    // Positions map for objectPosition CSS property
    const positions = [
        "left 0%",     // 0: top-left
        "center 0%",   // 1: top-center
        "right 0%",    // 2: top-right
        "left center", // 3: center-left
        "center",      // 4: center-center
        "right center",// 5: center-right
        "left 100%",   // 6: bottom-left
        "center 100%", // 7: bottom-center
        "right 100%"   // 8: bottom-right
    ];
    
    // Job status color - matches the "Actively Looking" color from JobStatusBadge
    const jobStatusColor = "#10b981"; // Green

    // Save image position to localStorage
    useEffect(() => {
        localStorage.setItem('profileImagePosition', imagePosition.toString());
    }, [imagePosition]);
    
    // Load image position from localStorage on initial render
    useEffect(() => {
        const savedPosition = localStorage.getItem('profileImagePosition');
        if (savedPosition !== null) {
            setImagePosition(parseInt(savedPosition, 10));
        }
    }, []);

    return (
        <header style={{
            backgroundColor: currentTheme.main,
            color: currentTheme.font,
            padding: '1.5rem',
            position: 'relative',
            fontFamily: "'Overlock', cursive, sans-serif",
            transition: 'background-color 0.3s, color 0.3s'
        }}>
            <div style={{
                maxWidth: '64rem',
                margin: '0 auto',
                fontFamily: "'Overlock', cursive, sans-serif"
            }}>
                {/* Top section with controls */}
                <div className="flex justify-end w-full mb-4">
                    <div className="flex items-center">
                        {/* Job Status Indicator */}
                        <div
                            onClick={scrollToJobStatus}
                            className="mr-3 cursor-pointer flex items-center hover:opacity-80 transition-opacity"
                            title="View job status"
                        >
                            <div
                                className="w-4 h-4 rounded-full mr-1.5"
                                style={{ backgroundColor: jobStatusColor }}
                            ></div>
                            <span className="text-xs">Job Status</span>
                        </div>
                        <ThemeToggle />
                    </div>
                </div>

                {/* Main header section with flexbox layout */}
                <div className="flex flex-col md:flex-row items-center">
                    {/* Content section (left on desktop) */}
                    <div ref={contactDetailsRef} className="md:w-3/4 text-center md:text-left order-2 md:order-1">
                        <h1 className="text-3xl font-bold">Hiren Parmar</h1>
                        <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-3">
                            <ContactInfo icon="location" text="Newark, CA" />
                            <ContactInfo icon="phone" text="xxx.xxx.xxxx" isLink={true} link="tel:+1xxx.xxx.xxxx" />
                            <ContactInfo icon="email" text="parmar.hiren.r@gmail.com" isLink={true} link="mailto:parmar.hiren.r@gmail.com" />
                            <ContactInfo icon="linkedin" text="linkedin.com/in/hiren11" isLink={true} link="https://linkedin.com/in/hiren11" />
                            <ContactInfo icon="github" text="github.com/hirenscode" isLink={true} link="https://github.com/hirenscode" />
                        </div>
                    </div>

                    {/* Profile picture (right on desktop, centered on mobile) */}
                    <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center md:justify-end order-1 md:order-2">
                        <div 
                            className="w-32 h-32 overflow-hidden rounded-full border-4 shadow-md relative group"
                            style={{ borderColor: currentTheme.accent }}
                            title="Click to adjust image position"
                        >
                            {imageError ? (
                                <div 
                                    className="w-full h-full flex items-center justify-center"
                                    style={{ backgroundColor: currentTheme.accent + '33' }}
                                >
                                    <span className="text-2xl font-bold">HP</span>
                                </div>
                            ) : (
                                <>
                                    <img 
                                        src={profilePic} 
                                        alt="Hiren Parmar" 
                                        className="w-full h-full object-cover transition-all duration-300"
                                        style={{ objectPosition: positions[imagePosition] }}
                                        onError={() => setImageError(true)}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute -bottom-4 left-0 right-0 flex justify-center">
                <div style={{
                    backgroundColor: currentTheme.accent,
                    color: theme.mode === 'dark' ? currentTheme.main : currentTheme.font,
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-9.5l3.5 3.5-1.41 1.41L10 11.33l-2.09 2.08L6.5 12l3.5-3.5z" />
                    </svg>
                </div>
            </div>
        </header>
    );
};

const ContactInfo = ({ icon, text, isLink, link }) => {
    let iconSvg;

    switch(icon) {
        case 'location':
            iconSvg = <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />;
            break;
        case 'phone':
            iconSvg = <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />;
            break;
        case 'email':
            iconSvg = (
                <>
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </>
            );
            break;
        case 'linkedin':
            iconSvg = (
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            );
            break;
        case 'github':
            iconSvg = (
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            );
            break;
        case 'wellfound':
            iconSvg = (
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            );
            break;
        default:
            iconSvg = null;
    }

    return (
        <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                {iconSvg}
            </svg>
            <span>{isLink ? <a href={link}>{text}</a> : text}</span>
        </div>
    );
};

export default Header;