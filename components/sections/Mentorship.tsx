import React from 'react';
import { FadeIn } from '../ui/FadeIn';

export const Mentorship: React.FC = () => {
  const syllabus = [
    { name: "Abertura Coronária Ninja", icon: "fa-mask" },
    { name: "Canais Calcificados", icon: "fa-magnifying-glass" },
    { name: "Instrumentação Mecanizada", icon: "fa-robot" },
    { name: "Irrigação Ultrassônica", icon: "fa-water" },
    { name: "Obturação Tridimensional", icon: "fa-cube" },
    { name: "Resolução de Acidentes", icon: "fa-kit-medical" }
  ];

  return (
    // Fluid spacing py-16 -> py-24 -> py-32
    <section className="py-16 md:py-24 lg:py-32 bg-navy-950 relative border-t border-white/5 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      
      {/* Ambient Lighting - Gold for Academia */}
      <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-gold-600/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          <div className="w-full lg:w-1/2 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-gold-400/30 rounded-full bg-gold-400/5 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                <i className="fa-solid fa-crown text-gold-400 text-[10px]"></i>
                <span className="text-gold-300 text-[10px] font-bold tracking-[0.2em] uppercase">Exclusivo para Dentistas</span>
              </div>
              
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-slate-50 mb-6 leading-tight">
                Mentoria <span className="text-gold-400 italic">Endo 360</span>
              </h2>
              
              <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed mb-8 border-l-2 border-gold-400/30 pl-6">
                A insegurança em casos complexos trava o crescimento do seu consultório. O <strong className="text-white">Método Endo 360</strong> transforma sua prática clínica através de protocolos previsíveis e cientificamente embasados.
              </p>
              
              {/* Syllabs Grid - Visually Enhanced */}
              <div className="bg-navy-900/50 border border-white/5 p-6 md:p-8 rounded-xl backdrop-blur-sm mb-10 hover:border-gold-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-900/10">
                <h4 className="text-white font-serif text-lg md:text-xl mb-6">O que você vai dominar:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {syllabus.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 group p-3 rounded-lg bg-white/[0.02] hover:bg-gold-400/10 transition-all duration-300 border border-transparent hover:border-gold-400/20 cursor-default">
                      <div className="w-8 h-8 flex-shrink-0 rounded-md bg-navy-800 flex items-center justify-center text-gold-400/70 group-hover:text-gold-300 group-hover:scale-110 transition-all duration-300">
                        <i className={`fa-solid ${item.icon} text-sm`}></i>
                      </div>
                      <span className="text-slate-400 font-sans text-sm group-hover:text-gold-100 transition-colors duration-300 font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href="https://wa.me/5562985551350?text=Tenho%20interesse%20na%20Mentoria%20Endo%20360" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden group inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 hover:to-gold-300 text-navy-950 font-bold uppercase tracking-widest text-sm transition-all duration-300 rounded-sm shadow-lg shadow-gold-900/20 hover:shadow-gold-500/20 transform hover:-translate-y-1 w-full sm:w-auto justify-center"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12"></div>
                <span className="relative z-10">Aplicar para a Turma</span>
                <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform relative z-10"></i>
              </a>
            </FadeIn>
          </div>

          <div className="w-full lg:w-1/2 relative hidden lg:block px-4">
             <FadeIn direction="left" delay={200}>
               <div className="relative group w-full max-w-md mx-auto">
                 
                 {/* 1. Ambient Glow */}
                 <div className="absolute -inset-0.5 bg-gradient-to-br from-gold-500/30 to-navy-900/50 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-1000"></div>
                 
                 {/* 2. Main Card Body */}
                 <div className="relative z-10 bg-navy-900/90 backdrop-blur-xl border border-white/10 p-8 md:p-10 shadow-2xl rounded-2xl overflow-hidden transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                    
                    {/* Decorative Watermark Quote */}
                    <div className="absolute -top-4 -right-4 text-[10rem] leading-none font-serif text-gold-400/[0.03] select-none pointer-events-none font-italic">”</div>
                    
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                        {[1,2,3,4,5].map(i => <i key={i} className="fa-solid fa-star text-xs text-gold-400 drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]"></i>)}
                    </div>

                    <p className="font-serif text-xl md:text-2xl text-slate-200 leading-relaxed mb-8 relative z-10">
                      "Eu encaminhava <span className="line-through text-slate-600 decoration-gold-400/30 decoration-1 text-lg">60%</span> dos meus casos. Hoje, resolvo <strong className="text-white font-medium border-b-2 border-gold-400/60 pb-0.5">95%</strong> no meu próprio consultório com segurança absoluta."
                    </p>
                    
                    {/* Author Section */}
                    <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-2">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-300 to-gold-600 p-[1px] shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                          <div className="w-full h-full rounded-full bg-navy-900 flex items-center justify-center">
                             <span className="text-gold-300 font-bold text-lg font-serif">R</span>
                          </div>
                      </div>
                      <div>
                        <p className="text-slate-50 font-bold text-sm tracking-wide">Dr. Rafael M.</p>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            <p className="text-slate-400 text-[10px] uppercase tracking-widest">Aluno Turma 3</p>
                        </div>
                      </div>
                    </div>
                 </div>
               </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};