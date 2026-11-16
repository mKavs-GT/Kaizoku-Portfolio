import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './ui/FadeIn';
import contactImg from '../assets/contact.png';

interface NavbarProps {
  darkLinks?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ darkLinks = false }) => {
  const location = useLocation();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isAboutPage = location.pathname === '/about';
  const isProductPage = location.pathname.startsWith('/product/');
  
  // Logic for link colors
  const getLinkColor = (path: string) => {
    if (darkLinks) return 'text-black';
    if (location.pathname === path) return 'text-[#DFA09D]';
    return isAboutPage ? 'text-[#D7E2EA]' : 'text-[#D7E2EA]';
  };

  return (
    <>
      <FadeIn delay={0} y={-20} as="nav" className="px-5 sm:px-6 md:px-10 pt-5 sm:pt-6 md:pt-8 w-full z-50 relative flex items-center justify-between">
        {/* Mobile Left: Brand / Logo */}
        <div className="md:hidden flex items-center">
          <Link 
            to="/" 
            className={`${darkLinks ? 'text-black' : 'text-white'} font-black uppercase tracking-tighter italic text-xl`}
          >
            KAIZOKU
          </Link>
        </div>

        {/* Desktop Left Links */}
        <div className="hidden md:flex gap-6 sm:gap-10">
          <Link 
            to="/" 
            className={`${getLinkColor('/')} font-medium uppercase tracking-wider text-sm sm:text-base md:text-lg lg:text-xl hover:opacity-70 transition-opacity duration-200`}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={`${getLinkColor('/products')} font-medium uppercase tracking-wider text-sm sm:text-base md:text-lg lg:text-xl hover:opacity-70 transition-opacity duration-200`}
          >
            Products
          </Link>
        </div>

        {/* Center Logo - Only on Product Detail Pages (Desktop) */}
        {isProductPage && (
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link 
              to="/" 
              className="text-black font-black uppercase tracking-tighter italic text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            >
              KAIZOKU
            </Link>
          </div>
        )}

        {/* Mobile Right: Cart + Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <Link 
            to="/checkout"
            className={`${darkLinks ? 'text-black' : 'text-[#D7E2EA]'} p-2 hover:opacity-70 transition-opacity duration-200 relative`}
            aria-label="Shopping Cart"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className="absolute top-0 right-0 bg-[#DFA09D] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">3</span>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${darkLinks ? 'text-black bg-black/5' : 'text-[#D7E2EA] bg-white/10'} w-10 h-10 rounded-full flex items-center justify-center hover:opacity-70 transition-all`}
            aria-label="Toggle mobile menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="7" x2="20" y2="7"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="17" x2="20" y2="17"></line>
            </svg>
          </button>
        </div>

        {/* Desktop Right Links */}
        <div className="hidden md:flex items-center gap-6 sm:gap-10">
          <Link 
            to="/about" 
            className={`${getLinkColor('/about')} font-medium uppercase tracking-wider text-sm sm:text-base md:text-lg lg:text-xl hover:opacity-70 transition-opacity duration-200`}
          >
            About
          </Link>
          <button 
            onClick={() => setIsContactOpen(true)}
            className={`${darkLinks ? 'text-black' : 'text-[#D7E2EA]'} font-medium uppercase tracking-wider text-sm sm:text-base md:text-lg lg:text-xl hover:opacity-70 transition-opacity duration-200`}
          >
            Contact
          </button>
          <button 
            onClick={() => setIsLoginOpen(true)}
            className={`${darkLinks ? 'text-black' : 'text-[#D7E2EA]'} font-medium uppercase tracking-wider text-sm sm:text-base md:text-lg lg:text-xl hover:opacity-70 transition-opacity duration-200`}
          >
            Login
          </button>
          
          <Link 
            to="/checkout"
            className={`${darkLinks ? 'text-black' : 'text-[#D7E2EA]'} hover:opacity-70 transition-opacity duration-200 relative`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className="absolute -top-2 -right-2 bg-[#DFA09D] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">3</span>
          </Link>
        </div>
      </FadeIn>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9990] bg-black/90 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <span className="text-white font-black uppercase tracking-tighter italic text-2xl">
                KAIZOKU
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors text-base"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-6 py-8">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl sm:text-4xl font-black uppercase tracking-tight italic transition-colors ${location.pathname === '/' ? 'text-[#DFA09D]' : 'text-white/80 hover:text-white'}`}
              >
                Home
              </Link>
              <Link
                to="/products"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl sm:text-4xl font-black uppercase tracking-tight italic transition-colors ${location.pathname === '/products' ? 'text-[#DFA09D]' : 'text-white/80 hover:text-white'}`}
              >
                Products
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl sm:text-4xl font-black uppercase tracking-tight italic transition-colors ${location.pathname === '/about' ? 'text-[#DFA09D]' : 'text-white/80 hover:text-white'}`}
              >
                About
              </Link>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsContactOpen(true);
                }}
                className="text-left text-3xl sm:text-4xl font-black uppercase tracking-tight italic text-white/80 hover:text-white transition-colors"
              >
                Contact
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsLoginOpen(true);
                }}
                className="text-left text-3xl sm:text-4xl font-black uppercase tracking-tight italic text-white/80 hover:text-white transition-colors"
              >
                Login
              </button>
              <Link
                to="/checkout"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-2xl font-black uppercase tracking-tight italic text-[#DFA09D] pt-2"
              >
                <span>Bag (3 items)</span>
                <span>→</span>
              </Link>
            </div>

            {/* Drawer Footer */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-2">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
                Manhattan, NY · Japanese Streetwear
              </p>
              <p className="text-[9px] font-mono text-white/20 uppercase tracking-widest">
                © 2026 KAIZOKU — KOWAI CORE
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-xl"
            />

            {/* Shared wrapper — Chopper peeks from behind the card */}
            <div className="relative w-full max-w-lg z-10 max-h-[90dvh] flex flex-col">

              {/* Chopper — z-[9] = behind the form card (z-10) */}
              <motion.img
                src={contactImg}
                alt=""
                initial={{ x: -160, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 0.55, delay: 0.38, ease: [0.16, 1, 0.3, 1] } }}
                exit={{ x: -50, opacity: 0, transition: { duration: 0.2 } }}
                className="absolute -bottom-1 -right-2 sm:-right-32 z-[9] w-28 sm:w-56 pointer-events-none select-none opacity-40 sm:opacity-100"
              />

              {/* Form card — z-10 overlaps Chopper's body */}
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 60, scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-h-[85dvh] overflow-y-auto bg-[#111111] rounded-[24px] sm:rounded-[28px] shadow-[0_0_80px_rgba(0,0,0,0.8)] z-10 flex flex-col p-6 sm:p-10"
              >

              {/* Close */}
              <button
                onClick={() => setIsContactOpen(false)}
                className="absolute top-5 right-5 sm:top-6 sm:right-6 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all text-sm"
              >✕</button>

              {/* Header */}
              <div className="mb-6 sm:mb-8 overflow-hidden">
                <span className="text-[#DFA09D] font-mono text-[10px] uppercase tracking-[0.4em] block mb-2 sm:mb-3">Get In Touch</span>
                <h2
                  className="text-white font-black uppercase leading-none italic w-full block"
                  style={{ fontSize: 'clamp(2.4rem, 8vw, 4.8rem)', letterSpacing: '-0.05em', lineHeight: 0.95 }}
                >
                  Contact Us
                </h2>
              </div>

              {/* Info strip */}
              <div className="flex gap-8 mb-8 pb-8 border-b border-white/10">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-white/30 mb-1">Location</p>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-white/70">Manhattan, NY</p>
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-white/30 mb-1">Office Hours</p>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-white/70">Mon–Fri · 11AM–2PM</p>
                </div>
              </div>

              {/* Form */}
              <div className="flex flex-col gap-5">
                {/* Name row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">First Name *</span>
                    <input
                      type="text"
                      className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white text-xs outline-none focus:border-[#DFA09D]/60 transition-colors placeholder:text-white/20"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">Last Name</span>
                    <input
                      type="text"
                      className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white text-xs outline-none focus:border-[#DFA09D]/60 transition-colors placeholder:text-white/20"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">Email *</span>
                  <input
                    type="email"
                    className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white text-xs outline-none focus:border-[#DFA09D]/60 transition-colors placeholder:text-white/20"
                  />
                </div>

                {/* Service */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">Service</span>
                  <select className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white/70 text-xs outline-none focus:border-[#DFA09D]/60 transition-colors appearance-none uppercase tracking-widest">
                    <option className="bg-[#1a1a1a]">General Inquiry</option>
                    <option className="bg-[#1a1a1a]">Custom Pieces</option>
                    <option className="bg-[#1a1a1a]">Brand Collaboration</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">Message</span>
                  <textarea
                    rows={3}
                    className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white text-xs outline-none focus:border-[#DFA09D]/60 transition-colors resize-none placeholder:text-white/20"
                  />
                </div>

                {/* Checkbox */}
                <div className="flex items-center gap-2.5">
                  <input type="checkbox" id="signup-dark" className="accent-[#DFA09D] w-3 h-3" />
                  <label htmlFor="signup-dark" className="text-[9px] font-bold uppercase tracking-widest text-white/30 cursor-pointer hover:text-white/60 transition-colors">
                    Sign up for news & updates
                  </label>
                </div>

                {/* Submit */}
                <button className="w-full py-3.5 bg-[#DFA09D] text-black font-black uppercase text-[10px] tracking-[0.3em] rounded-2xl hover:bg-white transition-all duration-300 mt-1">
                  Send Message →
                </button>

                {/* Footer contact line */}
                <p className="text-center text-[9px] text-white/20 font-bold uppercase tracking-widest pt-1">
                  contact@kaizoku.com &nbsp;·&nbsp; © 2026 Kaizoku Studio
                </p>
              </div>
            </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Login Modal */}
      <AnimatePresence>
        {isLoginOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLoginOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-xl"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl max-h-[90dvh] md:h-[640px] bg-[#111111] rounded-[24px] sm:rounded-[32px] overflow-y-auto md:overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col md:flex-row z-10"
            >
              {/* Left: Form */}
              <div className="flex-1 p-6 sm:p-10 md:p-14 flex flex-col justify-center">

                {/* Logo + brand */}
                <div className="mb-6 sm:mb-8 flex items-center gap-3">
                  <img
                    src={new URL('../assets/logo.png', import.meta.url).href}
                    className="h-7 sm:h-8 w-auto object-contain"
                    alt="Kaizoku Logo"
                  />
                  <span className="text-white font-black uppercase tracking-tighter italic text-xl">KAIZOKU</span>
                </div>

                {/* Heading */}
                <h2 className="text-white font-black text-2xl sm:text-4xl uppercase tracking-tighter leading-none mb-2 italic">
                  Welcome back!
                </h2>
                <p className="text-white/40 text-xs mb-6 sm:mb-8 font-medium">
                  Your account, your orders, your rebellion — all in one place.
                </p>

                {/* Social sign-in */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <button className="flex items-center justify-center gap-2.5 py-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group min-h-[44px]">
                    <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">Google</span>
                  </button>
                  <button className="flex items-center justify-center gap-2.5 py-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group min-h-[44px]">
                    <svg className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.42.07 2.4.83 3.22.84.82.01 2.33-.97 3.86-.83 1.6.15 2.83.86 3.58 2.22-3.35 2.06-2.75 6.7.34 8.65zm-3.82-15.1c.15 1.74-1.32 3.26-3.05 3.12-.26-1.67 1.3-3.22 3.05-3.12z"/></svg>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">Apple</span>
                  </button>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1 h-[1px] bg-white/10" />
                  <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold italic">Or</span>
                  <div className="flex-1 h-[1px] bg-white/10" />
                </div>

                {/* Email input */}
                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">Email address</span>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-xs font-medium outline-none focus:border-[#DFA09D]/60 transition-colors placeholder:text-white/20 min-h-[44px]"
                    />
                  </div>
                  <button className="w-full py-3.5 bg-[#DFA09D] text-black font-black rounded-xl hover:bg-white transition-all duration-300 text-[10px] uppercase tracking-[0.25em] min-h-[44px]">
                    Sign in with Email →
                  </button>
                </div>

                {/* Sign up link */}
                <p className="text-[10px] text-center font-bold uppercase tracking-widest text-white/30 py-1">
                  No account?{' '}
                  <button className="text-[#DFA09D] hover:text-white underline underline-offset-4 transition-colors">
                    Sign Up
                  </button>
                </p>

                {/* Footer links */}
                <div className="mt-6 sm:mt-8 flex justify-center gap-6 text-[8px] font-bold uppercase tracking-[0.3em] text-white/20">
                  <button className="hover:text-white/60 transition-colors p-1">Help</button>
                  <button className="hover:text-white/60 transition-colors p-1">Terms</button>
                  <button className="hover:text-white/60 transition-colors p-1">Privacy</button>
                </div>
              </div>

              {/* Right: Image panel */}
              <div className="flex-1 hidden md:block relative bg-black overflow-hidden">
                <img
                  src={new URL('../assets/login.jpg', import.meta.url).href}
                  className="w-full h-full object-cover opacity-60 grayscale"
                  alt="Rebellion Login"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                {/* Grain overlay */}
                <div
                  className="absolute inset-0 opacity-[0.12] pointer-events-none"
                  style={{ backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0)', backgroundSize: '3px 3px' }}
                />

                <div className="absolute bottom-10 left-10 right-10">
                  <span className="text-[#DFA09D] text-[10px] font-bold uppercase tracking-[0.5em] block mb-2">
                    Authenticated Access
                  </span>
                  <p className="text-white font-black text-2xl uppercase tracking-tighter italic leading-tight">
                    Enter the archive<br/>of the rebellion.
                  </p>
                </div>

                {/* Close button */}
                <button
                  onClick={() => setIsLoginOpen(false)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition-all text-sm"
                >
                  ✕
                </button>
              </div>

              {/* Mobile close */}
              <button
                onClick={() => setIsLoginOpen(false)}
                className="absolute top-5 right-5 md:hidden w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all text-sm z-20"
                aria-label="Close modal"
              >
                ✕
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

