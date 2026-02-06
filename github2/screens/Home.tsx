
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Home: React.FC = () => {
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-[#050505]"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=2000" 
            alt="Cinematic background" 
            className="w-full h-full object-cover opacity-30 grayscale scale-110 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs md:text-sm tracking-[0.5em] uppercase text-white/60 mb-6"
          >
            Visual Storyteller & Director
          </motion.p>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-6xl md:text-9xl font-serif mb-8 leading-none tracking-tight"
          >
            Crafting <br /> <span className="italic font-normal">Atmosphere</span>
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Link 
              to="/work" 
              className="group relative inline-flex items-center px-12 py-4 border border-white/20 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 text-sm tracking-widest uppercase group-hover:text-black transition-colors duration-500">
                View Filmography
              </span>
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <div className="w-[1px] h-16 bg-white" />
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-32 px-6 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <h2 className="text-sm tracking-[0.3em] uppercase text-white/40 mb-4">Selected Works</h2>
            <p className="text-4xl md:text-5xl font-serif max-w-xl">
              Capturing the silence between the frames.
            </p>
          </div>
          <Link to="/work" className="hidden md:flex items-center space-x-3 text-white/60 hover:text-white transition-colors group">
            <span className="text-sm tracking-widest uppercase">Full Gallery</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group"
            >
              <Link to={`/work/${project.id}`} className="block overflow-hidden mb-6 bg-zinc-900">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </Link>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-serif mb-1">{project.title}</h3>
                  <p className="text-xs text-white/40 tracking-widest uppercase">{project.category}</p>
                </div>
                <span className="text-xs font-light text-white/20 italic">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="bg-zinc-950 py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-2xl md:text-4xl font-serif italic leading-relaxed text-white/80">
              "Visual storytelling isn't just about what is seen, but about how it feels. I strive to find the rhythm in light and the poetry in movement."
            </p>
            <div className="mt-12 flex justify-center space-x-1 items-center">
              <div className="w-8 h-[1px] bg-white/20" />
              <span className="text-xs tracking-[0.4em] uppercase text-white/40 px-4">Arnab Biswas</span>
              <div className="w-8 h-[1px] bg-white/20" />
            </div>
          </motion.div>
        </div>
      </section>
      
      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
      `}</style>
    </motion.div>
  );
};

export default Home;
