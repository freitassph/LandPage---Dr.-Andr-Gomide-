import React, { useState, useRef } from 'react';
import { FadeIn } from '../ui/FadeIn';

const testimonials = [
  {
    type: "ALUNO",
    quote: "O Método Endo 360 mudou completamente minha segurança no consultório. O Dr. André ensina não só a técnica, mas o raciocínio clínico.",
    author: "Dr. Ricardo Silva",
    role: "Endodontista",
    rating: 5
  },
  {
    type: "PACIENTE",
    quote: "Eu tinha pavor de dentista. O Dr. André foi extremamente atencioso e o procedimento foi totalmente indolor. Recomendo de olhos fechados.",
    author: "Mariana Costa",
    role: "Empresária",
    rating: 5
  },
  {
    type: "ALUNO",
    quote: "A didática do professor é impecável. O curso presencial foi um divisor de águas na minha carreira acadêmica e prática.",
    author: "Dra. Fernanda Lima",
    role: "Cirurgiã Dentista",
    rating: 5
  }
];

interface TestimonialCardProps {
  children: React.ReactNode;
  className?: string;
}

// Minimal Spotlight Wrapper for Testimonials
const TestimonialCard: React.FC<TestimonialCardProps> = ({ children, className = "" }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative h-full bg-white/[0.02] backdrop-blur-md border border-white/5 p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.04] hover:-translate-y-2 group rounded-sm shadow-lg overflow-hidden ${className}`}
    >
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.05), transparent 40%)`
        }}
      />
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </div>
  );
};

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-navy-950 relative overflow-hidden">
      {/* Background setup */}
      <div className="absolute inset-0 bg-radial-gradient from-navy-900 to-navy-950 opacity-50"></div>
      <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <span className="text-slate-500 font-sans text-xs tracking-[0.3em] uppercase font-bold mb-4">Social Proof</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-50">Experiências Reais</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, idx) => {
            const isStudent = item.type === "ALUNO";
            const accentColor = isStudent ? "text-gold-300" : "text-cyan-300";
            const borderColor = isStudent ? "group-hover:border-gold-400/30" : "group-hover:border-cyan-400/30";
            const badgeBg = isStudent ? "bg-gold-400/10 text-gold-300 border-gold-400/20" : "bg-cyan-400/10 text-cyan-300 border-cyan-400/20";
            
            return (
              <FadeIn key={idx} delay={idx * 150} direction="up" className="h-full">
                <TestimonialCard className={borderColor}>
                  {/* Header Badge & Stars */}
                  <div className="flex justify-between items-start mb-8">
                    <span className={`text-[10px] font-bold tracking-widest px-3 py-1 rounded-full border ${badgeBg}`}>
                      {item.type}
                    </span>
                    <div className={`flex gap-1 text-[10px] ${isStudent ? 'text-gold-400' : 'text-cyan-400'}`}>
                      {[...Array(item.rating)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                  </div>
                  
                  {/* Quote Content */}
                  <div className="mb-8 relative flex-grow">
                     <i className={`fa-solid fa-quote-left text-2xl mb-4 opacity-20 ${accentColor}`}></i>
                     <p className="text-slate-300 font-serif text-lg leading-relaxed group-hover:text-slate-100 transition-colors">
                      "{item.quote}"
                     </p>
                  </div>
                  
                  {/* Author Block */}
                  <div className="mt-auto flex items-center gap-4 border-t border-white/5 pt-6">
                    <div className={`w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-sm font-serif border border-white/10 transition-colors ${isStudent ? 'text-gold-300 group-hover:border-gold-400/50' : 'text-cyan-300 group-hover:border-cyan-400/50'}`}>
                      {item.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-slate-100 font-sans text-sm font-medium">{item.author}</p>
                      <p className="text-slate-500 text-[10px] uppercase tracking-wider">{item.role}</p>
                    </div>
                  </div>
                </TestimonialCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};