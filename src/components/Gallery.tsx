/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import EditableImage from './ui/EditableImage';

const galleryImages = [
  {
    url: '/gallery-interior-candles.jpg',
    alt: 'Interior candles in home decor'
  },
  {
    url: '/gallery-farmhouse.jpg',
    alt: 'Farmhouse cozy decor with candles'
  },
  {
    url: 'https://images.unsplash.com/photo-1596433809252-260c2745dfdd?auto=format&fit=crop&q=80&w=800',
    alt: 'Candle light glow'
  },
  {
    url: '/gallery-vanilla-candle.jpg',
    alt: 'Vanilla bean candle'
  }
];

export default function Gallery() {
  return (
    <section id="lifestyle-gallery" className="py-60 bg-brand-cream border-t border-brand-espresso/5 bg-grain">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <span className="text-[16px] uppercase tracking-[0.6em] text-brand-espresso/60 font-bold mb-8 block">Follow Our Journey</span>
          <h2 className="font-serif text-[8rem] md:text-[10rem] text-brand-caramel tracking-tighter leading-tight">At Home with Lumo</h2>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="aspect-square relative overflow-hidden group shadow-lg rounded-sm"
              >
                  <div className="w-full h-full group-hover:scale-110 transition-transform duration-700 flex items-center justify-center">
                      <EditableImage 
                          id={`v2_gallery_${idx}`}
                          src={img.url}
                          alt={img.alt}
                          aspectRatio="aspect-square"
                      />
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
