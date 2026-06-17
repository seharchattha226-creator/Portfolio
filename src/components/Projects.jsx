import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../data/constants';
import { Github, ExternalLink, Linkedin, Search, Eye } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];
  
  const filteredProjects = PROJECTS.filter(project => {
    const matchesFilter = filter === 'All' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) || 
                          project.description?.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Projects <span className="text-gradient">Showcase</span></h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            A collection of modern web applications, AI solutions, 3D experiences, and interactive digital products 
            built with creativity and cutting-edge technologies.
          </p>

          {/* Filters & Search UI */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                    filter === cat 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white border-transparent shadow-[0_0_20px_rgba(168,85,247,0.4)]' 
                    : 'bg-white/5 text-gray-400 hover:text-white border-white/10 hover:border-white/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="text"
                placeholder="Search projects by name or tech..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-6 py-3 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500/50 transition-all text-sm placeholder:text-gray-600"
              />
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative glass-card flex flex-col h-full hover:border-purple-500/50 transition-all duration-500"
              >
                {/* Card Image Wrapper */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Action Badge */}
                  <div className="absolute top-4 right-4 flex gap-2 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-purple-600 transition-colors shadow-xl"
                      title="Quick View"
                    >
                      <Eye size={18} />
                    </button>
                  </div>

                  {/* Category Tag */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-purple-600/20 backdrop-blur-md border border-purple-500/30 rounded-lg text-[10px] font-bold text-purple-300 uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.linkedin && (
                        <a 
                          href={project.linkedin} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-gray-400 hover:text-[#0077b5] transition-colors"
                          title="View on LinkedIn"
                        >
                          <Linkedin size={20} />
                        </a>
                      )}
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-gray-400 hover:text-white transition-colors"
                          title="View Code"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-1 text-[10px] font-semibold bg-white/5 text-gray-400 border border-white/10 rounded-md">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-[10px] font-semibold bg-white/5 text-gray-400 border border-white/10 rounded-md">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Main Action */}
                  <div className="flex gap-3 mt-auto">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold text-white transition-all flex items-center justify-center gap-2"
                    >
                      View Details
                    </button>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/40 hover:to-blue-600/40 border border-purple-500/30 rounded-xl text-purple-400 transition-all flex items-center justify-center"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <div className="inline-block p-6 bg-white/5 rounded-3xl border border-white/10">
              <p className="text-gray-500 text-lg">No projects found matching your search.</p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
