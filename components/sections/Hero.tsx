import React, { useEffect, useState, useRef } from 'react';
import { FadeIn } from '../ui/FadeIn';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (requestRef.current) return;
      requestRef.current = requestAnimationFrame(() => {
        setMousePos({
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: (e.clientY / window.innerHeight) * 2 - 1,
        });
        requestRef.current = undefined;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const studentWhatsapp = "https://wa.me/5562985551350?text=Ol%C3%A1%2C%20sou%20dentista%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20Mentoria%20Endo%20360.";
  const clinicWhatsapp = "https://wa.me/5562984459505?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Andr%C3%A9%20Gomide.";

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 overflow-hidden">
      
      {/* 1. Global Light Source */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-gradient-radial from-navy-800/80 via-navy-950/20 to-transparent pointer-events-none z-0"></div>
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-noise opacity-[0.04]"></div>
        
        {/* Clinical Blue Subtle Glow - Left */}
        <div 
          className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow transition-transform duration-[3000ms] ease-out-expo"
          style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` }}
        ></div>
        
        {/* Warm Gold Glow - Right */}
        <div 
          className="absolute top-1/4 right-[5%] w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[100px] mix-blend-screen transition-transform duration-[3000ms] ease-out-expo will-change-transform"
          style={{ transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)` }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col items-center">
        
        {/* Header Content */}
        <div className="text-center max-w-5xl mx-auto mb-20 md:mb-24 relative">
          <FadeIn delay={0}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-gold-300 to-transparent"></div>
              <span className="text-gold-200 text-xs md:text-sm tracking-[0.4em] font-semibold uppercase font-sans">
                Referência em Porangatu
              </span>
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-gold-300 to-transparent"></div>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-slate-100 mb-8 tracking-tight drop-shadow-2xl">
              Precisão <span className="font-light italic text-slate-300">Clínica</span>
              <br />
              <span className="text-gold-gradient font-medium relative inline-block">
                & Rigor Acadêmico
                <span className="absolute inset-0 bg-gold-400/20 blur-2xl -z-10 rounded-full opacity-30"></span>
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={400}>
            <p className="text-slate-300 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed font-sans opacity-90">
              A união definitiva entre tecnologia microscópica e cuidado humano. 
              <br/>
              <strong className="text-slate-100 font-medium">Dr. André Gomide, PhD</strong>.
            </p>
          </FadeIn>
        </div>

        {/* The Choice Cards - Premium Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 w-full max-w-5xl">
          
          {/* Card 1: Dentist */}
          <FadeIn delay={600} direction="up" className="h-full">
            <a href={studentWhatsapp} target="_blank" rel="noopener noreferrer" className="block group relative h-full">
              {/* Card Container */}
              <div className="absolute inset-0 bg-glass-gradient backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-gold-300/40 transition-all duration-700 ease-out-expo shadow-2xl shadow-black/40 group-hover:shadow-gold-900/10 group-hover:-translate-y-2"></div>
              
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out-expo rounded-2xl"></div>
              
              <div className="relative p-10 md:p-12 h-full flex flex-col items-start">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 group-hover:border-gold-400/50 transition-all duration-700 ease-out-expo shadow-lg">
                  <i className="fa-solid fa-graduation-cap text-2xl text-gold-300"></i>
                </div>

                <div className="space-y-4 mb-10">
                  <h3 className="font-sans text-xs font-bold tracking-[0.2em] text-gold-300 uppercase">Área de Ensino</h3>
                  <h2 className="font-serif text-4xl text-white group-hover:text-gold-200 transition-colors duration-500">Sou Dentista</h2>
                  <p className="text-slate-300 font-light text-base leading-relaxed group-hover:text-white transition-colors duration-500">
                    Eleve sua carreira com a <span className="font-medium text-slate-200">Mentoria Endo 360</span>. Domine casos complexos.
                  </p>
                </div>

                <div className="mt-auto flex items-center gap-3 text-gold-200 text-sm font-bold tracking-widest uppercase group-hover:gap-5 transition-all duration-500 ease-out-expo border-b border-transparent group-hover:border-gold-300/50 pb-1">
                  <span>Acessar Portal</span>
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </div>
              </div>
            </a>
          </FadeIn>

          {/* Card 2: Patient */}
          <FadeIn delay={700} direction="up" className="h-full">
            <a href={clinicWhatsapp} target="_blank" rel="noopener noreferrer" className="block group relative h-full">
              {/* Card Container */}
              <div className="absolute inset-0 bg-glass-gradient backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-cyan-400/30 transition-all duration-700 ease-out-expo shadow-2xl shadow-black/40 group-hover:shadow-cyan-900/10 group-hover:-translate-y-2"></div>
              
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out-expo rounded-2xl"></div>

              <div className="relative p-10 md:p-12 h-full flex flex-col items-start">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 group-hover:border-cyan-400/50 transition-all duration-700 ease-out-expo shadow-lg">
                  <i className="fa-regular fa-face-smile text-2xl text-cyan-200"></i>
                </div>

                <div className="space-y-4 mb-10">
                  <h3 className="font-sans text-xs font-bold tracking-[0.2em] text-cyan-200 uppercase">Clínica Particular</h3>
                  <h2 className="font-serif text-4xl text-white group-hover:text-cyan-100 transition-colors duration-500">Sou Paciente</h2>
                  <p className="text-slate-300 font-light text-base leading-relaxed group-hover:text-white transition-colors duration-500">
                    Tratamento de canal sem dor e com tecnologia de ponta (Microscopia).
                  </p>
                </div>

                <div className="mt-auto flex items-center gap-3 text-cyan-200 text-sm font-bold tracking-widest uppercase group-hover:gap-5 transition-all duration-500 ease-out-expo border-b border-transparent group-hover:border-cyan-300/50 pb-1">
                  <span>Agendar Consulta</span>
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </div>
              </div>
            </a>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};