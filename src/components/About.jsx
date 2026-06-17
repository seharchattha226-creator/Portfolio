import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/constants';
import { Code, Rocket, Brain, Award, CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    { icon: <Code className="text-purple-500" />, label: 'Projects Built', value: '12+', desc: 'Diverse portfolio across AI, web, 3D experiences' },
    { icon: <Rocket className="text-blue-500" />, label: 'Experience', value: 'Full Stack', desc: 'MERN stack development expertise' },
    { icon: <Brain className="text-pink-500" />, label: 'Learning', value: 'Continuous', desc: 'Always exploring new technologies' },
    { icon: <Award className="text-yellow-500" />, label: 'Education', value: 'Certified', desc: 'Professional Full Stack certification' },
  ];

  const highlights = [
    "Background in Nutrition & Dietetics brings unique user-centric perspective",
    "Specialized in modern, responsive web applications",
    "Passionate about clean, efficient, and scalable code",
    "Focus on modern UI/UX design principles",
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="glass-card p-8 md:p-12 mb-12">
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
              I am a dedicated Full Stack Web Developer with a background in <span className="text-white font-semibold">BS Human Nutrition & Dietetics</span>. 
              My journey into technology began with a fascination for how digital solutions can impact lives, 
              leading me to complete a professional certification in Full Stack Development.
            </p>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              I specialize in building modern, responsive applications using the MERN stack. 
              My dual background gives me a unique perspective on user-centric design and systematic problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card p-6 hover:bg-white/10 transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-xl">{feature.icon}</div>
                  <div>
                    <div className="text-2xl font-bold text-white">{feature.value}</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">{feature.label}</div>
                    <p className="text-sm text-gray-500 mt-2">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="glass-card p-8">
            <h3 className="text-xl font-bold mb-6 text-white">Why Work With Me?</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {highlights.map((highlight, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="text-purple-500 flex-shrink-0" size={20} />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
