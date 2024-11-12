import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Inventory from './components/Inventory';
import Services from './components/Services';
import ImportProcess from './components/ImportProcess';
import About from './components/About';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 3.5 }}
        className="flex-1"
      >
        <Navbar />
        <Hero />
        <Inventory />
        <Services />
        <ImportProcess />
        <About />
        <OrderForm />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;