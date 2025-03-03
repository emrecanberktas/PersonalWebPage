import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/yourusername", icon: "📦" },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: "💼",
    },
    { name: "Twitter", url: "https://twitter.com/yourusername", icon: "🐦" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-indigo-200 text-lg"
        >
          Have a question or want to work together?
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-indigo-300"
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
              className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-indigo-500/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-indigo-300/30 text-white"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-indigo-300"
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
              className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-indigo-500/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-indigo-300/30 text-white"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-indigo-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-indigo-500/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-indigo-300/30 text-white"
              placeholder="Your message here..."
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Send Message
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Connect with me
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-700/50 hover:bg-indigo-500/20 transition-colors"
                >
                  <span className="text-2xl">{link.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="border-t border-indigo-500/20 pt-8">
            <h3 className="text-xl font-semibold mb-4 text-white">Location</h3>
            <p className="text-indigo-200">Your City, Country</p>
          </div>

          <div className="border-t border-indigo-500/20 pt-8">
            <h3 className="text-xl font-semibold mb-4 text-white">Email</h3>
            <a
              href="mailto:your.email@example.com"
              className="text-indigo-300 hover:text-indigo-200 transition-colors"
            >
              your.email@example.com
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
