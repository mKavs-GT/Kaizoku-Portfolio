import React, { useState } from 'react';
import { FadeIn } from './ui/FadeIn';
import add2 from '../assets/2.png';

export const BrandPhilosophy: React.FC = () => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applied, setApplied] = useState(false);

  return (
    <section className="py-8 sm:py-10 px-3.5 xs:px-4 sm:px-10 md:px-16 bg-[#0C0C0C]">
      <FadeIn delay={0.1} y={30}>
        <div className="max-w-7xl mx-auto bg-[#DFA09D] rounded-[24px] sm:rounded-[32px] overflow-hidden flex flex-col lg:flex-row items-stretch min-h-0">
          
          {/* Text Content — narrower column */}
          <div className="lg:w-5/12 p-5 xs:p-6 sm:p-10 md:p-14 flex flex-col justify-center">
            {/* Label */}
            <span className="text-black/50 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.5em] mb-2.5 sm:mb-4">
              Open Call — Season 03
            </span>

            <h2 className="text-black font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter italic leading-[0.95] mb-3 sm:mb-6">
              Represent<br/>Kaizoku
            </h2>

            <p className="text-black font-black text-sm xs:text-base sm:text-xl uppercase tracking-wider mb-2">
              Become a Model Today
            </p>

            <div className="w-10 h-[2px] bg-black/30 mb-4 sm:mb-6" />

            <div className="flex flex-col gap-3.5 sm:gap-5 mb-5 sm:mb-8">
              <div>
                <h3 className="text-black font-bold text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-1">Uncompromising Quality</h3>
                <p className="text-black/75 text-xs leading-relaxed">
                  Every stitch is a statement of rebellion. We use only high-density, over-engineered fabrics designed to survive the chaos.
                </p>
              </div>
              <div>
                <h3 className="text-black font-bold text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-1">Our Target</h3>
                <p className="text-black/75 text-xs leading-relaxed">
                  For the misfits, the creators, and the digital nomads who refuse to blend in. Kaizoku is for those who find beauty in the tattered.
                </p>
              </div>
            </div>

            <button 
              onClick={() => setIsApplyModalOpen(true)}
              className="w-full sm:w-fit px-7 sm:px-8 py-3.5 bg-black text-white font-bold uppercase text-[10px] tracking-[0.25em] sm:tracking-[0.3em] rounded-full hover:bg-white hover:text-black transition-all duration-300 min-h-[46px] flex items-center justify-center active:scale-[0.99]"
            >
              Apply Now →
            </button>
          </div>

          {/* Image Side — wider column */}
          <div className="lg:w-7/12 min-h-[240px] xs:min-h-[280px] sm:min-h-[320px] lg:min-h-0 overflow-hidden">
            <img
              src={add2}
              alt="Represent Kaizoku — Become a Model"
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000"
              style={{ minHeight: '240px' }}
            />
          </div>

        </div>
      </FadeIn>

      {/* Model Casting Call Modal */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3.5 xs:p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#111] border border-white/15 rounded-3xl max-w-md w-full p-6 sm:p-8 text-center text-white relative shadow-2xl">
            <button
              onClick={() => { setIsApplyModalOpen(false); setApplied(false); }}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white"
            >
              ✕
            </button>

            {applied ? (
              <div className="py-4">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-[#DFA09D]/20 border-2 border-[#DFA09D] flex items-center justify-center text-[#DFA09D] text-2xl font-bold">
                  ✓
                </div>
                <span className="text-[#DFA09D] font-mono text-[10px] uppercase tracking-[0.3em] mb-2 block">Application Accepted</span>
                <h3 className="text-white font-black text-xl uppercase italic mb-2">Casting Profile Registered</h3>
                <p className="text-white/60 text-xs mb-5 leading-relaxed font-mono">
                  Ref #KZK-MDL-749102 · Our atelier casting team will contact you for measurement verification.
                </p>
                <button
                  onClick={() => { setIsApplyModalOpen(false); setApplied(false); }}
                  className="w-full py-3 bg-[#DFA09D] text-black font-black uppercase text-xs tracking-widest rounded-xl hover:bg-white transition-all min-h-[44px]"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <span className="text-[#DFA09D] font-mono text-[10px] uppercase tracking-[0.3em] mb-2 block">Open Call · Season 03</span>
                <h3 className="text-white font-black text-2xl uppercase italic mb-2">Model Application</h3>
                <p className="text-white/60 text-xs mb-5 leading-relaxed">
                  Join our rogue atelier roster. Enter your details to book a runway test in Manhattan.
                </p>
                <form onSubmit={(e) => { e.preventDefault(); setApplied(true); }} className="flex flex-col gap-3 text-left">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Full Name</span>
                    <input required placeholder="Your name" className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white text-base sm:text-xs outline-none focus:border-[#DFA09D] min-h-[42px]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Instagram Handle</span>
                    <input required placeholder="@handle" className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white text-base sm:text-xs outline-none focus:border-[#DFA09D] min-h-[42px]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Email</span>
                    <input required type="email" placeholder="agent@email.com" className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white text-base sm:text-xs outline-none focus:border-[#DFA09D] min-h-[42px]" />
                  </div>
                  <button type="submit" className="w-full mt-2 py-3.5 bg-[#DFA09D] text-black font-black uppercase text-[10px] tracking-[0.25em] rounded-xl hover:bg-white transition-all min-h-[46px]">
                    Submit Application →
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
