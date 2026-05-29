/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, MapPin, Send, HelpCircle, ArrowRight, UserCheck, Compass, Clock, Cpu, Film, Code, Database, CreditCard, Play } from 'lucide-react';

interface AboutAndContactProps {
  mode?: 'about' | 'contact';
  onNavigate?: (view: any) => void;
}

export default function AboutAndContact({ mode = 'about', onNavigate }: AboutAndContactProps) {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [targetProduct, setTargetProduct] = useState<'engine' | 'api' | 'checkpoint' | 'general'>('engine');
  const [renderVolume, setRenderVolume] = useState<'low' | 'medium' | 'high'>('medium');
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSendSuccess(true);
      setFormName('');
      setFormEmail('');
      setFormSubject('');
      setFormMessage('');
      setTimeout(() => setSendSuccess(false), 5000);
    }, 1500);
  };

  // Compute a dynamic budget guide based on selected product and volume to enrich product content engagement
  const computeEstimatedBudget = () => {
    let base = 0;
    if (targetProduct === 'engine') base = 49;
    else if (targetProduct === 'api') base = 199;
    else if (targetProduct === 'checkpoint') base = 1200;
    else base = 0;

    let multiplier = 1;
    if (renderVolume === 'low') multiplier = 0.8;
    if (renderVolume === 'high') multiplier = 2.5;

    return Math.floor(base * multiplier);
  };

  const timelineYears = [
    { year: '2024', title: 'Neural Studio Launch', desc: 'Aditya Yadav starts neural video research inside Goregaon, pioneering volumetric shadow translations.' },
    { year: '2025', title: 'Laundris Private Limited', desc: 'Corporate registration and setup of Mumbai HQ. Launch of Laundris AI Studio sandbox v1.0.' },
    { year: '2026', title: 'Generative Cinema Expansion', desc: 'Expanding cloud server arrays across major Indian digital hubs, serving millions of ad renders.' }
  ];

  return (
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-20 animate-fade-in" id="about-contact-root">
      
      {/* Tab Switcher on Page Header to support smooth context flipping */}
      <div className="flex justify-center mb-8">
        <div className="bg-neutral-950 p-1 rounded-xl border border-neutral-900 inline-flex">
          <button
            onClick={() => onNavigate?.('about')}
            className={`px-6 py-2.5 rounded-lg text-xs font-mono font-bold uppercase transition-all ${
              mode === 'about'
                ? 'bg-purple-900/40 text-purple-300 border border-purple-500/25 shadow-md shadow-purple-500/5'
                : 'text-neutral-400 hover:text-white border border-transparent'
            }`}
          >
            About Company
          </button>
          <button
            onClick={() => onNavigate?.('contact')}
            className={`px-6 py-2.5 rounded-lg text-xs font-mono font-bold uppercase transition-all ${
              mode === 'contact'
                ? 'bg-purple-900/40 text-purple-300 border border-purple-500/25 shadow-md shadow-purple-500/5'
                : 'text-neutral-400 hover:text-white border border-transparent'
            }`}
          >
            Contact Desk
          </button>
        </div>
      </div>

      {mode === 'about' ? (
        /* ================= ABOUT COMPANY VIEW ================= */
        <div className="space-y-24">
          
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block">CORPORATE STORY & MANIFESTO</span>
              <h1 className="text-4xl md:text-5xl font-sans font-medium tracking-tight text-white leading-tight">
                Architecting the Future of <br />
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent font-sans">Hollywood-Grade Generative Cinema</span>
              </h1>
              <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                Laundris Private Limited is a generative AI company transforming text into dynamic high quality video making professional video creation accessible every business creator. Headquartered in Goregaon West, Mumbai, India, we construct software platforms to completely turn standard written screenplays, promotional copy, and commercial storyboards into finished, broadcast-ready cinematic exports.
              </p>

              <blockquote className="text-neutral-300 italic border-l-2 border-purple-500 pl-4 py-1.5 text-xs">
                "We believe that screenwriting and final physical production should not be separated by multi-million dollar overheads. Our software turns word blocks directly into lights, cameras, objects, and fluid cinematic motion."
                <span className="block text-[10px] text-purple-500 font-mono uppercase tracking-widest mt-1.5 font-bold">— Corporate Mission Charter</span>
              </blockquote>

              {/* CEO Card */}
              <div className="bg-neutral-950 p-4 border border-neutral-900 rounded-xl max-w-md flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-neutral-900 border border-neutral-850 flex items-center justify-center shrink-0">
                  <UserCheck className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <strong className="text-xs text-white block uppercase tracking-wider font-sans">Aditya Yadav</strong>
                  <span className="text-[10px] text-purple-300 font-mono uppercase tracking-widest block mt-0.5">Founder & Chief Architect</span>
                  <p className="text-[10px] text-neutral-500 mt-1">Direct Desk: aditya@laundris.in • Goregaon Registered Office</p>
                </div>
              </div>
            </div>

            {/* Corporate Journey Timeline - Column 5 */}
            <div className="lg:col-span-5 relative bg-neutral-950/60 p-6 rounded-2xl border border-neutral-900">
              <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest block mb-4 font-bold">RESEARCH TIMELINE</span>
              <div className="absolute inset-y-12 left-10 w-[1px] bg-neutral-900" />
              <div className="space-y-6 relative pl-10">
                {timelineYears.map((item, idx) => (
                  <div key={idx} className="space-y-1 relative">
                    <div className="absolute -left-12 top-1.5 w-4 h-4 rounded-full bg-[#050505] border border-purple-500/50 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    </div>
                    <div className="text-sm font-mono font-bold text-purple-400">{item.year}</div>
                    <strong className="text-xs text-white block tracking-wide">{item.title}</strong>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DYNAMIC PRODUCT CONTENT HIGHLIGHT (Explicit alignment with user request) */}
          <div className="border-t border-neutral-900 pt-16 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block">HOW SCIENTIFIC R&D DRIVES OUR PRODUCTS</span>
              <h2 className="text-2xl md:text-3xl font-sans text-white tracking-tight">Our Core Unified Product Portfolio</h2>
              <p className="text-neutral-400 text-xs md:text-sm">
                Each product line we serve represents a distinct branch of our core neural rendering innovations, manufactured locally for corporate deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Product 1 details */}
              <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-900 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Film className="w-5 h-5 text-purple-400" />
                    <strong className="text-xs text-white uppercase tracking-wider block font-sans">Laundris Cinema Engine</strong>
                  </div>
                  <p className="text-[11.5px] text-neutral-400 leading-relaxed">
                    Our flagship interactive web layout designed for rapid creative storyboarding, custom timeline sequences, and high-contrast scene synthesis. Empowering ad managers and digital visualizers to transition scripts to finished ProRes assets in under three minutes.
                  </p>
                  <div className="text-[10px] font-mono text-neutral-500 bg-neutral-900/60 p-2.5 rounded-lg border border-neutral-900 space-y-1">
                    <div>• Renders: Ultra HD 4K ProRes</div>
                    <div>• Control Layer: Multi-agent prompt matrix</div>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate?.('demo')}
                  className="w-full py-2 bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-purple-300 rounded-lg text-[11px] font-mono uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  Launch Sandbox <Play className="w-3 h-3" />
                </button>
              </div>

              {/* Product 2 details */}
              <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-900 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-purple-400" />
                    <strong className="text-xs text-white uppercase tracking-wider block font-sans">Developer REST API & SDK</strong>
                  </div>
                  <p className="text-[11.5px] text-neutral-400 leading-relaxed">
                    Designed for enterprise level, high-volume automated digital video rendering networks. Standard JSON body execution lets applications trigger rendering jobs in the background, auto-generate localized marketing clips, and parallelize rendering concurrently.
                  </p>
                  <div className="text-[10px] font-mono text-neutral-500 bg-neutral-900/60 p-2.5 rounded-lg border border-neutral-900 space-y-1">
                    <div>• Delivery: Dynamic JSON Polling webhook</div>
                    <div>• Latency: Under 180s per 10s video block</div>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate?.('api')}
                  className="w-full py-2 bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-purple-300 rounded-lg text-[11px] font-mono uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  View API Manual <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Product 3 details */}
              <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-900 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-purple-400" />
                    <strong className="text-xs text-white uppercase tracking-wider block font-sans">Bespoke Checkpoint Training</strong>
                  </div>
                  <p className="text-[11.5px] text-neutral-400 leading-relaxed">
                    For studio clients needing 100% adherence to rigorous visual branding patterns. We consume your physical brand logs, packaging schematics, creative models, and past camera sweeps to configure custom private model weights matching your style requirements.
                  </p>
                  <div className="text-[10px] font-mono text-neutral-500 bg-neutral-900/60 p-2.5 rounded-lg border border-neutral-900 space-y-1">
                    <div>• Compliance: Absolute logo & shape integrity</div>
                    <div>• Training Environment: Closed and secure</div>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate?.('contact')}
                  className="w-full py-2 bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-purple-300 rounded-lg text-[11px] font-mono uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  Request Model Specs <Mail className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* R&D Scientific Pillars */}
          <div className="border-t border-neutral-900 pt-16 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block">R&D CORE FRAMEWORKS</span>
              <h2 className="text-2xl md:text-3xl font-sans text-white tracking-tight">Our Volumetric & Neural Video Science</h2>
              <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                We simulate real-world physical and camera behaviors to ensure synthesized outcomes are mathematically stable, anatomically correct, and visually beautiful.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#080808] p-6 rounded-2xl border border-neutral-900 hover:border-purple-905/30 transition-colors space-y-4">
                <span className="text-[10px] text-purple-400 font-mono tracking-widest uppercase block">PILLAR 01</span>
                <strong className="text-white text-xs block uppercase tracking-wide font-sans">Spatial Frame Interpolation Matrix (SFIM)</strong>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  Our proprietary SFIM framework solves spatial drift. By computing full 3D geometric mesh coordinates of actors and background items before generating color layers, we ensure perspective consistency across complex panning shots.
                </p>
              </div>

              <div className="bg-[#080808] p-6 rounded-2xl border border-neutral-900 hover:border-purple-905/30 transition-colors space-y-4">
                <span className="text-[10px] text-purple-400 font-mono tracking-widest uppercase block">PILLAR 02</span>
                <strong className="text-white text-xs block uppercase tracking-wide font-sans">Atmospheric Volumetric Raycasting</strong>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  We render accurate physics on a sub-pixel tier. Calculating light refraction passing through ambient smoke particles, atmospheric dust layers, camera lense thicknesses, and metallic reflection parameters to assure photorealistic textures.
                </p>
              </div>

              <div className="bg-[#080808] p-6 rounded-2xl border border-neutral-900 hover:border-purple-905/30 transition-colors space-y-4">
                <span className="text-[10px] text-purple-400 font-mono tracking-widest uppercase block">PILLAR 03</span>
                <strong className="text-white text-xs block uppercase tracking-wide font-sans">Hyper-Clustered GPU Ingress Routing</strong>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  Laundris schedules render requests across specialized GPU arrays. Instead of waiting lists or offline render pipelines, our multi-agent queuing delivers finished cinematic exports globally inside three minutes.
                </p>
              </div>
            </div>
          </div>

          {/* Leaders section */}
          <div className="border-t border-neutral-900 pt-16 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block">EXECUTIVE & TECHNICAL LEADERS</span>
              <h2 className="text-2xl md:text-3xl font-sans text-white tracking-tight">Our Engineering Council</h2>
              <p className="text-neutral-400 text-xs">A team of computer science scholars and media brand execution specialists driving the future of generative media from Mumbai headquarters.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-neutral-950 p-5 rounded-2xl border border-neutral-900 text-center space-y-3.5">
                <div className="w-16 h-16 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center mx-auto">
                  <span className="text-xl">👤</span>
                </div>
                <div>
                  <strong className="text-xs text-white block uppercase tracking-wider">Aditya Yadav</strong>
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">Founder & Chief Architect</span>
                </div>
                <p className="text-[11px] text-neutral-500 leading-relaxed max-w-xs mx-auto">
                  Pioneered volumetric shadow frameworks during research phase in Mumbai. Leads strategic vision and deep neural model refinement.
                </p>
              </div>

              <div className="bg-neutral-950 p-5 rounded-2xl border border-neutral-900 text-center space-y-3.5">
                <div className="w-16 h-16 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center mx-auto">
                  <span className="text-xl">⚙️</span>
                </div>
                <div>
                  <strong className="text-xs text-white block uppercase tracking-wider">Rajesh Varma</strong>
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">VP of Machine Learning</span>
                </div>
                <p className="text-[11px] text-neutral-500 leading-relaxed max-w-xs mx-auto">
                  Former senior research fellow specializing in large linguistic action-to-pixel models. Built the spatial frame interpolation pipelines.
                </p>
              </div>

              <div className="bg-neutral-950 p-5 rounded-2xl border border-neutral-900 text-center space-y-3.5">
                <div className="w-16 h-16 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center mx-auto">
                  <span className="text-xl">📈</span>
                </div>
                <div>
                  <strong className="text-xs text-white block uppercase tracking-wider">Sunita Deshmukh</strong>
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">Head of Creative Alliances</span>
                </div>
                <p className="text-[11px] text-neutral-500 leading-relaxed max-w-xs mx-auto">
                  Directs interface with global advertising agencies and corporate client portfolios, ensuring high fidelity brand guideline enforcement.
                </p>
              </div>
            </div>
          </div>

        </div>
      ) : (
        /* ================= CONTACT US VIEW ================= */
        <div className="space-y-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12">
            
            {/* Headquarters details and coordinates */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block">HQ COORDINATES</span>
              <h2 className="text-3xl font-sans text-white leading-tight">Get In Touch With Mumbai Desk</h2>
              <p className="text-neutral-400 text-xs">
                Our registered operational center and GPU cluster coordinators work locally in Goregaon West, Mumbai, ensuring constant rendering stability and 2-hour helpline responses.
              </p>

              <div className="space-y-4 text-xs">
                <div className="flex gap-3 bg-neutral-950 p-4 border border-neutral-900 rounded-xl hover:border-neutral-850 transition-all font-sans">
                  <MapPin className="w-5 h-5 text-purple-400 shrink-0" />
                  <div>
                    <strong className="text-white block pb-1">Physical Workplace Address:</strong>
                    <address className="text-neutral-400 not-italic leading-relaxed">
                      Laundris Private Limited<br />
                      342 Anant Vihar, Aarey Piramal Cross Road,<br />
                      Behind Mahindra Gardens,<br />
                      Goregaon West, Mumbai, Maharashtra 400104, India
                    </address>
                  </div>
                </div>

                <div className="flex gap-3 bg-neutral-950 p-4 border border-neutral-900 rounded-xl hover:border-neutral-850 transition-all font-sans">
                  <Mail className="w-5 h-5 text-purple-400 shrink-0" />
                  <div>
                    <strong className="text-white block pb-1">Fast Response Helpline:</strong>
                    <a href="mailto:help@laundris.in" className="text-purple-400 hover:text-purple-300 font-mono">
                      help@laundris.in
                    </a>
                  </div>
                </div>
              </div>

              {/* GPS Coordinates Visualization */}
              <div className="bg-neutral-950 border border-neutral-900 p-4.5 rounded-xl space-y-3.5 relative overflow-hidden">
                <div className="flex justify-between items-center border-b border-neutral-900 pb-2">
                  <div className="flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-widest text-purple-300">
                    <Compass className="w-3.5 h-3.5 text-purple-400 animate-spin" style={{ animationDuration: '6s' }} /> GPS COORDINATES ENGINE
                  </div>
                  <span className="text-[9px] text-neutral-500 font-mono">Mumbai HQ</span>
                </div>
                
                <div className="relative aspect-video bg-neutral-900 rounded-lg border border-neutral-850 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle, #3b0764 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                  <div className="absolute w-24 h-24 bg-purple-500/5 rounded-full blur-xl" />
                  <div className="z-10 text-center space-y-1 bg-black/85 p-3 rounded-lg border border-neutral-850">
                    <div className="text-[10px] font-mono font-bold text-white tracking-widest uppercase">GOREGAON WEST</div>
                    <div className="text-[9px] font-mono text-neutral-500 uppercase">19.1634° N, 72.8412° E</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comprehensive ticketing form with active product selection variables */}
            <div className="lg:col-span-7 bg-neutral-950/80 border border-neutral-900 rounded-2xl p-6.5 backdrop-blur-md space-y-6">
              <div>
                <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block mb-1">TRANSMIT SUPPORT AGENDAS</span>
                <strong className="text-white text-sm font-sans tracking-tight uppercase block leading-none">Unified Product Support Ticket</strong>
                <p className="text-[11px] text-neutral-400 mt-2">
                  Select your targeted Laundris core product module to configure instant estimates and alert the corresponding engineering desks in Mumbai.
                </p>
              </div>

              {/* Interactive Product Selector aligned with "Product Content" */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setTargetProduct('engine')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    targetProduct === 'engine'
                      ? 'bg-purple-950/45 border-purple-500/50 text-white'
                      : 'bg-neutral-900/40 border-neutral-850 text-neutral-400 hover:border-neutral-800'
                  }`}
                >
                  <Film className="w-3.5 h-3.5 mb-1.5 text-purple-400" />
                  <div className="text-[10px] font-bold uppercase tracking-wider font-sans">Cinema Engine</div>
                  <span className="text-[9px] text-neutral-500 leading-tight block mt-0.5">Creator portal render plans</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTargetProduct('api')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    targetProduct === 'api'
                      ? 'bg-purple-950/45 border-purple-500/50 text-white'
                      : 'bg-neutral-900/40 border-neutral-850 text-neutral-400 hover:border-neutral-800'
                  }`}
                >
                  <Code className="w-3.5 h-3.5 mb-1.5 text-purple-400" />
                  <div className="text-[10px] font-bold uppercase tracking-wider font-sans">REST API / SDK</div>
                  <span className="text-[9px] text-neutral-500 leading-tight block mt-0.5">Mass programmatic rendering</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTargetProduct('checkpoint')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    targetProduct === 'checkpoint'
                      ? 'bg-purple-950/45 border-purple-500/50 text-white'
                      : 'bg-neutral-900/40 border-neutral-850 text-neutral-400 hover:border-neutral-800'
                  }`}
                >
                  <Database className="w-3.5 h-3.5 mb-1.5 text-purple-400" />
                  <div className="text-[10px] font-bold uppercase tracking-wider font-sans">Checkpoint ML</div>
                  <span className="text-[9px] text-neutral-500 leading-tight block mt-0.5">Custom style model weights</span>
                </button>
              </div>

              {/* Dynamic volume scheduler widget */}
              <div className="bg-neutral-900/50 p-4 border border-neutral-850 rounded-xl space-y-3">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-neutral-400 uppercase tracking-wider">PROJECTED RENDER VOLUME</span>
                  <span className="text-purple-300 font-bold uppercase tracking-widest">Pricing Matrix Tool</span>
                </div>
                <div className="flex gap-2">
                  {(['low', 'medium', 'high'] as const).map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setRenderVolume(v)}
                      className={`flex-1 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-wider border transition-all ${
                        renderVolume === v
                          ? 'bg-purple-900/20 border-purple-500/40 text-purple-300 font-bold'
                          : 'bg-neutral-950 border-neutral-850 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
                <div className="border-t border-neutral-850 pt-2 flex justify-between items-center text-xs">
                  <span className="text-neutral-500 font-sans text-[10.5px]">Estimated dynamic plan start range:</span>
                  <strong className="text-white font-mono uppercase tracking-wider">${computeEstimatedBudget()} / month</strong>
                </div>
              </div>

              {/* Standard contact inputs */}
              <form onSubmit={handleSubmitTicket} className="space-y-4 font-sans text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="formName" className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest block">Your Name</label>
                    <input
                      id="formName"
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Corporate Representative"
                      className="w-full bg-neutral-900 border border-neutral-800 focus:border-purple-500/50 text-xs text-white rounded-xl px-3.5 py-2.5 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="formEmail" className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest block">Corporate Email</label>
                    <input
                      id="formEmail"
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="contact@brand.com"
                      className="w-full bg-neutral-900 border border-neutral-800 focus:border-purple-500/50 text-xs text-white rounded-xl px-3.5 py-2.5 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="formSubject" className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest block">Subject Agenda</label>
                  <input
                    id="formSubject"
                    type="text"
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    placeholder="E.g., enterprise API volume inquiry or pricing negotiation"
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-purple-500/50 text-xs text-white rounded-xl px-3.5 py-2.5 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="formMessage" className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest block">Detailed Query Message</label>
                  <textarea
                    id="formMessage"
                    rows={4}
                    required
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Disclose your studio rendering scope volume requirements, target advertising channels, style checklist, etc."
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-purple-500/50 text-xs text-white rounded-xl px-3.5 py-2.5 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-purple-500/25 flex items-center justify-center gap-1.5 select-none disabled:opacity-50 cursor-pointer"
                >
                  {isSending ? (
                    <>Transmitting Support Ticket...</>
                  ) : (
                    <>
                      Transmit Ticket <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                {/* Success alert */}
                {sendSuccess && (
                  <div className="bg-green-500/10 text-green-400 text-xs p-3.5 border border-green-500/20 rounded-xl font-sans mt-3">
                    <strong>Inquiry successfully transmitted!</strong> One of our Goregaon West engineering team coordinators will follow up at {formEmail || 'provided email'} within 2 physical business hours.
                  </div>
                )}
              </form>
            </div>
            
          </div>

          {/* FAQ Knowledge Base (Product focused FAQ) */}
          <div className="border-t border-neutral-900 pt-16 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block font-sans">UNIFIED CLIENT KNOWLEDGE BASE</span>
              <h2 className="text-2xl md:text-3xl font-sans text-white tracking-tight text-center">Frequently Answered Queries</h2>
              <p className="text-neutral-400 text-xs text-center">Get answers about our licensing terms, subscription mechanics, API integration channels, and local physical operations desk in Maharashtra.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left leading-relaxed">
              <div className="space-y-2 bg-neutral-950/40 p-5 rounded-2xl border border-neutral-900">
                <strong className="text-xs text-purple-300 uppercase tracking-wider font-sans block">Who legally owns the copyright of translated 4K videos?</strong>
                <p className="text-[11px] text-neutral-405 leading-relaxed">
                  Under our corporate licensing charter, you retain absolute, unconditional **Intellectual Property Rights** over all completed video exports generated using Laundris AI Studio. There are no licensing tail-ends or hidden royalty obligations. You can safely deploy completed clips inside national television commercials, YouTube ads, or cinematic movie streams commercially, without any additional attribution.
                </p>
              </div>

              <div className="space-y-2 bg-neutral-950/40 p-5 rounded-2xl border border-neutral-900">
                <strong className="text-xs text-purple-300 uppercase tracking-wider font-sans block">How do Laundris rendering credits compute dynamically?</strong>
                <p className="text-[11px] text-neutral-405 leading-relaxed">
                  Each subscription plan awards a dedicated monthly credit allowance pool. Single standard frame renderings consume negligible values. Complete high-intensity 4K cinematic generations with volumetric atmospheric scattering will consume a nominal 5 AI credits per render second. Unused standard allowances vanish at monthly cycle renewals. Enterprise clients enjoy custom rollover arrangements.
                </p>
              </div>

              <div className="space-y-2 bg-neutral-950/40 p-5 rounded-2xl border border-neutral-900">
                <strong className="text-xs text-purple-300 uppercase tracking-wider font-sans block">Can we request fine-tuned bespoke commercial styles?</strong>
                <p className="text-[11px] text-neutral-405 leading-relaxed">
                  Absolutely. Our enterprise tier partners are invited to collaborate directly with our Mumbai software engineering cell. We can consume your past commercial assets, raw model renders, and official style guides to synthesize a custom, private checkpoint style mask. This ensures that every generated output looks matching to the existing brand design system without deviation.
                </p>
              </div>

              <div className="space-y-2 bg-[#080808] p-5 rounded-2xl border border-neutral-900">
                <strong className="text-xs text-purple-300 uppercase tracking-wider font-sans block">How secure are our uploaded vector assets and scripts?</strong>
                <p className="text-[11px] text-[#999999] leading-relaxed">
                  We prioritize corporate data defense. All uploaded team assets, enterprise logos, design drafts, and storyboard logs are encoded instantly using AES-256 level encryption algorithms. Rendering computations execute within secure sandboxed GPU layers, meaning other clients never have access to your raw text ideas or corporate source assets. We comply with Indian Data Security guidelines.
                </p>
              </div>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
