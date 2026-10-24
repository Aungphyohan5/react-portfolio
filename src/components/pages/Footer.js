
import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import '../../styles/Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <a className="footer-logo" href="#about" aria-label="Aung.dev home">
                            <span className="footer-logo-mark">{'</>'}</span>
                            Aung<span className="footer-logo-dot">.dev</span>
                        </a>

                        <p>
                            Building thoughtful digital experiences through clean,
                            reliable code.
                        </p>
                    </div>

                    <div className="footer-connect">
                        <h2>Let's connect</h2>
                        <p>Have a project in mind? Let's talk.</p>

                        <div className="footer-socials">
                            <a
                                href="https://github.com/Aungphyohan5"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub profile"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://stackoverflow.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Stack Overflow"
                            >
                                <FaStackOverflow />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {currentYear} Aung Phyo Han. All rights reserved.</p>
                    <a href="#about" className="footer-back-top">
                        Back to top <span aria-hidden="true">↑</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
