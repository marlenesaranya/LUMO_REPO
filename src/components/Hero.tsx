/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative flex flex-col lg:flex-row items-stretch bg-brand-cream overflow-hidden bg-grain"
      style={{ minHeight: '92vh' }}
    >
      {/* Enhanced botanical watermark bottom-left */}
      <div className="absolute left-0 bottom-0 w-[25%] opacity-[0.04] pointer-events-none hidden lg:block z-0">
        <svg viewBox="0 0 200 400" className="w-full h-full text-brand-espresso" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M20,380 C60,300 30,200 80,100 C130,0 180,-40 200,-60" />
          <path d="M5,360 C55,280 15,180 70,80 C125,-20 165,-60 190,-80" />
          <path d="M40,390 C80,310 50,210 100,110 C150,10 200,-30 220,-50" />
          <circle cx="80" cy="100" r="2" fill="currentColor" />
          <circle cx="150" cy="40" r="1.5" fill="currentColor" />
          <ellipse cx="60" cy="250" rx="4" ry="12" transform="rotate(-30 60 250)" />
          <ellipse cx="40" cy="320" rx="3" ry="10" transform="rotate(-45 40 320)" />
        </svg>
      </div>

      {/* ── Left: Text content ──────────────────────────────── */}
      <div
        className="relative z-10 flex flex-col justify-center
                   w-full lg:w-[50%]
                   px-8 sm:px-14 lg:pl-32 lg:pr-12
                   py-20 lg:py-0
                   text-center lg:text-left
                   space-y-12"
      >
        {/* Diamond + tag line */}
        <div className="space-y-6">
          <div className="flex justify-center lg:justify-start">
            <svg width="24" height="36" viewBox="0 0 14 24" className="text-brand-caramel opacity-60" fill="currentColor">
              <polygon points="7,0 14,12 7,24 0,12" />
            </svg>
          </div>
          <p className="text-[12px] sm:text-[14px] uppercase tracking-[0.6em] text-brand-espresso font-bold">
            Natural&nbsp;·&nbsp;Artisanal&nbsp;·&nbsp;Timeless
          </p>
        </div>

        {/* Main title */}
        <h2 className="font-serif text-[6rem] sm:text-[8rem] lg:text-[10rem] text-brand-caramel leading-[0.9] tracking-tighter">
          Refined<br />Ambience
        </h2>

        {/* Divider */}
        <div className="flex items-center gap-6 max-w-[500px] mx-auto lg:mx-0">
          <div className="h-px bg-brand-caramel/20 flex-grow" />
          <Sparkles className="w-6 h-6 text-brand-caramel opacity-30 shrink-0" />
          <div className="h-px bg-brand-caramel/20 flex-grow" />
        </div>

        {/* Subheading + body */}
        <div className="space-y-6 relative z-10">
          <h3 className="font-serif text-3xl md:text-5xl text-brand-caramel tracking-tight italic">
            Crafted for Quiet Moments
          </h3>
          <p className="text-brand-espresso/80 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
            An experience of elegant scents and soft illumination, 
            <br className="hidden sm:block" /> bringing mindful living into your everyday space.
          </p>
        </div>

        {/* CTA button */}
        <div className="pt-4">
          <button
            id="cta-hero-shop"
            className="bg-brand-caramel text-brand-white hover:scale-105 transition-all
                       px-20 py-7 text-[14px] font-bold uppercase tracking-[0.45em] shadow-2xl"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* ── Right: Full-bleed candle image ─────────────────── */}
      <div
        className="relative w-full lg:w-[50%] lg:absolute lg:right-0 lg:top-0 lg:h-full lg:z-0"
        style={{ minHeight: '320px' }}
      >
        <img
          src="/hero-candles.png"
          alt="Luxury candles with pampas grass"
          className="w-full h-full object-cover"
          style={{ display: 'block' }}
          onError={(e) => {
            // fallback to Unsplash if local file fails
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1603006905393-c39693998963?auto=format&fit=crop&q=80&w=1400';
          }}
        />
        {/* Soft bottom fade on mobile */}
        <div className="lg:hidden absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-cream to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
