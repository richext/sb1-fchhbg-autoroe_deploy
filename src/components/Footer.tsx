import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card-neumorph px-6 py-3 rounded-lg"
          >
            <span className="text-xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
              AUTOROE
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="text-sm text-gray-400">© 2024 AUTOROE. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}