/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Cpu, Layers, Zap, Shield, Server, FileCode, CheckCircle2, ChevronRight, 
  RefreshCw, GitBranch, ArrowUpRight, Activity, Database
} from 'lucide-react';
import { PageView } from '../types';

interface TechnologyPageProps {
  onNavigate: (view: PageView) => void;
}

export default function TechnologyPage({ onNavigate }: TechnologyPageProps) {
  const [activeLayer, setActiveLayer] = useState<'prompt' | 'diffusion' | 'render' | 'composite'>('diffusion');
  const [isIteratingModel, setIsIteratingModel] = useState(false);
  const [pipelineLoad, setPipelineLoad] = useState(42);

  const pipelineSteps = [
    {
      id: 'prompt',
      name: '01. Linguistic Struct',
      title: 'Linguistic Mapping Engine',
      desc: 'Transforms written screenplay lines, characters, and staging commands into high-dimensional vector coordinates. The system extracts camera coordinates and voice timings dynamically.',
      metric: 'Latency: < 45ms',
      status: 'active'
    },
    {
      id: 'diffusion',
      name: '02. Diffusion Predictor',
      title: 'Spatial Frame Interpolation Model (SFIM)',
      desc: 'Constructs the 3D depth parameters and solid geometric wireframes of subjects inside scenes before painting. This blocks the random distortion, morphing, or jitter prevalent in standard consumer diffusion processes.',
      metric: 'Precision: float16 mathematical grids',
      status: 'active'
    },
    {
      id: 'render',
      name: '03. Neural Rendering',
      title: 'Volumetric Shader Rasterizer',
      desc: 'Applies material physics shaders, volumetric lighting rays, scattering ambient dust models, and accurate regional shadow reflections natively through deep-learning layers.',
      metric: 'Output Style: Cinema ProRes 422',
      status: 'active'
    },
    {
      id: 'composite',
      name: '04. Vocal Alignment Engine',
      title: 'Expressive Dialect Synthesis',
      desc: 'Simultaneously overlays expressively accurate conversational voiceovers. It aligns syllable curves, breathing gaps, and lip coordinate matrices dynamically for natural human pronunciation.',
      metric: 'Accuracy: 99.4% lipsync accuracy index',
      status: 'active'
    }
  ];

  const handleTestPipeline = () => {
    setIsIteratingModel(true);
    setPipelineLoad(87);
    setTimeout(() => {
      setIsIteratingModel(false);
      setPipelineLoad(38);
    }, 1500);
  };

  return (
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-20 animate-fade-in text-left font-sans">
      
      {/* 1. Technical Headline */}
      <div className="space-y-6 max-w-3xl">
        <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block">// DEEP TECH SPECIFICATIONS</span>
        <h1 className="text-4xl md:text-6xl tracking-tight leading-none text-white font-medium">
          The Laundris Generative <br />
          <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">AI Video Generation Pipeline</span>
        </h1>
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
          Examine the proprietary deep learning models, neural rasterization mechanics, and Mumbai-based GPU server clustering that powers Laundris Private Limited real-time video compilation.
        </p>
      </div>

      {/* 2. Interactive Pipeline Animation (Architectural Diagram) */}
      <div className="bg-neutral-950/90 border border-neutral-900 rounded-2xl p-6 md:p-10 space-y-8 relative overflow-hidden">
        
        {/* Technical header panel */}
        <div className="flex flex-wrap justify-between items-center gap-4 border-b border-neutral-900 pb-5">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping" />
            <span className="font-mono text-[10.5px] uppercase tracking-widest text-purple-300 font-bold">Laundris Neural Pipeline Live Stack Map</span>
          </div>
          <div className="flex items-center gap-5 text-[10.5px] font-mono text-neutral-500">
            <span className="flex items-center gap-1.5"><Server className="w-3.5 h-3.5 text-neutral-600" /> GPU Queue Cluster: Active</span>
            <span className="flex items-center gap-1.5"><Activity className="w-3.5 h-3.5 text-neutral-600" /> Server Load index: {pipelineLoad}%</span>
          </div>
        </div>

        {/* Dynamic diagram mapping */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {pipelineSteps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveLayer(step.id as any)}
              className={`text-left p-5 rounded-xl border transition-all relative flex flex-col justify-between h-40 focus:outline-none cursor-pointer ${
                activeLayer === step.id
                  ? 'bg-gradient-to-b from-purple-950/20 to-neutral-900 border-purple-500/40 shadow-lg shadow-purple-500/5 scale-[1.02]'
                  : 'bg-neutral-900/30 border-neutral-900 hover:border-neutral-850 text-neutral-400'
              }`}
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-neutral-500 block uppercase">{step.name}</span>
                <strong className={`block text-xs uppercase tracking-wider ${activeLayer === step.id ? 'text-white' : 'text-neutral-300'}`}>
                  {step.title}
                </strong>
              </div>
              
              <div className="flex justify-between items-center text-[9px] font-mono text-neutral-500 border-t border-neutral-905 pt-3">
                <span>{step.metric}</span>
                <ChevronRight className={`w-3.5 h-3.5 ${activeLayer === step.id ? 'text-purple-400' : 'text-neutral-600'}`} />
              </div>
            </button>
          ))}
        </div>

        {/* Step details explain panel */}
        <div className="bg-[#0b0b0b] border border-neutral-900 p-6 rounded-xl space-y-4">
          {(() => {
            const currentStep = pipelineSteps.find(s => s.id === activeLayer)!;
            return (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-left">
                <div className="md:col-span-8 space-y-3">
                  <span className="text-[9.5px] text-purple-400 font-mono uppercase tracking-widest block font-bold">✓ ACTIVE MODEL SUITE</span>
                  <h3 className="text-lg md:text-xl text-white font-bold font-sans">{currentStep.title}</h3>
                  <p className="text-[12.5px] text-neutral-400 leading-relaxed font-sans">{currentStep.desc}</p>
                </div>
                <div className="md:col-span-4 bg-black/50 p-4 rounded-lg border border-neutral-910 space-y-3">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block font-bold">CORE METADATA SPEC:</span>
                  <div className="space-y-1.5 text-[10.5px]">
                    <div className="flex justify-between font-mono text-neutral-400">
                      <span>Dialect Dial:</span>
                      <span className="text-white">Maharashtra v4</span>
                    </div>
                    <div className="flex justify-between font-mono text-neutral-400">
                      <span>Mesh Precision:</span>
                      <span className="text-white">FP16 Floating</span>
                    </div>
                    <div className="flex justify-between font-mono text-neutral-400">
                      <span>Compliancy:</span>
                      <span className="text-white">COPA-Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Simulator CTA trigger */}
        <div className="flex justify-center select-none pt-2">
          <button
            onClick={handleTestPipeline}
            disabled={isIteratingModel}
            className="px-6 py-3 bg-neutral-900 border border-neutral-800 hover:border-purple-500/35 hover:bg-neutral-850 text-neutral-300 hover:text-white rounded-xl text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 focus:outline-none cursor-pointer"
          >
            {isIteratingModel ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-purple-400" /> Simulating Model Pipeline Test...
              </>
            ) : (
              <>
                <GitBranch className="w-3.5 h-3.5 text-purple-400" /> Run Pipeline Latency Diagnostics
              </>
            )}
          </button>
        </div>

      </div>

      {/* 3. CORE TECHNICAL MODULES BREAKDOWN GRID */}
      <div className="space-y-10">
        <span className="text-[9px] text-neutral-500 font-mono tracking-widest uppercase block text-center">// CORE DEEP LEARNING PRINCIPLES</span>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          <div className="bg-neutral-950 p-6.5 border border-neutral-900 rounded-xl space-y-3 hover:border-neutral-850 transition-colors">
            <Cpu className="w-6 h-6 text-purple-400" />
            <h4 className="text-sm font-sans font-bold text-white uppercase tracking-wider">Advanced Diffusion Models</h4>
            <p className="text-[11.5px] text-neutral-400 leading-relaxed font-sans">
              We leverage advanced, custom latent diffusion models trained on high-resolution cinematic frames. Generative calculations predict depth mapping nodes continuously to guarantee frame-to-frame layout continuity.
            </p>
          </div>

          <div className="bg-neutral-950 p-6.5 border border-neutral-900 rounded-xl space-y-3 hover:border-neutral-850 transition-colors">
            <Layers className="w-6 h-6 text-purple-400" />
            <h4 className="text-sm font-sans font-bold text-white uppercase tracking-wider">Neural Space Rendering</h4>
            <p className="text-[11.5px] text-neutral-400 leading-relaxed font-sans">
              Our models rasterize physical materials inside scenes natively using volumetric neural grids. Light scatters correctly through volumetric atmospheres and reflects off metallic or shiny surfaces with physical precision.
            </p>
          </div>

          <div className="bg-neutral-950 p-6.5 border border-neutral-900 rounded-xl space-y-3 hover:border-neutral-850 transition-colors">
            <Zap className="w-6 h-6 text-purple-405" />
            <h4 className="text-sm font-sans font-bold text-white uppercase tracking-wider">GPU Accelerated Infrastructure</h4>
            <p className="text-[11.5px] text-neutral-400 leading-relaxed font-sans">
              Hosted inside isolated private server hubs inside Goregaon West, central Mumbai. Renders skip general public server delays to compile beautiful 4K high fidelity files in seconds.
            </p>
          </div>

        </div>
      </div>

      {/* 4. ECOSYSTEM GRAPHICS BANNER */}
      <div className="bg-[#050508]/45 border border-neutral-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="space-y-4 max-w-xl text-left">
          <span className="text-[10px] text-purple-405 font-mono uppercase tracking-widest block font-bold">DEEP LEARNING PLATFORMS</span>
          <h3 className="text-xl md:text-2xl text-white font-sans leading-tight">Optimized Ecosystem compatibility</h3>
          <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
            Our neural model structures compile flawlessly into leading python execution blocks, standalone web hooks, or REST endpoint channels. Review our API guides inside our developer portal.
          </p>
        </div>
        <button
          onClick={() => onNavigate('api')}
          className="px-6 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-650 hover:from-purple-500 hover:to-indigo-550 text-white font-mono text-[10.5px] font-bold uppercase tracking-wider rounded-xl transition-all whitespace-nowrap cursor-pointer select-none"
        >
          Check API Specifications <ArrowUpRight className="inline w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
}
