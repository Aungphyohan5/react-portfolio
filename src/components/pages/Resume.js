
import React from 'react';
import { FaDownload, FaCode, FaServer, FaGraduationCap } from 'react-icons/fa';
import '../../styles/Resume.css';

const frontEndSkills = [
  'HTML',
  'CSS',
  'JavaScript',
  'jQuery',
  'Responsive Design',
  'React',
  'Bootstrap',
  'Bulma',
];

const backEndSkills = [
  'APIs',
  'Node.js',
  'Express.js',
  'MySQL',
  'Sequelize',
  'MongoDB',
  'Mongoose',
  'REST APIs',
  'GraphQL',
];

export default function Resume() {
  return (
    <main className="resume-page">
      <div className="resume-container">
        <header className="resume-heading">
          <p className="resume-eyebrow">MY BACKGROUND</p>
          <h1>
            Skills &amp; <span>experience.</span>
          </h1>
          <p className="resume-intro">
            My technical toolkit for building responsive websites,
            interactive user interfaces, and full-stack web applications.
          </p>

          <a
            className="resume-download"
            href="https://github.com/Aungphyohan5/react-portfolio/files/11095626/My.Resume.docx"
            target="_blank"
            rel="noreferrer"
          >
            <FaDownload aria-hidden="true" />
            Download my resume
            <span aria-hidden="true">↗</span>
          </a>
        </header>

        <section className="resume-skills-section">
          <div className="resume-section-heading">
            <p className="resume-eyebrow">TECHNICAL SKILLS</p>
            <h2>What I work with</h2>
            <p>
              Technologies and tools from my web development training and
              projects.
            </p>
          </div>

          <div className="resume-skills-grid">
            <article className="resume-skill-card">
              <div className="resume-skill-icon">
                <FaCode aria-hidden="true" />
              </div>
              <h3>Front-end development</h3>
              <p>
                Building user interfaces, responsive layouts, and interactive
                browser experiences.
              </p>
              <div className="resume-skill-tags">
                {frontEndSkills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>

            <article className="resume-skill-card">
              <div className="resume-skill-icon">
                <FaServer aria-hidden="true" />
              </div>
              <h3>Back-end development</h3>
              <p>
                Working with server-side JavaScript, databases, APIs, and
                application data.
              </p>
              <div className="resume-skill-tags">
                {backEndSkills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="resume-learning-card">
          <div className="resume-learning-icon">
            <FaGraduationCap aria-hidden="true" />
          </div>
          <div>
            <p className="resume-eyebrow">EDUCATION &amp; DEVELOPMENT</p>
            <h2>Always learning, always building.</h2>
            <p>
              My web development training and personal projects have helped
              me develop practical skills across front-end and back-end
              technologies. Explore my portfolio to see examples of my work.
            </p>
            <a
              className="resume-portfolio-link"
              href="https://github.com/Aungphyohan5"
              target="_blank"
              rel="noreferrer"
            >
              Explore my GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
