/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className="bg-brand-caramel pt-40 pb-16 border-t border-brand-cream/5">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="space-y-10">
            <h3 className="font-serif text-[6rem] tracking-tighter text-brand-cream">Lumo</h3>
            <p className="text-xl text-brand-cream/60 leading-relaxed font-light max-w-sm">
              Handmade scented candles for conscious spaces. Founded in London, crafted with intention.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="w-12 h-12 rounded-full border border-brand-cream/10 flex items-center justify-center text-brand-cream hover:bg-brand-cream hover:text-brand-caramel transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-brand-cream/10 flex items-center justify-center text-brand-cream hover:bg-brand-cream hover:text-brand-caramel transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-brand-cream/10 flex items-center justify-center text-brand-cream hover:bg-brand-cream hover:text-brand-caramel transition-all duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[14px] uppercase tracking-[0.3em] text-brand-cream font-bold mb-12">Shop</h4>
            <ul className="space-y-8">
              {['All Candles', 'New Arrivals', 'Signature Scent', 'Gift Sets', 'Accessories'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[14px] uppercase tracking-[0.25em] text-brand-cream/60 hover:text-brand-cream transition-colors font-bold">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] uppercase tracking-[0.3em] text-brand-cream font-bold mb-12">About</h4>
            <ul className="space-y-8">
               {['Our Story', 'Sustainability', 'Reviews', 'Wholesale', 'Journal'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[14px] uppercase tracking-[0.25em] text-brand-cream/60 hover:text-brand-cream transition-colors font-bold">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] uppercase tracking-[0.3em] text-brand-cream font-bold mb-12">Support</h4>
            <ul className="space-y-8">
               {['Shipping & Returns', 'FAQ', 'Contact Us', 'Terms of Service', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[14px] uppercase tracking-[0.25em] text-brand-cream/60 hover:text-brand-cream transition-colors font-bold">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-brand-cream/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-[12px] uppercase tracking-[0.3em] text-brand-cream/40 font-bold">
            &copy; {currentYear} Lumo Candles London. All rights reserved.
          </p>
          <div className="flex space-x-4">
             {['Visa', 'Mastercard', 'Amex', 'Apple Pay'].map((pay) => (
                <span key={pay} className="px-4 py-2 border border-brand-cream/5 text-[11px] uppercase tracking-tighter text-brand-cream/40 font-bold rounded-sm">
                  {pay}
                </span>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
