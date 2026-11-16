import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { AnimatedText } from './ui/AnimatedText';
import { ContactButton } from './ui/ContactButton';
import floatImg from '../assets/float.png';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative min-h-[100dvh] flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-16 sm:py-20 overflow-hidden">
      {/* Corner Images - scaled and dimmed on mobile to ensure 100% text legibility */}
      <FadeIn
        delay={0.1} x={-40} y={0} duration={0.9}
        className="absolute top-[2%] left-[-10px] sm:left-[2%] md:left-[4%] w-[70px] sm:w-[140px] md:w-[210px] z-0 opacity-20 sm:opacity-50 md:opacity-100 pointer-events-none"
      >
        <img src={floatImg} alt="Floating Object" className="w-full h-auto rotate-[15deg]" />
      </FadeIn>
      
      <FadeIn
        delay={0.25} x={-40} y={0} duration={0.9}
        className="absolute bottom-[4%] left-[-5px] sm:left-[6%] md:left-[10%] w-[60px] sm:w-[120px] md:w-[180px] z-0 opacity-20 sm:opacity-50 md:opacity-100 pointer-events-none"
      >
        <img src={floatImg} alt="Floating Object" className="w-full h-auto -rotate-[10deg]" />
      </FadeIn>

      <FadeIn
        delay={0.15} x={40} y={0} duration={0.9}
        className="absolute top-[2%] right-[-10px] sm:right-[2%] md:right-[4%] w-[70px] sm:w-[140px] md:w-[210px] z-0 opacity-20 sm:opacity-50 md:opacity-100 pointer-events-none"
      >
        <img src={floatImg} alt="Floating Object" className="w-full h-auto -rotate-[20deg] -scale-x-100" />
      </FadeIn>

      <FadeIn
        delay={0.3} x={40} y={0} duration={0.9}
        className="absolute bottom-[4%] right-[-5px] sm:right-[6%] md:right-[10%] w-[65px] sm:w-[130px] md:w-[220px] z-0 opacity-20 sm:opacity-50 md:opacity-100 pointer-events-none"
      >
        <img src={floatImg} alt="Floating Object" className="w-full h-auto rotate-[30deg] -scale-x-100" />
      </FadeIn>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl w-full">
        <FadeIn delay={0} y={30} className="mb-8 sm:mb-14 md:mb-16">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 11vw, 160px)' }}
          >
            About Us
          </h2>
        </FadeIn>

        <div className="mb-10 sm:mb-20 md:mb-24 flex flex-col gap-6 sm:gap-10 max-w-[850px] items-center px-2">
          <AnimatedText
            text="For too long, 'anime-inspired' has meant oversized, boxy silhouettes that hide the female form. Kaizoku creates high-fashion streetwear designed exclusively for the female gaze. By blending modern streetwear trends with the vibrant palettes and iconic symbols of the anime world. We create 'Main Character' wardrobes designed specifically for the female form. This isn't cosplay; it’s a lifestyle."
            className="text-[#D7E2EA] font-medium text-left sm:text-justify leading-relaxed text-sm sm:text-base md:text-lg"
          />
        </div>

        {/* Contact button */}
        <div className="flex justify-center">
          <ContactButton />
        </div>
      </div>

      {/* Global style to apply the clamp on AnimatedText */}
      <style>{`
        #about p {
          font-size: clamp(0.95rem, 2vw, 1.35rem);
        }
      `}</style>
    </section>
  );
};
