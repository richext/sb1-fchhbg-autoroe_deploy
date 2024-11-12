import React from 'react';
import { motion } from 'framer-motion';
import { Info, ArrowRight } from 'lucide-react';

interface CarProps {
  car: {
    name: string;
    year: string;
    price: string;
    image: string;
    specs: string[];
  };
  index: number;
}

export default function CarCard({ car, index }: CarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-gray-900/50 rounded-lg overflow-hidden card-hover neon-border backdrop-blur-sm"
    >
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <motion.div 
        initial={false}
        animate={{ y: 0 }}
        className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:-translate-y-2"
      >
        <div className="flex justify-between items-end">
          <div>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-primary text-sm mb-2 font-display"
            >
              {car.year}
            </motion.p>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-xl font-bold mb-1 group-hover:text-gradient"
            >
              {car.name}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-2xl font-bold text-primary"
            >
              {car.price}
            </motion.p>
          </div>
          
          <div className="flex gap-2">
            <button 
              className="group/btn relative p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="View specifications"
            >
              <Info className="w-5 h-5" />
              <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-black/90 rounded-lg text-sm opacity-0 invisible group-hover/btn:opacity-100 group-hover/btn:visible transition-all duration-300 backdrop-blur-sm">
                <ul className="space-y-1">
                  {car.specs.map((spec, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-2">
                      <ArrowRight className="w-3 h-3" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </button>
          </div>
        </div>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        />
      </motion.div>
    </motion.div>
  );
}