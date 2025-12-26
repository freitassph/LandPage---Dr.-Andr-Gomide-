import React from 'react';

export const Footer: React.FC = () => {
  const clinicWhatsapp = "https://wa.me/5562984459505";
  const studentWhatsapp = "https://wa.me/5562985551350";

  return (
    <>
      <footer className="bg-navy-950 border-t border-white/5 pt-20 pb-32 md:pb-20 text-slate-400 text-sm">
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
          
          <div className="text-center">
             <p className="text-[10px] uppercase tracking-[0.3em] text-slate-700 opacity-50">Designed for Excellence</p>
          </div>
        </div>
      </footer>

      {/* Luxury Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 w-full md:hidden z-50 flex h-16 bg-navy-900/90 backdrop-blur-xl border-t border-white/10">
        <a 
          href={`${studentWhatsapp}?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20cursos%20e%20mentoria.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 text-slate-300 text-xs uppercase tracking-widest hover:bg-white/5 transition-colors border-r border-white/10"
        >
          <i className="fa-solid fa-graduation-cap text-gold-400"></i>
          Sou Aluno
        </a>
        <a 
          href={`${clinicWhatsapp}?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Andr%C3%A9%20Gomide.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-gold-400 text-navy-900 font-bold text-xs uppercase tracking-widest hover:bg-gold-300 transition-colors"
        >
          <i className="fa-brands fa-whatsapp"></i>
          Agendar
        </a>
      </div>
    </>
  );
};