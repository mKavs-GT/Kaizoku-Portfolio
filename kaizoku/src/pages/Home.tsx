import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { MarqueeSection } from '../components/MarqueeSection';
import { ColdOpsHeroSection } from '../components/ColdOpsHeroSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { InventorySection } from '../components/InventorySection';
import { BrandPhilosophy } from '../components/BrandPhilosophy';
import { FooterSection } from '../components/FooterSection';
import { MobileHomeView } from '../components/MobileHomeView';

export const Home: React.FC = () => {
  return (
    <>
      {/* Mobile-optimized view (matches mobile alignment reference) */}
      <div className="block md:hidden">
        <MobileHomeView />
      </div>

      {/* Desktop view */}
      <div className="hidden md:block">
        <HeroSection />
        <MarqueeSection />
        <ColdOpsHeroSection />
        <ProjectsSection />
        <InventorySection />
        <BrandPhilosophy />
        <FooterSection />
      </div>
    </>
  );
};
