/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Info, ShieldAlert, CreditCard } from 'lucide-react';
import { PRICING_PLANS } from '../data';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const handleCheckoutSimulation = (planName: string) => {
    alert(`Simulation checkout for Laundris Private Limited [${planName} Plan] initiated under ${billingCycle === 'annual' ? 'Annual (20% Off)' : 'Monthly'} terms.`);
  };

  return (
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-16" id="pricing-page-root">
      {/* Intro header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block">STUDIO ACQUISITION</span>
        <h1 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-white leading-tight">
          Flexible Pricing <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">For Every Scale</span>
        </h1>
        <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
          Unlock studio capabilities. Choose standard render bounds, fast compilation prioritization, and unlimited cloud export controls matching your creative roadmap.
        </p>

        {/* Toggle billing interval */}
        <div className="flex items-center justify-center gap-3 pt-6 select-none">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-205 uppercase tracking-wider ${
              billingCycle === 'monthly'
                ? 'bg-purple-900/40 text-purple-300 border border-purple-500/30'
                : 'text-neutral-500 hover:text-neutral-300'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-205 uppercase tracking-wider flex items-center gap-1 ${
              billingCycle === 'annual'
                ? 'bg-purple-900/40 text-purple-300 border border-purple-500/30'
                : 'text-neutral-500 hover:text-neutral-300'
            }`}
          >
            Annual <span className="text-[9px] bg-green-500/20 text-green-400 px-1 rounded uppercase tracking-widest font-bold">20% off</span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRICING_PLANS.map((plan) => {
          // Adjust price if annual
          let displayPrice = plan.price;
          if (billingCycle === 'annual' && plan.price !== 'Custom') {
            const raw = parseInt(plan.price.replace(/[^\d]/g, ''));
            const discounted = Math.round((raw * 12 * 0.8) / 12);
            displayPrice = `₹${discounted.toLocaleString()}`;
          }

          return (
            <div
              key={plan.name}
              className={`bg-neutral-950/80 border rounded-2xl p-6.5 backdrop-blur-md flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? 'border-purple-500 bg-gradient-to-b from-purple-950/20 via-neutral-950/80 to-neutral-950/80 shadow-2xl shadow-purple-500/10 scale-102 z-10'
                  : 'border-neutral-900 hover:border-neutral-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-purple-600 text-white font-mono text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded tracking-wider select-none">
                  RECOMMENDED STUDIO
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-mono text-neutral-400 uppercase tracking-widest">{plan.name} Plan</h3>
                  <div className="flex items-baseline gap-1 mt-4.5">
                    <span className="text-3xl md:text-5xl font-sans font-semibold text-white tracking-tight">
                      {displayPrice}
                    </span>
                    <span className="text-neutral-500 text-xs font-mono lowercase tracking-wide">
                      {plan.price === 'Custom' ? '' : plan.period}
                    </span>
                  </div>
                  <p className="text-[10px] text-neutral-500 font-mono mt-1 leading-snug uppercase tracking-wider">{plan.billing}</p>
                </div>

                {/* Features Checklist */}
                <div className="border-t border-neutral-900 pt-5 space-y-4">
                  <span className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest block">INCLUDED BENEFITS:</span>
                  <ul className="space-y-3 font-sans text-xs">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex gap-2.5 text-neutral-300">
                        <Check className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleCheckoutSimulation(plan.name)}
                className={`w-full mt-8 py-3.5 rounded-xl font-mono text-[11px] font-bold uppercase tracking-wider transition-all duration-350 select-none ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white shadow-xl shadow-purple-500/20'
                    : 'bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-300'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          );
        })}
      </div>

      {/* Simple pricing footnote */}
      <div className="bg-neutral-950/40 border border-neutral-900 rounded-xl p-4 flex gap-3 text-xs leading-relaxed text-neutral-400 max-w-3xl mx-auto select-none">
        <Info className="w-4.5 h-4.5 text-purple-400 shrink-0 mt-0.5" />
        <div>
          Any active subscriptions enjoy absolute **Intellectual Property Rights** over completed exports. Private rendering channels process assets encrypted. Feel free to review tax registration compliance questions with our Mumbai accounts office at help@laundris.in email.
        </div>
      </div>
    </div>
  );
}
