import React, { forwardRef } from 'react';
import SectionHeader from '../SectionHeader';
import TimelineSection from '../TimelineSection';
import TimelineContentItem from '../TimelineContentItem';

const EducationSection = forwardRef(({ isActive }, ref) => {
    return (
        <section
            ref={ref}
            className="mb-12 transition-opacity duration-500"
            style={{ opacity: isActive ? 1 : 0.5 }}
        >
            <SectionHeader number="5" title="Projects" />

            <TimelineSection>
                <TimelineContentItem
                    title="Snack Shack"
                    date=""
                    organization=""
                    liveLink="https://snack-shack-app.web.app/"
                    codeLink="https://github.com/hirenscode/snack-shack"
                    description={
                        <div>
                            <p>● Developed a food ordering application to help a friend manage an in-home kitchen business during COVID- 19 lockdowns. The app allowed the friend to set daily menus with order deadlines, facilitating efficient food preparation and delivery. This charity project supported the friend's livelihood.</p>
                        </div>
                    }
                />

                <TimelineContentItem
                    title="Astroware"
                    date=""
                    organization=""
                    liveLink="https://astroware-test-225883389622.us-central1.run.app/"
                    codeLink="https://github.com/hirenscode/vedic-astro-pub"
                    description={
                        <div>
                            <p>● Created a Vedic Astrology application driven by a personal interest in learning astrology. The app automates complex astrological calculations, serving as a learning tool and a side project to explore and apply Vedic astrological principles.</p>
                        </div>
                    }
                />
            </TimelineSection>
        </section>
    );
});

export default EducationSection;