/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import EditableImage from './ui/EditableImage';

export default function BrandStory() {
  return (
    <section id="inspired-by-nature" className="py-60 bg-brand-caramel bg-grain overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-16">
            <div className="space-y-10">
                <div className="flex items-center gap-6">
                    <span className="text-[14px] uppercase tracking-[0.5em] text-brand-cream font-bold">Nature First</span>
                </div>
                <h2 className="font-serif text-8xl md:text-[11rem] text-brand-cream tracking-tighter leading-[0.85]">
                    Scents Inspired <br />
                    by Nature
                </h2>
                <p className="font-sans text-brand-cream/80 text-4xl leading-relaxed max-w-2xl">
                    Every Lumo candle is a journey through the wild. From the misty pine forests of the North to the sun-drenched lavender fields of the South.
                </p>
            </div>
            <button className="bg-brand-cream text-brand-caramel px-20 py-8 text-[16px] font-bold uppercase tracking-[0.5em] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] hover:scale-105 transition-all">
                Explore the Collection
            </button>
          </div>

          <div className="relative pl-12">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-[0_60px_120px_-30px_rgba(0,0,0,0.5)] border-[24px] border-brand-white rotate-2">
                <EditableImage 
                    id="v2_brand_story_main"
                    src="https://images.unsplash.com/photo-1602851612253-f62243063f5d?auto=format&fit=crop&q=80&w=1200"
                    alt="Sustainable ingredients and essential oils"
                    aspectRatio="aspect-auto"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

