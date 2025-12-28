import React, { useState } from 'react';
import { FadeIn } from '../ui/FadeIn';

const faqs = [
  {
    question: "O consultório aceita planos de saúde?",
    answer: "Nossa clínica opera exclusivamente no modelo particular para garantir a máxima qualidade, tempo dedicado e uso dos melhores materiais disponíveis (Limas mecanizadas de uso único e Microscopia). Emitimos recibos para reembolso."
  },
  {
    question: "Como funciona a Mentoria Endo 360?",
    answer: "É um programa de excelência híbrido (online + presencial) focado em resoluções complexas e urgências endodônticas. O objetivo é conferir segurança técnica e científica ao cirurgião-dentista."
  },
  {
    question: "Onde a clínica está localizada?",
    answer: "O atendimento é realizado na Clínica GM (Dr. André Gomide), situada em Porangatu (GO). Dispomos de infraestrutura completa com Microscopia Operatória para tratamentos de alta precisão."
  },
  {
    question: "Quais tecnologias são utilizadas no tratamento?",
    answer: "Utilizamos o padrão ouro da Endodontia mundial: Microscopia Operatória Zeiss, Ultrassom Piezoelétrico, Localizadores Apicais Eletrônicos e Tomografia Computadorizada."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    // Fluid spacing py-16 -> py-24 -> py-32
    <section className="py-16 md:py-24 lg:py-32 bg-navy-950">
      <div className="container mx-auto px-4 max-w-4xl">
        <FadeIn>
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-50 mb-4">Dúvidas Frequentes</h2>
          </div>
        </FadeIn>

        <div className="divide-y divide-white/5 border-t border-b border-white/5">
          {faqs.map((faq, idx) => (
            <FadeIn key={idx} delay={idx * 50}>
              <div className="group">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  aria-expanded={openIndex === idx}
                  className="w-full flex justify-between items-center py-6 md:py-8 text-left focus:outline-none"
                >
                  <span className={`text-base md:text-xl font-serif transition-colors duration-300 pr-4 ${openIndex === idx ? 'text-gold-300' : 'text-slate-300 group-hover:text-slate-100'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${openIndex === idx ? 'bg-gold-400 border-gold-400 rotate-45' : 'group-hover:border-white/30'}`}>
                    <i className={`fa-solid fa-plus text-xs transition-colors ${openIndex === idx ? 'text-navy-900' : 'text-slate-400'}`}></i>
                  </div>
                </button>
                <div 
                  className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${openIndex === idx ? 'max-h-64 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
                >
                  <div className="text-slate-400 font-sans font-light leading-relaxed pr-0 md:pr-12 text-sm md:text-base">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};