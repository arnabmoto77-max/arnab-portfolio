
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';

const Work: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const categories = ['All', ...Object.values(ProjectCategory)];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6 min-h-screen bg-[#050505]"
    >
      <div className="container mx-auto">
        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl font-serif mb-8 tracking-tight">Portfolio</h1>
          
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`text-xs tracking-[0.3em] uppercase transition-all pb-2 border-b-2 ${
                  filter === cat ? 'text-white border-white' : 'text-white/30 border-transparent hover:text-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative"
              >
                <Link to={`/work/${project.id}`}>
                  <div className="overflow-hidden aspect-[4/5] bg-zinc-900 mb-6">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex justify-between items-end border-b border-white/5 pb-4">
                    <div>
                      <h3 className="text-xl font-serif">{project.title}</h3>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 mt-1">{project.category}</p>
                    </div>
                    <span className="text-[10px] italic text-white/20">{project.year}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Work;
