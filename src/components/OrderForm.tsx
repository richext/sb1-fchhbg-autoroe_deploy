import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const priceRanges = [
  '15,000 - 35,000',
  '35,000 - 75,000',
  '75,000+'
];

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carModel: '',
    priceRange: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="order" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 id="inquiry-title" className="text-3xl md:text-4xl font-bold font-display mb-4">Start Your Journey</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to own your dream JDM vehicle? Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-white placeholder-gray-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-white placeholder-gray-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-white placeholder-gray-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="priceRange" className="block text-sm font-medium text-gray-400 mb-2">
                  Budget Range (AUD)
                </label>
                <select
                  id="priceRange"
                  name="priceRange"
                  value={formData.priceRange}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-white placeholder-gray-500"
                >
                  <option value="">Select budget range</option>
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>${range}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="carModel" className="block text-sm font-medium text-gray-400 mb-2">
                Desired Vehicle
              </label>
              <input
                type="text"
                id="carModel"
                name="carModel"
                value={formData.carModel}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-white placeholder-gray-500"
                placeholder="Enter vehicle model"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-white placeholder-gray-500 resize-none"
                placeholder="Tell us more about your requirements..."
              />
            </div>

            <button
              type="submit"
              className="btn-neumorph group w-full sm:w-auto px-8 py-4 bg-primary/20"
            >
              <span className="relative z-10 font-display tracking-wider text-sm flex items-center justify-center gap-2">
                SUBMIT INQUIRY
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}