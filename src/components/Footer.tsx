import { motion } from 'framer-motion';
import { Film, MessageCircle, Instagram, Mail, Phone } from 'lucide-react';
import { Page } from '../hooks/useRouter';

interface FooterProps {
  navigateTo: (page: Page) => void;
}

export default function Footer({ navigateTo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', page: 'home' as Page },
    { label: 'About', page: 'about' as Page },
    { label: 'Portfolio', page: 'portfolio' as Page },
    { label: 'Services', page: 'services' as Page },
    { label: 'Contact', page: 'contact' as Page },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0A0A0A] to-black border-t border-[#007BFF]/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Film className="w-8 h-8 text-[#007BFF]" />
              <span className="text-xl font-bold text-[#C0C0C0] font-orbitron">
                Jerry Cinematic
              </span>
            </motion.div>
            <p className="text-[#C0C0C0]/70 mb-4">
              Crafting Stories Through Frames. Professional media editing and content creation from Nashik, India.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://wa.me/918600000541"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/jerrycinematic?igsh=MXd2Z3g3cHdoaWR5dg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#C0C0C0] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <motion.button
                    onClick={() => navigateTo(link.page)}
                    className="text-[#C0C0C0]/70 hover:text-[#007BFF] transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#C0C0C0] mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#C0C0C0]/70">
                <Phone className="w-5 h-5 text-[#007BFF]" />
                <a href="tel:+918600000972" className="hover:text-[#007BFF] transition-colors">
                  +91 8600000972
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#C0C0C0]/70">
                <Mail className="w-5 h-5 text-[#007BFF]" />
                <a href="mailto:jerrycinematic18@gmail.com" className="hover:text-[#007BFF] transition-colors break-all">
                  jerrycinematic18@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-[#C0C0C0]/60 text-sm">
            © {currentYear} Jerry Cinematic. All rights reserved. | Designed by Pranav Sansare
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#007BFF] to-transparent opacity-50" />
    </footer>
  );
}
