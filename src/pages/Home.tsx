import { motion } from 'framer-motion';
import { Film, Play } from 'lucide-react';
import { Page } from '../hooks/useRouter';

interface HomeProps {
  navigateTo: (page: Page) => void;
}

export default function Home({ navigateTo }: HomeProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#001a33] to-[#0A0A0A]">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(0, 123, 255, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(192, 192, 192, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(0, 123, 255, 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#007BFF] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="relative mx-auto w-40 h-40 flex items-center justify-center">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#007BFF] to-[#C0C0C0] opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: 360,
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <Film className="w-24 h-24 text-[#007BFF] relative z-10" strokeWidth={1.5} />
          </div>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-4 font-orbitron"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-[#007BFF] via-[#C0C0C0] to-[#007BFF] bg-clip-text text-transparent">
            Jerry Cinematic
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-[#C0C0C0] mb-12 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Crafting Stories Through Frames
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.button
            onClick={() => navigateTo('portfolio')}
            className="group relative px-8 py-4 bg-gradient-to-r from-[#007BFF] to-[#0056b3] rounded-full text-white font-semibold text-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Play className="w-5 h-5" />
              View My Work
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#C0C0C0] to-[#007BFF]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            onClick={() => navigateTo('services')}
            className="px-8 py-4 border-2 border-[#007BFF] rounded-full text-[#007BFF] font-semibold text-lg hover:bg-[#007BFF] hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Project
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-16 text-[#C0C0C0]/60 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <p>Professional Media Editor & Content Creator</p>
          <p>Nashik, India</p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#007BFF] rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-[#007BFF] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}
