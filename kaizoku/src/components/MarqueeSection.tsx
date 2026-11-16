import React, { useEffect, useRef, useState } from 'react';

import img1 from '../assets/models/1.png';
import img2 from '../assets/models/2.png';
import img3 from '../assets/models/3.png';
import img4 from '../assets/models/4.png';
import img5 from '../assets/models/5.png';
import img6 from '../assets/models/6.png';
import img7 from '../assets/models/7.png';
import img8 from '../assets/models/8.png';
import img9 from '../assets/models/9.png';
import img10 from '../assets/models/10.png';
import img11 from '../assets/models/11.png';
import img12 from '../assets/models/12.png';

const rowImages1 = [img1, img2, img3, img4, img5, img6];
const rowImages2 = [img7, img8, img9, img10, img11, img12];

const row1 = [...rowImages1, ...rowImages1, ...rowImages1, ...rowImages1, ...rowImages1, ...rowImages1];
const row2 = [...rowImages2, ...rowImages2, ...rowImages2, ...rowImages2, ...rowImages2, ...rowImages2];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        if (sectionRef.current) {
          const sectionTop = sectionRef.current.offsetTop;
          const calc = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
          setOffset(calc);
        }
        rafId.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calc

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const row1Transform = isMobile
    ? `translateX(${offset * 0.6 - 700}px)`
    : `translateX(${offset - 2500}px)`;

  const row2Transform = isMobile
    ? `translateX(${-(offset * 0.6 - 50)}px)`
    : `translateX(${-(offset - 200)}px)`;

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#0C0C0C] pt-16 sm:pt-28 md:pt-40 pb-8 sm:pb-10 overflow-hidden flex flex-col gap-2.5 sm:gap-3"
    >
      <div 
        className="flex gap-2.5 sm:gap-3"
        style={{ 
          transform: row1Transform,
          willChange: 'transform'
        }}
      >
        {row1.map((src, i) => (
          <img 
            key={i} 
            src={src} 
            alt="Marquee" 
            loading="lazy"
            className="w-[190px] h-[130px] sm:w-[250px] sm:h-[165px] md:w-[320px] md:h-[210px] rounded-xl sm:rounded-2xl object-cover shrink-0" 
          />
        ))}
      </div>
      
      <div 
        className="flex gap-2.5 sm:gap-3"
        style={{ 
          transform: row2Transform,
          willChange: 'transform'
        }}
      >
        {row2.map((src, i) => (
          <img 
            key={i} 
            src={src} 
            alt="Marquee" 
            loading="lazy"
            className="w-[190px] h-[130px] sm:w-[250px] sm:h-[165px] md:w-[320px] md:h-[210px] rounded-xl sm:rounded-2xl object-cover shrink-0" 
          />
        ))}
      </div>
    </section>
  );
};
