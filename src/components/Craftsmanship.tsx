/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Leaf, Flame, Sparkles, Box, Heart } from 'lucide-react';
import EditableImage from './ui/EditableImage';

export default function Craftsmanship() {
  return (
    <section id="craftsmanship-section" className="relative py-32 bg-brand-cream overflow-hidden border-t border-brand-espresso/5 bg-grain">
      {/* Enhanced Botanical Background Accent */}
      <div className="absolute left-0 bottom-0 top-0 w-1/3 opacity-[0.05] pointer-events-none overflow-hidden hidden lg:block">
        <svg 
          viewBox="0 0 200 800" 
          className="h-full w-full object-cover" 
          fill="none" 
          stroke="#4A3728" 
          strokeWidth="0.8"
          preserveAspectRatio="xMinYMax slice"
        >
          <path d="M20,780 C60,700 30,550 80,450 C130,350 90,200 140,100 C190,0 160,-50 180,-100" />
          <path d="M10,750 C50,670 20,520 70,420 C120,320 80,170 130,70 C180,-30 150,-80 170,-130" />
          <path d="M40,800 C80,720 50,570 100,470 C150,370 110,220 160,120 C210,20 180,-30 200,-80" />
          <ellipse cx="60" cy="450" rx="6" ry="18" transform="rotate(-40 60 450)" />
          <ellipse cx="130" cy="100" rx="8" ry="22" transform="rotate(-25 130 100)" />
          <ellipse cx="80" cy="600" rx="5" ry="15" transform="rotate(-50 80 600)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-24"
          >
            <div className="space-y-12">
              <div className="flex items-center gap-6">
                  <span className="text-[14px] uppercase tracking-[0.6em] text-brand-espresso font-bold">Crafted with Care</span>
              </div>

              <h2 className="font-serif text-7xl md:text-[10rem] text-brand-caramel leading-[0.8] tracking-tighter">
                Soft <br />
                Illumination
              </h2>

              <div className="space-y-10">
                <h3 className="font-serif text-4xl text-brand-caramel/70 italic leading-tight">
                  Calm in Every Flame
                </h3>
                <p className="font-sans text-brand-espresso/70 text-4xl max-w-2xl leading-relaxed">
                  A delicate balance of warmth and fragrance, designed to transform your space into a sanctuary of peace.
                </p>
              </div>
            </div>

            {/* Icons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 pt-16 pb-16 border-y border-brand-espresso/10">
              <div className="space-y-6 text-center group">
                <div className="w-16 h-16 rounded-full border border-brand-espresso/10 flex items-center justify-center mx-auto group-hover:bg-brand-honey transition-all duration-700">
                    <Leaf className="w-6 h-6 text-brand-espresso" strokeWidth={0.8} />
                </div>
                <p className="text-[12px] uppercase tracking-[0.2em] font-bold text-brand-espresso leading-relaxed">Natural <br />Ingredients</p>
              </div>
              <div className="space-y-6 text-center group">
                <div className="w-16 h-16 rounded-full border border-brand-espresso/10 flex items-center justify-center mx-auto group-hover:bg-brand-honey transition-all duration-700">
                    <Flame className="w-6 h-6 text-brand-espresso" strokeWidth={0.8} />
                </div>
                <p className="text-[12px] uppercase tracking-[0.2em] font-bold text-brand-espresso leading-relaxed">Handcrafted <br />with Care</p>
              </div>
              <div className="space-y-6 text-center group">
                <div className="w-16 h-16 rounded-full border border-brand-espresso/10 flex items-center justify-center mx-auto group-hover:bg-brand-honey transition-all duration-700">
                    <Sparkles className="w-6 h-6 text-brand-espresso" strokeWidth={0.8} />
                </div>
                <p className="text-[12px] uppercase tracking-[0.2em] font-bold text-brand-espresso leading-relaxed">Clean & <br />Non-Toxic</p>
              </div>
              <div className="space-y-6 text-center group">
                <div className="w-16 h-16 rounded-full border border-brand-espresso/10 flex items-center justify-center mx-auto group-hover:bg-brand-honey transition-all duration-700">
                    <Box className="w-6 h-6 text-brand-espresso" strokeWidth={0.8} />
                </div>
                <p className="text-[12px] uppercase tracking-[0.2em] font-bold text-brand-espresso leading-relaxed">Sustainable <br />Packaging</p>
              </div>
            </div>
          </motion.div>

          {/* Scattered Image Layout (Simplified) */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative min-h-[800px] flex items-center justify-end pl-20"
          >
            <div className="relative w-full h-full">
                {/* Image 1: Main Large */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
                    className="absolute top-0 right-0 w-[80%] aspect-[3/4] overflow-hidden rounded-sm shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[15px] border-brand-white z-20"
                >
                    <EditableImage 
                        id="craftsmanship_main_1"
                        src="https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&q=80&w=1000"
                        alt="Luxury candle lighting"
                        aspectRatio="aspect-auto"
                    />
                </motion.div>

                {/* Image 2: Secondary Offset */}
                <motion.div 
                    initial={{ opacity: 0, x: 30, y: 30, rotate: 3 }}
                    whileInView={{ opacity: 1, x: 0, y: 0, rotate: 3 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-0 left-0 w-[70%] aspect-[4/5] overflow-hidden rounded-sm shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] border-[12px] border-brand-white z-30"
                >
                    <EditableImage 
                        id="craftsmanship_main_2"
                        src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800"
                        alt="Aesthetic candle setup"
                        aspectRatio="aspect-auto"
                    />
                </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
