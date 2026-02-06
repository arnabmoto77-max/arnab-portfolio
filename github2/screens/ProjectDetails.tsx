
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectDetails: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-white/40 uppercase tracking-widest">Project not found</p>
      </div>
    );
  }

  const projectIndex = PROJECTS.findIndex(p => p.id === project.id);
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-[#050505] min-h-screen"
    >
      {/* Hero Image */}
      <div className="h-[70vh] relative">
        <img 
          src={project.fullImages[0]} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        
        <div className="absolute bottom-12 left-0 w-full">
          <div className="container mx-auto px-6">
            <Link 
              to="/work" 
              className="inline-flex items-center space-x-2 text-white/40 hover:text-white mb-8 transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs uppercase tracking-widest">Back to Gallery</span>
            </Link>
            <h1 className="text-5xl md:text-8xl font-serif mb-4 leading-none tracking-tight">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-8">
            <h2 className="text-sm tracking-[0.3em] uppercase text-white/40 mb-8 font-semibold">About the project</h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-white/70">
              {project.description}
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col space-y-8">
            <div className="border-t border-white/10 pt-6">
              <span className="block text-[10px] tracking-widest uppercase text-white/40 mb-1">Year</span>
              <span className="text-lg">{project.year}</span>
            </div>
            <div className="border-t border-white/10 pt-6">
              <span className="block text-[10px] tracking-widest uppercase text-white/40 mb-1">Client</span>
              <span className="text-lg">{project.client}</span>
            </div>
            <div className="border-t border-white/10 pt-6">
              <span className="block text-[10px] tracking-widest uppercase text-white/40 mb-1">Role</span>
              <span className="text-lg">{project.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24 px-6 container mx-auto space-y-12">
        {project.fullImages.slice(1).map((img, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden bg-zinc-900"
          >
            <img src={img} alt={`${project.title} - ${idx + 2}`} className="w-full object-cover" />
          </motion.div>
        ))}
      </section>

      {/* Next Project Footer */}
      <section className="bg-zinc-950 py-32 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-white/40 mb-6 block">Up Next</span>
          <Link to={`/work/${nextProject.id}`} className="group inline-block">
            <h2 className="text-4xl md:text-7xl font-serif mb-8 group-hover:italic transition-all duration-500">
              {nextProject.title}
            </h2>
            <div className="flex items-center justify-center space-x-3 text-white/20 group-hover:text-white transition-colors">
              <span className="text-xs uppercase tracking-widest">Explore Project</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetails;
