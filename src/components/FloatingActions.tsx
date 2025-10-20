import { motion } from 'framer-motion';
import { MessageCircle, Instagram } from 'lucide-react';

export default function FloatingActions() {
  const whatsappUrl = 'https://wa.me/918600000541';
  const instagramUrl = 'https://www.instagram.com/jerrycinematic?igsh=MXd2Z3g3cHdoaWR5dg==';

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/50"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            '0 0 20px rgba(34, 197, 94, 0.5)',
            '0 0 40px rgba(34, 197, 94, 0.8)',
            '0 0 20px rgba(34, 197, 94, 0.5)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.a>

      <motion.a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 flex items-center justify-center shadow-lg shadow-pink-500/50"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            '0 0 20px rgba(236, 72, 153, 0.5)',
            '0 0 40px rgba(236, 72, 153, 0.8)',
            '0 0 20px rgba(236, 72, 153, 0.5)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      >
        <Instagram className="w-7 h-7 text-white" />
      </motion.a>
    </div>
  );
}
