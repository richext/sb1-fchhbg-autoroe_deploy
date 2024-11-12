import React from 'react';
import { motion } from 'framer-motion';
import { Search, CheckCircle, Ship, FileText, Truck, Key } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Vehicle Selection',
    description: 'Browse our inventory or request a specific model. We source options matching your criteria from trusted Japanese dealers and auctions.',
    duration: '1-2 weeks'
  },
  {
    icon: CheckCircle,
    title: 'Inspection & Purchase',
    description: 'Comprehensive inspection report provided. Upon approval, we secure the vehicle and handle all purchase documentation.',
    duration: '1 week'
  },
  {
    icon: Ship,
    title: 'Shipping',
    description: 'Vehicle is containerised and shipped with full insurance coverage. Track your shipment in real-time.',
    duration: '4-5 weeks'
  },
  {
    icon: FileText,
    title: 'Customs Clearance',
    description: 'We manage all customs documentation and ensure compliance with Australian import regulations.',
    duration: '1-2 weeks'
  },
  {
    icon: Truck,
    title: 'Local Transport',
    description: 'Vehicle is transported to our facility for final inspection and preparation.',
    duration: '3-5 days'
  },
  {
    icon: Key,
    title: 'Delivery',
    description: 'Complete final documentation and registration. Your JDM dream is ready to hit Australian roads!',
    duration: '1-2 days'
  }
];

export default function ImportProcess() {
  return (
    <section id="import-process" className="py-24 bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Import Process</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A streamlined journey from selection to delivery, with full transparency and support at every step.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary/50 to-primary-light/50" />
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="group p-6 bg-gray-900/50 rounded-lg backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative">
                        <step.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-2">{step.description}</p>
                    <div className="text-sm text-primary">Estimated duration: {step.duration}</div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1 w-4 h-4">
                  <div className="w-full h-full rounded-full bg-primary" />
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}