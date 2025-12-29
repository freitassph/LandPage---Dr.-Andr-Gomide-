import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Authority } from './components/sections/Authority';
import { Mentorship } from './components/sections/Mentorship';
import { Clinic } from './components/sections/Clinic';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/layout/Footer';

const App: React.FC = () => {
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
      {/* Main Content */}
      <div className="flex flex-col min-h-screen bg-navy-950">
        <Header />
        <main className="flex-grow">
          <div id="hero"><Hero /></div>
          
          {/* 
             Using scroll-mt-20 (80px) for mobile (Header ~65-75px) 
             and scroll-mt-28 (112px) for desktop (Header ~80-100px).
             Optimized for tighter visual alignment.
          */}
          <div id="authority" className="scroll-mt-20 md:scroll-mt-28"><Authority /></div>
          
          {/* The Split Paths: Specialized Content */}
          <div id="mentoria" className="scroll-mt-20 md:scroll-mt-28"><Mentorship /></div>
          <div id="clinica" className="scroll-mt-20 md:scroll-mt-28"><Clinic /></div>
          
          {/* Social Proof & Validation */}
          <div id="testimonials" className="scroll-mt-20 md:scroll-mt-28"><Testimonials /></div>
          
          {/* Information */}
          <div id="faq" className="scroll-mt-20 md:scroll-mt-28"><FAQ /></div>
        </main>
        <Footer />

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-24 right-4 md:bottom-8 md:right-8 z-[60] w-10 h-10 md:w-12 md:h-12 rounded-full bg-navy-800 border border-gold-400/30 text-gold-400 shadow-lg flex items-center justify-center hover:bg-gold-400 hover:text-navy-900 transition-all duration-500 transform ${showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
          aria-label="Voltar ao topo"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </>
  );
};

export default App;