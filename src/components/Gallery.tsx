/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import EditableImage from './ui/EditableImage';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1570110375086-6353dbe6f0ff?auto=format&fit=crop&q=80&w=800',
    alt: 'Candle on a bedside table'
  },
  {
    url: 'https://images.unsplash.com/photo-1612198526331-7bc98126742b?auto=format&fit=crop&q=80&w=800',
    alt: 'Living room atmosphere'
  },
  {
    url: 'https://images.unsplash.com/photo-1621238914652-32b49c71618a?auto=format&fit=crop&q=80&w=800',
    alt: 'Candle light glow'
  },
  {
    url: 'https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?auto=format&fit=crop&q=80&w=800',
    alt: 'Minimal corner'
  },
  {
    url: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800',
    alt: 'Artisanal process'
  }
];

export default function Gallery() {
  return (
    <section id="lifestyle-gallery" className="py-60 bg-brand-cream border-t border-brand-espresso/5 bg-grain">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <span className="text-[16px] uppercase tracking-[0.6em] text-brand-espresso/60 font-bold mb-8 block">Follow Our Journey</span>
          <h2 className="font-serif text-[8rem] md:text-[10rem] text-brand-caramel tracking-tighter leading-none">At Home with Lumo</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="aspect-square relative overflow-hidden group shadow-lg"
            >
                <div className="w-full h-full group-hover:scale-110 transition-transform duration-700">
                    <EditableImage 
                        id={`gallery_${idx}`}
                        src={img.url}
                        alt={img.alt}
                        aspectRatio="aspect-square"
                    />
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
