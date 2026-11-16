import React from 'react';
import { Link } from 'react-router-dom';

export const FooterSection: React.FC = () => {
  const [subEmail, setSubEmail] = React.useState('');
  const [subMsg, setSubMsg] = React.useState('');
  return (
    <footer className="bg-[#0C0C0C] text-white py-14 sm:py-20 px-5 sm:px-10 md:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-20">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <h2 className="text-2xl font-black uppercase tracking-tighter italic">KAiZOKU</h2>
            <p className="text-white/40 font-mono text-xs leading-relaxed max-w-[260px]">
              Kowai Core — Japanese-inspired silhouettes for the modern outlaw. Engineering for the female gaze.
            </p>
            <div className="flex gap-3 sm:gap-4 mt-1">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300" aria-label="Instagram">
                <span className="text-[10px] font-bold">IG</span>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300" aria-label="TikTok">
                <span className="text-[10px] font-bold">TK</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300" aria-label="Twitter">
                <span className="text-[10px] font-bold">X</span>
              </a>
            </div>
          </div>

          {/* Nav & Support container for mobile side-by-side or stacked */}
          <div className="grid grid-cols-2 gap-6 sm:contents">
            {/* Quick Links */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 sm:text-white/30">Navigation</h4>
              <ul className="flex flex-col gap-2.5 sm:gap-3">
                <li><Link to="/products" className="text-sm font-medium hover:text-[#DFA09D] transition-colors py-1 inline-block">Shop All</Link></li>
                <li><Link to="/products" className="text-sm font-medium hover:text-[#DFA09D] transition-colors py-1 inline-block">Trending</Link></li>
                <li><Link to="/about" className="text-sm font-medium hover:text-[#DFA09D] transition-colors py-1 inline-block">About Us</Link></li>
                <li><Link to="/about" className="text-sm font-medium hover:text-[#DFA09D] transition-colors py-1 inline-block">Mission</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 sm:text-white/30">Support</h4>
              <ul className="flex flex-col gap-2.5 sm:gap-3">
                <li><Link to="/" className="text-sm font-medium hover:text-[#DFA09D] transition-colors py-1 inline-block">Shipping</Link></li>
                <li><Link to="/" className="text-sm font-medium hover:text-[#DFA09D] transition-colors py-1 inline-block">Returns</Link></li>
                <li><Link to="/" className="text-sm font-medium hover:text-[#DFA09D] transition-colors py-1 inline-block">FAQ</Link></li>
                <li><Link to="/" className="text-sm font-medium hover:text-[#DFA09D] transition-colors py-1 inline-block">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 sm:text-white/30">Join the Crew</h4>
            <p className="text-white/40 text-xs leading-relaxed">
              Sign up for early access to "Kowai Couture" drops.
            </p>
            <div className="flex mt-1">
              <input 
                type="email" 
                placeholder="EMAIL@ADDRESS.COM" 
                className="bg-transparent border-b border-white/20 py-2.5 text-xs font-mono w-full focus:outline-none focus:border-[#DFA09D] transition-colors placeholder:text-white/30"
              />
              <button 
                onClick={() => { setSubMsg('✓ Accepted! Welcome to the crew.'); setTimeout(() => setSubMsg(''), 4000); }}
                className="border-b border-white/20 px-4 hover:text-[#DFA09D] transition-colors min-h-[44px] flex items-center justify-center"
                aria-label="Subscribe"
              >
                <span className="text-xl">→</span>
              </button>
            </div>{subMsg && <p className="text-[10px] text-[#DFA09D] font-mono mt-2">{subMsg}</p>}</div></div>{/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 sm:pt-12 border-t border-white/5 gap-4 sm:gap-6 text-center sm:text-left">
          <p className="text-[10px] text-white/30 sm:text-white/20 font-mono tracking-widest">
            © 2026 KAIZOKU — ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-6 sm:gap-8">
            <Link to="/" className="text-[10px] text-white/30 sm:text-white/20 hover:text-white transition-colors uppercase tracking-widest py-1">Privacy Policy</Link>
            <Link to="/" className="text-[10px] text-white/30 sm:text-white/20 hover:text-white transition-colors uppercase tracking-widest py-1">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
