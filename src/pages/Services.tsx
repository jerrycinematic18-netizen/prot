import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Video, Camera, Sparkles, Scissors, Cake, Car,
  TrendingUp, Heart, Users, Briefcase, Megaphone,
  Calendar, Image, Plus, MessageCircle, Zap
} from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  { id: '1', name: 'Video Creation', icon: 'Video' },
  { id: '2', name: 'Professional Shoot', icon: 'Camera' },
  { id: '3', name: 'Media Creation', icon: 'Sparkles' },
  { id: '4', name: 'Editing', icon: 'Scissors' },
  { id: '5', name: 'Birthday Shoot', icon: 'Cake' },
  { id: '6', name: 'Car Delivery Shoot', icon: 'Car' },
  { id: '7', name: 'Brand Promotion Shoot', icon: 'TrendingUp' },
  { id: '8', name: 'Maternity Shoot', icon: 'Heart' },
  { id: '9', name: 'Pre-Wedding Reel', icon: 'Users' },
  { id: '10', name: 'Business Promotion', icon: 'Briefcase' },
  { id: '11', name: 'Services Promotion', icon: 'Megaphone' },
  { id: '12', name: 'Political Reels', icon: 'Users' },
  { id: '13', name: 'All Festival Reels', icon: 'Calendar' },
  { id: '14', name: 'Posters & Banners', icon: 'Image' },
  { id: '15', name: '+ Many More', icon: 'Plus' },
];

const iconMap: { [key: string]: any } = {
  Video, Camera, Sparkles, Scissors, Cake, Car,
  TrendingUp, Heart, Users, Briefcase, Megaphone,
  Calendar, Image, Plus
};

export default function Services() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleGetQuote = () => {
    const selectedNames = services
      .filter(s => selectedServices.includes(s.id))
      .map(s => s.name)
      .join(', ');

    const message = selectedNames
      ? `Hi Jerry Cinematic! I'm interested in the following services: ${selectedNames}. Please send me a quotation.`
      : `Hi Jerry Cinematic! I'd like to know more about your services and get a quotation.`;

    const whatsappUrl = `https://wa.me/918600000541?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCustomPackage = () => {
    const message = `Hi Jerry Cinematic! I want a custom package tailored to my needs. Let's discuss!`;
    const whatsappUrl = `https://wa.me/918600000541?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-orbitron">
            <span className="bg-gradient-to-r from-[#007BFF] to-[#C0C0C0] bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#007BFF] to-[#C0C0C0] mx-auto mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-[#007BFF] to-[#0056b3] rounded-2xl p-6 mb-12 text-center relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                'radial-gradient(circle at 0% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 100% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 0% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <div className="relative z-10 flex items-center justify-center gap-3 flex-wrap">
            <Zap className="w-6 h-6 text-yellow-300" fill="currentColor" />
            <p className="text-white text-lg md:text-xl font-bold">
              Best & Lowest Price in Nashik
            </p>
            <span className="text-white/80">|</span>
            <p className="text-white/90">Custom Packages Available</p>
            <span className="text-white/80">|</span>
            <p className="text-white/90">Get Your Quote Instantly on WhatsApp!</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            const isSelected = selectedServices.includes(service.id);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => toggleService(service.id)}
                className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#007BFF] to-[#0056b3] border-2 border-[#007BFF]'
                    : 'bg-gray-900 border-2 border-gray-800 hover:border-[#007BFF]/50'
                }`}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(0, 123, 255, 0.2) 0%, transparent 70%)',
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent
                      className={`w-10 h-10 ${isSelected ? 'text-white' : 'text-[#007BFF]'}`}
                      strokeWidth={1.5}
                    />
                    <motion.div
                      className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                        isSelected
                          ? 'bg-white border-white'
                          : 'border-[#007BFF]'
                      }`}
                      animate={isSelected ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {isSelected && (
                        <motion.svg
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.3 }}
                          className="w-4 h-4 text-[#007BFF]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <motion.path d="M5 13l4 4L19 7" />
                        </motion.svg>
                      )}
                    </motion.div>
                  </div>
                  <h3 className={`text-lg font-semibold ${isSelected ? 'text-white' : 'text-[#C0C0C0]'}`}>
                    {service.name}
                  </h3>
                </div>

                {isSelected && (
                  <motion.div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{
                      boxShadow: '0 0 30px rgba(0, 123, 255, 0.6)',
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            onClick={handleGetQuote}
            className="group relative px-10 py-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white font-bold text-lg overflow-hidden shadow-lg shadow-green-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <MessageCircle className="w-6 h-6" />
              Get Quote on WhatsApp
              {selectedServices.length > 0 && (
                <span className="bg-white text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  {selectedServices.length}
                </span>
              )}
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            onClick={handleCustomPackage}
            className="px-10 py-4 border-2 border-[#007BFF] rounded-full text-[#007BFF] font-bold text-lg hover:bg-[#007BFF] hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Custom Package
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
