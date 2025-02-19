import { motion } from 'framer-motion';
import { Scene } from './Scene';

export function SkillsScene() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="h-[200px] mb-16 bg-gradient-to-b from-transparent to-gray-900/20 rounded-2xl overflow-hidden">
        <Scene />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl">{skill.icon}</span>
              <h3 className="text-xl font-bold text-white">{skill.name}</h3>
            </div>
            
            <div className="relative h-4 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="absolute top-0 left-0 h-full rounded-full"
                style={{ 
                  backgroundColor: skill.color,
                  boxShadow: `0 0 20px ${skill.color}40`
                }}
              />
            </div>
            
            <div className="mt-2 flex justify-between items-center">
              <span className="text-sm text-gray-400">Proficiency</span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className="font-bold text-white"
              >
                {skill.level}%
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const SKILLS = [
  { name: 'React', level: 90, color: '#61DAFB', icon: '⚛️' },
  { name: 'Node.js', level: 85, color: '#68A063', icon: '🟢' },
  { name: 'TypeScript', level: 88, color: '#3178C6', icon: '📘' },
  // { name: 'JavaScript', level: 92, color: '#F7DF1E', icon: '🟡' },
  // { name: 'Python', level: 80, color: '#3776AB', icon: '🐍' },
  // { name: 'Docker', level: 75, color: '#2496ED', icon: '🐳' },
  // { name: 'AWS', level: 82, color: '#FF9900', icon: '☁️' },
  // { name: 'GraphQL', level: 78, color: '#E535AB', icon: '🔮' }
];