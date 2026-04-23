/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Leaf, Flame, Truck } from 'lucide-react';

const props = [
  {
    icon: Leaf,
    title: 'Natural Soy Wax',
    description: '100% soy wax from domestic crops.'
  },
  {
    icon: Flame,
    title: '60hr Burn Time',
    description: 'Extended atmosphere with a clean, even burn.'
  },
  {
    icon: Truck,
    title: 'Plastic Free',
    description: 'Eco-conscious shipping and packaging.'
  }
];

export default function ValueProps() {
  return (
    <section id="value-props" className="py-48 bg-brand-paper border-y border-brand-espresso/5 bg-grain">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 text-center">
            {props.map((prop, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-10 group">
                    <div className="w-24 h-24 rounded-full border border-brand-espresso/10 flex items-center justify-center text-brand-espresso group-hover:bg-brand-sand transition-all duration-700">
                        <prop.icon size={40} strokeWidth={0.6} />
                    </div>
                    <div className="space-y-6">
                        <h4 className="font-serif text-5xl text-brand-espresso tracking-tight">{prop.title}</h4>
                        <p className="text-[16px] uppercase tracking-[0.3em] text-brand-muted font-bold max-w-[320px] mx-auto leading-relaxed">
                          {prop.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
