function Experience() {

    const experiences = [
        {
            year: '2024 — Present',
            role: 'Web Developer',
            company: 'Freelance / Personal Projects',
            description:
                'Developed responsive and user-friendly web applications using modern web technologies. Worked on system design, database integration, and frontend and backend development.',
            technologies: [
                'Laravel',
                'React.js',
                'PHP',
                'MySQL',
                'Tailwind CSS'
            ]
        },

        {
            year: '2025',
            role: 'Web Development / Graphic Designer Intern',
            company: 'EASTERN VISAYAS STATE UNIVERSITY (EVSU)',
            description:
                'created and design the PROJECT FATE: EVSU SAFE SPACES SYSTEM (REPORTING SYSTEM), a web-based system for the Gender and Development Office at Eastern Visayas State University',
            technologies: [
                'PHP',
                'Laravel',
                'MySQL',
                'Canva',
                'JavaScript'
            ]
        },

        {
            year: '2025 — 2026',
            role: 'Secretary',
            company: 'LEYTE NORMAL UNIVERSITY (LNU)',
            description:
                'Provides administrative and clerical support to the Gender and Development (GAD) Office by managing correspondence, preparing reports and meeting minutes, maintaining records, coordinating GAD activities, and assisting in the implementation of programs that promote gender equality and inclusivity within the university.',
            technologies: [
                ''
            ]
        }
    ];

    return (
        <section
            id="experience"
            className="experience-section"
        >

            <div className="section-container">

                {/* Section Header */}

                <div className="section-heading">

                    <span className="section-number">
                        03
                    </span>

                    <h2>
                        My Experience
                    </h2>

                    <div className="section-line"></div>

                </div>


                {/* Experience Timeline */}

                <div className="experience-timeline">

                    {experiences.map(
                        (experience, index) => (

                            <article
                                className="experience-item"
                                key={index}
                            >

                                {/* Date */}

                                <div className="experience-year">
                                    {experience.year}
                                </div>


                                {/* Timeline Content */}

                                <div className="experience-content">

                                    <h3>
                                        {experience.role}
                                    </h3>

                                    <h4>
                                        {experience.company}
                                    </h4>

                                    <p>
                                        {experience.description}
                                    </p>


                                    {/* Technologies */}

                                    <div className="experience-tech">

                                        {experience.technologies.map(
                                            (technology) => (

                                                <span
                                                    key={technology}
                                                >
                                                    {technology}
                                                </span>

                                            )
                                        )}

                                    </div>

                                </div>

                            </article>

                        )
                    )}

                </div>

            </div>

        </section>
    );
}

export default Experience;