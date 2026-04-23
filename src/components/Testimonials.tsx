/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    review: 'The scent throw of these candles is incredible. Calm Lavender transformed my bedroom into a spa.',
    rating: 5,
  },
  {
    id: 2,
    name: 'James K.',
    review: 'Love the minimalist jars. They fit perfectly with my home decor and the burn is very clean.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Elena R.',
    review: 'Great customer service and fast shipping. Vanilla & Cozy is my new favorite evening ritual.',
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section 
      id="testimonials" 
      className="relative py-60 overflow-hidden bg-grain"
      style={{ background: 'linear-gradient(to bottom, #FFFFFF 50%, #C8A878 50%)' }}
    >
      {/* Decorative botanical element */}
      <div className="absolute left-0 top-0 w-1/4 opacity-[0.02] pointer-events-none hidden lg:block -translate-x-1/4">
        <svg viewBox="0 0 200 400" className="w-full h-full text-brand-caramel" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M20,380 C60,300 30,200 80,100 C130,0 180,-40 200,-60" />
          <ellipse cx="60" cy="250" rx="4" ry="12" transform="rotate(-30 60 250)" />
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-32">
          <h2 className="font-serif text-[8rem] md:text-[10rem] text-brand-caramel tracking-tighter leading-none">Customer Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              className="bg-[#A67C52] p-16 md:p-24 rounded-sm shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border border-brand-espresso/5 backdrop-blur-sm"
            >
              <div className="flex gap-2 mb-12 text-brand-espresso/40">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-brand-cream mb-16 italic font-light text-4xl lg:text-5xl leading-snug font-serif">
                "{t.review}"
              </p>
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 rounded-full bg-brand-cream/20 flex items-center justify-center text-[16px] font-bold text-brand-cream shadow-md">
                  {t.name.split(' ')[0][0]}{t.name.split(' ')[1]?.[0] || ''}
                </div>
                <p className="text-[14px] uppercase tracking-[0.4em] text-brand-cream/80 font-bold">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
