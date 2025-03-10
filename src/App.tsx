import { motion } from "framer-motion";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Model from "./components/Model";
function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-900 via-[#282c34] to-slate-900 text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(97,218,251,0.1),transparent_50%)] pointer-events-none"></div>
      <Navbar />

      {/* Hero Section with 3D */}
      <section className="w-full h-screen relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(97,218,251,0.1),transparent_50%)]"></div>
        <div>
          <div>
            <Model />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center w-full px-4 z-10"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#61dafb]">
              Emre Can Berktaş
            </h1>
            <p className="text-xl md:text-2xl text-[#61dafb]">
              React Developer
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-8"
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-[#61dafb]/10 hover:bg-[#61dafb]/20 border border-[#61dafb]/20 rounded-full text-[#61dafb] font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#61dafb]/20 group"
              >
                View My Work
                <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full min-h-screen relative py-20" id="about">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(97,218,251,0.1),transparent_50%)]"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <About />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="w-full min-h-screen relative py-20" id="projects">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(97,218,251,0.1),transparent_50%)]"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <Projects />
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="w-full min-h-screen relative py-20" id="contact">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(97,218,251,0.1),transparent_50%)]"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <Contact />
        </motion.div>
      </section>
    </div>
  );
}

export default App;
