function Hero() {
    return (
        <section id="home" className="hero">

            {/* Background Glow Effects */}
            <div className="hero-glow-1"></div>
            <div className="hero-glow-2"></div>

            <div className="hero-inner">

                {/* LEFT SIDE */}
                <div className="hero-left">

                    {/* Available Badge */}
                    <div className="hero-tag">
                        Available for work
                    </div>

                    {/* Main Heading */}
                    <h1 className="hero-name">
                        Hi, I'm

                        <span className="highlight">
                            Ronnell Andrei
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="hero-desc">
                        Web developer specializing in modern web
                        technologies. I build fast, accessible, and
                        visually compelling digital experiences.
                    </p>

                    {/* Buttons */}
                    <div className="hero-btns">

                        <a
                            href="#projects"
                            className="btn-primary">
                            View My Work
                        </a>

                        <a
                            href="#contact"
                            className="btn-ghost">
                            Get In Touch
                        </a>

                    </div>

                    {/* Statistics */}
                    <div className="hero-stats">

                        <div className="stat">

                            <div className="stat-num">
                                3+
                            </div>

                            <div className="stat-label">
                                Projects Built
                            </div>

                        </div>

                        <div className="stat">

                            <div className="stat-num">
                                10
                            </div>

                            <div className="stat-label">
                                Tech Skills
                            </div>

                        </div>

                        <div className="stat">

                            <div className="stat-num">
                                2025
                            </div>

                            <div className="stat-label">
                                BSIT Graduate
                            </div>

                        </div>

                    </div>

                </div>


                {/* RIGHT SIDE */}
                <div className="profile-card">

                    {/* Profile Image */}

                    <div className="profile-frame">

                        <img
                            src="/profile.jpg"
                            alt="Ronnell Andrei"
                        />

                    </div>


                    {/* Availability Badge */}

                    <div className="profile-badge">

                        <div className="status">
                            Available
                        </div>

                    </div>


                    {/* Basic Information Card */}

                    <div className="profile-info">

                        <div className="profile-info-list">
                            {/* Name */}

                            <div className="profile-info-item">

                                <span className="info-label">
                                    Name
                                </span>

                                <span className="info-value">
                                    Ronnell Andrei
                                </span>

                            </div>


                            {/* Role */}

                            <div className="profile-info-item">

                                <span className="info-label">
                                    Role
                                </span>

                                <span className="info-value">
                                    Web Developer
                                </span>

                            </div>


                            {/* Location */}

                            <div className="profile-info-item">

                                <span className="info-label">
                                    Location
                                </span>

                                <span className="info-value">
                                    Philippines
                                </span>

                            </div>


                            {/* Email */}

                            <div className="profile-info-item">

                                <span className="info-label">
                                    Email
                                </span>

                                <a
                                    href="mailto:andrexiaco@gmail.com"
                                    className="info-value info-link"
                                >
                                    andrexiaco@gmail.com
                                </a>

                            </div>


                            {/* Specialization */}

                            <div className="profile-info-item">

                                <span className="info-label">
                                    Focus
                                </span>

                                <span className="info-value">
                                    Web Development
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;