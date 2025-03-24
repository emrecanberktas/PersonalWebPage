import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";

import GameScene from "./GameScene";
const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch h-full">
        {/* Sol Taraf: Hakkımda */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-slate-900/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#61dafb]/10 flex flex-col"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#61dafb]/5 rounded-full blur-3xl -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#61dafb]/5 rounded-full blur-3xl translate-x-16 translate-y-16"></div>

          <div className="relative flex-1 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 rounded-lg bg-[#61dafb]/10 flex items-center justify-center">
                <span className="text-2xl">👋</span>
              </div>
              <h2 className="text-4xl font-bold text-[#61dafb]">About Me</h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#61dafb]/80 mb-8 text-lg leading-relaxed hover:text-[#61dafb] transition-colors duration-300 flex-1"
            >
              I'm a passionate web developer with expertise in modern web
              technologies. I love creating beautiful and functional web
              applications that provide great user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#61dafb]/5 rounded-xl p-6 mb-8 border border-[#61dafb]/10"
            >
              <h3 className="text-[#61dafb] font-semibold mb-4">
                Interactive 3D Skills
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#61dafb]/80">
                  <span className="w-2 h-2 rounded-full bg-[#61dafb]"></span>
                  Drag and throw the shapes to interact
                </li>
                <li className="flex items-center gap-3 text-[#61dafb]/80">
                  <span className="w-2 h-2 rounded-full bg-[#61dafb]"></span>
                  Watch them collide and bounce
                </li>
                <li className="flex items-center gap-3 text-[#61dafb]/80">
                  <span className="w-2 h-2 rounded-full bg-[#61dafb]"></span>
                  Hover to see them transform
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-auto"
            >
              <a
                href="https://drive.google.com/uc?export=download&id=1WDZkucfBsYT4Ho7m53alsZEUfb-x4APF"
                target="_blank"
                download
                className="block"
              >
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(97,218,251,0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#61dafb]/10 hover:bg-[#61dafb]/20 border border-[#61dafb]/20 text-[#61dafb] px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#61dafb] focus:ring-offset-2 focus:ring-offset-slate-900 shadow-lg shadow-[#61dafb]/10 flex items-center justify-center gap-2"
                >
                  <span>Download Resume</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.button>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Sağ Taraf: 3D Beceri Görselleştirme */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full relative bg-slate-900/80 backdrop-blur-lg rounded-2xl shadow-xl border border-[#61dafb]/10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#61dafb]/5"></div>
          <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
            <GameScene />
          </Canvas>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
