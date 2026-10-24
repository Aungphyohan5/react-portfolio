
import React, { useState } from 'react';
import '../styles/NavTabs.css';

function NavTabs({ currentPage, handlePageChange }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const pages = ['About', 'Portfolio', 'Resume', 'Contact'];

  const navigateTo = (page) => {
    handlePageChange(page);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        {/* Brand */}
        <button
          type="button"
          className="site-brand"
          onClick={() => navigateTo('About')}
          aria-label="Aung.dev home"
        >
          <span className="site-brand-mark" aria-hidden="true">
            {'</>'}
          </span>

          <span>
            Aung<span className="site-brand-dot">.dev</span>
          </span>
        </button>

        {/* Mobile menu button */}
        <button
          type="button"
          className="site-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
          aria-controls="site-primary-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Navigation links */}
        <div
          id="site-primary-navigation"
          className={`site-nav-links ${menuOpen ? 'site-nav-links-open' : ''
            }`}
        >
          {pages.map((page) => {
            const isActive = currentPage === page;

            return (
              <button
                key={page}
                type="button"
                className={`site-nav-link ${isActive ? 'site-nav-link-active' : ''
                  }`}
                onClick={() => navigateTo(page)}
                aria-current={isActive ? 'page' : undefined}
              >
                {page}
              </button>
            );
          })}

          {/* Call to action */}
          <button
            type="button"
            className="site-nav-cta"
            onClick={() => navigateTo('Contact')}
          >
            Let's talk
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default NavTabs;
