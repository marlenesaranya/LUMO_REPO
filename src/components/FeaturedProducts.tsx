/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import EditableImage from './ui/EditableImage';

const products = [
  {
    id: 1,
    name: 'Calm Lavender',
    price: '$34.00',
    image: 'https://images.unsplash.com/photo-1605651202774-7d573fd3f12d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    name: 'Citrus Blossom',
    price: '$32.00',
    image: 'https://images.unsplash.com/photo-1596433809252-260c2745dfdd?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'Vanilla & Cozy',
    price: '$34.00',
    image: 'https://images.unsplash.com/photo-1570110375086-6353dbe6f0ff?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    name: 'Herbal & Woodley',
    price: '$36.00',
    image: '/herbal-woody-candle.png',
  }
];

export default function FeaturedProducts() {
  return (
    <section id="best-sellers" className="relative py-60 bg-brand-caramel overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-left opacity-[0.03] pointer-events-none hidden lg:block">
        <span className="font-serif text-[20rem] text-brand-cream uppercase tracking-[0.2em] whitespace-nowrap">
          Signature Collection
        </span>
      </div>

      {/* Decorative botanical element */}
      <div className="absolute right-0 top-0 w-1/3 opacity-[0.05] pointer-events-none hidden lg:block -translate-y-1/4 translate-x-1/4">
        <svg viewBox="0 0 200 400" className="w-full h-full text-brand-cream" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M180,400 C140,320 170,220 120,120 C70,20 20,-20 0,-40" />
          <path d="M195,380 C155,300 185,200 135,100 C85,0 35,-40 15,-60" />
          <ellipse cx="140" cy="220" rx="4" ry="12" transform="rotate(30 140 220)" />
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-32">
          <span className="text-[16px] uppercase tracking-[0.6em] text-brand-cream/60 font-bold mb-8 block">Handmade with Intention</span>
          <h2 className="font-serif text-[8rem] md:text-[12rem] text-brand-cream tracking-tight leading-none">Best Sellers</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-48">
          {products.map((product, index) => (
            <div
              key={product.id}
              style={{ transform: `translateY(${index % 2 === 0 ? '0' : '80px'})` }}
              className="text-center group"
            >
              <div className="relative mb-12 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] rounded-sm">
                {/* Floating detail tag */}
                <div className="absolute top-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="bg-brand-cream/90 text-brand-caramel px-6 py-2 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">Soy Wax</span>
                </div>
                
                <EditableImage 
                    id={`v4_prod_${product.id}`}
                    src={product.image}
                    alt={product.name}
                    className="bg-brand-cream group-hover:scale-110 transition-transform duration-1000"
                    aspectRatio="aspect-square"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-6 mb-2">
                    <div className="w-12 h-[1px] bg-brand-cream/20" />
                    <span className="text-[12px] uppercase tracking-[0.3em] text-brand-cream/50 font-bold">Lumo Signature</span>
                    <div className="w-12 h-[1px] bg-brand-cream/20" />
                </div>
                <h3 className="font-serif text-5xl text-brand-white group-hover:opacity-70 transition-opacity leading-tight">{product.name}</h3>
                <p className="text-[22px] uppercase tracking-[0.3em] text-brand-cream/80 font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

