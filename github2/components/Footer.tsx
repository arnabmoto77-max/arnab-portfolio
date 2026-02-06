
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif mb-8 tracking-tighter opacity-80">Arnab Biswas</h2>
        <div className="flex justify-center space-x-8 mb-12 text-sm tracking-widest text-white/40 uppercase">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Vimeo</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
        <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase">
          &copy; {new Date().getFullYear()} Arnab Biswas Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
