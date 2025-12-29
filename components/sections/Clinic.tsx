import React from 'react';
import { FadeIn } from '../ui/FadeIn';

export const Clinic: React.FC = () => {
  const technologies = [
    { icon: "fa-microscope", title: "Microscopia Zeiss", desc: "Ampliação de até 20x para tratar canais invisíveis a olho nu." },
    { icon: "fa-print", title: "Tomografia 3D", desc: "Planejamento digital para máxima segurança e precisão." },
    { icon: "fa-wand-magic-sparkles", title: "Ultrassom Piezo", desc: "Limpeza profunda com preservação da estrutura dental." }
  ];

  return (
    // Fluid spacing py-16 -> py-24 -> py-32
    <section className="py-16 md:py-24 lg:py-32 bg-navy-900 relative overflow-hidden">
      {/* Background Ambience - Cyan for Clinical/Tech */}
      <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-cyan-900/10 to-transparent pointer-events-none"></div>
      
      {/* Decorative Circle */}
      <div className="absolute right-[-10%] top-[20%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full border border-cyan-500/5 opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Content Side - Left */}
          <div className="w-full lg:w-1/2 max-w-2xl lg:max-w-none mx-auto lg:mx-0 lg:pr-10">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-cyan-400/30 rounded-full bg-cyan-400/5 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                <i className="fa-solid fa-tooth text-cyan-400 text-[10px]"></i>
                <span className="text-cyan-300 text-[10px] font-bold tracking-[0.2em] uppercase">Clínica Particular</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-50 mb-6 leading-tight">
                Tecnologia a favor do <br/><span className="italic text-cyan-400 font-light">Seu Conforto</span>
              </h2>
              
              <p className="text-slate-300 text-sm md:text-base lg:text-lg font-light leading-relaxed mb-8 border-l-2 border-cyan-400/30 pl-6">
                Esqueça o medo do tratamento de canal. Utilizamos tecnologia microscópica para procedimentos <strong>minimamente invasivos</strong>, mais rápidos e, na maioria dos casos, em <strong className="text-white">sessão única</strong>.
              </p>
              
              <div className="space-y-4 mb-10">
                {technologies.map((tech, idx) => (
                  <div key={idx} className="flex gap-5 group p-4 rounded-lg bg-navy-800/30 hover:bg-navy-800/60 transition-all duration-500 hover:translate-x-2 border border-white/5 hover:border-cyan-400/30">
                    <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-navy-800 border border-white/10 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:text-cyan-400 transition-all shadow-lg group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                      <i className={`fa-solid ${tech.icon} text-slate-400 text-xl group-hover:text-cyan-400 transition-colors`}></i>
                    </div>
                    <div>
                      <h4 className="text-white font-serif text-lg group-hover:text-cyan-200 transition-colors">{tech.title}</h4>
                      <p className="text-slate-400 text-sm font-light leading-snug group-hover:text-slate-300 transition-colors">{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a 
                href="https://wa.me/5562984459505?text=Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden group inline-flex items-center gap-4 px-8 py-4 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 font-bold uppercase tracking-widest text-sm transition-all duration-300 rounded-sm hover:shadow-lg hover:shadow-cyan-400/10 w-full sm:w-auto justify-center active:scale-[0.98]"
              >
                 <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12"></div>
                <span className="relative z-10">Agendar Avaliação</span>
                <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform relative z-10"></i>
              </a>
            </FadeIn>
          </div>

          {/* Visual Focus: Precision - Right */}
          <div className="w-full lg:w-1/2 relative h-[300px] md:h-[500px] rounded-lg overflow-hidden group border border-white/5 shadow-2xl max-w-2xl lg:max-w-none mx-auto lg:pl-10">
             <FadeIn direction="left" delay={200} className="h-full">
                {/* Image Container */}
                <div className="absolute inset-0 bg-navy-950">
                    <img 
                        src="https://i.ibb.co/Q375YJDH/Gemini-Generated-Image-d57ipxd57ipxd57i.png" 
                        alt="Microscópio Operatório Odontológico em uso clínico"
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s] ease-out" 
                        loading="lazy"
                    />
                </div>
                
                {/* Overlays - Adjusted for visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent"></div>
                <div className="absolute inset-0 bg-cyan-900/10 mix-blend-overlay"></div>
                
                {/* Floating Content */}
                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 p-6 md:p-8 bg-navy-900/90 backdrop-blur-xl border border-white/10 border-l-4 border-l-cyan-400 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                  <p className="font-serif text-lg md:text-2xl text-white italic mb-2">"A gente só trata o que vê."</p>
                  <p className="text-[10px] text-cyan-300 uppercase tracking-widest font-bold">Filosofia da Microscopia</p>
                </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};