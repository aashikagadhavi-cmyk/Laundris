/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Play, ShieldAlert, Cpu, Heart, Code, Clock, Film, ArrowRight } from 'lucide-react';
import { VIDEO_SHOWCASE } from '../data';
import { PageView } from '../types';

interface HomeHeroProps {
  onNavigate: (view: PageView) => void;
}

export default function HomeHero({ onNavigate }: HomeHeroProps) {
  const [activePrompt, setActivePrompt] = useState('Create a luxury car commercial with cinematic lighting and drone shots.');
  const [isTyping, setIsTyping] = useState(false);
  const [activeShowcaseIdx, setActiveShowcaseIdx] = useState(0);

  const handleTestPrompt = (text: string) => {
    setIsTyping(true);
    setActivePrompt(text);
    setTimeout(() => setIsTyping(false), 300);
  };

  return (
    <div className="relative font-sans text-white overflow-hidden" id="home-hero-root">
      {/* Background gradients and particles */}
      <div className="absolute inset-0 bg-[#050505] z-0" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-32 relative z-10 space-y-24">
        {/* Main Hero Header Group */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-wider uppercase rounded-full select-none"
            >
              <Cpu className="w-3.5 h-3.5 animate-spin" /> GENERATIVE AI CINEMA STUDIO
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-7xl font-sans font-medium tracking-tight leading-none text-white"
            >
              Transform Text <br />
              Into <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">Cinematic AI Videos</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-xl"
            >
              Laundris Private Limited empowers modern businesses, advertising agencies, and creators to compile studio-quality 4K cinematic video reels instantly using cutting-edge Generative AI technology.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button
                onClick={() => onNavigate('demo')}
                className="px-6 py-3.5 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white font-medium rounded-xl shadow-lg shadow-purple-500/25 flex items-center gap-2 group transition-all duration-300 transform select-none hover:scale-102 hover:shadow-purple-500/10 text-xs tracking-wider uppercase"
              >
                Start Creating <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('pricing')}
                className="px-6 py-3.5 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white font-medium rounded-xl flex items-center gap-2 transition-all text-xs tracking-wider uppercase"
              >
                View Studio Pricing
              </button>
            </motion.div>

            {/* Indian HQ Trust Marker */}
            <div className="flex items-center gap-3 pt-4 border-t border-neutral-900 max-w-md select-none">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-[11px] text-neutral-400 font-mono uppercase tracking-wider">
                Proudly Engineered in Goregaon West, Mumbai, India
              </span>
            </div>
          </div>

          {/* Prompt interactive Mockup Visual Card - Right Column */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-indigo-600/10 rounded-3xl blur-[40px] pointer-events-none" />
            <div className="bg-neutral-950/80 border border-neutral-850 rounded-2xl p-6 shadow-2xl relative backdrop-blur-md space-y-6">
              {/* Box title border */}
              <div className="flex justify-between items-center border-b border-neutral-900 pb-3">
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">Laundris Studio Console</span>
                <span className="text-[9px] font-mono text-purple-400 uppercase">Render Model v3.5-lite</span>
              </div>

              {/* Sample prompt inputs */}
              <div className="space-y-3">
                <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Active Text Prompt</div>
                <div className="bg-neutral-900 border border-neutral-800 p-3.5 rounded-xl text-xs font-mono select-none text-white relative min-h-20">
                  {isTyping ? (
                    <span className="animate-pulse">|</span>
                  ) : (
                    activePrompt
                  )}
                  <span className="absolute bottom-2.5 right-2 text-[9px] font-bold text-neutral-600 bg-neutral-950 px-1.5 py-0.5 rounded uppercase">PROMPT FILE</span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">Quick Cinematic Templates:</span>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => handleTestPrompt("Create a luxury car commercial with cinematic lighting and drone shots.")}
                    className="text-[10px] font-mono text-left block text-neutral-300 hover:text-purple-400 transition-colors"
                  >
                    • Luxury Mercedes commercial inside high contrast dark studio setting
                  </button>
                  <button
                    onClick={() => handleTestPrompt("Cinematic macro shot of golden perfume bottle dripping raw mountain organic honey, bokeh")}
                    className="text-[10px] font-mono text-left block text-neutral-300 hover:text-purple-400 transition-colors"
                  >
                    • Macro gourmet cosmetics dripping fluid assets
                  </button>
                </div>
              </div>

              {/* Render dynamic CTA */}
              <button
                onClick={() => onNavigate('demo')}
                className="w-full py-3 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 hover:bg-neutral-900 text-purple-300 hover:text-white border border-purple-500/30 hover:border-purple-500/50 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 select-none group"
              >
                <Sparkles className="w-3.5 h-3.5 group-hover:scale-110 transition-transform text-purple-400" /> Complete Sandbox Render
              </button>
            </div>
          </div>
        </div>

        {/* Cinematic Video Showcase Reel */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 border-b border-neutral-900 pb-6">
            <div className="space-y-2">
              <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block">STUDIO PORTFOLIO REEL</span>
              <h2 className="text-xl md:text-3xl font-sans text-white leading-tight">Featured Generations from Laundris AI Studio</h2>
            </div>
            <div className="flex gap-2">
              {VIDEO_SHOWCASE.map((v, idx) => (
                <button
                  key={v.id}
                  onClick={() => setActiveShowcaseIdx(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeShowcaseIdx === idx ? 'bg-purple-500 scale-125' : 'bg-neutral-800 hover:bg-neutral-700'
                  }`}
                  aria-label={`Go to showcase video ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Main Showcase Player */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-neutral-950/40 p-4 border border-neutral-900 rounded-2xl">
            <div className="lg:col-span-8 rounded-xl overflow-hidden aspect-video bg-black border border-neutral-850 relative group">
              <video
                src={VIDEO_SHOWCASE[activeShowcaseIdx].videoUrl}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm border border-neutral-800 px-3 py-1 rounded-full text-[10px] text-purple-400 uppercase font-mono tracking-widest select-none flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-ping" /> LAUNDRIS COMPILER PREVIEW
              </div>
            </div>

            {/* Sidebar detailing active showcase */}
            <div className="lg:col-span-4 flex flex-col justify-between p-4 space-y-6">
              <div className="space-y-4">
                <div className="inline-block bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded text-purple-300 font-mono text-[10px] uppercase tracking-wider">
                  Preset: {VIDEO_SHOWCASE[activeShowcaseIdx].style}
                </div>
                <h3 className="text-lg font-semibold text-white tracking-wide">{VIDEO_SHOWCASE[activeShowcaseIdx].title}</h3>
                <blockquote className="text-neutral-400 text-xs italic leading-relaxed bg-neutral-900/25 p-3 rounded-xl border border-neutral-850">
                  "{VIDEO_SHOWCASE[activeShowcaseIdx].prompt}"
                </blockquote>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-neutral-900 pt-4 text-xs font-mono uppercase tracking-wider text-neutral-400">
                <div className="space-y-1">
                  <span className="text-[9px] text-neutral-500 block">RENDER SPEC</span>
                  <span className="text-white text-[11px] font-semibold">{VIDEO_SHOWCASE[activeShowcaseIdx].resolution} HDR</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] text-neutral-500 block">EST. DURATION</span>
                  <span className="text-white text-[11px] font-semibold">{VIDEO_SHOWCASE[activeShowcaseIdx].duration} CLIP</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('demo')}
                className="w-full py-3 bg-neutral-900 hover:bg-neutral-850 text-xs tracking-wider uppercase font-semibold text-purple-400 rounded-xl border border-purple-500/20 hover:border-purple-500/40 select-none transition-all flex items-center justify-center gap-1.5"
              >
                Try Similar Render <Play className="w-3.5 h-3.5 text-purple-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Enterprise brand alignments and logos */}
        <div className="text-center space-y-6 border-t border-neutral-900 pt-16">
          <span className="text-neutral-500 text-[10px] font-mono uppercase tracking-widest block font-sans">TRUSTED BY WORLD-CLASS BRANDS & AGENCIES GLOBALLY</span>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-35 hover:opacity-50 transition-opacity">
            <span className="font-mono text-sm md:text-md uppercase font-bold tracking-widest text-neutral-300 flex items-center gap-1.5"><Film className="w-4.5 h-4.5 text-purple-400" /> METROPOLIS</span>
            <span className="font-mono text-sm md:text-md uppercase font-bold tracking-widest text-neutral-300 flex items-center gap-1.5"><Cpu className="w-4.5 h-4.5 text-purple-400" /> APEX CORE</span>
            <span className="font-mono text-sm md:text-md uppercase font-bold tracking-widest text-neutral-300 flex items-center gap-1.5"><Code className="w-4.5 h-4.5 text-purple-400" /> NEXUS MEDIA</span>
            <span className="font-mono text-sm md:text-md uppercase font-bold tracking-widest text-neutral-300 flex items-center gap-1.5"><Clock className="w-4.5 h-4.5 text-purple-400" /> VERTEX AD</span>
          </div>
        </div>

        {/* SECTION 1: THE LAUNDRIS PRODUCT SUITE */}
        <div className="border-t border-neutral-900 pt-20 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs text-purple-450 font-mono uppercase tracking-widest block font-sans">INTELLIGENT SUITE INDEX</span>
            <h2 className="text-2xl md:text-4xl font-sans text-white tracking-tight leading-tight">
              A Complete Ecosystem For <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-450 bg-clip-text text-transparent font-sans">Holographic & Cinematic Asset Synthetics</span>
            </h2>
            <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
              We developed three distinct product layers tailored for growing brands, automated ad networks, and professional directors. By decoupling creative script writing from physical production bottlenecks, we empower your storytelling team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* PRODUCT 1 */}
            <div className="bg-neutral-950/80 border border-neutral-900 rounded-2xl p-6.5 hover:border-purple-550/35 transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="space-y-4 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-purple-950/50 border border-purple-500/20 text-purple-400 flex items-center justify-center font-bold">01</div>
                <h3 className="text-sm font-bold font-sans text-white uppercase tracking-wide">Laundris AI Cinema Engine</h3>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  Our core consumer web portal designed for rapid visual asset drafting. Includes a structured prompt builder, built-in style masks (macro, surreal, cinematic, anamorphic, vintage polaroid), scene timeline controls, and multi-track sequence editing. Ideal for brand managers looking to produce completed 4K outputs in seconds.
                </p>
                <ul className="text-[10px] font-mono text-neutral-500 space-y-2 uppercase tracking-wide">
                  <li>• Multi-agent storyboarding</li>
                  <li>• Volumetric shadow processing</li>
                  <li>• Lossless 4K ProRes export</li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('demo')}
                className="w-full py-2.5 bg-neutral-900/40 border border-neutral-850 hover:border-purple-500/30 text-purple-400 hover:text-white rounded-lg text-xs font-mono font-bold uppercase transition-colors"
              >
                Access Engine
              </button>
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/2 blur-2xl pointer-events-none" />
            </div>

            {/* PRODUCT 2 */}
            <div className="bg-neutral-950/80 border border-neutral-900 rounded-2xl p-6.5 hover:border-purple-550/35 transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="space-y-4 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-indigo-950/50 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">02</div>
                <h3 className="text-sm font-bold font-sans text-white uppercase tracking-wide">Laundris Developer API & SDK</h3>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  A programmatically scalable REST API architecture built for massive high-volume video synthesis. Seamlessly integrate automated video rendering into active user journeys, generate personalized advertising reels on-the-fly, or trigger real-time AI-assisted text-to-speech dialog compilation using our global nodes.
                </p>
                <ul className="text-[10px] font-mono text-neutral-500 space-y-2 uppercase tracking-wide">
                  <li>• Complete JSON polling matrix</li>
                  <li>• Custom webhook integrations</li>
                  <li>• NodeJS and Python client SDKs</li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('api')}
                className="w-full py-2.5 bg-neutral-900/40 border border-neutral-850 hover:border-indigo-500/30 text-indigo-400 hover:text-white rounded-lg text-xs font-mono font-bold uppercase transition-colors"
              >
                View API Documentation
              </button>
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/2 blur-2xl pointer-events-none" />
            </div>

            {/* PRODUCT 3 */}
            <div className="bg-neutral-950/80 border border-neutral-900 rounded-2xl p-6.5 hover:border-purple-550/35 transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="space-y-4 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-blue-950/50 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold">03</div>
                <h3 className="text-sm font-bold font-sans text-white uppercase tracking-wide">Laundris Custom Checkpoints</h3>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  For enterprise institutions looking to lock down absolute visual identity compliance. Our team consumes your existing raw photography, historic video graphics, and brand styling parameters to train a completely private, isolated model weight mask. Your outputs will align automatically with established brand guidelines.
                </p>
                <ul className="text-[10px] font-mono text-neutral-500 space-y-2 uppercase tracking-wide">
                  <li>• Closed-environment security</li>
                  <li>• Precision logo retention</li>
                  <li>• Mumbai ML architect consulting</li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('about')}
                className="w-full py-2.5 bg-neutral-900/40 border border-neutral-850 hover:border-blue-500/30 text-blue-400 hover:text-white rounded-lg text-xs font-mono font-bold uppercase transition-colors"
              >
                Inquire Checkout Setup
              </button>
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/2 blur-2xl pointer-events-none" />
            </div>
          </div>
        </div>

        {/* SECTION 2: THE 4-STEP REVELATION PIPELINE */}
        <div className="border-t border-neutral-900 pt-20 space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block font-sans">HOW COLD SCRIPT BECOMES CINEMA</span>
            <h2 className="text-2xl md:text-4xl font-sans text-white tracking-tight">The Laundris 4-Step Synthesis Pipeline</h2>
            <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
              Synthesizing cinematic layouts takes more than just simple pixel diffusion. Here is how our Mumbai-engineered backend server translates a written prompt into a high contrast studio video file.
            </p>
          </div>

          <div className="relative">
            {/* Connecting visual lane for desktop */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-neutral-900 -translate-y-1/2 hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10 text-left">
              {/* STEP 1 */}
              <div className="bg-[#080808a0] border border-neutral-900 p-5 rounded-xl space-y-3.5 hover:border-neutral-800 transition-colors">
                <span className="text-[11px] font-mono text-purple-400 font-bold block">STEP 01 // ANALYSIS</span>
                <strong className="text-xs text-white uppercase block font-sans tracking-wide">Linguistic Semantics Mapping</strong>
                <p className="text-[10.5px] text-neutral-400 leading-relaxed">
                  Our custom language adapter extracts framing commands, ambient lighting specifications (Kelvin temperatures, volumetric shadows), lens metrics, and motion vectors from your standard written english script.
                </p>
              </div>

              {/* STEP 2 */}
              <div className="bg-[#080808a0] border border-neutral-900 p-5 rounded-xl space-y-3.5 hover:border-neutral-800 transition-colors">
                <span className="text-[11px] font-mono text-purple-400 font-bold block">STEP 02 // TOPOLOGY</span>
                <strong className="text-xs text-white uppercase block font-sans tracking-wide">Mesh Vector Raycasting</strong>
                <p className="text-[10.5px] text-neutral-450 leading-relaxed">
                  To prevent standard AI video anatomical errors and sudden camera jitter, our system renders a structural 3D polygon outline of the scenery before computing any colorful pixel layouts, keeping composition stable.
                </p>
              </div>

              {/* STEP 3 */}
              <div className="bg-[#080808a0] border border-neutral-900 p-5 rounded-xl space-y-3.5 hover:border-neutral-800 transition-colors">
                <span className="text-[11px] font-mono text-purple-400 font-bold block">STEP 03 // GENERATION</span>
                <strong className="text-xs text-white uppercase block font-sans tracking-wide">Neural Pixel Synthetics</strong>
                <p className="text-[10.5px] text-neutral-400 leading-relaxed">
                  Multi-cluster high throughput GPUs in our Mumbai core network paint the actual color parameters onto the stable geometric paths, simulating real-life light refraction indices, surface gloss, and particle fog.
                </p>
              </div>

              {/* STEP 4 */}
              <div className="bg-[#080808a0] border border-neutral-900 p-5 rounded-xl space-y-3.5 hover:border-neutral-800 transition-colors">
                <span className="text-[11px] font-mono text-purple-400 font-bold block">STEP 04 // CODING</span>
                <strong className="text-xs text-white uppercase block font-sans tracking-wide">ProRes Master Encoding</strong>
                <p className="text-[10.5px] text-neutral-400 leading-relaxed">
                  Frames are parsed through our frame interpolation layers to upscale framerates seamlessly to 60 FPS, then compressed into studio standard Apple ProRes 422 or H.264 formats ready for immediate commercial broadcasting.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: BENTO MATRIX COMPARISONS */}
        <div className="border-t border-neutral-900 pt-20 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block font-sans">MARKET STANDARDS VS LAUNDRIS</span>
            <h2 className="text-2xl md:text-3xl font-sans text-white tracking-tight">Built Different For Corporate Media Integration</h2>
            <p className="text-neutral-400 text-xs">Review the core technical vectors comparing generic AI models versus the Laundris Private Limited dedicated infrastructure system.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-5xl mx-auto">
            {/* CARD A - WIDE */}
            <div className="md:col-span-7 bg-neutral-950/80 border border-neutral-900 rounded-2xl p-6.5 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[9px] text-neutral-500 font-mono uppercase tracking-widest block">LAW & GOVERNANCE</span>
                <strong className="text-xs text-white uppercase block tracking-wider font-sans">Absolute Intellectual Property Rights Assurance</strong>
                <p className="text-[11px] text-neutral-450 leading-relaxed">
                  Unlike consumer-focused rendering playgrounds that lock final assets inside shared server clouds or assert copyright claims over prompt results, Laundris Private Limited legal charters grant you 100% ownership of synthesized MP4s. Deploy television commercials, social media feeds, or movies with zero attribution.
                </p>
              </div>
              <div className="flex gap-4.5 text-[10px] text-neutral-500 font-mono border-t border-neutral-900 pt-4.5 uppercase tracking-wide">
                <span>• No royalty commissions</span>
                <span>• Safe for commercial trademark registration</span>
              </div>
            </div>

            {/* CARD B - NARROW COMPACT */}
            <div className="md:col-span-5 bg-neutral-950/80 border border-neutral-900 rounded-2xl p-6.5 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[9px] text-neutral-500 font-mono uppercase tracking-widest block font-sans">GPU SPECIFICATIONS</span>
                <strong className="text-xs text-white uppercase block tracking-wider">Zero Queue Stagnation</strong>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  We route requests directly into our dedicated server cluster based in Mumbai, which utilizes localized GPU clusters. While competitors place creators on waitlists, our system processes jobs concurrently in under three minutes.
                </p>
              </div>
              <div className="text-[10.5px] font-mono text-purple-400 bg-purple-950/20 px-3 py-1 border border-purple-500/25 rounded-lg text-center uppercase tracking-widest font-semibold">
                Est. Renders: &lt; 180s Cap
              </div>
            </div>

            {/* CARD C - NARROW TECH */}
            <div className="md:col-span-5 bg-neutral-950/80 border border-neutral-900 rounded-2xl p-6.5 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[9px] text-neutral-500 font-mono uppercase tracking-widest block">COMPOSITING LOGIC</span>
                <strong className="text-xs text-white uppercase block tracking-wider font-sans">Sub-Pixel Geometric Matrix</strong>
                <p className="text-[11px] text-neutral-450 leading-relaxed">
                  Our rendering platform tracks geometric anchors in sequential frames. Other tools drift or flicker on tiny background shapes. Laundris preserves textures, lettering outlines, logo details, and character integrity.
                </p>
              </div>
              <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block border-t border-neutral-900 pt-4">• True anamorphic perspective simulation</span>
            </div>

            {/* CARD D - WIDE SUPPORT */}
            <div className="md:col-span-7 bg-neutral-950/80 border border-neutral-900 rounded-2xl p-6.5 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[9px] text-neutral-500 font-mono uppercase tracking-widest block font-sans">HUMAN CONNECTED CARE</span>
                <strong className="text-xs text-white uppercase block tracking-wider">Direct Physical Headquarters Contact</strong>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  Avoid shouting into automatic bot feedback channels. Laundris Private Limited welcomes creators and software integration managers to reach our active desks directly at help@laundris.in or schedule custom workshops inside Goregaon West, central Mumbai. We provide corporate invoice transparency.
                </p>
              </div>
              <div className="flex gap-4 text-[10px] text-neutral-500 font-mono border-t border-neutral-900 pt-3.5 uppercase tracking-wide">
                <span>• Corporate office desk access</span>
                <span>• Guaranteed 2-Hour SLA response times</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: DETAILED CASE SCENARIOS & USE CATEGORIES */}
        <div className="border-t border-neutral-900 pt-20 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block font-sans">PRACTICAL IMPLEMENTATIONS MATRIX</span>
            <h2 className="text-2xl md:text-3xl font-sans text-white tracking-tight">Crafting Digital Value Across Major Ecosystems</h2>
            <p className="text-neutral-400 text-xs">Discover how various branches of modern streaming, corporate design, and product promotion optimize budget layers with Laundris.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
            {/* CASE 1 */}
            <div className="space-y-3 bg-neutral-950/40 p-6 rounded-2xl border border-neutral-900 hover:border-neutral-850 transition-all duration-200">
              <strong className="text-xs text-purple-300 font-mono uppercase tracking-widest block">01 // High Performance Social Advertising</strong>
              <h4 className="text-sm font-semibold text-white tracking-wide">Fast Concept A/B Ad Monetization</h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Rather than coordinating expensive production crews, physical rental spaces, and set construction, your product design team can type descriptive prompt scripts into Laundris and test tens of unique cosmetic visual variations on-the-fly. Optimize your click-through yields quickly with negligible cost bounds.
              </p>
            </div>

            {/* CASE 2 */}
            <div className="space-y-3 bg-neutral-950/40 p-6 rounded-2xl border border-neutral-900 hover:border-neutral-850 transition-all duration-200">
              <strong className="text-xs text-purple-300 font-mono uppercase tracking-widest block">02 // Cinema Storyboards & Pitching</strong>
              <h4 className="text-sm font-semibold text-white tracking-wide">Visualizing Volumetric Scenes For Investors</h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Film directors leverage the Laundris AI Cinema Engine to build visual storyboards for pitch decks. Instead of presenting rough sketches or blocky concept designs to movie producers, capture accurate lighting temperatures, anamorphic depths of field, and camera flight routes in full motion.
              </p>
            </div>

            {/* CASE 3 */}
            <div className="space-y-3 bg-neutral-950/40 p-6 rounded-2xl border border-neutral-900 hover:border-neutral-850 transition-all duration-200">
              <strong className="text-xs text-purple-300 font-mono uppercase tracking-widest block">03 // Automated E-Commerce Video</strong>
              <h4 className="text-sm font-semibold text-white tracking-wide">Dynamic SDK Product Displays</h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Scale your online retail showcase. Connect your active inventory catalog directly to the Laundris developer REST API to automatically synthesize gorgeous, rotating 3D video showcases whenever a new product layout goes live. Include detailed text overlays matching item specifications programmatically.
              </p>
            </div>

            {/* CASE 4 */}
            <div className="space-y-3 bg-neutral-950/40 p-6 rounded-2xl border border-neutral-900 hover:border-neutral-850 transition-all duration-200">
              <strong className="text-xs text-purple-300 font-mono uppercase tracking-widest block">04 // Localization & Dubbing Controls</strong>
              <h4 className="text-sm font-semibold text-white tracking-wide">Multilingual Voice-to-Video Synthesis</h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Broaden commercial campaigns in multiple language regions simultaneously. Laundris allows you to attach custom voice-track coordinates directly behind synthesized frames. Combine dynamic text layouts, clean regional dialect pronunciations, and cinema-grade lighting for unified global deployment.
              </p>
            </div>
          </div>
        </div>

        {/* PROMPT ACTION BANNER CTA */}
        <div className="border-t border-neutral-900 pt-20">
          <div className="bg-gradient-to-r from-purple-950/30 via-neutral-955 to-blue-955/30 border border-purple-550/25 rounded-2xl p-8 md:p-12 relative overflow-hidden backdrop-blur-md">
            <div className="max-w-2xl text-left space-y-6 relative z-10">
              <span className="text-xs text-purple-300 font-mono uppercase tracking-widest block font-sans">IMMEDIATE RENDER DEERCREES</span>
              <h3 className="text-3xl md:text-5xl font-sans font-medium text-white tracking-tight leading-none">Ready To Synthesize <br className="hidden md:block" /> Your Next Generation Visual Idea?</h3>
              <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                Register your free creative creator seat today to unlock professional high-priority rendering, 4K clip compression, automated REST API credentials, and direct email assistance from our Mumbai team.
              </p>
              <div className="flex flex-wrap gap-4 select-none">
                <button
                  onClick={() => onNavigate('demo')}
                  className="px-6 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-650 hover:from-purple-500 hover:to-indigo-550 text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl shadow-lg transition-transform hover:scale-101"
                >
                  Initiate Live Sandbox
                </button>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-850 text-neutral-300 hover:text-white border border-neutral-800 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-colors"
                >
                  Acquire Studio Seat
                </button>
              </div>
            </div>
            
            {/* Decorative layout background details */}
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute top-1/2 right-12 w-20 h-20 border border-purple-500/10 rounded-xl rotate-45 pointer-events-none hidden lg:block" />
          </div>
        </div>
      </div>
    </div>
  );
}

