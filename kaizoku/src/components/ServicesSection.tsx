import React from 'react';
import { FadeIn } from './ui/FadeIn';

import model1 from '../assets/1.png';
import model2 from '../assets/2.png';

export const ServicesSection: React.FC = () => {
  return (
    <section className="bg-black py-16 sm:py-28 md:py-40 px-5 sm:px-10 md:px-16 overflow-hidden relative">
      {/* Background Decorative Text */}
      <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none select-none overflow-hidden h-full">
        <h2 className="text-[40vw] font-black uppercase leading-none transform translate-x-1/4 translate-y-1/4">
          VISION
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-16 sm:gap-28 md:gap-40 lg:gap-52">
        
        {/* Row 1: Our Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <FadeIn delay={0.1} x={-30} className="flex flex-col items-start">
              <span className="text-[#DFA09D] font-mono text-xs uppercase tracking-[0.4em] mb-4 sm:mb-6">01 — CONCEPT</span>
              <h2 className="text-white font-black text-3xl sm:text-5xl md:text-6xl mb-6 sm:mb-8 uppercase tracking-tighter leading-none italic">
                Our<br/>Vision
              </h2>
              <div className="text-white/70 font-mono text-xs sm:text-sm md:text-base leading-relaxed mb-8 sm:mb-10 max-w-lg space-y-4 sm:space-y-6">
                <p>
                  To redefine the intersection of fandom and fashion by creating a world where anime-inspired silhouettes are engineered specifically for the <span className="text-white font-bold">female form and gaze.</span>
                </p>
                <p className="border-l border-white/20 pl-4 sm:pl-6 italic">
                  We envision a future where high-concept narrative and modern streetwear coexist—moving beyond generic merchandise toward a new standard of <span className="text-[#DFA09D] uppercase tracking-wider font-bold">"Kowai Couture"</span>.
                </p>
              </div>
              <button className="group flex items-center gap-4 text-white uppercase tracking-[0.2em] text-xs font-bold py-2 min-h-[44px]">
                <span className="w-12 h-[1px] bg-white group-hover:w-20 transition-all duration-500"></span>
                Learn More
              </button>
            </FadeIn>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <FadeIn delay={0.2} x={30} className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              <img 
                src={model2} 
                alt="Our Vision" 
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              />
            </FadeIn>
          </div>
        </div>

        {/* Row 2: Our Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            <FadeIn delay={0.2} x={-30} className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              <img 
                src={model1} 
                alt="Our Mission" 
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              />
            </FadeIn>
          </div>
          <div className="lg:col-span-5">
            <FadeIn delay={0.1} x={30} className="flex flex-col items-start">
              <span className="text-[#DFA09D] font-mono text-xs uppercase tracking-[0.4em] mb-4 sm:mb-6">02 — PILLARS</span>
              <h2 className="text-white font-black text-3xl sm:text-5xl md:text-6xl mb-6 sm:mb-8 uppercase tracking-tighter leading-none italic">
                Our<br/>Mission
              </h2>
              
              <div className="flex flex-col gap-6 sm:gap-8 w-full">
                <div className="group border-b border-white/10 pb-5 sm:pb-6">
                  <h4 className="text-white font-bold uppercase tracking-wider text-xs sm:text-sm mb-1.5 sm:mb-2 group-hover:text-[#DFA09D] transition-colors">Engineering the Female Form</h4>
                  <p className="text-white/50 text-xs leading-relaxed font-mono">Celebrates diverse female body types, ensuring that every piece is a tribute to the silhouette.</p>
                </div>
                <div className="group border-b border-white/10 pb-5 sm:pb-6">
                  <h4 className="text-white font-bold uppercase tracking-wider text-xs sm:text-sm mb-1.5 sm:mb-2 group-hover:text-[#DFA09D] transition-colors">Narrative Expression</h4>
                  <p className="text-white/50 text-xs leading-relaxed font-mono">We strive to blend high-concept rebellion with avant-garde aesthetics, creating daily wearable pieces.</p>
                </div>
                <div className="group border-b border-white/10 pb-5 sm:pb-6">
                  <h4 className="text-white font-bold uppercase tracking-wider text-xs sm:text-sm mb-1.5 sm:mb-2 group-hover:text-[#DFA09D] transition-colors">Premium Performance</h4>
                  <p className="text-white/50 text-xs leading-relaxed font-mono">A luxury experience where premium comfort and striking aesthetics are never mutually exclusive.</p>
                </div>
              </div>

              <button className="group flex items-center gap-4 text-white uppercase tracking-[0.2em] text-xs font-bold mt-8 sm:mt-10 py-2 min-h-[44px]">
                <span className="w-12 h-[1px] bg-white group-hover:w-20 transition-all duration-500"></span>
                Learn More
              </button>
            </FadeIn>
          </div>
        </div>

      </div>
    </section>
  );
};
