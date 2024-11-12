import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-[100svh] overflow-hidden">
      <motion.div 
        className="absolute inset-0 hero-gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      <div className="absolute inset-0">
        <motion.img
          src="https://get.wallhere.com/photo/Japanese-cars-car-vehicle-Toyota-JDM-sports-car-white-cars-Toyota-AE86-coupe-AE86-Sedan-land-vehicle-automotive-exterior-race-car-automobile-make-honda-cr-x-54674.jpg"
          alt="Toyota AE86"
          className="w-full h-full object-cover object-center"
          initial={{ scale: 1.2, filter: 'brightness(0)' }}
          animate={{ scale: 1, filter: 'brightness(0.8)' }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[100svh] flex items-center">
        <div className="max-w-3xl pt-24 sm:pt-0">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 mb-8"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            <h1 className="font-display text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-none">
              <span className="block text-outline mb-2">PURE JDM</span>
              <span className="block text-gradient">EXCELLENCE</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-xl font-light text-gray-300 mt-6 mb-8"
          >
            Leading JDM Imports Since 2008
            <br className="hidden sm:block" />
            Bringing Japan's finest automotive legends to Australia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={() => scrollToSection('inventory')}
              className="btn-neumorph group px-6 py-3 w-full sm:w-auto"
            >
              <span className="relative z-10 font-display tracking-wider text-sm flex items-center justify-center gap-2">
                VIEW COLLECTION
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-primary/20 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
            </button>
            
            <button 
              onClick={() => scrollToSection('import-process')}
              className="btn-neumorph group px-6 py-3 w-full sm:w-auto"
            >
              <span className="relative z-10 font-display tracking-wider text-sm flex items-center justify-center gap-2">
                IMPORT PROCESS
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-primary/10 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
            </button>

            <button 
              onClick={() => scrollToSection('order')}
              className="btn-neumorph group px-6 py-3 w-full sm:w-auto bg-primary/10"
            >
              <span className="relative z-10 font-display tracking-wider text-sm flex items-center justify-center gap-2">
                START YOUR JOURNEY
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-primary/20 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}