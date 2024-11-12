import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialIcon = ({ children, href, label }: { children: React.ReactNode; href: string; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative group"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    aria-label={label}
  >
    <div className="card-neumorph p-2.5 rounded-lg bg-black/80 hover:bg-primary/10 transition-all duration-300">
      {children}
    </div>
  </motion.a>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a 
            href="#"
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="card-neumorph px-4 py-2 rounded-lg">
              <span className="text-2xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
                AUTOROE
              </span>
            </div>
          </motion.a>

          <div className="hidden md:flex items-center space-x-1">
            {['Home', 'Inventory', 'Services', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group px-4 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="card-neumorph absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <span className="relative z-10 text-sm font-medium tracking-wider text-gray-300 group-hover:text-white transition-colors duration-300">
                  {item.toUpperCase()}
                </span>
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <SocialIcon href="https://instagram.com/autoroe" label="Instagram">
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </SocialIcon>

            <SocialIcon href="https://facebook.com/autoroe" label="Facebook">
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </SocialIcon>

            <SocialIcon href="https://x.com/autoroe" label="X">
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-9.248M14.496 7.752L20 4"/>
              </svg>
            </SocialIcon>

            <SocialIcon href="https://youtube.com/autoroe" label="YouTube">
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
              </svg>
            </SocialIcon>

            <SocialIcon href="https://tiktok.com/@autoroe" label="TikTok">
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
              </svg>
            </SocialIcon>
          </div>

          <motion.button
            className="md:hidden relative"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="card-neumorph p-2 rounded-lg">
              {isOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 pt-2 pb-3 space-y-2 bg-black/95 backdrop-blur-md">
          {['Home', 'Inventory', 'Services', 'About', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block card-neumorph px-4 py-3 rounded-lg text-sm font-medium tracking-wider text-gray-300 hover:text-white transition-all duration-300"
              whileHover={{ x: 10 }}
              onClick={() => setIsOpen(false)}
            >
              {item.toUpperCase()}
            </motion.a>
          ))}
          
          <div className="flex items-center space-x-3 py-4 border-t border-primary/20 mt-4">
            {['Instagram', 'Facebook', 'X', 'YouTube', 'TikTok'].map((platform) => (
              <motion.a
                key={platform}
                href={`https://${platform.toLowerCase()}.com/autoroe`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-neumorph p-2.5 rounded-lg bg-black/80 hover:bg-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-primary text-sm">{platform[0]}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </nav>
  );
}