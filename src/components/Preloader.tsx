import { motion } from 'framer-motion';
import { Film } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.8 }}
      onAnimationComplete={onComplete}
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, ease: "linear", repeat: Infinity }}
          className="mx-auto mb-4"
        >
          <Film className="w-20 h-20 text-[#007BFF]" strokeWidth={1.5} />
        </motion.div>
        <motion.h1
          className="text-4xl font-bold text-[#C0C0C0] font-orbitron"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Jerry Cinematic
        </motion.h1>
        <motion.div
          className="mt-4 h-1 w-64 bg-gray-800 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#007BFF] to-[#C0C0C0]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.2, duration: 1.2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
