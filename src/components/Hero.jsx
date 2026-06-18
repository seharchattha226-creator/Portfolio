import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Github, Mail, Phone, ArrowRight, Download, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/constants';

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = PERSONAL_INFO.role;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);

        setIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-purple-400 uppercase bg-purple-500/10 border border-purple-500/20 rounded-full">
            Available for opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Building Modern <br />
            <span className="text-gradient">Web Experiences</span>
          </h1>
          <div className="h-8 mb-8">
            <p className="text-xl md:text-2xl font-medium text-gray-300">
              {text}<span className="animate-pulse text-purple-500">|</span>
            </p>
          </div>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
            Hi, I'm <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>. 
            {PERSONAL_INFO.bio}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-white text-black font-bold rounded-2xl flex items-center gap-2 hover:bg-gray-200 transition-all duration-300"
            >
              View Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              Contact Me
            </motion.a>
            <motion.a
              href="/Sehar-Fiaz-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-white font-bold rounded-2xl backdrop-blur-sm hover:from-purple-600/30 hover:to-blue-600/30 flex items-center gap-2 transition-all duration-300"
            >
              <Download size={20} />
              View / Download Resume
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
            <a href={`tel:${PERSONAL_INFO.phone}`} className="text-gray-400 hover:text-white transition-colors">
              <Phone size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
    </section>
  );
};

export default Hero;
