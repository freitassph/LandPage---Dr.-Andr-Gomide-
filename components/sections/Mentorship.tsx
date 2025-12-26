import React from 'react';
import { FadeIn } from '../ui/FadeIn';

export const Mentorship: React.FC = () => {
  const syllabus = [
    "Abertura Coronária Ninja",
    "Localização de Canais Calcificados",
    "Instrumentação Mecanizada",
    "Irrigação Ultrassônica",
    "Obturação Tridimensional",
    "Resolução de Acidentes e Desvios"
  ];

  return (
    <section className="py-20 md:py-32 bg-navy-950 relative border-t border-white/5 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      
      {/* Ambient Lighting - Gold for Academia */}
      <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-gold-600/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-gold-400/30 rounded-full bg-gold-400/5 backdrop-blur-md">
                <i className="fa-solid fa-crown text-gold-400 text-[10px]"></i>
                <span className="text-gold-300 text-[10px] font-bold tracking-[0.2em] uppercase">Exclusivo para Dentistas</span>
              </div>
              
              <h2 className="font-serif text-5xl md:text-6xl text-slate-50 mb-6 leading-tight">
                Mentoria <span className="text-gold-400 italic">Endo 360</span>
              </h2>
              
              <p className="text-slate-300 text-lg font-light leading-relaxed mb-8 border-l-2 border-gold-400/30 pl-6">
                A insegurança em casos complexos trava o crescimento do seu consultório. O <strong className="text-white">Método Endo 360</strong> transforma sua prática clínica através de protocolos previsíveis e cientificamente embasados.
              </p>
              
              <div className="bg-navy-900/50 border border-white/5 p-6 md:p-8 rounded-xl backdrop-blur-sm mb-10 hover:border-gold-400/20 transition-colors duration-500">
                <h4 className="text-white font-serif text-xl mb-6">O que você vai dominar:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {syllabus.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-400 group-hover:scale-150 transition-transform"></div>
                      <span className="text-slate-400 font-sans text-sm group-hover:text-gold-100 transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href="https://wa.me/5562985551350?text=Tenho%20interesse%20na%20Mentoria%20Endo%20360" 
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 hover:to-gold-300 text-navy-950 font-bold uppercase tracking-widest text-sm transition-all duration-300 rounded-sm shadow-lg shadow-gold-900/20 hover:shadow-gold-500/20 transform hover:-translate-y-1 w-full md:w-auto justify-center"
              >
                Aplicar para a Turma
                <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </a>
            </FadeIn>
          </div>

          <div className="w-full lg:w-1/2 relative hidden lg:block">
             <FadeIn direction="left" delay={200}>
               <div className="relative">
                 {/* Abstract representation of a certificate/book */}
                 <div className="absolute top-0 right-0 w-full h-full border border-gold-400/20 transform translate-x-4 translate-y-4 z-0"></div>
                 <div className="relative z-10 bg-navy-800 border border-white/10 p-10 shadow-2xl">
                    <i className="fa-solid fa-quote-left text-4xl text-gold-400/20 mb-6"></i>
                    <p className="font-serif text-2xl text-slate-200 leading-relaxed mb-6">
                      "Eu encaminhava 60% dos meus casos. Hoje, resolvo 95% no meu próprio consultório com <span className="text-gold-300">segurança absoluta</span> e cobrando o triplo."
                    </p>
                    <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                      <div className="w-12 h-12 rounded-full bg-gold-400 flex items-center justify-center text-navy-900 font-bold text-lg">R</div>
                      <div>
                        <p className="text-white font-bold">Dr. Rafael M.</p>
                        <p className="text-gold-400/70 text-xs uppercase tracking-wider">Aluno Turma 3</p>
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