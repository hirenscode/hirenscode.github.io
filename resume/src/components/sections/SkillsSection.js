import React, { forwardRef } from 'react';
import SectionHeader from '../SectionHeader';
import SkillRating from '../SkillRating';

const SkillsSection = forwardRef(({ isActive }, ref) => {
    return (
        <section
            ref={ref}
            className="mb-12 transition-opacity duration-500"
            style={{ opacity: isActive ? 1 : 0.5 }}
        >
            <SectionHeader number="6" title="Skills" />

            <div className="space-y-6 mb-12">
                <SkillCategory
                    title="Software Development"
                    skills={[
                        { name: "Java", level: 5 },
                        { name: "Spring", level: 5 },
                        { name: "J2EE", level: 4 },
                        { name: "iOS/Swift", level: 3 }
                    ]}
                />
                <SkillCategory
                    title="Web Development"
                    skills={[
                        { name: "HTML/CSS", level: 4 },
                        { name: "JavaScript", level: 4 },
                        { name: "React", level: 3 },
                        { name: "Node.js", level: 3 }
                    ]}
                />                

                <SkillCategory
                    title="Databases"
                    skills={[
                        { name: "SQL", level: 5 },
                        { name: "Oracle", level: 4 },
                        { name: "Redis", level: 3 },
                        { name: "MongoDB", level: 3 }
                    ]}
                />

                <SkillCategory
                    title="Tools & Platforms"
                    skills={[
                        { name: "Git", level: 5 },
                        { name: "AWS", level: 4 },
                        { name: "Docker", level: 3 },
                        { name: "Jenkins", level: 3 }
                    ]}
                />
            </div>
        </section>
    );
});

const SkillCategory = ({ title, skills }) => {
    return (
        <div>
            <h3 className="font-bold text-lg mb-3">{title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map(skill => (
                    <SkillRating
                        key={skill.name}
                        skill={skill.name}
                        rating={skill.level}
                    />
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;