import { motion } from 'framer-motion';

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
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 3, ease: "linear", repeat: Infinity },
            scale: { duration: 2, repeat: Infinity }
          }}
          className="mx-auto mb-8"
        >
          <img
            src="/IMG_20251018_220710_343.webp"
            alt="Jerry Cinematic Logo"
            className="w-48 h-48 drop-shadow-2xl"
          />
        </motion.div>

        <motion.div
          className="mt-8 h-1 w-64 bg-gray-800 rounded-full overflow-hidden"
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
