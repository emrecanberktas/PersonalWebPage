import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
interface Article {
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
}

const TechArticles = () => {
  const articles: Article[] = [
    {
      title: "JWT Security",
      description:
        "Do you store the JWT in localStorage, sessionStorage, Cookies?",
      date: "March 2024",
      readTime: "5 min read",
      link: "https://app.daily.dev/posts/do-you-store-the-jwt-in-localstorage-sessionstorage-cookies-then-this-post-is-for-you-2yol7r91m",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Tech Articles</h2>
      <p className="text-center text-xl mb-12 text-[#61dafb]/80">
        Sharing my insights and learnings about web development and technology
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <a href={article.link} target="_blank">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#61dafb]/5 border border-[#61dafb]/20 rounded-xl p-6 hover:bg-[#61dafb]/10 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                <p className="text-[#61dafb]/70 mb-4 flex-grow">
                  {article.description}
                </p>
                <div className="flex justify-between items-center text-sm text-[#61dafb]/60">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <span className="mt-4 inline-flex items-center text-[#61dafb] hover:text-[#61dafb]/80 transition-colors">
                  Read More
                  <IoIosArrowForward className="ml-2" />
                </span>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TechArticles;
