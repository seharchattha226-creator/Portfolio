import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/constants';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));        
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    console.log('Form data:', formData);
    setStatus('loading');

    try {
      // First try backend API
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
      const url = `${apiBaseUrl}/api/contact`;
      console.log('Sending request to:', url);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (response.ok) {
        const responseData = await response.json();
        console.log('API request successful! Response:', responseData);
        setToastMessage('Message sent successfully!');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        const errorData = await response.json();
        console.error('API error response:', errorData);
        throw new Error('API request failed');
      }
    } catch (error) {
      console.error('Error sending message via API:', error);
      console.error('Falling back to mailto...');
      // Fallback to mailto - no extra tabs, just show success toast
      setToastMessage('Opening your email app...');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      // Open mailto in same tab to prevent extra window
      window.location.href = mailtoUrl;
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  // Format phone number for WhatsApp (remove + and spaces)
  const whatsappNumber = PERSONAL_INFO.phone.replace(/[+\s]/g, '');

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Toast Notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-xl shadow-xl z-50 flex items-center gap-3"
        >
          <span>{toastMessage}</span>
          <button onClick={() => setShowToast(false)} className="hover:text-green-100">
            <X size={18} />
          </button>
        </motion.div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">    
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>  
              <div className="space-y-6">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 group">
                  <div className="p-4 bg-purple-500/10 rounded-2xl text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Me</p>
                    <p className="text-lg font-medium text-white">{PERSONAL_INFO.email}</p>
                  </div>
                </a>

                <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-4 group">
                  <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">     
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call Me</p>
                    <p className="text-lg font-medium text-white">{PERSONAL_INFO.phone}</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hello%20Sehar!%20I%27d%20like%20to%20get%20in%20touch.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-4 bg-green-500/10 rounded-2xl text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">  
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp Me</p>        
                    <p className="text-lg font-medium text-white">Message on WhatsApp</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="p-4 bg-pink-500/10 rounded-2xl text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">     
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-lg font-medium text-white">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/5">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Social Profiles</h4>
                <div className="flex gap-4">
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="p-4 glass-card hover:bg-[#0077b5]/10 hover:text-[#0077b5] transition-all">
                    <Linkedin size={24} />
                  </a>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="p-4 glass-card hover:bg-white/10 transition-colors">
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500/50 transition-colors"  
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500/50 transition-colors"  
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500/50 transition-colors"    
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 ${
                  status === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                }`}
              >
                {status === 'loading' ? (
                  'Sending...'
                ) : status === 'success' ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>
              {status === 'error' && (
                <p className="text-red-500 text-center mt-4">Error sending message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
