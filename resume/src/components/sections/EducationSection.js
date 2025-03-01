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
            <SectionHeader number="2" title="Education" />

            <TimelineSection>
                <TimelineContentItem
                    title="Bachelor of Engineering in Information Technology"
                    date="2004 - 2008"
                    organization="University of Mumbai"
                    description={
                        <div>
                            <p>● Completed Bachelor of Engineering in Information Technology from SIES Graduate School of Technology and Management affiliated to University of Mumbai.</p>
                        </div>
                    }
                />

                <TimelineContentItem
                    title="Diploma in Computer Technology"
                    date="2001 - 2004"
                    organization="Terna Polytechnic"
                    description={
                        <div>
                            <p>● Completed Diploma in Computer Technology from Terna Polytechnic affiliated to Maharashtra State Board of Technical Education.</p>
                        </div>
                    }
                />
            </TimelineSection>
        </section>
    );
});

export default EducationSection;