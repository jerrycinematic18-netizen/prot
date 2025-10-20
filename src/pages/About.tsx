import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Film, Award, Users, Clock } from 'lucide-react';

const skills = [
  { name: 'CapCut Editing', level: 95 },
  { name: '4K Video Production', level: 90 },
  { name: 'Social Media Content', level: 98 },
  { name: 'Brand Collaboration', level: 85 },
];

const stats = [
  { icon: Clock, value: 2, suffix: '+', label: 'Years Experience' },
  { icon: Film, value: 500, suffix: '+', label: 'Projects Completed' },
  { icon: Users, value: 200, suffix: '+', label: 'Happy Clients' },
  { icon: Award, value: 50, suffix: '+', label: 'Brand Collaborations' },
];

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  const bioRef = useRef(null);
  const bioInView = useInView(bioRef, { once: true, amount: 0.3 });

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
              About Me
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#007BFF] to-[#C0C0C0] mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            ref={bioRef}
            initial={{ opacity: 0, x: -50 }}
            animate={bioInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative">
              <motion.div
                className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#007BFF] to-[#C0C0C0]"
                initial={{ height: 0 }}
                animate={bioInView ? { height: '100%' } : {}}
                transition={{ duration: 1, delay: 0.3 }}
              />
              <p className="text-lg text-[#C0C0C0] leading-relaxed pl-8">
                Hi, I'm <span className="text-[#007BFF] font-bold">Pranav Sansare</span>, a professional media editor and content creator from Nashik. With over 2 years of experience, I specialize in short-form content (Reels, YouTube Shorts, TikToks), cinematic edits, ads, and music videos.
              </p>
            </div>
            <p className="text-lg text-[#C0C0C0] leading-relaxed pl-8">
              I'm the founder of <span className="text-[#007BFF] font-bold">Jerry Cinematic</span>, where creativity meets storytelling in every frame. My mission is to transform your vision into captivating visual experiences that resonate with your audience.
            </p>
            <p className="text-lg text-[#C0C0C0] leading-relaxed pl-8">
              From brand promotions to personal milestones, I bring a cinematic touch to every project, ensuring that your story is told in the most compelling way possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={bioInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-[#C0C0C0] mb-6">Skills & Expertise</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-[#C0C0C0]">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#007BFF] to-[#C0C0C0]"
                    initial={{ width: 0 }}
                    animate={bioInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              className="text-center p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-[#007BFF]/20 hover:border-[#007BFF]/50 transition-all"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-block mb-4"
              >
                <stat.icon className="w-12 h-12 text-[#007BFF] mx-auto" strokeWidth={1.5} />
              </motion.div>
              <div className="text-4xl font-bold text-[#C0C0C0] mb-2 font-orbitron">
                <AnimatedCounter end={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-sm text-[#C0C0C0]/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
