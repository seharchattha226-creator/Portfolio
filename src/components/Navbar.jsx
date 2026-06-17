import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Mail, Phone, ExternalLink, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#education' }, // Linking to education/experience section
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 20,
        duration: 0.6 
      }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-[#030014]/70 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl rotate-12 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/20">
                S
              </div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-xl transition-opacity" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-purple-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="flex items-center bg-white/5 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/10 mr-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    activeSection === link.href.substring(1)
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(168,85,247,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-bold rounded-full shadow-lg transition-all"
            >
              Let's Work Together
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <motion.a
              href="#contact"
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-white/5 border border-white/10 text-white text-xs font-bold rounded-full"
            >
              Hire Me
            </motion.a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex items-center justify-center text-white focus:outline-none"
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className="w-6 h-0.5 bg-white rounded-full origin-center transition-all"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-6 h-0.5 bg-white rounded-full transition-all"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className="w-6 h-0.5 bg-white rounded-full origin-center transition-all"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-0 top-0 bg-[#030014]/95 backdrop-blur-2xl z-[90] flex flex-col items-center justify-center gap-8"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-bold transition-all ${
                    activeSection === link.href.substring(1)
                      ? 'text-purple-500'
                      : 'text-gray-500 hover:text-white'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-8 mt-8"
            >
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-2xl text-gray-400 hover:text-[#0077b5] transition-all">
                <Linkedin size={24} />
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-2xl text-gray-400 hover:text-white transition-all">
                <Github size={24} />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 bg-white/5 rounded-2xl text-gray-400 hover:text-white transition-all">
                <Mail size={24} />
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="p-3 bg-white/5 rounded-2xl text-gray-400 hover:text-white transition-all">
                <Phone size={24} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
