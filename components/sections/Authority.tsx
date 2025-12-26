import React from 'react';
import { FadeIn } from '../ui/FadeIn';

export const Authority: React.FC = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Gradient to lift darkness */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950"></div>
      
      {/* Decorative Golden Line */}
      <div className="absolute right-0 top-1/4 w-1/2 h-px bg-gradient-to-l from-gold-400/30 to-transparent"></div>
      
      {/* Background Big Text - Subtler and Responsive */}
      <div className="absolute left-4 bottom-0 text-[8rem] md:text-[18rem] lg:text-[22rem] font-serif leading-none text-white/[0.02] select-none pointer-events-none z-0">
        PhD
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          
          {/* Image Side - Lighter presentation */}
          {/* Removido order-2 lg:order-1 para manter o fluxo natural (Imagem primeiro) */}
          <div className="w-full lg:w-1/2 relative lg:pr-16">
            <FadeIn direction="right" duration={1200}>
              <div className="relative z-10 mx-auto max-w-sm md:max-w-md">
                {/* Frame */}
                <div className="absolute -top-6 -left-6 w-full h-full border border-gold-400/20 z-0 hidden md:block transition-transform duration-1000 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                
                <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden border border-white/10 shadow-2xl shadow-black/50 group">
                  {/* Foto final do Dr. André */}
                  <img 
                    src="https://i.ibb.co/0ppxy2bH/Gemini-Generated-Image-cpb28icpb28icpb2.jpg" 
                    alt="Dr. André Gomide - Especialista em Endodontia" 
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-[1.5s] ease-out-expo group-hover:scale-105 group-hover:brightness-100 brightness-90 contrast-110"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-1000"></div>
                </div>
                
                {/* Floating Badge - Brighter */}
                <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-12 w-40 md:w-56 bg-navy-800/90 backdrop-blur-xl border border-white/10 p-4 md:p-6 shadow-xl flex flex-col justify-center animate-float rounded-sm">
                  <span className="text-3xl md:text-5xl font-serif text-gold-300 mb-1 leading-none">20+</span>
                  <span className="text-[10px] md:text-xs uppercase tracking-widest text-slate-300 font-medium">Anos de<br/>Experiência</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Content Side */}
          {/* Removido order-1 lg:order-2 para manter o fluxo natural (Texto depois) */}
          <div className="w-full lg:w-1/2 lg:pl-10">
             <FadeIn delay={200}>
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <span className="h-px w-12 md:w-16 bg-gold-400"></span>
                <span className="text-gold-300 font-sans text-xs tracking-[0.3em] uppercase font-bold">Autoridade</span>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-50 mb-8 md:mb-10 leading-[1.15]">
                Ciência aplicada à <br/>
                <span className="italic text-slate-400 font-light">prática de elite.</span>
              </h2>
              
              <div className="space-y-6 md:space-y-8 text-slate-300 font-light text-base md:text-lg leading-relaxed md:pr-12">
                <p>
                  <strong className="text-white font-medium border-b border-gold-400/30 pb-1">André Luiz Gomide de Morais</strong> redefine o tratamento endodôntico combinando precisão microscópica com embasamento científico rigoroso. 
                </p>
                <p>
                   Como <strong className="text-gold-200 font-normal">Mestre e Doutor (PhD)</strong> pela Universidade Federal de Goiás, lidera a nova geração de especialistas através de mentorias de alta performance.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-12 mt-12 md:mt-16 border-t border-white/10 pt-8 md:pt-12">
                <div className="group">
                  <h4 className="font-serif text-xl md:text-3xl text-white mb-2 group-hover:text-gold-300 transition-colors">PhD & Mestre</h4>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-slate-400 font-medium">Ciências da Saúde - UFG</p>
                </div>
                <div className="group">
                  <h4 className="font-serif text-xl md:text-3xl text-white mb-2 group-hover:text-gold-300 transition-colors">Coordenador</h4>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-slate-400 font-medium">Especialização ABO-GO</p>
                </div>
                <div className="group">
                  <h4 className="font-serif text-xl md:text-3xl text-white mb-2 group-hover:text-gold-300 transition-colors">Pesquisador</h4>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-slate-400 font-medium">Publicações Internacionais</p>
                </div>
                <div className="group">
                   <h4 className="font-serif text-xl md:text-3xl text-white mb-2 group-hover:text-gold-300 transition-colors">Clínico</h4>
                   <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-slate-400 font-medium">Microscopia Avançada</p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};