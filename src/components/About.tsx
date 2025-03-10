import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: "HTML/CSS", icon: "🎨" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "JavaScript", icon: "📜" },
  { name: "TypeScript", icon: "📘" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Material UI", icon: "🎯" },
  { name: "Shadcn UI", icon: "🎭" },
  { name: "Redux", icon: "🔄" },
  { name: "Zustand", icon: "🐻" },
  { name: "React Query", icon: "🔍" },
  { name: "Git", icon: "📦" },
  { name: "Jest", icon: "🃏" },
  { name: "Data Visualization", icon: "📊" },
];

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-indigo-200 mb-6 text-lg leading-relaxed"
          >
            I'm a passionate web developer with expertise in modern web
            technologies. I specialize in React on the frontend, constantly
            exploring new ways to enhance performance and create seamless user
            experiences.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-indigo-200 mb-8 text-lg leading-relaxed"
          >
            With a strong foundation in front-end development and a growing
            expertise in 3D web experiences, I'm always excited to take on new
            challenges and learn new technologies.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-indigo-200 mb-8 text-lg leading-relaxed"
          >
            Beyond coding, I'm a fitness enthusiast who enjoys hitting the gym
            to stay active and energized. When I'm not working on projects or
            learning something new, you'll probably find me playing computer
            games, unwinding with a great RPG or strategy game.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 flex flex-col items-center justify-center text-center"
            >
              <div className="text-2xl mb-2">{skill.icon}</div>
              <h3 className="text-sm font-medium text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
