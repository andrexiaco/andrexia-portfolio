import {
    FaGithub,
    FaFacebook,
    FaLinkedin,
    FaArrowUp
} from 'react-icons/fa';

function Footer() {

    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    };

    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Footer Logo */}

                <div className="footer-logo">
                    AC<span>.</span>
                </div>


                {/* Copyright */}

                <p>
                    © {new Date().getFullYear()} 
                    Andrexia
                    All rights reserved.
                </p>


                {/* Social Links */}

                <div className="footer-socials">

                    <a
                        href="https://github.com/andrexiaco"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.facebook.com/jayson.mattew"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaFacebook />
                    </a>

                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin />
                    </a>

                </div>


                {/* Back To Top */}

                <button
                    className="back-to-top"
                    onClick={scrollToTop}
                    aria-label="Back to top"
                >
                    <FaArrowUp />
                </button>

            </div>

        </footer>
    );
}

export default Footer;