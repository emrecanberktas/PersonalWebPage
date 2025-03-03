import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-indigo-900/20 to-slate-900 text-white min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)] pointer-events-none"></div>
      <Navbar />

      {/* Hero Section with 3D */}
      <section className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(79,70,229,0.1),transparent_50%)]"></div>
        <Canvas>
          <Suspense fallback={null}>
            <Hero />
          </Suspense>
        </Canvas>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center w-full px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300">
            Emre Can Berktaş
          </h1>
          <p className="text-xl md:text-2xl text-indigo-200">
            Web Developer & Creative Coder
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-8"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30"
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex items-center justify-center py-20 relative"
        id="about"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(79,70,229,0.1),transparent_50%)]"></div>
        <About />
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen py-20 relative"
        id="projects"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(79,70,229,0.1),transparent_50%)]"></div>
        <Projects />
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex items-center justify-center py-20 relative"
        id="contact"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)]"></div>
        <Contact />
      </motion.section>
    </div>
  );
}

export default App;
