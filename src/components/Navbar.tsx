import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-[#61dafb]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-xl font-bold text-[#61dafb]">Portfolio</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <motion.a
                  key={item.title}
                  whileHover={{ scale: 1.05 }}
                  className="text-[#61dafb]/80 hover:text-[#61dafb] px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-300"
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.title}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-[#61dafb] bg-[#61dafb]/10 hover:bg-[#61dafb]/20 border border-[#61dafb]/20 transition-all duration-300 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-slate-900/50 backdrop-blur-sm rounded-b-lg border-t border-[#61dafb]/10">
          {menuItems.map((item) => (
            <motion.a
              key={item.title}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-[#61dafb]/80 hover:text-[#61dafb] hover:bg-[#61dafb]/10 block px-4 py-2.5 rounded-lg text-base font-medium cursor-pointer transition-all duration-300"
              onClick={() => scrollToSection(item.href)}
            >
              {item.title}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
