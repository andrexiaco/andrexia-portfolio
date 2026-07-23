import {
    FaGithub,
    FaExternalLinkAlt
} from 'react-icons/fa';

function Projects() {

    const projects = [
        {
            number: '01',
            title: 'EVSU IT: Capstone Scheduling System',
            description:
                'A comprehensive acedemic scheduling platform for EVSU IT department. Streamlines capstone project scheduling with student input, faculty approval, and automated timetable generation.',
            image: '/schedule.png',
            technologies: [
                'Javascript',
                'PHP',
                'MySQL'
            ],
        },

        {
            number: '02',
            title: 'Project FATE: EVSU Safe Spaces System',
            description:
                'A secure web-based reporting platform for EVSU Gender and Development Office. Enables students to confidentially report abuse or harassment with role-based access and RESTful API design.',
            image: '/fate.png',
            technologies: [
                'Laravel',
                'Alpine.js',
                'MySQL',
                'Tailwind CSS'
            ],
        },

        {
            number: '03',
            title: 'Integrating Recommender & Enrollment System',
            description:
                'An AI-powered platform integrating course recommendations with enrollment for SONHS. Features strand recommendations based on grades, skills, and interests, plus printable SF9/SF10 report generation.',
            image: '/capstone.png',
            technologies: [
                'Javascript',
                'PHP',
                'MySQL',
                'Bootstrap',
                'Node.js'
            ],
        },

        {
            number: '04',
            title: 'EVSU: Sports Management System',
            description:
                'Our comprehensive sports management system provides coaches, athletes, and administrators with powerful tools to streamline operations, improve performance, and manage sporting activities across all EVSU campuses.',
            image: '/sports.png',
            technologies: [
                'Laravel',
                'Javascript',
                'MySQL'
            ],
        },

        {
            number: '05',
            title: 'EVSU: SmartIMS',
            description:
                'The EVSU Digital Inventory Management and Monitoring System provides real-time tracking and monitoring of university assets across campuses. Securely manage equipment, supplies, properties and resources with our centralized platform.',
            image: '/ims.png',
            technologies: [
                'Laravel',
                'Javascript',
                'MySQL'
            ],
        },

        {
            number: '06',
            title: 'Jelz PharmaSys',
            description:
                'A Comprehensive Pharmacy Management System Manage your pharmacy effortlessly with integrated Point of Sale, Inventory, and Online Reservation features.',
            image: '/jelz.png',
            technologies: [
                'Laravel',
                'Javascript',
                'MySQL'
            ],
        }

    ];

    return (
        <section
            id="projects"
            className="projects-section">

            <div className="section-container">

                {/* Section Header */}

                <div className="section-heading">

                    <span className="section-number">
                        05
                    </span>

                    <h2>
                        Featured Projects
                    </h2>

                    <div className="section-line"></div>

                </div>


                {/* Projects Grid */}

                <div className="projects-grid">

                    {projects.map(
                        (project) => (

                            <article
                                className="project-card"
                                key={project.number}
                            >

                                {/* Project Image */}

                                <div className="project-image">

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                    />

                                    <div className="project-overlay">
                                        View Project
                                    </div>

                                </div>


                                {/* Project Content */}

                                <div className="project-content">

                                    {/* Number */}

                                    <div className="project-number">
                                        {project.number}
                                    </div>


                                    {/* Title */}

                                    <h3>
                                        {project.title}
                                    </h3>


                                    {/* Description */}

                                    <p>
                                        {project.description}
                                    </p>


                                    {/* Technologies */}

                                    <div className="project-tech">

                                        {project.technologies.map(
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

export default Projects;