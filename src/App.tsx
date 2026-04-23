/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import BrandStory from './components/BrandStory';
import ValueProps from './components/ValueProps';
import Craftsmanship from './components/Craftsmanship';
import Newsletter from './components/Newsletter';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [showNote, setShowNote] = useState(false);

  return (
    <div className="min-h-screen bg-brand-cream selection:bg-brand-honey selection:text-brand-espresso relative">
      {/* Global Botanical Shadow Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0 overflow-hidden">
        <img 
          src="/C:/Users/HP/.gemini/antigravity/brain/bebe6cba-b6cd-43a6-8e52-21e27a88b673/botanical_shadow_background_1776883944339.png" 
          alt="" 
          className="w-full h-full object-cover scale-110"
        />
      </div>

      <Header />
      <main>
        <Hero />
        <ValueProps />
        <FeaturedProducts />
        <Craftsmanship />
        <BrandStory />
        <Testimonials />
        <Gallery />
        <Newsletter />
      </main>
      <Footer />

      {/* Intern Task: Design Note Toggle */}
      <button 
        onClick={() => setShowNote(true)}
        className="fixed bottom-8 right-8 z-50 bg-brand-caramel text-brand-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <Info size={20} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-bold uppercase tracking-widest pl-0 group-hover:pl-2">
          Design Notes
        </span>
      </button>

      <AnimatePresence>
        {showNote && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-brand-espresso/40 backdrop-blur-sm flex items-center justify-center p-4"
          >
             <motion.div 
               initial={{ scale: 0.9, y: 20 }}
               animate={{ scale: 1, y: 0 }}
               exit={{ scale: 0.9, y: 20 }}
               className="bg-brand-cream max-w-2xl w-full p-8 md:p-12 shadow-2xl relative border border-brand-espresso/5"
             >
                <button 
                  onClick={() => setShowNote(false)}
                  className="absolute top-6 right-6 text-brand-caramel hover:rotate-90 transition-transform"
                >
                   <X size={24} />
                </button>
                
                <div className="space-y-6">
                  <span className="text-[10px] uppercase tracking-widest text-brand-muted font-bold">Assessment Deliverable</span>
                  <h3 className="font-serif text-4xl text-brand-caramel">Design Choices & Process</h3>
                  
                  <div className="text-brand-espresso/80 space-y-4 text-md leading-relaxed font-light">
                    <p>
                      For <strong>Lumo Candles</strong>, I migrated the theme to a premium, editorial aesthetic inspired by high-end wellness brands. 
                      The palette now features <strong>Cream (#FDF8F1)</strong> and <strong>Sand (#E8DEC9)</strong> backgrounds, creating a calm, natural foundation. 
                    </p>
                    <p>
                      I replaced the previous fonts with <strong>Fraunces</strong> for high-character, sophisticated headings and <strong>Outfit</strong> for clean, modern readability. 
                      The layout follows an alternating section pattern (Cream & Sand) to maintain visual interest while keeping the "warm" tactile feel.
                    </p>
                    <p>
                      The result is a storefront that feels cohesive, purposeful, and significantly more premium, aligning with the "Luxury Candles" brand identity seen in the reference material.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-brand-espresso/5">
                    <p className="text-[10px] uppercase tracking-widest text-brand-muted font-bold">Updated for Theme Migration</p>
                  </div>
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

