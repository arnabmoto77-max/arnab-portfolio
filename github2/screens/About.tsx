
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-[#050505] min-h-screen"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5 sticky top-32">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="aspect-[3/4] overflow-hidden grayscale bg-zinc-900 mb-8"
            >
              <img 
                src="https://picsum.photos/id/177/800/1000" 
                alt="Arnab Biswas portrait"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <h1 className="text-4xl font-serif">Arnab Biswas</h1>
            <p className="text-sm tracking-widest uppercase text-white/40 mt-2">Director & Visual Artist</p>
          </div>

          <div className="md:col-span-7 space-y-16">
            <section>
              <h2 className="text-xs tracking-[0.5em] uppercase text-white/30 mb-8 font-semibold">The Story</h2>
              <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-white/80">
                <p>
                  Born with an obsession for light and shadows, my journey began with a vintage 35mm film camera. Over a decade, this obsession evolved into a professional career spanning cinematography, photography, and brand direction.
                </p>
                <p>
                  I believe that every brand, every individual, and every project has a hidden rhythm. My job is to find that rhythm and translate it into a visual language that resonates deeply.
                </p>
                <p>
                  Based between Kolkata and Mumbai, I collaborate with luxury labels and independent creators worldwide to bring cinematic excellence to the digital age.
                </p>
              </div>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xs tracking-[0.5em] uppercase text-white/30 mb-8 font-semibold">Capabilities</h2>
                <ul className="space-y-4 text-white/60">
                  <li className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                    <span>Cinematic Direction</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                    <span>Art Direction</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                    <span>Editorial Photography</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                    <span>Color Grading</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-xs tracking-[0.5em] uppercase text-white/30 mb-8 font-semibold">Exhibitions</h2>
                <ul className="space-y-4 text-white/60">
                  <li>
                    <span className="block text-white">Visual Echoes (2023)</span>
                    <span className="text-xs italic">Academy of Fine Arts</span>
                  </li>
                  <li>
                    <span className="block text-white">Monochrome Diaries (2022)</span>
                    <span className="text-xs italic">Paris Photo Week</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="pt-16 border-t border-white/5">
               <h2 className="text-xs tracking-[0.5em] uppercase text-white/30 mb-8 font-semibold">Recognitions</h2>
               <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                 <div className="text-center">
                   <span className="block text-3xl font-serif mb-2">12+</span>
                   <span className="text-[10px] tracking-widest uppercase text-white/30">Awards Won</span>
                 </div>
                 <div className="text-center">
                   <span className="block text-3xl font-serif mb-2">50+</span>
                   <span className="text-[10px] tracking-widest uppercase text-white/30">Projects</span>
                 </div>
                 <div className="text-center">
                   <span className="block text-3xl font-serif mb-2">08</span>
                   <span className="text-[10px] tracking-widest uppercase text-white/30">Exhibitions</span>
                 </div>
                 <div className="text-center">
                   <span className="block text-3xl font-serif mb-2">05</span>
                   <span className="text-[10px] tracking-widest uppercase text-white/30">Countries</span>
                 </div>
               </div>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
