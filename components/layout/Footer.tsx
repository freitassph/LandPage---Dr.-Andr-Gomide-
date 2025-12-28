import React from 'react';

export const Footer: React.FC = () => {
  const clinicWhatsapp = "https://wa.me/5562984459505";
  const studentWhatsapp = "https://wa.me/5562985551350";

  return (
    <>
      {/* 
        Padding Bottom Logic: 
        Mobile Stick Bar is h-16 (64px). 
        We use pb-28 (112px) on mobile to clear it comfortably + spacing.
        We return to pb-20 (80px) on md+ where bar is hidden.
      */}
      <footer className="bg-navy-950 border-t border-white/5 pt-16 md:pt-20 pb-28 md:pb-20 text-slate-400 text-sm relative z-10">
        <div className="container mx-auto px-4">
          {/* Layout alterado para Grid em telas médias+ para garantir centralização absoluta do elemento do meio */}
          <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-8 mb-12">
            
            <div className="text-center md:text-left">
              <h3 className="text-slate-50 font-serif text-2xl italic mb-2">Dr. André Gomide</h3>
              <p className="font-light tracking-wide text-xs uppercase">Endodontia Microscópica</p>
            </div>

            <div className="flex justify-center gap-8">
              <a 
                href="https://www.instagram.com/drandregomide?igsh=emRjbjNzMWRmejkz" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-gold-300 transition-colors text-xl"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a 
                href="mailto:contato@drandregomide.com.br"
                className="text-slate-500 hover:text-gold-300 transition-colors text-xl"
              >
                <i className="fa-regular fa-envelope"></i>
              </a>
            </div>
            
            <div className="text-center md:text-right text-xs font-light text-slate-600">
              <p className="mb-1">CRO-GO 8397</p>
              <p>&copy; 2026 Dr. André Gomide.</p>
            </div>
          </div>
          
          <div className="text-center flex flex-col items-center gap-2">
             <p className="text-[10px] uppercase tracking-[0.3em] text-slate-700 opacity-50">Designed for Excellence</p>
             <a 
               href="https://www.instagram.com/freitass_ph/"
               target="_blank"
               rel="noopener noreferrer"
               className="text-[8px] uppercase tracking-[0.2em] text-slate-800 hover:text-gold-500/30 transition-colors duration-500"
             >
                By freitass_ph
             </a>
          </div>
        </div>
      </footer>

      {/* Luxury Mobile Sticky Bar - Elevated Z-Index (50) to be above content but below Modals if any */}
      <div className="fixed bottom-0 left-0 w-full md:hidden z-50 flex h-16 bg-navy-900/80 backdrop-blur-xl border-t border-white/10 shadow-[0_-5px_20px_rgba(0,0,0,0.5)] safe-area-pb">
        <a 
          href={`${studentWhatsapp}?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20cursos%20e%20mentoria.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 text-slate-300 text-xs uppercase tracking-widest hover:bg-white/5 transition-colors border-r border-white/10 active:bg-white/10 active:text-white"
        >
          <i className="fa-solid fa-graduation-cap text-gold-400"></i>
          Sou Aluno
        </a>
        <a 
          href={`${clinicWhatsapp}?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Andr%C3%A9%20Gomide.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-gold-400/90 text-navy-900 font-bold text-xs uppercase tracking-widest hover:bg-gold-300 transition-colors active:bg-gold-500 backdrop-blur-none"
        >
          <i className="fa-brands fa-whatsapp"></i>
          Agendar
        </a>
      </div>
    </>
  );
};