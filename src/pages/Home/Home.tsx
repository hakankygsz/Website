import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center mt-16 px-8 lg:px-0">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center max-w-3xl w-full space-y-8 lg:space-y-12"
      >
        <div className='flex flex-col space-y-2'>
          <motion.span 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3, duration: 0.6 }}
            className='font-bold text-lg lg:text-2xl text-gray-500'
          >
            Merhaba, benim adım
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-5xl lg:text-8xl font-extrabold bg-gradient-to-r from-purple-600 via-red-600 to-orange-600 bg-clip-text text-transparent py-4"
          >
            Hakan Kaygusuz.
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-lg text-gray-700 max-w-lg mx-auto"
        >
          Yazılım dünyasına 7 yaşında adım attım ve teknolojiye olan tutkum hiç azalmadı.
          Bugüne kadar bir e-ticaret platformu, Minecraft launcher, yapay zeka tabanlı sesli asistan
          ve yüz tanıma sistemleri geliştirdim.
        </motion.p>

        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 1.1, duration: 0.6 }}
          className='py-4 px-16 rounded-lg border-2 border-gray-700 text-gray-700 hover:bg-black hover:text-white hover:shadow-lg duration-300 font-semibold'
        >
          Daha fazla bilgi
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;