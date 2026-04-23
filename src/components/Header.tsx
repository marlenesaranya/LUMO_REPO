/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShoppingBag, Menu, Search, User } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <header id="site-header" className="relative z-50 w-full bg-brand-cream border-b border-brand-espresso/5 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[1.5fr_auto_1fr] items-center h-28 md:h-36 gap-12 xl:gap-24">
          {/* Navigation - Left (Desktop only) */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-12">
            {['HOME', 'SHOP', 'SCENTS', 'CONTACT'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[16px] xl:text-[20px] uppercase tracking-[0.3em] text-brand-espresso hover:opacity-50 transition-opacity font-bold whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Menu Button - Mobile only */}
          <div className="lg:hidden flex items-center">
            <button className="text-brand-espresso">
              <Menu size={36} />
            </button>
          </div>

          {/* Logo - Center */}
          <div className="flex items-center justify-center px-12">
            <h1 id="brand-logo" className="font-serif text-[3.5rem] md:text-[4.5rem] text-brand-caramel cursor-pointer tracking-tight">
              Lumo
            </h1>
          </div>

          {/* Icons - Right */}
          <div className="flex items-center justify-end space-x-10">
            <button className="text-brand-espresso hover:opacity-60 transition-opacity">
              <Search size={32} strokeWidth={1.2} />
            </button>
            <button className="hidden sm:block text-brand-espresso hover:opacity-60 transition-opacity">
              <User size={32} strokeWidth={1.2} />
            </button>
            <button id="cart-btn" className="text-brand-espresso hover:opacity-60 transition-opacity relative">
              <ShoppingBag size={32} strokeWidth={1.2} />
              <span className="absolute -top-2 -right-2 bg-brand-caramel text-brand-white text-[12px] w-6 h-6 rounded-full flex items-center justify-center font-bold shadow-lg">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
