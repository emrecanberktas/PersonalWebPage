import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/emrecanberktas",
      icon: <FaGithub className="w-6 h-6" />,
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/emrecanberktas",
      icon: <FaLinkedin className="w-6 h-6" />,
      color: "hover:text-blue-400",
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have an exciting project in mind or just want to say hello? I'd love
            to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 order-2 lg:order-1"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800/50 border-2 border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800/50 border-2 border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-slate-800/50 border-2 border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  placeholder="Your Message"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 shadow-lg shadow-indigo-500/20"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 order-1 lg:order-2 space-y-8"
          >
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Contact Info
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-500/10 p-3 rounded-lg">
                    <FaMapMarkerAlt className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400">
                      Location
                    </h4>
                    <p className="text-white">Ankara, Turkey</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-500/10 p-3 rounded-lg">
                    <FaClock className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400">
                      Availability
                    </h4>
                    <p className="text-white">Mon - Fri, 9:00 - 17:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-700/50">
                <h4 className="text-lg font-semibold mb-4 text-white">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`text-gray-300 transition-colors ${link.color} bg-slate-800/50 p-3 rounded-lg hover:bg-slate-700/50`}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
