/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CORE_FEATURES } from '../data';
import * as Icons from 'lucide-react';
import { Sparkles, Film, Cpu, Tv, Mic, FileText, Code, ShieldCheck } from 'lucide-react';

interface IconWrapperProps {
  name: string;
}

function IconWrapper({ name }: IconWrapperProps) {
  switch (name) {
    case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-400" />;
    case 'Tv': return <Tv className="w-5 h-5 text-purple-400" />;
    case 'Video': return <Icons.Video className="w-5 h-5 text-purple-400" />;
    case 'Mic': return <Mic className="w-5 h-5 text-purple-400" />;
    case 'FileText': return <FileText className="w-5 h-5 text-purple-400" />;
    case 'Code': return <Code className="w-5 h-5 text-purple-400" />;
    case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-purple-400" />;
    case 'Cpu': return <Cpu className="w-5 h-5 text-purple-400" />;
    default: return <Sparkles className="w-5 h-5 text-purple-400" />;
  }
}

export default function ProductAndFeatures() {
  return (
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-24" id="product-features-root">
      {/* Product Section Intro */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block">PRODUCT CORE POWERHOUSE</span>
          <h2 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-white leading-tight">
            Introducing Laundris <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">AI Studio</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            Laundris AI Studio is an advanced cloud-native Generative AI engine that converts pure text prompts into television-grade digital film in minutes. There are no cameras, no green screens, and no physical bottlenecks.
          </p>

          {/* Visual Bullet lists */}
          <div className="space-y-4 pt-2">
            <div className="flex gap-3">
              <span className="w-5 h-5 rounded-full bg-purple-950/50 border border-purple-500/30 flex items-center justify-center text-xs text-purple-400 shrink-0">✓</span>
              <div>
                <strong className="text-white text-xs block">AI Director Automation</strong>
                <p className="text-neutral-500 text-xs">Our underlying models write full narrative storyboards, cinematic screenplay dialogue, and scene timelines autonomously matching your query.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="w-5 h-5 rounded-full bg-purple-950/50 border border-purple-500/30 flex items-center justify-center text-xs text-purple-400 shrink-0">✓</span>
              <div>
                <strong className="text-white text-xs block">Volumetric Material Shading</strong>
                <p className="text-neutral-500 text-xs">Pristine reflection tracking renders correct glass transparency, liquid viscosity, and high-metallic shine in physical 3D simulations.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cinematic Preview Mockup Card */}
        <div className="lg:col-span-6 relative">
          <div className="absolute inset-0 bg-purple-500/5 rounded-2xl blur-[30px] pointer-events-none" />
          <div className="bg-neutral-950/80 border border-neutral-850 p-5 rounded-2xl shadow-xl relative backdrop-blur-md overflow-hidden">
            {/* Display overlay mapping detailed camera curves */}
            <div className="relative group rounded-xl overflow-hidden aspect-video bg-neutral-900 border border-neutral-800">
              <img
                src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1200"
                alt="Lens calibration mockup"
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <span className="text-[10px] bg-neutral-950/80 border border-neutral-800 px-2.5 py-1 rounded text-purple-300 font-mono">CAM_TRACKER: ACTIVE</span>
                <span className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider">Coordinates Calibrated</span>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-[11px] text-neutral-400 font-mono">
                <span>ACTIVE PASSES: 12 / 12</span>
                <span>RENDER STATE: COMPILED</span>
              </div>
              <div className="h-1 bg-neutral-900 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-purple-500 to-indigo-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core features columns */}
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block">INFINITE SCOPE CAPABILITIES</span>
          <h3 className="text-2xl md:text-4xl font-sans text-white leading-tight">Engineered for Limitless Production</h3>
          <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
            Laundris Private Limited develops highly optimized neural video pipelines supporting complex lighting layers, 3D physics vectors, and expressiveness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_FEATURES.map((feat) => (
            <div
              key={feat.id}
              className="bg-neutral-950/50 border border-neutral-900 hover:border-purple-900/30 rounded-xl p-5 hover:bg-neutral-950 transition-all duration-300 relative group"
            >
              <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4 text-purple-400 shadow-inner group-hover:scale-105 transition-transform group-hover:border-purple-900/20">
                <IconWrapper name={feat.icon} />
              </div>
              <h4 className="text-xs md:text-sm font-semibold text-white tracking-wide mb-1.5 group-hover:text-purple-300 transition-colors">
                {feat.title}
              </h4>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                {feat.desc}
              </p>
              <div className="absolute inset-0 border border-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
