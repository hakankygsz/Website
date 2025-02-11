import React from "react";
import { FaDev } from "react-icons/fa";
import { motion } from "framer-motion";

const AnimatedText = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="text-center lg:text-left"
  >
    {children}
  </motion.div>
);

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="max-w-4xl w-full flex flex-col items-center lg:items-start space-y-8 mt-4 lg:mt-16 px-6 lg:px-48 text-white">

        <div className="w-full h-14 flex items-center justify-between px-4 rounded-lg border border-neutral-700">
          <h2 className="text-md font-medium text-gray-200">Full-Stack Web Developer</h2>
          <div className="flex items-center justify-center h-10 w-10 bg-neutral-950/50 rounded-lg">
            <FaDev className="text-white text-2xl" />
          </div>
        </div>

        <AnimatedText>
          <span className="text-lg lg:text-xl font-semibold text-gray-300">Merhaba, ben</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-orange-500 via-purple-600 to-red-500 bg-clip-text text-transparent py-2">
            Hakan Kaygusuz
          </h1>
        </AnimatedText>

        <AnimatedText delay={0.3}>
          <p className="text-sm lg:text-md text-gray-200 leading-relaxed">
            Teknolojiye olan ilgim doğrultusunda yazılım geliştirme alanında uzmanlaştım.
            Node.js, C#, JavaScript ve Python dillerinde deneyim sahibiyim ve React, Next.js, TensorFlow, OpenCV gibi teknolojilerle çeşitli projeler geliştirdim.
          </p>
        </AnimatedText>

        <AnimatedText delay={0.5}>
          <p className="text-sm lg:text-md text-gray-200 leading-relaxed">
            E-ticaret platformları, yapay zeka destekli sesli asistanlar, yüz tanıma sistemleri ve özel yazılımlar üzerine çalışarak hem backend hem de frontend tarafında kapsamlı bilgi edindim.
            Güvenlik, performans ve ölçeklenebilirlik konularına odaklanarak sağlam ve verimli yazılım çözümleri üretmekteyim.
          </p>
        </AnimatedText>

        <motion.button
          className="py-3 px-8 border border-neutral-900 duration-300 font-semibold rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          Daha Fazla Bilgi
        </motion.button>
      </div>
    </div>
  );
};

export default Home;