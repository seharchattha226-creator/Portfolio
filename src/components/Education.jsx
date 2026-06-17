import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/constants';
import { GraduationCap, Award, Briefcase } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-dark-lighter/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience & <span className="text-gradient">Education</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and academic foundation that shaped my development career.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">
              <Briefcase className="text-purple-500" /> Professional Experience
            </h3>
            {PERSONAL_INFO.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-8 relative overflow-hidden group hover:bg-white/10 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Briefcase size={80} />
                </div>
                <div className="relative z-10">
                  <span className="text-sm font-bold text-purple-400 uppercase tracking-widest">{exp.period}</span>
                  <h4 className="text-xl font-bold text-white mt-2">{exp.role}</h4>
                  <p className="text-gray-400 font-medium mb-4">{exp.company}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">
              <GraduationCap className="text-blue-500" /> Academic Background
            </h3>
            {PERSONAL_INFO.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-8 relative overflow-hidden group hover:bg-white/10 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <GraduationCap size={80} />
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                  <p className="text-blue-400 font-medium mb-4">{edu.institution}</p>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
