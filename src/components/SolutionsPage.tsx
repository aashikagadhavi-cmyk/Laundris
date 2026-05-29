/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Building2, Megaphone, Video, GraduationCap, ShoppingBag, Rocket, Share2, Sparkles, 
  ArrowRight, ShieldCheck, Zap, BarChart3, RotateCw, Play, CheckCircle
} from 'lucide-react';
import { PageView } from '../types';

interface SolutionsPageProps {
  onNavigate: (view: PageView) => void;
}

export default function SolutionsPage({ onNavigate }: SolutionsPageProps) {
  const [activeTab, setActiveTab] = useState<'marketing' | 'creators' | 'enterprise' | 'agencies' | 'education' | 'ecommerce' | 'startups' | 'social'>('marketing');
  
  // Custom calculator state
  const [videoCount, setVideoCount] = useState(10);
  const [traditionalCost, setTraditionalCost] = useState(1500); // USD per traditional video

  const solutions = {
    marketing: {
      title: 'AI Solutions for Marketing Teams',
      icon: Megaphone,
      desc: 'Supercharge your conversion funnels. Laundris allows brand marketers to synthesize high-impact television spots, digital video ads, and personalized promotional storyboards in under three minutes.',
      benefits: [
        '94% Reduction in production costs compared to physical camera crews.',
        'A/B test 10x more visual hooks to continuously optimize CTR performance.',
        'Enrich generic campaign scripts into cinematic 4K video exports.'
      ],
      useCase: 'Generate 15-second social media product teasers with multiple localized voices.',
      roi: '+310% CTR lift through extensive visual hook iteration.',
      workflow: 'Draft campaign copy → Set camera angle → Instantly export customized high-converting MP4s.'
    },
    creators: {
      title: 'AI Solutions for Content Creators',
      icon: Video,
      desc: 'Bypass post-production render queues. Empowering creators to turn screenplays directly into ready-to-publish cinematic outputs without expensive workstation upgrades.',
      benefits: [
        'Render studio-quality frames immediately inside browser containers.',
        'Seamless integration with multi-voice regional dialects matching character expressions.',
        'Expand publishing volume on YouTube, TikTok, and Instagram with zero overhead.'
      ],
      useCase: 'Turn a conceptual movie script into a visual storyboard mockup to pitch to producers.',
      roi: 'Save 40+ hours per week of manual video editing and frame composition.',
      workflow: 'Write scene scripts → Elect voice accents → Run parallel volumetric render checks.'
    },
    enterprise: {
      title: 'AI Solutions for Enterprises',
      icon: Building2,
      desc: 'Enterprise-grade generative audio-visual systems. Secure, localized, and compliant workflows hosted on fast cloud servers with zero copyright liabilities.',
      benefits: [
        'Isolated database pipelines to protect brand IP and raw media assets.',
        'Direct SSO authentication and custom organization permissions.',
        '100% ownership clearance over output videos, avoiding multi-user copyright disputes.'
      ],
      useCase: 'Generate massive volumes of personalized localized corporate training videos.',
      roi: '8.4x faster turnarounds for global onboarding video distribution.',
      workflow: 'Integrate Laundris secure API → Push dynamic template JSON → Autopilot asset generation.'
    },
    agencies: {
      title: 'AI Solutions for Creative Agencies',
      icon: ShieldCheck,
      desc: 'Accelerate your client pitch pipelines. Provide infinite visual iterations and high-fidelity storyboarding models before allocating manual physical camera budgets.',
      benefits: [
        'Draft highly persuasive spec ads in real time during live client meetings.',
        'Support multi-language translation and lipsync dub mapping flawlessly.',
        'Scale creative output across global client rosters instantly without bottlenecking.'
      ],
      useCase: 'Build real-time cinematic visual sequences for client pitch decks.',
      roi: 'Win 35% more client RFPs through immersive visual proof-of-concepts.',
      workflow: 'Translate client brief to prompt templates → Run multicamera test sweeps → Build visual decks.'
    },
    education: {
      title: 'AI Solutions for Education & Training',
      icon: GraduationCap,
      desc: 'Transform complex dense written text courses into highly engaging animated explainers, training tutorials, and immersive video guides.',
      benefits: [
        'Increase training absorption indexes through vivid visual support structures.',
        'Synthesize custom virtual voiceovers speaking regional dialects or technical terms.',
        'Update course content instantly without expensive reshooting budgets.'
      ],
      useCase: 'Convert textbook math and physics problems into 3D conceptual animation reels.',
      roi: '+82% higher student completion rates compared to static PDF files.',
      workflow: 'Upload educational curriculum text → Extract key concepts → Auto-generate explainer videos.'
    },
    ecommerce: {
      title: 'AI Solutions for Ecommerce Brands',
      icon: ShoppingBag,
      desc: 'Generate hundreds of dynamic, high-fidelity lifestyle product showcases automatically from straight inventory data feeds.',
      benefits: [
        'Synthesize dynamic close-up texture pans and volumetric product renders.',
        'Swap video backgrounds, environments, and lighting styles without physical setups.',
        'Instantly scale variations to target niche social buyer demographics.'
      ],
      useCase: 'Create custom lifestyle dynamic videos for over 200 catalog listings on auto-pilot.',
      roi: '90% absolute savings in product photography and model hire rates.',
      workflow: 'Connect product catalogs → Synthesize custom studio setups → Auto-render social formats.'
    },
    startups: {
      title: 'AI Solutions for Growing Startups',
      icon: Rocket,
      desc: 'Tell your product story with professional, high-end production aesthetics. Secure early customers and VC funding with a billion-dollar brand presentation.',
      benefits: [
        'Professional product explainers made on a fraction of standard agency pricing.',
        'Refined prompt-optimizer matrices that convert functional features to lifestyle imagery.',
        'Fast parallel rendering outputs for early social ads and pitch decks.'
      ],
      useCase: 'Create a stellar, cinematic platform teaser for Product Hunt launches.',
      roi: '10x leverage on early startup marketing capital.',
      workflow: 'Define founding vision → Select cinematic visual presets → Generate high-quality promo reels.'
    },
    social: {
      title: 'AI Solutions for Social Media Managers',
      icon: Share2,
      desc: 'Command the attention of rapid-scrolling audiences. Fill posting schedules with hyper-engaging 4K cinematic hooks that stand out.',
      benefits: [
        'Generate vertical reels optimized for rapid micro-attention spans.',
        'Access multiple trend-proof audio vocal patterns and native accents.',
        'Produce dynamic loops with seamless visual transitions.'
      ],
      useCase: 'Maintain a 5-reels-a-day publishing cadence without editing bottlenecks.',
      roi: 'Boost organic impressions by +240% through consistent visual delivery.',
      workflow: 'Seed trending topic keywords → Select visual styles → Synthesize vertical short-forms.'
    }
  };

  const calculatedSavings = Math.max(0, (videoCount * traditionalCost) - (videoCount * 25)); // assume $25 average Laundris cost

  return (
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-20 animate-fade-in text-left font-sans">
      
      {/* 1. Header Hero section */}
      <div className="space-y-6 max-w-3xl">
        <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block">// ENTERPRISE SOLUTIONS SUITE</span>
        <h1 className="text-4xl md:text-6xl font-sans tracking-tight leading-none text-white font-medium">
          Tailored Workflows For <br />
          <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">Every Modern Business & Creator</span>
        </h1>
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
          See how Laundris Private Limited aligns specialized generative models, automated script formatting, and rapid GPU parallelization to match your specific sector performance goals.
        </p>
      </div>

      {/* 2. Interactive Industry Tabs and Workspace Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Tab Selection Sidebar */}
        <div className="lg:col-span-4 space-y-2.5">
          <span className="text-[9px] text-neutral-500 font-mono tracking-wider uppercase block mb-2 px-1">SELECT YOUR SECTOR:</span>
          {Object.entries(solutions).map(([key, sol]) => {
            const IconComponent = sol.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key as any)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-3.5 focus:outline-none cursor-pointer ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-purple-950/40 to-neutral-900 border-purple-500/40 shadow-lg shadow-purple-500/5'
                    : 'bg-[#080808]/60 border-neutral-900 text-neutral-400 hover:text-neutral-200 hover:border-neutral-800'
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                  activeTab === key 
                    ? 'bg-purple-500/20 text-purple-300' 
                    : 'bg-neutral-900 text-neutral-500 shadow-inner'
                }`}>
                  <IconComponent className="w-4.5 h-4.5" />
                </div>
                <div>
                  <strong className={`block text-[12.5px] tracking-wide transition-colors ${activeTab === key ? 'text-white' : 'text-neutral-300'}`}>
                    {key.toUpperCase()} TEAMS
                  </strong>
                  <span className="text-[10px] text-neutral-500 font-mono">
                    {key === 'marketing' && 'Conversion & Copy'}
                    {key === 'creators' && 'Storyboards & Teasers'}
                    {key === 'enterprise' && 'SSO & Scale API'}
                    {key === 'agencies' && 'Pitch & SPEC Ads'}
                    {key === 'education' && 'AI Course Explainers'}
                    {key === 'ecommerce' && 'Catalog Life-Renders'}
                    {key === 'startups' && 'Capital-efficient growth'}
                    {key === 'social' && 'Vertical Reels Pro'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Solution Workspace Content */}
        <div className="lg:col-span-8 bg-neutral-950/90 border border-neutral-900 p-8 rounded-2xl space-y-8 relative overflow-hidden">
          
          <div className="flex flex-wrap justify-between items-center gap-4 border-b border-neutral-900 pb-5">
            <div className="space-y-1">
              <span className="text-[10px] text-purple-400 font-mono tracking-widest uppercase block">✓ RECOMMENDED INTEGRATION PATH</span>
              <h2 className="text-xl md:text-2xl text-white font-medium">{solutions[activeTab].title}</h2>
            </div>
            
            {/* Dynamic visual badge */}
            <div className="bg-[#121020]/50 border border-purple-500/20 px-3.5 py-1.5 rounded-full text-[10.5px] text-purple-300 font-mono font-bold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin-slow" /> ROI Metric: {solutions[activeTab].roi}
            </div>
          </div>

          <p className="text-neutral-300 text-[13px] md:text-sm leading-relaxed font-sans">
            {solutions[activeTab].desc}
          </p>

          {/* Workflow Sequence Row */}
          <div className="bg-[#0b0b0b] border border-neutral-900 rounded-xl p-5.5 space-y-2 text-left">
            <span className="text-[9px] text-neutral-500 font-mono tracking-widest uppercase block">TYPICAL CAMPAIGN WORKFLOW PLAN:</span>
            <p className="text-[12px] font-mono text-purple-300 leading-normal flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-yellow-500" /> {solutions[activeTab].workflow}
            </p>
          </div>

          {/* Detailed Bullet Rationale list */}
          <div className="space-y-4">
            <span className="text-[9px] text-neutral-500 font-mono tracking-widest uppercase block">BUSINESS CRITICAL ADVANTAGES:</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {solutions[activeTab].benefits.map((benefit, i) => (
                <div key={i} className="bg-neutral-900/40 border border-neutral-900 hover:border-neutral-850 p-4 rounded-xl space-y-2 hover:scale-[1.01] transition-all">
                  <div className="w-6 h-6 rounded-full bg-purple-950/20 text-purple-400 border border-purple-500/20 flex items-center justify-center text-[10.5px] font-mono">
                    {i+1}
                  </div>
                  <p className="text-[10.5px] md:text-[11px] text-neutral-400 leading-normal font-sans">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Real-world target application example card */}
          <div className="border border-neutral-900 rounded-xl p-5 bg-gradient-to-r from-neutral-950 to-[#0e0c15] flex flex-col md:flex-row gap-5 items-center">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
              <Play className="w-5 h-5 text-purple-400 fill-purple-400" />
            </div>
            <div className="space-y-1 flex-1 text-center md:text-left">
              <strong className="text-[11.5px] uppercase tracking-wider text-white block">TARGET SECTOR USECASE EXAMPLE</strong>
              <p className="text-[11px] text-neutral-400 leading-normal font-sans italic">
                "{solutions[activeTab].useCase}"
              </p>
            </div>
            <button
              onClick={() => onNavigate('pricing')}
              className="py-2.5 px-4 bg-purple-600 hover:bg-purple-500 text-white font-mono text-[10px] font-bold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap cursor-pointer select-none"
            >
              Start Generating
            </button>
          </div>

        </div>

      </div>

      {/* 3. BUSINESS VALUE CALCULATOR REGION */}
      <div className="border-t border-neutral-900 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-neutral-950/60 border border-neutral-900 p-8 md:p-12 rounded-2xl relative overflow-hidden">
          
          <div className="space-y-5">
            <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block font-bold">// CALCULATE YOUR SPECIFIC VALUE ROI</span>
            <h3 className="text-2xl md:text-3xl text-white font-medium leading-tight">
              Calculate Laundris Generative Video Cost Savings
            </h3>
            <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
              Slide parameters to contrast standard high-cost creative production and physical camera allocations with Laundris Private Limited automated workspace servers.
            </p>

            {/* Slider controls */}
            <div className="space-y-6 pt-3">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono uppercase text-neutral-400">
                  <span>Synthesized Videos Per Month:</span>
                  <strong className="text-purple-400 font-bold">{videoCount} videos</strong>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={videoCount}
                  onChange={(e) => setVideoCount(parseInt(e.target.value))}
                  className="w-full h-1 bg-neutral-900 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono uppercase text-neutral-400">
                  <span>Traditional Outsourcing cost:</span>
                  <strong className="text-purple-400 font-bold">${traditionalCost} / video</strong>
                </div>
                <input
                  type="range"
                  min="200"
                  max="5000"
                  step="100"
                  value={traditionalCost}
                  onChange={(e) => setTraditionalCost(parseInt(e.target.value))}
                  className="w-full h-1 bg-neutral-900 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Calculator Output Display Box */}
          <div className="bg-[#0e0c18] border border-purple-500/20 p-8 rounded-2xl text-center space-y-5 relative overflow-hidden flex flex-col justify-center">
            <span className="text-[10px] text-purple-400 font-mono tracking-widest uppercase block font-bold">ESTIMATED DIRECT SAVINGS INDEX</span>
            
            <div className="space-y-1.5">
              <span className="text-4xl md:text-5xl font-mono text-green-400 font-bold block">
                ${calculatedSavings.toLocaleString()}
              </span>
              <span className="text-[10px] text-neutral-500 font-mono block uppercase tracking-wider">Saved Annually with Laundris Dedicated Cloud Cores</span>
            </div>

            <div className="border-t border-neutral-900 pt-5 space-y-3">
              <div className="flex justify-between text-[11px] text-neutral-400">
                <span>Outpost Agency Cost:</span>
                <span className="line-through text-red-500">${(videoCount * traditionalCost).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[11px] text-neutral-450">
                <span>Laundris SaaS License:</span>
                <span className="text-green-400">${(videoCount * 25).toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('pricing')}
              className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-mono text-[10px] font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all focus:outline-none cursor-pointer select-none"
            >
              Choose Your Platform Plan <ArrowRight className="inline w-3.5 h-3.5 ml-1" />
            </button>
            
            <div className="absolute right-0 bottom-0 w-40 h-40 bg-purple-500/5 rounded-full blur-[50px] pointer-events-none" />
          </div>

        </div>
      </div>

    </div>
  );
}
