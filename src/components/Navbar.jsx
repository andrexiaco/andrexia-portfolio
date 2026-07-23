import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <nav className="navbar">

                <a href="#home" className="nav-logo">
                    AC<span>.</span>
                </a>

                <ul className="nav-links">
                    <li>
                        <a href="#about">
                            <span>01</span>
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#education">
                            <span>02</span>
                            Education
                        </a>
                    </li>

                    <li>
                        <a href="#experience">
                            <span>03</span>
                            Experience
                        </a>
                    </li>

                    <li>
                        <a href="#skills">
                            <span>04</span>
                            Skills
                        </a>
                    </li>

                    <li>
                        <a href="#projects">
                            <span>05</span>
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#contact">
                            <span>06</span>
                            Contact
                        </a>
                    </li>
                </ul>

                <a
                    href="/CV.pdf"
                    className="nav-cta"
                    download="Ronnell-Andrei-CV.pdf">
                    Download CV
                </a>

                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>

            </nav>

            <div
                className={`mobile-nav ${
                    menuOpen ? 'open' : ''
                }`}
            >

                <a href="#about" onClick={closeMenu}>
                    01 — About
                </a>

                <a href="#education" onClick={closeMenu}>
                    02 — Education
                </a>

                <a href="#experience" onClick={closeMenu}>
                    03 — Experience
                </a>

                <a href="#skills" onClick={closeMenu}>
                    04 — Skills
                </a>

                <a href="#projects" onClick={closeMenu}>
                    05 — Projects
                </a>

                <a href="#contact" onClick={closeMenu}>
                    06 — Contact
                </a>

            </div>
        </>
    );
}

export default Navbar;