import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import lookImg from '../assets/look.png';

export const NewsletterModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      // Show only if it hasn't been shown in this session (new window)
      const hasSeenModal = typeof window !== 'undefined' && window.sessionStorage ? sessionStorage.getItem('newsletterShown') : null;

      if (!hasSeenModal) {
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 2000);

        return () => clearTimeout(timer);
      }
    } catch (err) {
      console.warn('SessionStorage unavailable:', err);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        sessionStorage.setItem('newsletterShown', 'true');
      }
    } catch (err) {
      console.warn('Could not set newsletter sessionStorage:', err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white w-full max-w-[600px] p-6 sm:p-10 md:p-16 flex flex-col items-center text-center shadow-2xl rounded-2xl sm:rounded-none"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-black/50 hover:text-black transition-colors"
              aria-label="Close newsletter modal"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Content */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.12em] sm:tracking-[0.15em] mb-3 sm:mb-4 text-black">
              GET ON THE LIST
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-black mb-6 sm:mb-10 tracking-wide max-w-sm">
              What's inside: new arrivals, exclusive sales, event<br className="hidden md:block" /> invites and more.
            </p>

            {/* Input Group */}
            <div className="w-full flex flex-col sm:flex-row border border-black mb-4 sm:mb-6">
              <input
                type="email"
                placeholder="YOUR EMAIL, PLEASE"
                className="flex-1 px-4 py-3.5 sm:py-4 text-xs font-medium tracking-[0.1em] outline-none text-black placeholder:text-black/50 bg-transparent min-h-[44px]"
              />
              <button
                onClick={handleClose}
                className="bg-black text-white px-6 sm:px-8 py-3.5 sm:py-4 text-xs font-bold tracking-[0.1em] uppercase hover:bg-[#DFA09D] hover:text-black transition-colors min-h-[44px]"
              >
                Submit
              </button>
            </div>

            {/* Footer Text */}
            <p className="text-[10px] text-black/60">
              To see how we may use your information, take a look at our <a href="#" className="underline hover:text-black">privacy policy</a>.
            </p>

            {/* Peeking Mascot - anchored safely */}
            <img
              src={lookImg}
              alt="Peeking"
              className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-16 w-20 sm:w-32 md:w-44 pointer-events-none select-none z-20 opacity-60 sm:opacity-100"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
