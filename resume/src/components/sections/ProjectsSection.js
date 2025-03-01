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
                    title="eCommerce Store | Software Engineer | code"
                    date=""
                    organization=""
                    description={
                        <div>
                            <p>● Developed eCommerce Store with seller central capability to modify products for sale using Java, J2EE, Apache Tomcat, Spring, Spring Security, and AngularJS.</p>
                        </div>
                    }
                />

                <TimelineContentItem
                    title="Periodic Table | Software Engineer | live | code"
                    date=""
                    organization=""
                    description={
                        <div>
                            <p>● Architected REST based API using Java and Play Framework deployed to Heroku to efficiently display periodic table elements for scientists.</p>
                        </div>
                    }
                />
            </TimelineSection>
        </section>
    );
});

export default EducationSection;