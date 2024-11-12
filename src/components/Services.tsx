import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, FileSearch, Ship, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: FileSearch,
    title: 'Vehicle Sourcing',
    description: 'Access to exclusive Japanese auctions and dealerships. We locate rare and sought-after JDM vehicles matching your specifications.'
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description: 'Thorough vehicle inspections and authenticity verification. Every vehicle undergoes comprehensive mechanical assessment and ADR compliance checks.'
  },
  {
    icon: Ship,
    title: 'Import Logistics',
    description: 'Complete shipping management, customs clearance, and compliance documentation. Full insurance coverage throughout transit to Australia.'
  },
  {
    icon: Wrench,
    title: 'Support Services',
    description: 'Post-import technical support, parts sourcing, and maintenance guidance. Network of specialised JDM mechanics across Australia.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto px-4">
            Comprehensive import solutions tailored to bring your dream JDM vehicle to Australian roads.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="p-6 bg-gray-900/50 rounded-lg backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 h-full">
                <div className="relative mb-6">
                  <service.icon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}