import { motion } from 'framer-motion';
import { useState } from 'react';
import { Play, Filter } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  { id: '1', title: 'Brand Promotion Reel', category: 'short-form', thumbnail: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: '2', title: 'Product Advertisement', category: 'ads', thumbnail: 'https://images.pexels.com/photos/7991259/pexels-photo-7991259.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: '3', title: 'Music Video Edit', category: 'music-videos', thumbnail: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: '4', title: 'Cinematic Wedding', category: 'cinematic', thumbnail: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: '5', title: 'Instagram Reel', category: 'short-form', thumbnail: 'https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: '6', title: 'Commercial Ad', category: 'ads', thumbnail: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: '7', title: 'Festival Reel', category: 'short-form', thumbnail: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: '8', title: 'Car Showcase', category: 'cinematic', thumbnail: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'short-form', label: 'Short-Form' },
  { id: 'ads', label: 'Ads' },
  { id: 'music-videos', label: 'Music Videos' },
  { id: 'cinematic', label: 'Cinematic' },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

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
              Portfolio
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#007BFF] to-[#C0C0C0] mx-auto mb-8" />
          <p className="text-[#C0C0C0] text-lg">
            Explore my latest cinematic creations and visual stories
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Filter className="w-5 h-5 text-[#007BFF]" />
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#007BFF] to-[#0056b3] text-white'
                  : 'bg-gray-800 text-[#C0C0C0] hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ y: 20 }}
                whileHover={{ y: 0 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-[#007BFF] flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </motion.div>
                <h3 className="text-white text-xl font-bold text-center px-4">
                  {project.title}
                </h3>
              </motion.div>

              <div className="absolute top-4 left-4 px-3 py-1 bg-[#007BFF]/90 rounded-full text-white text-xs font-semibold backdrop-blur-sm">
                {categories.find(c => c.id === project.category)?.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-[#C0C0C0] text-lg mt-12"
          >
            No projects found in this category.
          </motion.div>
        )}
      </div>
    </div>
  );
}
