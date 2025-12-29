import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloqueia o scroll do corpo quando o menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'O Especialista', href: '#authority' },
    { name: 'Para Dentistas', href: '#mentoria' },
    { name: 'Clínica', href: '#clinica' },
    { name: 'Depoimentos', href: '#testimonials' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // 1. Fecha o menu imediatamente
    setIsMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // 2. Timeout para garantir que o layout estabilize (especialmente mobile address bar)
      setTimeout(() => {
        const isMobile = window.innerWidth < 768;
        
        // Offset de Segurança (Vercel/Production Fix):
        // Header Compacto: ~65px.
        // Mobile: 85px (65px Header + 20px Respiro).
        // Desktop: 105px (80px Header + 25px Respiro).
        // Aumentamos os valores para garantir que NUNCA corte o título, 
        // compensando variações de renderização entre navegadores.
        const offset = isMobile ? 85 : 105; 
        
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const clinicWhatsapp = "https://wa.me/5562984459505?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Andr%C3%A9%20Gomide.";

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b 
        ${scrolled && !isMobileMenuOpen 
          ? 'py-3 bg-navy-950/80 backdrop-blur-md border-white/5 shadow-2xl supports-[backdrop-filter]:bg-navy-950/60' 
          : 'py-4 md:py-6 bg-transparent border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center relative">
          
          {/* Logo - Otimizado para Mobile */}
          <a href="#" onClick={handleLogoClick} className="flex items-center gap-3 group cursor-pointer flex-shrink-0 z-50 relative">
            <div className={`
              border border-gold-400/30 flex items-center justify-center text-gold-300 font-serif italic transition-all duration-500 bg-navy-900/50 backdrop-blur-sm rounded-sm
              ${scrolled ? 'w-10 h-10 text-xl shadow-lg shadow-gold-900/10' : 'w-10 h-10 md:w-12 md:h-12 text-xl md:text-2xl'}
            `}>
              G
            </div>
            <div className="flex flex-col justify-center">
              <span className={`font-serif leading-none tracking-wide text-slate-50 transition-all duration-500 ${scrolled ? 'text-base' : 'text-base md:text-lg'}`}>
                Dr. André Gomide
              </span>
              <span className={`text-slate-500 uppercase tracking-[0.2em] md:tracking-[0.3em] leading-none mt-1 transition-all duration-500 ${scrolled ? 'text-[0.5rem] md:text-[0.55rem]' : 'text-[0.6rem] md:text-[0.65rem]'}`}>
                PhD Endodontia
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-sans uppercase tracking-widest text-slate-400 hover:text-white transition-colors cursor-pointer relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-px after:bg-gold-400 after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle Container */}
          <div className="flex items-center gap-4 z-50 relative">
            {/* CTA - Hidden on very small mobile, Visible on bigger screens */}
            <a 
              href={clinicWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:flex items-center gap-2 px-6 py-2 border transition-all duration-300 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-sm whitespace-nowrap active:scale-95
              ${scrolled 
                ? 'bg-gold-400 text-navy-950 border-gold-400 hover:bg-white hover:border-white' 
                : 'bg-white/5 text-gold-300 border-white/10 hover:border-gold-400 hover:bg-gold-400 hover:text-navy-900'
              }`}
            >
              <span>Agendar</span>
            </a>

            {/* Mobile Toggle Button - Always Visible on Mobile/Tablet */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-gold-300 text-2xl focus:outline-none active:scale-95 transition-transform p-2"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              <i className={`fa-solid transition-all duration-300 ${isMobileMenuOpen ? 'fa-xmark rotate-90' : 'fa-bars-staggered'}`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Z-index adjusted to sit BEHIND the header content but ABOVE the page */}
      <div 
        className={`fixed inset-0 z-40 bg-navy-950/98 backdrop-blur-3xl flex flex-col justify-center items-center gap-8 transition-all duration-500 lg:hidden 
        ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>
        
        {/* Navigation Links */}
        <nav className="flex flex-col items-center gap-8 relative z-10 w-full px-8">
          {navLinks.map((link, idx) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-3xl font-serif text-slate-300 hover:text-gold-400 transition-all duration-500 transform 
                ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} active:scale-95`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <div className="w-16 h-px bg-white/10 my-4 relative z-10"></div>
        
        {/* Mobile CTA */}
        <a 
          href={clinicWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsMobileMenuOpen(false)}
          className={`relative z-10 px-8 py-4 bg-gold-400 text-navy-900 font-bold uppercase tracking-widest text-sm hover:bg-gold-300 transition-all duration-500 rounded-sm shadow-lg shadow-gold-400/20 transform active:scale-95
            ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          style={{ transitionDelay: '400ms' }}
        >
          Agendar Agora
        </a>
      </div>
    </>
  );
};