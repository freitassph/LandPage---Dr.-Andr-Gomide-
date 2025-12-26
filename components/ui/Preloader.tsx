import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [exiting, setExiting] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Phase 1: Show Text
    setTimeout(() => setShowContent(true), 300);

    // Phase 2: Start Exit Animation
    setTimeout(() => {
      setExiting(true);
    }, 2000);

    // Phase 3: Unmount
    setTimeout(() => {
      onComplete();
    }, 2800); // 2000 + 800ms exit transition
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-navy-950 transition-transform duration-[800ms] cubic-bezier(0.76, 0, 0.24, 1) ${exiting ? '-translate-y-full' : 'translate-y-0'}`}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-noise opacity-[0.05]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold-400/5 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Main Content */}
      <div className={`relative flex flex-col items-center transition-all duration-1000 transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Logo Icon */}
        <div className="w-16 h-16 md:w-20 md:h-20 border border-gold-400/50 flex items-center justify-center text-gold-300 font-serif italic text-3xl md:text-4xl mb-6 bg-navy-900 shadow-2xl shadow-gold-900/20">
          G
        </div>

        {/* Text */}
        <h1 className="font-serif text-2xl md:text-3xl text-slate-100 tracking-wide text-center">
          Dr. André Gomide
        </h1>
        <div className="h-px w-0 bg-gradient-to-r from-transparent via-gold-400 to-transparent mt-4 animate-[shimmer_2s_infinite]" style={{ width: showContent ? '100%' : '0%', transition: 'width 1.5s ease-out' }}></div>
        <p className="mt-4 text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold-400/80 font-medium">
          Excelência em Endodontia
        </p>
      </div>

      {/* Bottom Loading Bar */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center">
         <div className="w-64 h-[2px] bg-navy-800 rounded-full overflow-hidden">
            <div 
                className="h-full bg-gold-400 shadow-[0_0_10px_#D4AF37]" 
                style={{ 
                    width: exiting ? '100%' : showContent ? '100%' : '0%', 
                    transition: 'width 2s cubic-bezier(0.22, 1, 0.36, 1)' 
                }}
            ></div>
         </div>
      </div>
    </div>
  );
};