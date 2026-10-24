
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../../styles/Portfolio.css';

const projects = [


  {
    title: 'Canada RN Mentorship',
    description: 'A web project for nursing mentorship in Canada.',
    image: `${process.env.PUBLIC_URL}/images/canada-rn-mentorship.png`,
    githubLink: 'https://github.com/Aungphyohan5/canada-rn-mentorship',
    tech: ['React', 'JavaScript', 'Web Development'],
  },

  {
    title: 'EastCoastCamping',
    category: 'Web Application',
    description:
      'A camping-focused web project. Explore the deployed application and source code to see how the experience is built.',
    image:
      'https://user-images.githubusercontent.com/112873819/233417344-91bb908c-fd84-4d5d-ac80-4ab01c234515.png',
    alt: 'EastCoastCamping application screenshot',
    live: 'https://eastcoastcampingp-3.herokuapp.com/',
    github: 'https://github.com/Aungphyohan5/EastCoastCamping/',
    featured: true,
    technologies: ['JavaScript', 'Web Development'],
  },
  {
    title: 'Bootcamp Work Finder',
    category: 'Job Search Project',
    description:
      'A project focused on helping users explore work opportunities connected with the coding bootcamp community.',
    image:
      'https://user-images.githubusercontent.com/112873819/220372774-ee55962d-e780-462d-bb9a-1153cf9d06b5.png',
    alt: 'Bootcamp Work Finder application screenshot',
    live: 'https://bootcamp-work-finder.herokuapp.com/',
    github: 'https://github.com/Aungphyohan5/bootcamp-work-finder/',
    technologies: ['JavaScript', 'Web Application'],
  },
  {
    title: 'The Snowbird Exchange',
    category: 'Web Application',
    description:
      'A web project built around The Snowbird Exchange concept. Visit the live site to explore its interface and features.',
    image:
      'https://github.com/Aungphyohan5/the-snowbird-exchange/blob/main/assets/images/screenshot.png?raw=true',
    alt: 'The Snowbird Exchange website screenshot',
    live: 'https://aungphyohan5.github.io/the-snowbird-exchange/',
    github: 'https://github.com/Aungphyohan5/the-snowbird-exchange',
    technologies: ['JavaScript', 'Web Development'],
  },
  {
    title: 'Work Day Scheduler',
    category: 'Productivity Tool',
    description:
      'A day-planning application project designed to help users organize their schedule and daily tasks.',
    image:
      'https://github.com/Aungphyohan5/Work-Day-Scheduler/blob/main/Assets/Screenshot.png?raw=true',
    alt: 'Work Day Scheduler application screenshot',
    live: 'https://aungphyohan5.github.io/Work-Day-Scheduler',
    github: 'https://github.com/Aungphyohan5/Work-Day-Scheduler',
    technologies: ['JavaScript', 'CSS', 'HTML'],
  },
  {
    title: 'Code Quiz',
    category: 'Interactive Application',
    description:
      'An interactive quiz project that demonstrates browser-based user interaction and JavaScript functionality.',
    image:
      'https://github.com/Aungphyohan5/Code-Quiz/blob/main/Assets/images/screenshot.png?raw=true',
    alt: 'Code Quiz application screenshot',
    live: 'https://aungphyohan5.github.io/Code-Quiz/',
    github: 'https://github.com/Aungphyohan5/Code-Quiz',
    technologies: ['JavaScript', 'CSS', 'HTML'],
  },
  {
    title: 'Weather Dashboard',
    category: 'Dashboard',
    description:
      'A weather dashboard project for presenting weather information in an accessible web interface.',
    image:
      'https://github.com/Aungphyohan5/Weather-Dashboard/blob/main/assets/image/screenshot%20of%20webpage.png?raw=true',
    alt: 'Weather Dashboard application screenshot',
    live: 'https://aungphyohan5.github.io/Weather-Dashboard/',
    github: 'https://github.com/Aungphyohan5/Weather-Dashboard',
    technologies: ['JavaScript', 'API Integration', 'CSS'],
  },
  {
    title: 'Note Taker',
    category: 'Productivity Tool',
    description:
      'A note-taking application project focused on creating and managing notes through a web interface.',
    image:
      'https://github.com/Aungphyohan5/Note_Taker/blob/main/demo/Note_Taker.png?raw=true',
    alt: 'Note Taker application screenshot',
    live: 'https://sheltered-dawn-92199.herokuapp.com/',
    github: 'https://github.com/Aungphyohan5/Note_Taker',
    technologies: ['JavaScript', 'Web Application'],
  },
];

export default function Portfolio({ onNavigate }) {
  return (
    <main className="portfolio-page">
      <div className="portfolio-container">
        <header className="portfolio-heading">
          <p className="portfolio-eyebrow">SELECTED WORK</p>
          <h1>
            Projects built with
            <br />
            <span>purpose and curiosity.</span>
          </h1>
          <p className="portfolio-description">
            A selection of web projects showcasing my experience building
            interactive interfaces, useful tools, and web applications.
            Explore a project or browse its source code.
          </p>
        </header>

        <div className="portfolio-results">
          <span>PROJECTS</span>
          <span>{String(projects.length).padStart(2, '0')} PROJECTS</span>
        </div>

        <section className="portfolio-grid" aria-label="Portfolio projects">
          {projects.map((project, index) => (
            <article
              className={`portfolio-card ${project.featured ? 'portfolio-card-featured' : ''
                }`}
              key={project.title}
            >
              <a
                className="portfolio-image"
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live website`}
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
                <span className="portfolio-image-overlay">
                  View project <FaExternalLinkAlt aria-hidden="true" />
                </span>
              </a>

              <div className="portfolio-card-content">
                <div className="portfolio-card-topline">
                  <span className="portfolio-category">
                    {project.category}
                  </span>
                  <span className="portfolio-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h2>{project.title}</h2>
                <p className="portfolio-project-description">
                  {project.description}
                </p>

                <div className="portfolio-tech" aria-label="Project tags">
                  {(project.technologies || []).map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="portfolio-links">
                  <a
                    className="portfolio-link-primary"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live demo <FaExternalLinkAlt aria-hidden="true" />
                  </a>
                  <a
                    className="portfolio-link-secondary"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub aria-hidden="true" /> Source code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="portfolio-bottom-cta">
          <div>
            <p className="portfolio-eyebrow">HAVE A PROJECT IN MIND?</p>
            <h2>Let's build something useful.</h2>
            <p>
              Have a website or web application idea? Let's talk about your
              project requirements.
            </p>
          </div>
          <button
            type="button"
            className="portfolio-contact-button"
            onClick={() => onNavigate?.('Contact')}
          >
            Let's talk <span aria-hidden="true">↗</span>
          </button>
        </section>
      </div>
    </main>
  );
}
