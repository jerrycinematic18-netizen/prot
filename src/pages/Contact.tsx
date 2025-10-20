import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MessageCircle, Instagram, Send, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Jerry Cinematic! My name is ${formData.name}. Email: ${formData.email}. Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/918600000541?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8600000972',
      href: 'tel:+918600000972',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'jerrycinematic18@gmail.com',
      href: 'mailto:jerrycinematic18@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nashik, India',
      href: null,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-orbitron">
            <span className="bg-gradient-to-r from-[#007BFF] to-[#C0C0C0] bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#007BFF] to-[#C0C0C0] mx-auto mb-8" />
          <p className="text-[#C0C0C0] text-lg">
            Let's create something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/20 to-[#C0C0C0]/20 rounded-2xl blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative bg-gray-900 rounded-2xl p-8 border border-[#007BFF]/20">
                <h2 className="text-2xl font-bold text-[#C0C0C0] mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#007BFF] to-[#0056b3] flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-[#C0C0C0]/60 text-sm">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-[#C0C0C0] hover:text-[#007BFF] transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-[#C0C0C0]">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800">
                  <h3 className="text-xl font-bold text-[#C0C0C0] mb-4">
                    Connect on Social Media
                  </h3>
                  <div className="flex gap-4">
                    <motion.a
                      href="https://wa.me/918600000541"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageCircle className="w-6 h-6 text-white" />
                    </motion.a>
                    <motion.a
                      href="https://www.instagram.com/jerrycinematic?igsh=MXd2Z3g3cHdoaWR5dg=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Instagram className="w-6 h-6 text-white" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/20 to-[#C0C0C0]/20 rounded-2xl blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
              <form
                onSubmit={handleSubmit}
                className="relative bg-gray-900 rounded-2xl p-8 border border-[#007BFF]/20 space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-[#C0C0C0] mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-[#C0C0C0] focus:outline-none focus:border-[#007BFF] transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#C0C0C0] mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-[#C0C0C0] focus:outline-none focus:border-[#007BFF] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#C0C0C0] mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-[#C0C0C0] focus:outline-none focus:border-[#007BFF] transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#007BFF] to-[#0056b3] rounded-lg text-white font-bold text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#007BFF]/50 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  Send Message on WhatsApp
                </motion.button>

                <p className="text-center text-[#C0C0C0]/60 text-sm">
                  Your message will be sent directly via WhatsApp
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
