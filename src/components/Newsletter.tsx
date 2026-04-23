/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import EditableImage from './ui/EditableImage';

export default function Newsletter() {
  return (
    <section id="newsletter" className="bg-brand-caramel text-brand-cream relative overflow-hidden bg-grain">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Content Side */}
        <div className="py-40 px-8 sm:px-12 lg:px-24 flex flex-col justify-center text-center lg:text-left relative z-10">
            <div className="space-y-12">
                <div className="space-y-4">
                    <span className="text-[12px] uppercase tracking-[0.6em] text-brand-cream/60 font-bold">Join the Circle</span>
                    <div className="w-12 h-px bg-brand-cream/20 mx-auto lg:mx-0" />
                </div>
                <h2 className="font-serif text-[8rem] md:text-[11rem] tracking-tighter leading-[0.8] mb-8">
                    Get 10% off your <br />
                    first order.
                </h2>
                <p className="font-sans text-brand-cream/80 text-4xl max-w-2xl leading-relaxed">
                    Receive exclusive early access to restocks, limited editions, and curated self-care rituals.
                </p>
                
                <form id="newsletter-form" className="max-w-xl flex flex-col sm:flex-row gap-8 pt-10">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="flex-grow bg-transparent border-b-2 border-brand-cream/30 py-8 px-2 text-2xl focus:border-brand-cream outline-none transition-all placeholder:text-brand-cream/60"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-brand-cream text-brand-caramel px-16 py-8 text-[16px] font-bold uppercase tracking-[0.5em] hover:bg-brand-honey transition-colors shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)]"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>

        {/* Image Side */}
        <div className="hidden lg:block relative h-full min-h-[700px]">
            <EditableImage 
                id="newsletter_side"
                src="https://images.unsplash.com/photo-1608501821300-4f99e58baf77?auto=format&fit=crop&q=80&w=1200"
                alt="Cozy reading corner with candlelight"
                className="absolute inset-0 object-cover"
                aspectRatio="aspect-auto"
            />
            <div className="absolute inset-0 bg-brand-caramel/30 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
