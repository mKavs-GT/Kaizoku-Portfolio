import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';

// Hero Assets
import heroleft from '../assets/heroleft.png';
import maomao from '../assets/maomao.png';
import heroimg from '../assets/heroimg.png';
import look from '../assets/look.png';

// Categories Models
import model13 from '../assets/models/13.png';
import model3 from '../assets/models/3.png';
import model4 from '../assets/models/4.png';
import model6 from '../assets/models/6.png';
import model7 from '../assets/models/7.png';
import model9 from '../assets/models/9.png';

// Product Assets
import jacket1 from '../assets/product/jacket1.png';
import jacket2 from '../assets/product/jacket2.png';
import jacket3 from '../assets/product/jacket3.png';
import jacket5 from '../assets/product/jacket5.png';
import jacket6 from '../assets/product/jacket6.png';
import top1 from '../assets/product/top1.png';
import top2 from '../assets/product/top2.png';
import top3 from '../assets/product/top3.png';
import top4 from '../assets/product/top4.png';
import dress1 from '../assets/product/dress1.png';
import dress2 from '../assets/product/dress2.png';
import dress3 from '../assets/product/dress3.png';

export const MobileHomeView: React.FC = () => {
  const navigate = useNavigate();
  const [heroSlide, setHeroSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('ALL');
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applied, setApplied] = useState(false);

  // Auto-cycle hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const heroSlides = [
    {
      leftImg: heroleft,
      tag: '✦ THE KAIZOKU COLLECTION',
      title: (
        <>
          KAIZO<span className="text-[#E8A5B0]">KU</span>
        </>
      ),
      subtitle: 'ICONIC OUTFITS FOR EXTRAORDINARY CHARACTERS',
      rightImg: jacket6,
      link: '/products#jackets',
    },
    {
      leftImg: maomao,
      tag: '✦ ROGUE ATELIER DROP',
      title: (
        <>
          APOTHE<span className="text-[#E8A5B0]">CARY</span>
        </>
      ),
      subtitle: 'SURVIVAL COUTURE FOR THE BEAUTIFUL ANOMALIES',
      rightImg: jacket5,
      link: '/products#jackets',
    },
    {
      leftImg: heroimg,
      tag: '✦ COLD OPS EDITION',
      title: (
        <>
          ARCTIC<span className="text-[#E8A5B0]">STEALTH</span>
        </>
      ),
      subtitle: 'ABSOLUTE THERMAL CONTROL & KOWAI SILHOUETTES',
      rightImg: jacket2,
      link: '/products#jackets',
    },
  ];

  const categories = [
    { name: 'JACKETS', img: model13, link: '/products#jackets' },
    { name: 'SHIRTS', img: model3, link: '/products#tops' },
    { name: 'VESTS', img: model4, link: '/products#tops' },
    { name: 'COATS', img: model6, link: '/products#jackets' },
    { name: 'DRESSES', img: model7, link: '/products#dresses' },
    { name: 'ACCESSORIES', img: model9, link: '/products' },
  ];

  const trendingProducts = [
    { id: 'jacket5', name: 'Crimson Edge Jacket', price: '₹4,999', img: jacket5, category: 'JACKETS' },
    { id: 'jacket3', name: 'Blush Vector Blazer', price: '₹4,299', img: jacket3, category: 'JACKETS' },
    { id: 'jacket6', name: 'Noir Crest Jacket', price: '₹5,499', img: jacket6, category: 'JACKETS' },
    { id: 'jacket1', name: 'Crimson Diamond Jacket', price: '₹4,699', img: jacket1, category: 'SETS' },
  ];

  const filteredTrending = activeTab === 'ALL' 
    ? trendingProducts 
    : trendingProducts.filter(p => p.category === activeTab || activeTab === 'SETS' || activeTab === 'JACKETS');

  const newArrivals = [
    { id: 'top3', name: 'Navy Emblem Shirt', price: '₹2,499', img: top3 },
    { id: 'top2', name: 'Royal Corset', price: '₹3,899', img: top2 },
    { id: 'top4', name: 'Heritage Vest', price: '₹5,299', img: top4 },
    { id: 'top1', name: 'Scarlet Dress', price: '₹4,799', img: top1 },
  ];

  const featuredCollections = [
    { id: 'dress1', name: 'Sailor Dress', price: '₹3,299', img: dress1 },
    { id: 'dress2', name: 'Galaxy Gown', price: '₹5,399', img: dress2 },
    { id: 'dress3', name: 'Floral Dress', price: '₹4,299', img: dress3 },
    { id: 'jacket2', name: 'Classic Suit', price: '₹5,499', img: jacket2 },
  ];

  return (
    <div className="bg-[#0C0C0C] min-h-screen text-white font-sans selection:bg-[#E8A5B0] selection:text-black overflow-x-hidden">
      {/* Top Navbar */}
      <div className="sticky top-0 left-0 w-full z-50 bg-[#0C0C0C]/95 backdrop-blur-md border-b border-white/5">
        <Navbar />
      </div>

      <main className="flex flex-col gap-2.5 pb-10">
        {/* SECTION 1: HERO CAROUSEL CARD */}
        <section className="px-3 pt-2">
          <div className="relative w-full rounded-[24px] bg-[#141414] border border-white/10 overflow-hidden px-3 pt-4 pb-3 min-h-[225px] flex flex-col justify-between shadow-2xl">
            {/* Background elements */}
            <div className="flex items-center justify-between relative z-10 w-full my-auto">
              {/* Left Character Image */}
              <div className="w-[85px] xs:w-[98px] h-[150px] flex items-center justify-center shrink-0 -ml-2 pointer-events-none">
                <img
                  src={heroSlides[heroSlide].leftImg}
                  alt="Kaizoku Hero"
                  className="w-full h-full object-contain object-bottom opacity-90 transition-opacity duration-500"
                />
              </div>

              {/* Center Content */}
              <div className="flex flex-col items-center text-center px-1 flex-1">
                <span className="text-[#E8A5B0] text-[8px] xs:text-[8.5px] font-bold tracking-[0.25em] uppercase mb-1 drop-shadow-sm whitespace-nowrap">
                  {heroSlides[heroSlide].tag}
                </span>

                <h1 className="font-black text-2xl xs:text-[28px] tracking-tight leading-none uppercase mb-1.5 drop-shadow-md">
                  {heroSlides[heroSlide].title}
                </h1>

                <p className="text-white/70 font-mono text-[7px] xs:text-[7.5px] uppercase tracking-wider max-w-[150px] leading-snug mb-3">
                  {heroSlides[heroSlide].subtitle}
                </p>

                <Link
                  to={heroSlides[heroSlide].link}
                  className="bg-gradient-to-r from-[#F0ABB6] to-[#E396A6] text-black font-black text-[9px] uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md active:scale-95 transition-transform flex items-center gap-1 hover:brightness-105"
                >
                  SHOP NOW →
                </Link>
              </div>

              {/* Right Product Image */}
              <div className="w-[85px] xs:w-[98px] h-[150px] flex items-center justify-center shrink-0 -mr-2 pointer-events-none">
                <img
                  src={heroSlides[heroSlide].rightImg}
                  alt="Kaizoku Featured"
                  className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Carousel Pagination Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-2 relative z-10">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setHeroSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 ${
                    heroSlide === idx
                      ? 'w-4 h-1.5 bg-[#E8A5B0] rounded-full'
                      : 'w-1.5 h-1.5 bg-white/20 rounded-full hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: CATEGORIES (3x2 GRID) */}
        <section className="px-3 pt-1">
          <div className="grid grid-cols-3 gap-2">
            {categories.map((cat, i) => (
              <Link
                key={i}
                to={cat.link}
                className="bg-[#141414] border border-white/10 rounded-[16px] p-2 flex flex-col items-center hover:border-white/30 transition-all cursor-pointer group"
              >
                <div className="bg-[#EAEAEA] rounded-[12px] w-full aspect-square flex items-center justify-center overflow-hidden relative">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover object-top pt-1 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-white font-black text-[8.5px] xs:text-[9px] uppercase tracking-wider mt-1.5 text-center group-hover:text-[#E8A5B0] transition-colors">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* SECTION 3: PINK PROMO BANNER (PERSONALIZE YOUR OWN IDENTITY) */}
        <section className="px-3 pt-1">
          <div className="bg-[#E8A5B0] text-black rounded-[22px] p-4 relative overflow-hidden flex items-center justify-between min-h-[135px] shadow-lg">
            {/* Left Content */}
            <div className="flex flex-col items-start z-10 max-w-[130px]">
              <h3 className="text-white font-black text-[13px] xs:text-sm leading-tight uppercase tracking-tight drop-shadow-sm">
                PERSONALIZE
                <br />
                YOUR OWN
                <br />
                IDENTITY
              </h3>

              <button
                onClick={() => setIsApplyModalOpen(true)}
                className="bg-[#181818] text-white text-[8px] font-black uppercase px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 mt-2.5 shadow-sm active:scale-95 transition-all hover:bg-black"
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="4" y1="21" x2="4" y2="14"></line>
                  <line x1="4" y1="10" x2="4" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12" y2="3"></line>
                  <line x1="20" y1="21" x2="20" y2="16"></line>
                  <line x1="20" y1="12" x2="20" y2="3"></line>
                  <line x1="1" y1="14" x2="7" y2="14"></line>
                  <line x1="9" y1="8" x2="15" y2="8"></line>
                  <line x1="17" y1="16" x2="23" y2="16"></line>
                </svg>
                CUSTOMIZE NOW →
              </button>
            </div>

            {/* Center Floating Jacket */}
            <div className="w-24 xs:w-28 h-auto flex items-center justify-center shrink-0 z-10 -rotate-6 pointer-events-none">
              <img
                src={jacket5}
                alt="Personalized Jacket"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Right Character & Caption */}
            <div className="flex flex-col items-end z-10 shrink-0">
              <div className="w-20 xs:w-22 h-[110px] flex items-end justify-center pointer-events-none">
                <img
                  src={maomao}
                  alt="Mao Mao Model"
                  className="w-full h-full object-contain object-bottom drop-shadow-md"
                />
              </div>
              <span className="text-white font-black text-[7px] uppercase tracking-wider text-right leading-none drop-shadow-sm -mt-1">
                STITCHED
                <br />
                JUST FOR YOU
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 4: TRENDING TODAY */}
        <section className="px-3 pt-2">
          {/* Section Header */}
          <h2 className="text-white font-black text-sm xs:text-base uppercase tracking-tight mb-2">
            TRENDING TODAY
          </h2>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2">
            {['ALL', 'JACKETS', 'VESTS', 'DRESSES', 'SETS'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[8.5px] font-bold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? 'border border-[#E8A5B0] text-[#E8A5B0] bg-[#E8A5B0]/15'
                    : 'text-white/60 hover:text-white bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 2x2 Product Grid */}
          <div className="grid grid-cols-2 gap-2.5 mt-1">
            {filteredTrending.map((product) => (
              <div
                key={product.id}
                className="bg-[#141414] border border-white/10 rounded-[18px] p-2 flex flex-col justify-between hover:border-white/20 transition-all"
              >
                <div
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="bg-[#EDEDED] rounded-[14px] w-full aspect-square p-2.5 flex items-center justify-center overflow-hidden cursor-pointer group relative"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex flex-col mt-1.5 px-0.5">
                  <h4
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="text-white font-bold text-[9.5px] truncate cursor-pointer hover:text-[#E8A5B0] transition-colors"
                  >
                    {product.name}
                  </h4>
                  <span className="text-white/60 text-[8.5px] font-semibold mt-0.5">
                    {product.price}
                  </span>

                  <button
                    onClick={() => navigate('/checkout')}
                    className="w-full py-1.5 bg-[#E8A5B0] text-black font-black text-[8.5px] uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-200 mt-2 text-center active:scale-95 shadow-sm"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <Link
            to="/products"
            className="border border-white/20 text-white font-bold text-[8.5px] uppercase tracking-widest px-5 py-2 rounded-full hover:border-[#E8A5B0] hover:text-[#E8A5B0] transition-colors mx-auto block w-fit mt-3 mb-2"
          >
            VIEW ALL TRENDS →
          </Link>
        </section>

        {/* SECTION 5: NEW ARRIVALS / 01 */}
        <section className="px-3 pt-2">
          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-black text-sm xs:text-base uppercase tracking-tight text-white">
              <span className="text-[#E8A5B0]">NEW</span> ARRIVALS
            </h2>
            <span className="text-white/40 font-mono text-[10px]">/ 01</span>
          </div>

          {/* 2x2 Product Grid */}
          <div className="grid grid-cols-2 gap-2.5">
            {newArrivals.map((product) => (
              <div
                key={product.id}
                className="bg-[#141414] border border-white/10 rounded-[18px] p-2 flex flex-col justify-between hover:border-white/20 transition-all"
              >
                <div
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="bg-[#EDEDED] rounded-[14px] w-full aspect-square p-2.5 flex items-center justify-center overflow-hidden cursor-pointer group relative"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex flex-col mt-1.5 px-0.5">
                  <h4
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="text-white font-bold text-[9.5px] truncate cursor-pointer hover:text-[#E8A5B0] transition-colors"
                  >
                    {product.name}
                  </h4>
                  <span className="text-white/60 text-[8.5px] font-semibold mt-0.5">
                    {product.price}
                  </span>

                  <button
                    onClick={() => navigate('/checkout')}
                    className="w-full py-1.5 bg-[#E8A5B0] text-black font-black text-[8.5px] uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-200 mt-2 text-center active:scale-95 shadow-sm"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <Link
            to="/products"
            className="border border-white/20 text-white font-bold text-[8.5px] uppercase tracking-widest px-5 py-2 rounded-full hover:border-[#E8A5B0] hover:text-[#E8A5B0] transition-colors mx-auto block w-fit mt-3 mb-2"
          >
            VIEW ALL NEW →
          </Link>
        </section>

        {/* SECTION 6: FEATURED COLLECTIONS / 02 */}
        <section className="px-3 pt-2">
          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-black text-sm xs:text-base uppercase tracking-tight text-white">
              FEATURED COLLECTIONS
            </h2>
            <span className="text-white/40 font-mono text-[10px]">/ 02</span>
          </div>

          {/* 4 Cards Row */}
          <div className="grid grid-cols-4 gap-1.5">
            {featuredCollections.map((product) => (
              <div
                key={product.id}
                className="bg-[#141414] border border-white/10 rounded-[12px] p-1.5 flex flex-col justify-between hover:border-white/20 transition-all"
              >
                <div
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="bg-[#EDEDED] rounded-[8px] w-full aspect-square p-1 flex items-center justify-center overflow-hidden cursor-pointer group"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex flex-col mt-1">
                  <h4
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="text-white font-bold text-[7.5px] truncate cursor-pointer hover:text-[#E8A5B0] transition-colors"
                  >
                    {product.name}
                  </h4>
                  <span className="text-white/60 text-[6.5px] font-semibold mt-0.5">
                    {product.price}
                  </span>

                  <button
                    onClick={() => navigate('/checkout')}
                    className="w-full py-1 bg-[#E8A5B0] text-black font-black text-[6.5px] uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-200 mt-1 text-center truncate active:scale-95"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <Link
            to="/products"
            className="border border-white/20 text-white font-bold text-[8.5px] uppercase tracking-widest px-5 py-2 rounded-full hover:border-[#E8A5B0] hover:text-[#E8A5B0] transition-colors mx-auto block w-fit mt-3 mb-2"
          >
            VIEW ALL COLLECTIONS →
          </Link>
        </section>

        {/* SECTION 7: INVENTORY BANNER */}
        <section className="px-3 pt-1">
          <Link
            to="/products"
            className="bg-[#141414] border border-white/10 rounded-[18px] p-3 flex items-center justify-between gap-3 hover:border-white/30 transition-all block group"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-black/80 rounded-[12px] p-1.5 flex items-center justify-center shrink-0 border border-white/5">
                <img
                  src={jacket6}
                  alt="Kaizoku Inventory"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>

              <div className="flex flex-col">
                <h4 className="text-white font-black text-xs uppercase tracking-wide group-hover:text-[#E8A5B0] transition-colors">
                  KAIZOKU INVENTORY
                </h4>
                <p className="text-white/40 font-mono text-[7px] uppercase tracking-wider leading-tight mt-0.5">
                  EXPLORE THE FULL CATALOGUE OF ALL AVAILABLE DESIGNS
                </p>
              </div>
            </div>

            <div className="w-8 h-8 rounded-full bg-[#E8A5B0] text-black flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-white transition-colors">
              →
            </div>
          </Link>
        </section>

        {/* SECTION 8: ABOUT KAIZOKU CARD */}
        <section className="px-3 pt-1">
          <div className="bg-[#E8A5B0] text-black rounded-[22px] p-4 relative shadow-lg">
            <h3 className="font-black text-sm uppercase tracking-tight mb-1 text-black">
              ABOUT KAIZOKU
            </h3>
            <p className="text-black/80 text-[9px] leading-relaxed max-w-[280px] mb-3 font-medium">
              A fashion house for creators, cosplayers and character enthusiasts. We bring fictional identities to life through detailed, high-quality apparel.
            </p>
            <Link
              to="/about"
              className="bg-black text-white text-[8px] font-black uppercase px-3.5 py-1.5 rounded-full inline-flex items-center gap-1 hover:bg-white hover:text-black transition-colors shadow-sm"
            >
              READ OUR STORY →
            </Link>
          </div>
        </section>

        {/* SECTION 9: LOOKBOOK BANNER */}
        <section className="px-3 pt-1">
          <div className="rounded-[18px] overflow-hidden border border-white/10 shadow-lg">
            <img
              src={look}
              alt="Kaizoku Lookbook Roster"
              className="w-full h-auto object-cover max-h-[140px]"
            />
          </div>
        </section>

        {/* SECTION 10: FOOTER */}
        <footer className="px-4 pt-6 pb-6 border-t border-white/5 bg-[#0C0C0C] flex flex-col gap-5 mt-2">
          {/* Brand & Socials */}
          <div className="flex flex-col gap-2">
            <h3 className="text-white font-black text-sm uppercase tracking-tighter italic">
              KAIZOKU
            </h3>
            <p className="text-white/40 text-[7.5px] font-mono leading-snug">
              Fictional-inspired fashion.
              <br />
              Designed for creators. Worn by heirs.
            </p>

            <div className="flex gap-2.5 mt-1">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Instagram"
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="YouTube"
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="TikTok"
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.67 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.33-6.33V9.22a8.16 8.16 0 0 0 4.67 1.47V7.24a4.82 4.82 0 0 1-.75-.55z"/>
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Pinterest"
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0a12 12 0 0 0-4.37 23.18c-.07-.94-.13-2.39.03-3.42l1.04-4.41s-.27-.53-.27-1.32c0-1.24.72-2.16 1.61-2.16.76 0 1.13.57 1.13 1.25 0 .76-.49 1.9-1.2 2.96-.21.9.45 1.63 1.34 1.63 1.6 0 2.84-1.69 2.84-4.13 0-2.16-1.55-3.67-3.77-3.67-2.57 0-4.08 1.93-4.08 3.92 0 .78.3 1.61.67 2.07a.3.3 0 0 1 .07.29c-.08.33-.26 1.05-.29 1.2-.05.2-.17.25-.38.15-1.42-.66-2.31-2.73-2.31-4.4 0-3.58 2.6-6.87 7.5-6.87 3.94 0 7 2.8 7 6.55 0 3.91-2.47 7.06-5.89 7.06-1.15 0-2.23-.6-2.6-1.31l-.71 2.7c-.26.99-.96 2.23-1.43 2.99A11.98 11.98 0 0 0 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 3 Links Columns */}
          <div className="grid grid-cols-3 gap-2">
            <div>
              <h5 className="text-white/50 text-[8px] font-bold tracking-widest uppercase mb-1.5">
                SHOP
              </h5>
              <ul className="flex flex-col gap-1 text-[7.5px] text-white/70">
                <li><Link to="/products#jackets" className="hover:text-[#E8A5B0]">Jackets</Link></li>
                <li><Link to="/products#tops" className="hover:text-[#E8A5B0]">Vests</Link></li>
                <li><Link to="/products#tops" className="hover:text-[#E8A5B0]">Shirts</Link></li>
                <li><Link to="/products" className="hover:text-[#E8A5B0]">Accessories</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white/50 text-[8px] font-bold tracking-widest uppercase mb-1.5">
                COMPANY
              </h5>
              <ul className="flex flex-col gap-1 text-[7.5px] text-white/70">
                <li><Link to="/about" className="hover:text-[#E8A5B0]">Our Story</Link></li>
                <li><Link to="/about" className="hover:text-[#E8A5B0]">Blog</Link></li>
                <li><Link to="/about" className="hover:text-[#E8A5B0]">Careers</Link></li>
                <li><Link to="/about" className="hover:text-[#E8A5B0]">Press</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white/50 text-[8px] font-bold tracking-widest uppercase mb-1.5">
                SUPPORT
              </h5>
              <ul className="flex flex-col gap-1 text-[7.5px] text-white/70">
                <li><Link to="/" className="hover:text-[#E8A5B0]">Shipping</Link></li>
                <li><Link to="/" className="hover:text-[#E8A5B0]">Returns</Link></li>
                <li><Link to="/" className="hover:text-[#E8A5B0]">FAQ</Link></li>
                <li><Link to="/" className="hover:text-[#E8A5B0]">Size Guide</Link></li>
              </ul>
            </div>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center justify-between pt-3 border-t border-white/5">
            <span className="text-white/30 text-[7px] font-mono">
              © 2026 Kaizoku. All rights reserved
            </span>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-6 h-6 rounded-full bg-[#E8A5B0] text-black flex items-center justify-center font-black text-[10px] hover:bg-white transition-colors"
              aria-label="Back to Top"
            >
              ↑
            </button>
          </div>
        </footer>
      </main>

      {/* MODEL / CUSTOMIZE MODAL */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#141414] border border-white/15 rounded-3xl max-w-sm w-full p-6 text-center text-white relative shadow-2xl">
            <button
              onClick={() => { setIsApplyModalOpen(false); setApplied(false); }}
              className="absolute top-4 right-4 w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white"
            >
              ✕
            </button>

            {applied ? (
              <div className="py-3">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#E8A5B0]/20 border-2 border-[#E8A5B0] flex items-center justify-center text-[#E8A5B0] text-xl font-bold">
                  ✓
                </div>
                <span className="text-[#E8A5B0] font-mono text-[9px] uppercase tracking-[0.3em] mb-1.5 block">
                  Customization Logged
                </span>
                <h3 className="text-white font-black text-lg uppercase italic mb-2">
                  Atelier Brief Created
                </h3>
                <p className="text-white/60 text-xs mb-4 leading-relaxed font-mono">
                  Ref #KZK-CUSTOM-8821 · Our tailor team will contact you for measurement verification.
                </p>
                <button
                  onClick={() => { setIsApplyModalOpen(false); setApplied(false); }}
                  className="w-full py-2.5 bg-[#E8A5B0] text-black font-black uppercase text-xs tracking-widest rounded-xl hover:bg-white transition-all"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <span className="text-[#E8A5B0] font-mono text-[9px] uppercase tracking-[0.3em] mb-1.5 block">
                  Bespoke Fitting
                </span>
                <h3 className="text-white font-black text-xl uppercase italic mb-2">
                  Personalize Your Piece
                </h3>
                <p className="text-white/60 text-xs mb-4 leading-relaxed">
                  Tailored measurements and custom embroidered Japanese rogue insignia.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setApplied(true);
                  }}
                  className="flex flex-col gap-2.5 text-left"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] uppercase tracking-widest text-white/40 font-bold">Your Name</span>
                    <input
                      required
                      placeholder="e.g. Kenji Tanaka"
                      className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-xs outline-none focus:border-[#E8A5B0]"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] uppercase tracking-widest text-white/40 font-bold">Chest / Height Specs</span>
                    <input
                      required
                      placeholder="e.g. 38in chest, 5'10 height"
                      className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-xs outline-none focus:border-[#E8A5B0]"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] uppercase tracking-widest text-white/40 font-bold">Email or IG Handle</span>
                    <input
                      required
                      placeholder="@handle or email"
                      className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-xs outline-none focus:border-[#E8A5B0]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-2 py-3 bg-[#E8A5B0] text-black font-black uppercase text-[10px] tracking-[0.25em] rounded-xl hover:bg-white transition-all"
                  >
                    Submit Custom Order →
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};