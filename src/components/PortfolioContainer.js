
import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './pages/Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About onNavigate={handlePageChange} />;
    }

    if (currentPage === 'Portfolio') {
      return <Portfolio onNavigate={handlePageChange} />;
    }

    if (currentPage === 'Contact') {
      return <Contact />;
    }

    if (currentPage === 'Resume') {
      return <Resume />;
    }

    return <About onNavigate={handlePageChange} />;
  };

  return (
    <div>
      <NavTabs
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
      <Footer />
    </div>
  );
}
