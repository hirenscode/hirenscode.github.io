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
            <SectionHeader number="4" title="Awards & Recognition" />

            <TimelineSection>
                <TimelineContentItem
                    title="UI Platform Innovator Award"
                    date="Apr 2020"
                    organization="Workday"
                    description=""
                />
                <TimelineContentItem
                    title="Infosys Star Award"
                    date="Mar 2017"
                    organization="Infosys"
                    description=""
                />
                <TimelineContentItem
                    title="Syntel's Speed Award"
                    date="Apr 2011"
                    organization="Syntel"
                    description=""
                />
            </TimelineSection>
        </section>
    );
});

export default EducationSection;