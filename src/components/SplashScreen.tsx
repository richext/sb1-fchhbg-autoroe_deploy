import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const letters = "AUTOROE".split("");

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50 perspective"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 3.5 }}
    >
      <div className="relative w-full max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0.8, 0] }}
          transition={{ duration: 3, times: [0, 0.2, 0.8, 1] }}
          className="absolute inset-0 blur-[120px]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/50 via-primary-400/50 to-primary-500/50" />
        </motion.div>

        <div className="relative flex justify-center items-center">
          <div className="relative text-[2.5rem] xs:text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] font-display font-bold tracking-tighter flex items-center gap-1 sm:gap-2">
            {letters.map((letter, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, rotateX: -90, y: 100, z: -100 }}
                animate={{ opacity: 1, rotateX: 0, y: 0, z: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.215, 0.610, 0.355, 1.000]
                }}
              >
                <span className="relative inline-block letter-3d transform-gpu">
                  {letter}
                  <motion.span
                    className="absolute inset-0 laser-highlight"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      scale: [0.8, 1.2, 1, 1],
                      filter: [
                        'brightness(1) blur(0px)',
                        'brightness(1.5) blur(4px)',
                        'brightness(1.2) blur(2px)',
                        'brightness(1) blur(0px)'
                      ]
                    }}
                    transition={{
                      duration: 1.2,
                      delay: index * 0.15 + 0.2,
                      ease: "easeInOut"
                    }}
                  >
                    {letter}
                  </motion.span>
                </span>

                <motion.div
                  className="absolute inset-0 w-full overflow-hidden"
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{
                    scaleY: [0, 1, 0],
                    opacity: [0, 1, 0],
                    rotateX: [45, 0, -45]
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div 
                    className="absolute laser-beam"
                    animate={{
                      y: ['-100%', '200%'],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.15,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}