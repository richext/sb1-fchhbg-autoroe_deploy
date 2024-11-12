import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock4, Globe } from 'lucide-react';

const stats = [
  { icon: Award, value: '100+', label: 'Vehicles Imported' },
  { icon: Users, value: '200+', label: 'Happy Clients' },
  { icon: Clock4, value: '25+', label: 'Years Combined Experience' },
  { icon: Globe, value: '8', label: 'States & Territories Served' }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Driven by Passion, Guided by Experience</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We are a startup run by experienced drivers, lovers of JDM and experienced importers. Our hands-on expertise in professional racing and deep understanding of Japanese car culture ensures every vehicle we import meets the highest standards of authenticity and performance.
              </p>
              <p>
                Our direct connections with Japanese auction houses and dealers have been forged through years of hands-on involvement in the import scene, ensuring authentic, top-quality vehicles with verified histories.
              </p>
              <p>
                As enthusiasts ourselves, we understand the unique thrill of JDM ownership. Our transparent approach provides detailed condition reports, comprehensive photography, and regular updates throughout your import journey.
              </p>
            </div>
            
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-px bg-gradient-to-r from-primary to-primary-light my-8"
            />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1607603750909-408e193868c7?auto=format&fit=crop&q=80"
                alt="JDM workshop"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}