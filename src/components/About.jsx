function About() {
    return (
        <section id="about" className="about-section">

            <div className="section-container">

                {/* Section Header */}
                <div className="section-heading">

                    <span className="section-number">
                        01
                    </span>

                    <h2>
                        About Me
                    </h2>

                    <div className="section-line"></div>

                </div>


                {/* About Content */}
                <div className="about-grid">

                    {/* Left Column */}
                    <div className="about-image-wrapper">

                        <div className="about-image-frame">

                            <img
                                src="/sub-profile.jpg"
                                alt="Ronnell Andrei"
                            />

                        </div>

                    </div>


                    {/* Right Column */}
                    <div className="about-content">

                        <p className="about-intro">
                            I'm a passionate web developer who
                            enjoys turning ideas into functional,
                            engaging digital experiences.
                        </p>

                        <p>

                            I'm a recent BSIT graduate and aspiring web developer with a strong foundation in modern web technologies. I have hands-on experience with JavaScript frameworks such as React.js and Node.js, as well as Laravel, and I'm eager to apply my skills in real-world projects.
                        </p>

                        <p>
                            I enjoy transforming complex problems into simple, beautiful, and intuitive solutions. My development philosophy centers on writing clean, maintainable code that performs exceptionally across all devices.
                        </p>

                        <p>
                            When I'm not coding, you'll find me exploring the outdoors, playing basketball, or reading tech blogs. I'm committed to continuous learning and staying updated with the latest trends in web development.
                        </p>


                        {/* About Details */}
                        <div className="about-details">

                            <div className="detail-item">

                                <span>
                                    Name
                                </span>

                                <strong>
                                    Ronnell Andrei
                                </strong>

                            </div>


                            <div className="detail-item">

                                <span>
                                    Location
                                </span>

                                <strong>
                                    Philippines
                                </strong>

                            </div>


                            <div className="detail-item">

                                <span>
                                    Specialization
                                </span>

                                <strong>
                                    Web Development
                                </strong>

                            </div>


                            <div className="detail-item">

                                <span>
                                    Status
                                </span>

                                <strong className="available">
                                    Available for work
                                </strong>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;