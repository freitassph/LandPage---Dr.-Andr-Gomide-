import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Authority } from './components/sections/Authority';
import { Mentorship } from './components/sections/Mentorship';
import { Clinic } from './components/sections/Clinic';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/layout/Footer';
import { Preloader } from './components/ui/Preloader';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Cinematic Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Main Content - Rendered but hidden/behind until loading fits, or conditionally rendered depending on preference. 
          Here keeping it in DOM helps SEO crawlers immediately, but visual reveal happens after. */}
      <div className={`flex flex-col min-h-screen bg-navy-950 transition-opacity duration-1000 ${loading ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <Header />
        <main className="flex-grow">
          <div id="hero"><Hero /></div>
          
          {/* Authority: The bridge establishing credibility for both paths */}
          <div id="authority"><Authority /></div>
          
          {/* The Split Paths: Specialized Content */}
          <div id="mentoria"><Mentorship /></div>
          <div id="clinica"><Clinic /></div>
          
          {/* Social Proof & Validation */}
          <div id="testimonials"><Testimonials /></div>
          
          {/* Information */}
          <div id="faq"><FAQ /></div>
        </main>
        <Footer />

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-24 right-4 md:bottom-8 md:right-8 z-40 w-10 h-10 md:w-12 md:h-12 rounded-full bg-navy-800 border border-gold-400/30 text-gold-400 shadow-lg flex items-center justify-center hover:bg-gold-400 hover:text-navy-900 transition-all duration-500 transform ${showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
          aria-label="Voltar ao topo"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </>
  );
};

export default App;