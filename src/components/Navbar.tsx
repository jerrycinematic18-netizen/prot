import { motion } from 'framer-motion';
import { Page } from '../hooks/useRouter';

interface NavbarProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

export default function Navbar({ currentPage, navigateTo }: NavbarProps) {
  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#007BFF]/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => navigateTo('home')}
        >
          <img
            src="/img_20251018_220710_343.jpg"
            alt="Jerry Cinematic Logo"
            className="w-12 h-12"
          />
          <span className="text-lg font-bold text-[#C0C0C0] font-orbitron hidden sm:inline">
            Jerry Cinematic
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.page}
              onClick={() => navigateTo(item.page)}
              className={`text-sm font-medium transition-colors relative ${
                currentPage === item.page
                  ? 'text-[#007BFF]'
                  : 'text-[#C0C0C0] hover:text-[#007BFF]'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              {currentPage === item.page && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#007BFF]"
                  layoutId="navbar-indicator"
                />
              )}
            </motion.button>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <button className="text-[#C0C0C0]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
