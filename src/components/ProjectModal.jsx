import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Linkedin, Info, Code, Rocket } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#030014]/90 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white/5 border border-white/10 rounded-3xl shadow-2xl custom-scrollbar"
          >
            {/* Header Image */}
            <div className="relative aspect-video md:aspect-[21/9] overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/20 to-transparent" />
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 md:p-10">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h2>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm transition-all">
                      <Github size={18} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-purple-500/20 transition-all">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                  {project.linkedin && (
                    <a href={project.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#0077b5]/20 hover:bg-[#0077b5]/30 border border-[#0077b5]/50 text-[#00a0dc] rounded-xl text-sm font-bold transition-all">
                      <Linkedin size={18} /> Case Study
                    </a>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <Info size={20} className="text-purple-500" /> Project Overview
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <Code size={20} className="text-blue-500" /> Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <Rocket size={20} className="text-pink-500" /> Key Features
                    </h3>
                    <ul className="text-gray-400 text-sm space-y-2">
                      <li className="flex items-center gap-2">• Fully Responsive UI</li>
                      <li className="flex items-center gap-2">• Modern UX Design</li>
                      <li className="flex items-center gap-2">• High Performance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
