import {
    FaReact,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaLaravel,
    FaPhp,
    FaGitAlt,
    FaGithub
} from 'react-icons/fa';

import {
    SiMysql,
    SiTailwindcss,
    SiBootstrap
} from 'react-icons/si';

function Skills() {

    const frontendSkills = [
        {
            name: 'React.js',
            level: 85,
            icon: <FaReact />
        },
        {
            name: 'JavaScript',
            level: 85,
            icon: <FaJs />
        },
        {
            name: 'HTML',
            level: 95,
            icon: <FaHtml5 />
        },
        {
            name: 'CSS',
            level: 90,
            icon: <FaCss3Alt />
        }
    ];

    const backendSkills = [
        {
            name: 'Laravel',
            level: 85,
            icon: <FaLaravel />
        },
        {
            name: 'PHP',
            level: 85,
            icon: <FaPhp />
        }
    ];

    const databaseSkills = [
        {
            name: 'MySQL',
            level: 85,
            icon: <SiMysql />
        }
    ];

    const toolsSkills = [
        {
            name: 'Git',
            level: 80,
            icon: <FaGitAlt />
        },
        {
            name: 'GitHub',
            level: 80,
            icon: <FaGithub />
        },
        {
            name: 'Tailwind CSS',
            level: 85,
            icon: <SiTailwindcss />
        },
        {
            name: 'Bootstrap',
            level: 85,
            icon: <SiBootstrap />
        }
    ];

    return (
        <section
            id="skills"
            className="skills-section"
        >

            <div className="section-container">

                {/* Section Header */}

                <div className="section-heading">

                    <span className="section-number">
                        04
                    </span>

                    <h2>
                        My Skills
                    </h2>

                    <div className="section-line"></div>

                </div>


                {/* Skills Description */}

                <p className="skills-intro">
                    Technologies and tools I use to build
                    modern, responsive, and functional
                    web applications.
                </p>


                {/* Skill Categories */}

                <div className="skills-categories">

                    {/* Frontend */}

                    <SkillCategory
                        title="Frontend Development"
                        skills={frontendSkills}
                    />


                    {/* Backend */}

                    <SkillCategory
                        title="Backend Development"
                        skills={backendSkills}
                    />


                    {/* Database */}

                    <SkillCategory
                        title="Database"
                        skills={databaseSkills}
                    />


                    {/* Tools */}

                    <SkillCategory
                        title="Tools & Frameworks"
                        skills={toolsSkills}
                    />

                </div>

            </div>

        </section>
    );
}


/*
    Reusable Skill Category Component
*/

function SkillCategory({
    title,
    skills
}) {

    return (
        <div className="skill-category">

            <h3>
                {title}
            </h3>


            <div className="skill-list">

                {skills.map(
                    (skill, index) => (

                        <div
                            className="skill-item"
                            key={index}
                        >

                            {/* Skill Header */}

                            <div className="skill-header">

                                <div className="skill-name">

                                    <span className="skill-icon">
                                        {skill.icon}
                                    </span>

                                    <span>
                                        {skill.name}
                                    </span>

                                </div>


                                <span className="skill-percent">
                                    {skill.level}%
                                </span>

                            </div>


                            {/* Progress Bar */}

                            <div className="skill-bar">

                                <div
                                    className="skill-progress"
                                    style={{
                                        '--skill-level':
                                            `${skill.level}%`
                                    }}
                                ></div>

                            </div>

                        </div>

                    )
                )}

            </div>

        </div>
    );
}

export default Skills;