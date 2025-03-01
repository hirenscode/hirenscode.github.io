import React, { forwardRef } from 'react';
import SectionHeader from '../SectionHeader';
import TimelineSection from '../TimelineSection';
import TimelineContentItem from '../TimelineContentItem';

const ExperienceSection = forwardRef(({ isActive }, ref) => {
    return (
        <section
            ref={ref}
            className="mb-12 transition-opacity duration-500"
            style={{ opacity: isActive ? 1 : 0.5 }}
        >
            <SectionHeader number="1" title="Work Experience" />

            <TimelineSection>
                <TimelineContentItem
                    title="Software Engineer III"
                    date="May 2019 - Present"
                    organization="Workday | Pleasanton, CA"
                    description={
                        <div>
                            <p>● As Lead Engineer for the Workday Mobile Backend for Frontend, I redesigned and developed the Payslips widget, achieving a 400% increase in usage upon launch, followed by the successful development of the Pay on Demand widget, greatly benefiting front-line workers during the Covid pandemic and gaining thousands of users.</p>
                            <p>● Additionally, I actively contributed to the creation of various minor widgets using Spring and AST (Abstract Syntax Tree) framework. And eventually transitioned into an iOS Developer role for the Workday App.</p>
                        </div>
                    }
                />

                <TimelineContentItem
                    title="Senior Software Engineer"
                    date="Aug 2017 - May 2019"
                    organization="Nisum | San Francisco, CA"
                    description={
                        <div>
                            <p>● Engineered complete Search Web Component for Williams Sonoma and sister brands using Javascript (ES6), WebComponents, Node.js, Webpack, and Sass, improving page load times by 150%.</p>
                            <p>● Redesigned and developed Cards Acquisition form wizard for Gap and sister brands using Javascript ES6, ReactJS, NodeJS, NPM, Webpack, SASS; optimizing page load speeds by over 1.2X.</p>
                        </div>
                    }
                />

                <TimelineContentItem
                    title="Technology Lead"
                    date="Jul 2013 - Aug 2017"
                    organization="Infosys | El Segundo, CA"
                    description={
                        <div>
                            <p>● Developed flow of purchasing NFL Online Streaming service packages using Java, J2EE, Oracle ATG, Spring, Scala, Akka and Play, Node.js, and Redis; growing revenue by 400%, and receiving 2 Infosys Star Awards.</p>
                            <p>● Created JMeter Plugin for XMPP Protocol for Performance QA team utilizing Java, JMeter, Oracle Enterprise Manager Monitoring, Visual VM, JRockit Mission Control, Rackspace Cloud; fixing 4 critical performance bugs.</p>
                        </div>
                    }
                />

                <TimelineContentItem
                    title="Programmer Analyst - Software Engineer"
                    date="Oct 2010 - Jul 2013"
                    organization="Syntel | Charlotte, NC + Mumbai, MH, India"
                    description={
                        <div>
                            <p>● Prevented Wells Fargo's Wholesale Banking app from fraud by developing Middleware using Java, J2EE, MDB, Spring, Struts, and PL/SQL, which detects fraudulent activity and alerts are sent out within 10 seconds.</p>
                            <p>● Mentored 5 teammates on workflow based Mortgage Loans Application with Java, J2EE, and Spring 2.5.</p>
                            <p>● Built system to run Ruby automation test scripts using Ruby On Rails and WATIR Test Framework, improving quality of Wells Fargo apps; 1st personal milestone receiving Syntel's Speed Award.</p>
                        </div>
                    }
                />
            </TimelineSection>
        </section>
    );
});

export default ExperienceSection;