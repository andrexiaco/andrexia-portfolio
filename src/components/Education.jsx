function Education() {
    return (
        <section
            id="education"
            className="education-section"
        >

            <div className="section-container">

                {/* Section Header */}
                <div className="section-heading">

                    <span className="section-number">
                        02
                    </span>

                    <h2>
                        My Education
                    </h2>

                    <div className="section-line"></div>

                </div>


                {/* Education Timeline */}
                <div className="education-timeline">

                    {/* Education Item */}
                    <div className="education-item">

                        <div className="education-year">
                            2021 — 2025
                        </div>

                        <div className="education-content">

                            <h3>
                                Bachelor of Science
                                in Information Technology
                            </h3>

                            <h4>
                                Eastern Visayas State University
                            </h4>

                            <p>
                                Focused on web development,
                                software development,
                                database management, and
                                information technology.
                            </p>

                            <p>
                                Thesis on "Integrating Recommender and Enrollment System for Enhanced Education" — an AI-powered platform combining course recommendations with enrollment systems to improve student success and institutional efficiency.
                            </p>

                        </div>

                    </div>


                    {/* Education Item */}
                    <div className="education-item">

                        <div className="education-year">
                            Senior High School
                        </div>

                        <div className="education-content">

                            <h3>
                                Humanities and Social Sciences (HUMSS)
                            </h3>

                            <h4>
                                Leyte National High School
                            </h4>

                            <p>
                                Developed foundational skills
                                in computer programming,
                                writing and public speaking
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Education;