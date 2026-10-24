
import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import '../../styles/About.css';

const technologies = [
  {
    name: 'React',
    category: 'Frontend',
    description: 'Reusable components and interactive user interfaces.',
    icon: '⚛',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    description: 'JavaScript runtime for server-side applications.',
    icon: '⬡',
  },
  {
    name: 'Express.js',
    category: 'Backend',
    description: 'Server routes, middleware, and REST APIs.',
    icon: '⌘',
  },
  {
    name: 'MongoDB',
    category: 'Database',
    description: 'Document-based data storage for web applications.',
    icon: '◈',
  },
  {
    name: 'jQuery',
    category: 'JavaScript',
    description: 'DOM manipulation and event-driven interactions.',
    icon: '⟨/⟩',
  },
  {
    name: 'MySQL',
    category: 'Database',
    description: 'Relational data modeling and SQL queries.',
    icon: '▤',
  },
];

const services = [
  {
    number: '01',
    title: 'Responsive websites',
    description:
      'Modern, mobile-friendly interfaces that work across screen sizes.',
  },
  {
    number: '02',
    title: 'Full-stack development',
    description:
      'Frontend interfaces connected to backend logic and databases.',
  },
  {
    number: '03',
    title: 'API integration',
    description:
      'Connect web applications with APIs and external services.',
  },
];

export default function About({ onNavigate }) {
  return (
    <main className="about-page">
      <section className="hero-section">
        <div className="hero-glow" />

        <div className="about-container hero-grid">
          <div className="hero-content">
            <div className="availability-label">
              <span className="availability-dot" />
              FULL-STACK WEB DEVELOPER
            </div>

            <h1 className="hero-title">
              Building digital
              <br />
              experiences that
              <br />
              <span>work beautifully.</span>
            </h1>

            <p className="hero-description">
              Hi, I'm <strong>Aung Phyo Han</strong>. I build responsive
              websites and web applications with thoughtful interfaces
              and reliable functionality.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#skills">
                Explore my skills <span>↘</span>
              </a>

              <a
                className="button-secondary"
                href="https://github.com/Aungphyohan5"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </div>

            <div className="social-links" aria-label="Social profiles">
              <a
                href="https://github.com/Aungphyohan5"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://stackoverflow.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Stack Overflow"
              >
                <FaStackOverflow />
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Developer code illustration">
            <div className="code-window">
              <div className="code-window-header">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span>developer.js</span>
                <span className="window-status">● online</span>
              </div>

              <div className="code-content">
                <div><span className="code-muted">01</span> <span className="code-purple">const</span> developer = {'{'}</div>
                <div><span className="code-muted">02</span> &nbsp; name: <span className="code-green">'Aung'</span>,</div>
                <div><span className="code-muted">03</span> &nbsp; role: <span className="code-green">'Full-stack developer'</span>,</div>
                <div><span className="code-muted">04</span> &nbsp; focused: [</div>
                <div><span className="code-muted">05</span> &nbsp;&nbsp; <span className="code-yellow">'Clean UI'</span>,</div>
                <div><span className="code-muted">06</span> &nbsp;&nbsp; <span className="code-yellow">'Useful products'</span>,</div>
                <div><span className="code-muted">07</span> &nbsp;&nbsp; <span className="code-yellow">'Quality code'</span></div>
                <div><span className="code-muted">08</span> &nbsp; ],</div>
                <div><span className="code-muted">09</span> &nbsp; learning: <span className="code-purple">true</span></div>
                <div><span className="code-muted">10</span> {'};'}</div>
              </div>

              <div className="code-window-footer">
                <span>⌘ JavaScript</span>
                <span>Made with care</span>
              </div>
            </div>

            <div className="floating-tag floating-tag-top">
              <span>✳</span> Thoughtful design
            </div>
            <div className="floating-tag floating-tag-bottom">
              <span>↗</span> Built for the web
            </div>
          </div>
        </div>

        <div className="hero-bottom-border" />
      </section>

      <section className="content-section" id="skills">
        <div className="about-container">
          <div className="section-heading">
            <p className="section-eyebrow">MY TOOLKIT</p>
            <h2>Tools I use to build</h2>
            <p className="section-description">
              A practical set of technologies for building and connecting
              modern web applications.
            </p>
          </div>

          <div className="technology-grid">
            {technologies.map((technology) => (
              <article className="technology-card" key={technology.name}>
                <div className="technology-icon" aria-hidden="true">
                  {technology.icon}
                </div>
                <div className="technology-category">
                  {technology.category}
                </div>
                <h3>{technology.name}</h3>
                <p>{technology.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section services-section">
        <div className="about-container">
          <div className="section-heading">
            <p className="section-eyebrow">HOW I CAN HELP</p>
            <h2>Let's build something useful.</h2>
            <p className="section-description">
              From polished interfaces to connected web applications,
              I focus on building solutions around your project needs.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>

          <div className="closing-cta">
            <div>
              <p className="section-eyebrow">HAVE A PROJECT IN MIND?</p>
              <h2>Let's make it happen.</h2>
              <p>Tell me what you're building and what you need help with.</p>
            </div>

            <button
              type="button"
              className="button-primary"
              onClick={() => onNavigate?.('Contact')}
            >
              Get in touch <span>↗</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
