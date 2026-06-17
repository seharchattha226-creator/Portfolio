import { motion } from 'framer-motion';
import { SKILLS } from '../data/constants';

const Skills = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-24 bg-dark-lighter/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical <span className="text-gradient">Expertise</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and proficiency levels in various technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="glass-card p-8 flex flex-col items-start"
            >
              <h3 className="text-xl font-bold mb-6 text-white border-b border-purple-500/30 pb-2 w-full text-left">
                {category}
              </h3>
              <div className="space-y-6 w-full">
                {SKILLS.filter(s => s.category === category).map((skill, index) => (
                  <div key={index} className="w-full">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-sm font-medium text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
