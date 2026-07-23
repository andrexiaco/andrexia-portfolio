import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import {
    FaGithub,
    FaFacebook,
    FaLinkedin,
    FaEnvelope,
    FaMapMarkerAlt
} from 'react-icons/fa';

function Contact() {

    const form = useRef();

    const [status, setStatus] = useState('');

    const sendEmail = (event) => {

        event.preventDefault();

        setStatus('Sending...');

        emailjs
            .sendForm(
                'service_q8llvog',
                'template_q2iwgyd',
                form.current,
                {
                    publicKey: 'UMEnAooDuyVBbDwjO'
                }
            )
            .then(
                () => {

                    setStatus(
                        'Message sent successfully!'
                    );

                    form.current.reset();

                },
                (error) => {

                    console.error(
                        'FAILED...',
                        error
                    );

                    setStatus(
                        'Something went wrong. Please try again.'
                    );

                }
            );
    };

    return (
        <section
            id="contact"
            className="contact-section"
        >

            <div className="section-container">

                <div className="section-heading">

                    <span className="section-number">
                        06
                    </span>

                    <h2>
                        Get In Touch
                    </h2>

                    <div className="section-line"></div>

                </div>


                <div className="contact-grid">

                    <div className="contact-info">

                        <h3>
                            Let's Work Together
                        </h3>

                        <p>
                            Have a project in mind or want to
                            collaborate? Feel free to reach out.
                            I'm always open to discussing new
                            projects, ideas, and opportunities.
                        </p>


                        <a
                            href="mailto:andrexiaco@gmail.com"
                            className="contact-detail"
                        >

                            <span className="contact-icon">
                                <FaEnvelope />
                            </span>

                            <span>

                                <small>
                                    Email
                                </small>

                                andrexiaco@gmail.com

                            </span>

                        </a>


                        <div className="contact-detail">

                            <span className="contact-icon">
                                <FaMapMarkerAlt />
                            </span>

                            <span>

                                <small>
                                    Location
                                </small>

                                Philippines

                            </span>

                        </div>


                        <div className="social-links">

                            <a
                                href="https://github.com/andrexiaco "
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.facebook.com/jayson.mattew"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </a>

                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>

                        </div>

                    </div>


                    {/* CONTACT FORM */}

                    <form
                        ref={form}
                        className="contact-form"
                        onSubmit={sendEmail}
                    >

                        <div className="form-group">

                            <label htmlFor="name">
                                Your Name
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="from_name"
                                placeholder="Enter your name"
                                required
                            />

                        </div>


                        <div className="form-group">

                            <label htmlFor="email">
                                Your Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="from_email"
                                placeholder="Enter your email"
                                required
                            />

                        </div>


                        <div className="form-group">

                            <label htmlFor="message">
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                placeholder="Write your message..."
                                required
                            ></textarea>

                        </div>


                        <button
                            type="submit"
                            className="contact-submit"
                        >
                            Send Message
                        </button>


                        {/* STATUS MESSAGE */}

                        {status && (
                            <p className="contact-status">
                                {status}
                            </p>
                        )}

                    </form>

                </div>

            </div>

        </section>
    );
}

export default Contact;