/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Film, Mic, Sparkles, Sliders, Languages, FileText, ArrowRight, 
  Play, Pause, RefreshCw, Layers, Volume2, CheckCircle2, Globe, Video, 
  Clock, Shield, Cpu, Zap, Code, Send, Plus
} from 'lucide-react';
import { PageView } from '../types';

interface PlatformPagesProps {
  page: PageView;
  onNavigate: (view: PageView) => void;
}

export default function PlatformPages({ page, onNavigate }: PlatformPagesProps) {
  // Common states
  const [isPlaying, setIsPlaying] = useState(false);

  // AI Video Engine States
  const [selectedPrompt, setSelectedPrompt] = useState(0);
  const [videoCamera, setVideoCamera] = useState('Anamorphic Dolly Forward');
  const [videoStyle, setVideoStyle] = useState('Cyberpunk Cinematic Noir');
  const [videoDuration, setVideoDuration] = useState('10s');
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [videoRenderComplete, setVideoRenderComplete] = useState(true);

  // AI Voice Engine States
  const [selectedVoice, setSelectedVoice] = useState('Aravind [Mumbai Studio]');
  const [voiceText, setVoiceText] = useState('Laundris Private Limited brings you state of the art sound synthetics matching Indian dialects.');
  const [voiceVolume, setVoiceVolume] = useState(85);
  const [voicePitch, setVoicePitch] = useState(1.0);
  const [voiceSpeed, setVoiceSpeed] = useState(1.0);
  const [playingAudio, setPlayingAudio] = useState(false);
  const [isVoiceSynthesizing, setIsVoiceSynthesizing] = useState(false);

  // Generative AI States
  const [genAiInput, setGenAiInput] = useState('A cinematic shot of Goregaon Gateway at sunset, volumetric fog, Unreal Engine 5 render');
  const [isOptimizingPrompt, setIsOptimizingPrompt] = useState(false);
  const [optimizedPrompt, setOptimizedPrompt] = useState('');

  // AI Video Editor States
  const [activeEditorTab, setActiveEditorTab] = useState<'video' | 'audio' | 'captions'>('video');
  const [videoTracks, setVideoTracks] = useState([
    { id: 't1', name: 'Scene 01 - Golden Hour Goregaon', type: 'video', duration: '4s', color: 'bg-indigo-950/40 border-indigo-500/25' },
    { id: 't2', name: 'Scene 02 - Core Lab Matrix', type: 'video', duration: '6s', color: 'bg-indigo-950/40 border-indigo-500/25' }
  ]);
  const [audioTracks, setAudioTracks] = useState([
    { id: 'a1', name: 'Aravind Voiceover Monologue', type: 'audio', duration: '10s', color: 'bg-purple-950/40 border-purple-500/25' }
  ]);

  // Multi-Language Dubbing States
  const [sourceLanguage, setSourceLanguage] = useState('English');
  const [targetLanguage, setTargetLanguage] = useState('Hindi (Mumbai Dialect)');
  const [dubbingStyle, setDubbingStyle] = useState('LipSynced (Neural Mesh)');
  const [isDubbing, setIsDubbing] = useState(false);
  const [dubSuccess, setDubSuccess] = useState(false);

  // Content Generator States
  const [selectedTemplate, setSelectedTemplate] = useState('Brand Ad Script');
  const [brandKeywords, setBrandKeywords] = useState('volumetric cinema, Mumbai studio, instant GPU queues');
  const [generatedScript, setGeneratedScript] = useState<any[]>([]);
  const [isGeneratingScript, setIsGeneratingScript] = useState(false);

  const samplePrompts = [
    { text: 'A futuristic film noir camera sweep passing high reflective metallic materials inside Mumbai', duration: '8s', tags: ['Cinematic', 'SFIM Mesh'] },
    { text: 'Slow panoramic view of Goregaon tech research facility surrounded by ancient forest', duration: '10s', tags: ['Photorealistic', 'Atmospheric'] },
    { text: 'Dynamic light beams cutting through volumetric dust clouds on a physical studio stage', duration: '12s', tags: ['Macro', 'Raycasting'] }
  ];

  const handleOptimisePrompt = () => {
    setIsOptimizingPrompt(true);
    setTimeout(() => {
      setOptimizedPrompt(`[Volumetric Master v4] CAMERA: 35mm lens, dolly forward tracking --SCENE: ${genAiInput}, hyper-detailed light refraction levels, glass thickness physical shaders --ATMOSPHERE: Mumbai twilight conditions, cinematic fog, dust scattering mesh tracking --STYLE: Photorealistic 4K ProRes 422`);
      setIsOptimizingPrompt(false);
    }, 1200);
  };

  const handleSynthesizeVideo = () => {
    setIsSynthesizing(true);
    setVideoRenderComplete(false);
    setTimeout(() => {
      setIsSynthesizing(false);
      setVideoRenderComplete(true);
    }, 2500);
  };

  const handleVoiceSynthesize = () => {
    setIsVoiceSynthesizing(true);
    setTimeout(() => {
      setIsVoiceSynthesizing(false);
      setPlayingAudio(true);
    }, 1500);
  };

  const handleDubbingProcess = () => {
    setIsDubbing(true);
    setDubSuccess(false);
    setTimeout(() => {
      setIsDubbing(false);
      setDubSuccess(true);
    }, 2000);
  };

  const handleGenerateScript = () => {
    setIsGeneratingScript(true);
    setTimeout(() => {
      setGeneratedScript([
        {
          scene: 1,
          visual: `Dynamic camera dolly sweep focusing on a glowing neural server core, representing high speed processing logic.`,
          voiceover: `In the heart of Mumbai, Laundris Private Limited is breaking boundaries in digital cinema synthesis.`,
          duration: '3.5s'
        },
        {
          scene: 2,
          visual: `Cut to crisp 4K rendering outcomes with volumetric light rays scattering through a dark metallic workspace.`,
          voiceover: `With secure GPU parallelization, raw text drafts become finalized ProRes masters in under three minutes.`,
          duration: '4s'
        },
        {
          scene: 3,
          visual: `A wide panoramic shot of Goregaon West, transitioning into beautiful abstract geometry lines.`,
          voiceover: `Experience the future of media operations. Tap into our creative studio today.`,
          duration: '4.5s'
        }
      ]);
      setIsGeneratingScript(false);
    }, 1500);
  };

  return (
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-20 animate-fade-in text-left">
      
      {/* 1. COMPONET NAVIGATION BREADCRUMB */}
      <div className="flex flex-wrap gap-2 items-center text-[11px] font-mono uppercase tracking-widest text-neutral-500 border-b border-neutral-900 pb-6 mb-4 select-none">
        <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Laundris Studio</button>
        <span>/</span>
        <button onClick={() => onNavigate('platform')} className="text-purple-400 font-bold hover:text-purple-300">Platform Suite</button>
        <span>/</span>
        <span className="text-white">
          {page === 'platform' && 'Overview'}
          {page === 'ai-video-engine' && 'AI Video Engine'}
          {page === 'ai-voice-engine' && 'AI Voice Engine'}
          {page === 'generative-ai' && 'Generative AI'}
          {page === 'ai-video-editor' && 'AI Video Editor'}
          {page === 'multi-language-dubbing' && 'Multi-Language Dubbing'}
          {page === 'content-generator' && 'Content Generator'}
        </span>
      </div>

      {/* 2. DYNAMIC PAGE CONTROLLER VIEWS */}

      {/* ======================= PLATFORM OVERVIEW LANDING ======================= */}
      {page === 'platform' && (
        <div className="space-y-16">
          <div className="space-y-6 max-w-3xl">
            <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block font-bold">00 // CENTRAL CINEMA PLATFORM</span>
            <h1 className="text-4xl md:text-6xl font-sans text-white tracking-tight leading-none font-medium">
              Enterprise AI <br />
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent font-sans">Video & Voice Production Studio</span>
            </h1>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-sans">
              Welcome to the Laundris Private Limited generative SaaS environment. Select from our suite of deep learning models, multi-voice synthetics, automation templates, and timeline editors below to render pristine commercial campaigns in real time.
            </p>
          </div>

          {/* Core Feature Cards Grid pointing to sub-engines */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Video Engine */}
            <div className="bg-neutral-950/80 border border-neutral-900 hover:border-purple-500/20 rounded-2xl p-6 space-y-4 transition-all hover:scale-[1.01] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/10 flex items-center justify-center">
                  <Film className="w-5 h-5" />
                </div>
                <h3 className="text-base text-white font-bold font-sans">Text-to-Video Engine</h3>
                <p className="text-[11.5px] text-neutral-400 leading-relaxed font-sans">
                  Convert screenplays or marketing ideas directly into 4K cinematic scenes. Features our proprietary Spatial Frame Interpolation Matrix (SFIM) for flicker-free continuity.
                </p>
              </div>
              <button 
                onClick={() => onNavigate('ai-video-engine')}
                className="w-full mt-4 py-2 bg-neutral-900 hover:bg-neutral-850 text-neutral-200 hover:text-white border border-neutral-800 text-[10.5px] font-mono uppercase font-bold tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                Access Video Engine <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 2. Voice Engine */}
            <div className="bg-neutral-950/80 border border-neutral-900 hover:border-purple-500/20 rounded-2xl p-6 space-y-4 transition-all hover:scale-[1.01] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/10 flex items-center justify-center">
                  <Mic className="w-5 h-5" />
                </div>
                <h3 className="text-base text-white font-bold font-sans">AI Voice Synthesis</h3>
                <p className="text-[11.5px] text-neutral-400 leading-relaxed font-sans">
                  Translate written dialogues into expressively perfect voiceovers matching Indian regional dialects, complete with custom speed registers and humanized pitch levels.
                </p>
              </div>
              <button 
                onClick={() => onNavigate('ai-voice-engine')}
                className="w-full mt-4 py-2 bg-neutral-900 hover:bg-neutral-850 text-neutral-200 hover:text-white border border-neutral-800 text-[10.5px] font-mono uppercase font-bold tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                Access Voice Engine <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 3. Generative AI */}
            <div className="bg-neutral-950/80 border border-neutral-900 hover:border-purple-500/20 rounded-2xl p-6 space-y-4 transition-all hover:scale-[1.01] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base text-white font-bold font-sans">Generative Prompt Optimizer</h3>
                <p className="text-[11.5px] text-neutral-400 leading-relaxed font-sans">
                  Automatically rewrite raw user inputs into volumetric master render tokens. Corrects focal widths, lighting temperatures, and motion styles on autopilot.
                </p>
              </div>
              <button 
                onClick={() => onNavigate('generative-ai')}
                className="w-full mt-4 py-2 bg-neutral-900 hover:bg-neutral-850 text-neutral-200 hover:text-white border border-neutral-800 text-[10.5px] font-mono uppercase font-bold tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                Access Optimizer <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 4. Video Editor */}
            <div className="bg-neutral-950/80 border border-neutral-900 hover:border-purple-500/20 rounded-2xl p-6 space-y-4 transition-all hover:scale-[1.01] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/10 flex items-center justify-center">
                  <Sliders className="w-5 h-5" />
                </div>
                <h3 className="text-base text-white font-bold font-sans">AI Timeline Editor</h3>
                <p className="text-[11.5px] text-neutral-400 leading-relaxed font-sans">
                  Arrange generated video blocks and corresponding voice tracks on multi-channel tracks. Layer filters, adjust margins, and export standard .mp4 matrices instantly.
                </p>
              </div>
              <button 
                onClick={() => onNavigate('ai-video-editor')}
                className="w-full mt-4 py-2 bg-neutral-900 hover:bg-neutral-850 text-neutral-200 hover:text-white border border-neutral-800 text-[10.5px] font-mono uppercase font-bold tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                Access AI Editor <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 5. Dubbing Engine */}
            <div className="bg-neutral-950/80 border border-neutral-905 hover:border-purple-500/20 rounded-2xl p-6 space-y-4 transition-all hover:scale-[1.01] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/10 flex items-center justify-center">
                  <Languages className="w-5 h-5" />
                </div>
                <h3 className="text-base text-white font-bold font-sans">Multi-Language Dubbing</h3>
                <p className="text-[11.5px] text-neutral-400 leading-relaxed font-sans">
                  Convert source dialogues into major regional and global dialects automatically. Perfect for deploying localized marketing spots with matching lipsync meshes.
                </p>
              </div>
              <button 
                onClick={() => onNavigate('multi-language-dubbing')}
                className="w-full mt-4 py-2 bg-neutral-900 hover:bg-neutral-850 text-neutral-200 hover:text-white border border-neutral-800 text-[10.5px] font-mono uppercase font-bold tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                Access Dubbing Engine <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 6. Content Generator */}
            <div className="bg-neutral-950/80 border border-neutral-900 hover:border-purple-500/20 rounded-2xl p-6 space-y-4 transition-all hover:scale-[1.01] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/10 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-base text-white font-bold font-sans">Script Content Generator</h3>
                <p className="text-[11.5px] text-neutral-400 leading-relaxed font-sans">
                  Input commercial keywords to auto-generate highly structured script layouts. Exports include matching dynamic visual briefs and corresponding voiceover prompts.
                </p>
              </div>
              <button 
                onClick={() => onNavigate('content-generator')}
                className="w-full mt-4 py-2 bg-neutral-900 hover:bg-neutral-850 text-neutral-200 hover:text-white border border-neutral-800 text-[10.5px] font-mono uppercase font-bold tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                Access Generator <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Dedicated Real-Time Interactive Workflow Diagram */}
          <div className="bg-[#08080a] border border-neutral-900 rounded-2xl p-8 space-y-6">
            <span className="text-[9.5px] text-purple-400 font-mono uppercase tracking-widest block font-bold">★ PLATFORM DYNAMIC WORKFLOW FLOWCHART</span>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative select-none font-mono text-[11px]">
              
              <div className="bg-neutral-950 border border-neutral-900 p-4 rounded-xl space-y-1 relative">
                <span className="text-neutral-500 text-[9px] block">STEP 01 //</span>
                <strong className="text-white block uppercase">Input Token</strong>
                <p className="text-[10px] text-neutral-400 font-sans">Enter written briefs or dynamic prompts inside the Studio sandbox console.</p>
              </div>

              <div className="bg-neutral-900/50 border border-neutral-900 p-4 rounded-xl space-y-1 relative">
                <span className="text-neutral-500 text-[9px] block">STEP 02 //</span>
                <strong className="text-white block uppercase">Mesh Compute</strong>
                <p className="text-[10px] text-neutral-400 font-sans">Spatial Frame Interpolation Matrix predictively aligns spatial wireframes.</p>
              </div>

              <div className="bg-neutral-950 border border-neutral-900 p-4 rounded-xl space-y-1 relative">
                <span className="text-neutral-500 text-[9px] block">STEP 03 //</span>
                <strong className="text-white block uppercase">Neural Render</strong>
                <p className="text-[10px] text-neutral-400 font-sans">GPU servers apply light tracing shaders and volumetric depth filters.</p>
              </div>

              <div className="bg-neutral-900/50 border border-neutral-910 p-4 rounded-xl space-y-1 relative">
                <span className="text-neutral-500 text-[9px] block">STEP 04 //</span>
                <strong className="text-white block uppercase">Master Output</strong>
                <p className="text-[10px] text-neutral-400 font-sans">Download uncompressed 4K ProRes files, safe for global copyright dispersion.</p>
              </div>

            </div>
          </div>

        </div>
      )}

      {/* ======================= AI VIDEO ENGINE PAGE ======================= */}
      {page === 'ai-video-engine' && (
        <div className="space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block font-sans">01 // VISUAL SYNTHETICS CORE</span>
              <h1 className="text-4xl md:text-5xl font-sans text-white tracking-tight leading-none font-medium">
                The Laundris <br />
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent font-sans">AI Volumetric Video Engine</span>
              </h1>
              <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                Unlock high-fidelity visual composition directly from text blocks. Our proprietary **Spatial Frame Interpolation Matrix (SFIM)** predictively constructs 3D geometric nodes before paint mapping occurs, eliminating standard diffusion warping and jitter. Renders execute within isolated GPU channels locally inside our Maharashtra datacenter.
              </p>
              
              <div className="flex flex-wrap gap-4 text-xs">
                <div className="bg-neutral-950 p-4 border border-neutral-900 rounded-xl space-y-1 flex-1 min-w-[180px]">
                  <strong className="text-white block font-sans uppercase text-[11px]">Dynamic Camera Pan Control</strong>
                  <p className="text-[10.5px] text-neutral-400 leading-normal">Customize path angles, speed indices, and focal distances with sub-milli coordinates.</p>
                </div>
                <div className="bg-neutral-950 p-4 border border-neutral-900 rounded-xl space-y-1 flex-1 min-w-[180px]">
                  <strong className="text-white block font-sans uppercase text-[11px]">Apple ProRes Outputs</strong>
                  <p className="text-[10.5px] text-neutral-400 leading-normal">Lossless output directly in television and theater-standard post-production formats.</p>
                </div>
              </div>
            </div>

            {/* Video Production Sandbox Widget */}
            <div className="lg:col-span-5 bg-neutral-950/90 border border-neutral-900 p-6 rounded-2xl space-y-5 relative overflow-hidden backdrop-blur-md">
              <div className="flex justify-between items-center border-b border-neutral-900 pb-3">
                <div className="flex items-center gap-1.5 font-mono text-[9.5px] tracking-widest text-purple-400 uppercase">
                  <Film className="w-3.5 h-3.5 animate-pulse" /> LIVE ENGINE COMPULATOR
                </div>
                <span className="text-[9px] text-neutral-500 font-mono">Mumbai Core Server</span>
              </div>

              {/* Sample prompts */}
              <div className="space-y-2">
                <span className="text-[9px] text-neutral-500 font-mono tracking-wider uppercase block">SELECT SCRIPT OUTLINE TEMPLATE:</span>
                <div className="space-y-1.5">
                  {samplePrompts.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedPrompt(idx)}
                      className={`w-full text-left p-2.5 rounded-lg text-[10.5px] border transition-all ${
                        selectedPrompt === idx
                          ? 'bg-purple-950/30 border-purple-500/50 text-white font-medium'
                          : 'bg-neutral-900/40 border-neutral-850 text-neutral-400 hover:border-neutral-800'
                      }`}
                    >
                      "{p.text}"
                    </button>
                  ))}
                </div>
              </div>

              {/* Advanced controls */}
              <div className="grid grid-cols-2 gap-3.5 pt-1 border-t border-neutral-900">
                <div className="space-y-1">
                  <label className="text-[9px] text-neutral-400 font-mono uppercase tracking-wide block">Camera Tracking</label>
                  <select
                    value={videoCamera}
                    onChange={(e) => setVideoCamera(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 text-[10.5px] rounded-lg p-2 text-white focus:outline-none"
                  >
                    <option>Anamorphic Dolly Forward</option>
                    <option>Swaying Organic Pan</option>
                    <option>Macro Orbit Tight</option>
                    <option>Crane Elevate Drop</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] text-neutral-400 font-mono uppercase tracking-wide block">Duration Block</label>
                  <select
                    value={videoDuration}
                    onChange={(e) => setVideoDuration(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 text-[10.5px] rounded-lg p-2 text-white focus:outline-none"
                  >
                    <option>4s Sample</option>
                    <option>8s Standard</option>
                    <option>10s Extended</option>
                    <option>15s Cine Block</option>
                  </select>
                </div>
              </div>

              {/* Render buttons */}
              <button
                onClick={handleSynthesizeVideo}
                disabled={isSynthesizing}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-mono text-[10px] font-bold uppercase tracking-wider rounded-xl shadow-lg transition-transform hover:scale-101 flex items-center justify-center gap-1.5 select-none"
              >
                {isSynthesizing ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" /> SYNTHESIZING VIDEO MATRIX...
                  </>
                ) : (
                  <>
                    INITIATE EXPERT RENDER SECONDS <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              {/* Simulated Output Video Box */}
              {videoRenderComplete && !isSynthesizing && (
                <div className="border border-neutral-900 rounded-xl overflow-hidden bg-neutral-900 aspect-video relative flex items-center justify-center text-center p-4">
                  <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=600')` }} />
                  <div className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 rounded border border-neutral-800 text-[9px] text-green-400 font-mono">
                    ONLINE RENDER COMPLETED
                  </div>
                  <div className="relative z-10 space-y-2">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/35 flex items-center justify-center mx-auto mb-2 animate-bounce">
                      <Play className="w-4 h-4 text-purple-400 fill-purple-400" />
                    </div>
                    <strong className="text-white text-xs block font-sans">Laundris Studio Engine Output #394</strong>
                    <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider leading-relaxed">
                      {samplePrompts[selectedPrompt].text} <br />
                      <span className="text-purple-300">Camera: {videoCamera} | 60FPS Apple ProRes 422</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ======================= AI VOICE ENGINE PAGE ======================= */}
      {page === 'ai-voice-engine' && (
        <div className="space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block font-sans">02 // DEEP ORAL SYNTHESIS DESK</span>
              <h1 className="text-4xl md:text-5xl font-sans text-white tracking-tight leading-none font-medium">
                The Laundris <br />
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent font-sans">AI Advanced Voice Engine</span>
              </h1>
              <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                Transform script write-ups into incredibly expressive, emotionally accurate speech sequences. Specially balanced for Indian dialects, our vocal synthesis model replicates breath gaps, syllable accentuation, and conversational pauses seamlessly. Create perfect, synchronized studio-ready podcasts, commercial dialogues, or film translations on command.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                <div className="bg-neutral-950 p-4 border border-neutral-900 rounded-xl space-y-1">
                  <strong className="text-white block uppercase text-[11px] font-sans">Multi-Syllable Accentuation</strong>
                  <p className="text-[10.5px] text-neutral-500">Intelligently maps regional speech patterns—retaining authentic Indian pronunciation parameters seamlessly.</p>
                </div>
                <div className="bg-neutral-950 p-4 border border-neutral-900 rounded-xl space-y-1">
                  <strong className="text-white block uppercase text-[11px] font-sans">Emotion and Pace Curves</strong>
                  <p className="text-[10.5px] text-neutral-505">Fine-tune emphasis bounds, conversational pauses, and energy levels within fractional parameters.</p>
                </div>
              </div>
            </div>

            {/* Vocal Synthesis Sandbox Widget */}
            <div className="lg:col-span-5 bg-neutral-950/90 border border-neutral-900 p-6 rounded-2xl space-y-5 relative overflow-hidden backdrop-blur-md">
              <div className="flex justify-between items-center border-b border-neutral-900 pb-3">
                <div className="flex items-center gap-1.5 font-mono text-[9.5px] tracking-widest text-purple-400 uppercase">
                  <Mic className="w-3.5 h-3.5 animate-pulse" /> COMPRESSED VOICE COMPULATOR
                </div>
                <span className="text-[9px] text-neutral-500 font-mono">Mumbai Acoustics Desk</span>
              </div>

              {/* Voice Actor Selector */}
              <div className="space-y-1.5">
                <label className="text-[9px] text-neutral-400 font-mono uppercase tracking-wide block">Select Audio Voice Blueprint:</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Aravind [Mumbai Studio]',
                    'Priya [Regional Marathi]',
                    'Amit [Corporate English]',
                    'Sunita [Expressive Hindi]'
                  ].map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setSelectedVoice(v)}
                      className={`text-[10px] font-mono p-2 rounded-lg border text-left transition-all ${
                        selectedVoice === v
                          ? 'bg-purple-950/30 border-purple-500/50 text-white font-bold'
                          : 'bg-neutral-900/40 border-neutral-850 text-neutral-400 hover:border-neutral-800'
                      }`}
                    >
                      🗣️ {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Text Input Block */}
              <div className="space-y-1.5">
                <label className="text-[9px] text-neutral-400 font-mono uppercase tracking-wide block">Script Content:</label>
                <textarea
                  value={voiceText}
                  onChange={(e) => setVoiceText(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 text-[11px] text-white rounded-lg p-2.5 h-20 focus:outline-none placeholder-neutral-600 block"
                />
              </div>

              {/* Waveform Tuning Tools */}
              <div className="space-y-3.5 border-t border-neutral-900 pt-3">
                <div className="flex justify-between text-[9px] text-neutral-400 font-mono uppercase">
                  <span>Vocal Pitch Tone: {voicePitch}x</span>
                  <span>Dialect Speed Rate: {voiceSpeed}x</span>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <input
                      type="range"
                      min="0.5"
                      max="1.5"
                      step="0.1"
                      value={voicePitch}
                      onChange={(e) => setVoicePitch(parseFloat(e.target.value))}
                      className="w-full h-1 h-purple-600 bg-neutral-900 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="range"
                      min="0.5"
                      max="1.5"
                      step="0.1"
                      value={voiceSpeed}
                      onChange={(e) => setVoiceSpeed(parseFloat(e.target.value))}
                      className="w-full h-1 bg-neutral-900 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Synthesize Button */}
              <button
                onClick={handleVoiceSynthesize}
                disabled={isVoiceSynthesizing}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-650 hover:from-purple-500 hover:to-indigo-550 text-white font-mono text-[10px] font-bold uppercase tracking-wider rounded-xl shadow-lg transition-transform flex items-center justify-center gap-1.5 select-none"
              >
                {isVoiceSynthesizing ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" /> ANALYZING TRANSLATIONS DECREE...
                  </>
                ) : (
                  <>
                    SYNTHESIZE SPEECH MP3 <Volume2 className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              {/* Audio Wave Player Simulator */}
              {playingAudio && (
                <div className="bg-[#0c0c0c] border border-neutral-900 rounded-xl p-3.5 space-y-3">
                  <div className="flex justify-between items-center text-[10px] font-mono text-purple-300">
                    <span className="flex items-center gap-1.5 font-bold">● WAVEFORM SYNC ACTIVE</span>
                    <span>Voice: {selectedVoice}</span>
                  </div>
                  
                  {/* Dynamic Audio Waves visualization */}
                  <div className="flex justify-between items-end h-8 gap-[3px] px-2">
                    {[12, 18, 25, 14, 8, 22, 35, 42, 28, 15, 6, 12, 24, 38, 48, 30, 18, 10, 15, 26, 32, 14, 8, 20, 29, 36, 12].map((h, i) => (
                      <div
                        key={i}
                        className="w-full bg-purple-500/80 rounded"
                        style={{ height: `${h}%`, animation: `pulse-height 1.2s ease-in-out infinite alternate ${i * 0.05}s` }}
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-neutral-400">
                    <button
                      onClick={() => setPlayingAudio(false)}
                      className="px-3 py-1 bg-neutral-900 hover:bg-neutral-850 rounded border border-neutral-800 font-mono text-[9px] uppercase tracking-wide"
                    >
                      STOP AUDIO PLAYER
                    </button>
                    <span className="font-mono text-[9px] text-neutral-500">ESTIMATED COMPRESS LOAD: negligible</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ======================= GENERATIVE AI PAGE ======================= */}
      {page === 'generative-ai' && (
        <div className="space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block font-sans">03 // INTELLECT CORES ARCHITECTURE</span>
              <h1 className="text-4xl md:text-5xl font-sans text-white tracking-tight leading-none font-medium">
                The Laundris <br />
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent font-sans">Deep Generative AI Cores</span>
              </h1>
              <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                At Laundris Private Limited, our technical architecture spans leading diffusion pipelines, volumetric shadowing frameworks, and custom linguistic translation algorithms. We construct unified models trained inside our isolated servers, strictly adhering to global brand copyright regulations.
              </p>
              
              <div className="space-y-3.5 text-xs">
                <div className="flex gap-3 items-start bg-[#0a0a0a] p-4.5 rounded-xl border border-neutral-900 hover:border-neutral-850 transition-colors">
                  <Cpu className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-sans uppercase text-[11px]">Dynamic Mesh Predictors</strong>
                    <p className="text-[10.5px] text-neutral-500 leading-normal">Our system maps solid spatial wireframes of characters, landmarks, and structural objects before painting visual pixels to preserve absolute positioning.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-[#0a0a0a] p-4.5 rounded-xl border border-neutral-900 hover:border-neutral-850 transition-colors">
                  <Zap className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-sans uppercase text-[11px]">Volumetric Light Shader Vectors</strong>
                    <p className="text-[10.5px] text-neutral-500 leading-normal">Renders trace authentic environmental physics-calculating refraction points through air moisture, custom fog densities, and surface textures.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Prompt Optimizer Sandbox Widget */}
            <div className="lg:col-span-5 bg-neutral-950/90 border border-neutral-900 p-6 rounded-2xl space-y-5 relative overflow-hidden backdrop-blur-md">
              <div className="flex justify-between items-center border-b border-neutral-900 pb-3">
                <div className="flex items-center gap-1.5 font-mono text-[9.5px] tracking-widest text-purple-400 uppercase">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" /> LAUNDRIS PROMPT OPTIMISER Core
                </div>
                <span className="text-[9px] text-neutral-500 font-mono">Volumetric v4</span>
              </div>

              {/* Raw Prompt Input */}
              <div className="space-y-1.5">
                <label className="text-[9px] text-neutral-400 font-mono uppercase tracking-wide block">Raw Prompt Input Script:</label>
                <input
                  type="text"
                  value={genAiInput}
                  onChange={(e) => setGenAiInput(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 text-[11px] text-white rounded-lg p-2.5 focus:outline-none"
                />
              </div>

              {/* Trigger Optimizer */}
              <button
                onClick={handleOptimisePrompt}
                disabled={isOptimizingPrompt}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-650 hover:from-purple-500 hover:to-indigo-550 text-white font-mono text-[10px] font-bold uppercase tracking-wider rounded-xl shadow-lg transition-transform flex items-center justify-center gap-1.5 select-none focus:outline-none"
              >
                {isOptimizingPrompt ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" /> CONFIGURING SCENE MATRIX...
                  </>
                ) : (
                  <>
                    OPTIMIZE PROMPT STRUCT <Sparkles className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              {/* Optimized Prompts Box */}
              {optimizedPrompt && (
                <div className="bg-[#0b0b0b] border border-neutral-900 p-4.5 rounded-xl space-y-3.5">
                  <span className="text-[9.5px] text-purple-300 font-mono uppercase tracking-widest block font-bold">★ OPTIMIZED HYPER-SPEC PROMPT:</span>
                  <p className="text-[10.5px] font-mono text-neutral-400 leading-relaxed bg-black/90 p-3 rounded-lg border border-neutral-850 block select-all">
                    {optimizedPrompt}
                  </p>
                  <span className="text-[9px] text-neutral-500 font-mono block text-center uppercase tracking-wider">▲ Click output block above to copy parameters to Clipboard</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ======================= AI VIDEO EDITOR PAGE ======================= */}
      {page === 'ai-video-editor' && (
        <div className="space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-12 space-y-6">
              <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block font-sans">04 // SEQUENTIAL EDITING DESK</span>
              <h1 className="text-4xl md:text-5xl font-sans text-white tracking-tight leading-none font-medium">
                The Laundris <br />
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent font-sans">AI Multi-Track Video Editor</span>
              </h1>
              <p className="text-neutral-400 text-xs md:text-sm leading-relaxed max-w-4xl">
                Bypass expensive post-production render delays. Our browser-based editor compiles sequential video blocks, sound layers, and subtitle coordinates natively inside WebGL containers. Swap scene styles, adjust speed parameters, trim voice loops, and export compiled clips instantly without server queue stagnation.
              </p>
            </div>

            {/* Editing Timeline Canvas Simulator */}
            <div className="lg:col-span-12 bg-neutral-950/90 border border-neutral-900 p-6 rounded-2xl space-y-6 relative overflow-hidden backdrop-blur-md">
              <div className="flex justify-between items-center border-b border-neutral-900 pb-3">
                <div className="flex items-center gap-1.5 font-mono text-[9.5px] tracking-widest text-purple-400 uppercase">
                  <Sliders className="w-3.5 h-3.5 animate-pulse" /> CHRONO TIMELINE EDITOR SIMULATOR
                </div>
                <div className="flex items-center gap-4 text-[10px] font-mono text-neutral-500">
                  <span>Track Sync Status: <span className="text-green-500">READY</span></span>
                  <span>Est. Assembly CPU: &lt; 0.05%</span>
                </div>
              </div>

              {/* Selector Tabs */}
              <div className="flex gap-2">
                {(['video', 'audio', 'captions'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveEditorTab(tab)}
                    className={`px-4.5 py-2 rounded-lg text-[10px] font-mono uppercase tracking-wider border transition-all ${
                      activeEditorTab === tab
                        ? 'bg-purple-900/30 border-purple-500/40 text-purple-300'
                        : 'bg-neutral-900/40 border-neutral-850 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {tab === 'video' && '📹 Video Track Units'}
                    {tab === 'audio' && '🎙️ Speech & SFX Track'}
                    {tab === 'captions' && '💬 Caption Coordinates'}
                  </button>
                ))}
              </div>

              {/* Interactive Timeline Display */}
              <div className="space-y-3.5 bg-[#080808] border border-neutral-900 p-4 rounded-xl">
                {/* Visual Video Ruler Track */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[9px] font-mono text-neutral-500 border-b border-neutral-900 pb-1.5 uppercase">
                    <span>Timeline Tracks</span>
                    <span className="flex gap-6">
                      <span>0.0s</span>
                      <span>2.0s</span>
                      <span>4.0s</span>
                      <span>6.0s</span>
                      <span>8.0s</span>
                      <span>10.0s</span>
                    </span>
                  </div>

                  {/* Video block channels */}
                  <div className="flex items-center gap-3">
                    <span className="w-16 font-mono text-[9px] text-neutral-400 uppercase tracking-widest">VIDEO 01:</span>
                    <div className="flex-1 flex gap-2">
                      {videoTracks.map((tr) => (
                        <div
                          key={tr.id}
                          className={`flex-grow p-3 rounded-lg border text-[10px] font-mono text-white ${tr.color} flex justify-between items-center group`}
                        >
                          <span>{tr.name}</span>
                          <span className="text-neutral-500 group-hover:text-white transition-colors">{tr.duration}</span>
                        </div>
                      ))}
                      <button
                        onClick={() => setVideoTracks([...videoTracks, { id: Date.now().toString(), name: 'Scene Added Program', type: 'video', duration: '3s', color: 'bg-[#121226]/50 border-purple-500/10' }])}
                        className="p-2 border border-dashed border-neutral-800 hover:border-purple-500/30 text-neutral-500 hover:text-white rounded-lg transition-colors text-[9px] uppercase tracking-wider font-mono px-3.5"
                      >
                        + Block
                      </button>
                    </div>
                  </div>

                  {/* Audio Speech channels */}
                  <div className="flex items-center gap-3">
                    <span className="w-16 font-mono text-[9px] text-neutral-400 uppercase tracking-widest font-sans">AUDIO:</span>
                    <div className="flex-1 flex gap-2">
                      {audioTracks.map((tr) => (
                        <div
                          key={tr.id}
                          className={`flex-grow p-3 rounded-lg border text-[10px] font-mono text-white ${tr.color} flex justify-between items-center`}
                        >
                          <span>🎙️ {tr.name}</span>
                          <span className="text-neutral-500">{tr.duration}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4 select-none pt-2">
                <button
                  onClick={() => {
                    setIsPlaying(!isPlaying);
                  }}
                  className={`px-5 py-3 rounded-xl border text-xs font-mono font-bold uppercase transition-colors flex items-center gap-1.5 focus:outline-none cursor-pointer ${
                    isPlaying 
                      ? 'bg-purple-950/50 border-purple-500/55 text-white' 
                      : 'bg-neutral-900 hover:bg-neutral-850 hover:border-neutral-700 text-neutral-300'
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-purple-400" /> Pause Timeline
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-purple-400" /> Play Simulated Assembly
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    setVideoTracks([
                      { id: 't1', name: 'Scene 01 - Golden Hour Goregaon', type: 'video', duration: '4s', color: 'bg-indigo-950/40 border-indigo-500/25' },
                      { id: 't2', name: 'Scene 02 - Core Lab Matrix', type: 'video', duration: '6s', color: 'bg-indigo-950/40 border-indigo-500/25' }
                    ]);
                    setAudioTracks([
                      { id: 'a1', name: 'Aravind Voiceover Monologue', type: 'audio', duration: '10s', color: 'bg-purple-950/40 border-purple-500/25' }
                    ]);
                  }}
                  className="px-5 py-3 bg-neutral-905 border border-neutral-850 hover:bg-neutral-900 text-neutral-400 hover:text-white rounded-xl text-xs font-mono uppercase tracking-wider transition-colors"
                >
                  Reset Tracks
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================= MULTI-LANGUAGE DUBBING PAGE ======================= */}
      {page === 'multi-language-dubbing' && (
        <div className="space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block font-sans">05 // LINGUISTIC ALIGNMENT WORKSPACE</span>
              <h1 className="text-4xl md:text-5xl font-sans text-white tracking-tight leading-none font-medium">
                The Laundris <br />
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent font-sans">AI Multi-Language Dubbing Cores</span>
              </h1>
              <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                Translate advertisements, product explainers, and corporate presentations in real-time. Simply feed a synthesized video file, nominate target regional dialects, and let our deep voice match algorithm generate an overlay track. The lipsync matrix refines face coordinate vectors automatically for natural looking outputs.
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                <div className="bg-neutral-950 p-4.5 border border-neutral-900 rounded-xl space-y-1">
                  <strong className="text-white block uppercase text-[11.5px]">Neural Lipsync Aligner</strong>
                  <p className="text-[10.5px] text-neutral-500">Redraws micro mouth coordinate frameworks to match new language dialects perfectly.</p>
                </div>
                <div className="bg-neutral-950 p-4.5 border border-neutral-900 rounded-xl space-y-1">
                  <strong className="text-white block uppercase text-[11.5px]">Dialect Intonation Map</strong>
                  <p className="text-[10.5px] text-neutral-500">Maintains deep emotional characteristics, vocal pitch registers, and background audio signatures.</p>
                </div>
              </div>
            </div>

            {/* Dubbing Control Sandbox Widget */}
            <div className="lg:col-span-5 bg-neutral-950/90 border border-neutral-900 p-6 rounded-2xl space-y-5 relative overflow-hidden backdrop-blur-md">
              <div className="flex justify-between items-center border-b border-neutral-900 pb-3">
                <div className="flex items-center gap-1.5 font-mono text-[9.5px] tracking-widest text-purple-400 uppercase">
                  <Languages className="w-3.5 h-3.5 animate-pulse" /> DUB AND SYNC MANAGER
                </div>
                <span className="text-[9px] text-neutral-500 font-mono">Mumbai Linguistic Desk</span>
              </div>

              {/* Language selections */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-[9px] text-neutral-400 font-mono uppercase tracking-wide block">Source Language</label>
                  <select
                    value={sourceLanguage}
                    onChange={(e) => setSourceLanguage(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 text-[10.5px] rounded-lg p-2 text-white focus:outline-none"
                  >
                    <option>English</option>
                    <option>Hindi (Standard)</option>
                    <option>Marathi (Corporate)</option>
                    <option>Spanish (Neutral)</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] text-neutral-400 font-mono uppercase tracking-wide block">Target Dialect</label>
                  <select
                    value={targetLanguage}
                    onChange={(e) => setTargetLanguage(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 text-[10.5px] rounded-lg p-2 text-white focus:outline-none"
                  >
                    <option>Hindi (Mumbai Dialect)</option>
                    <option>Marathi (Pune Register)</option>
                    <option>Japanese (Tokyo Dub)</option>
                    <option>German (Bavarian Tone)</option>
                  </select>
                </div>
              </div>

              {/* Dubbing style parameters */}
              <div className="space-y-1.5">
                <label className="text-[9px] text-neutral-400 font-mono uppercase tracking-wide block">Dubbing Aligner Mode:</label>
                <select
                  value={dubbingStyle}
                  onChange={(e) => setDubbingStyle(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 text-[11px] rounded-lg p-2.5 text-white focus:outline-none block"
                >
                  <option>LipSynced (Neural Mesh Alignment)</option>
                  <option>Voiceover Overlay (Keep original video shapes)</option>
                  <option>Subtitled Text Only (Translation files)</option>
                </select>
              </div>

              {/* Processing trigger button */}
              <button
                onClick={handleDubbingProcess}
                disabled={isDubbing}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-650 hover:from-purple-500 hover:to-indigo-550 text-white font-mono text-[10px] font-bold uppercase tracking-wider rounded-xl shadow-lg transition-transform flex items-center justify-center gap-1.5 select-none focus:outline-none"
              >
                {isDubbing ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" /> ALIGNING LIP COORD MATRICES...
                  </>
                ) : (
                  <>
                    START NEURAL DUB PROCESS <Globe className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              {/* Translation Outcome Alert */}
              {dubSuccess && !isDubbing && (
                <div className="bg-green-500/10 text-green-400 border border-green-500/20 p-4 rounded-xl text-center space-y-2">
                  <strong className="text-xs uppercase block tracking-wider font-sans">✓ Linguistic dub succeeded!</strong>
                  <p className="text-[10px] font-mono uppercase leading-relaxed">
                    Source: {sourceLanguage} → Target Dialect: {targetLanguage} <br />
                    <span className="text-purple-300">Method: {dubbingStyle}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ======================= CONTENT GENERATOR PAGE ======================= */}
      {page === 'content-generator' && (
        <div className="space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block font-sans">06 // SCRIPT GENERATOR CONSOLE</span>
              <h1 className="text-4xl md:text-5xl font-sans text-white tracking-tight leading-none font-medium">
                The Laundris <br />
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent font-sans">AI Multi-Scene Content Generator</span>
              </h1>
              <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                Unlock structured scripts instantly from raw keyword sets. Simply map your targeted creative direction, seed core selling terms, and our generator maps beautiful multi-scene drafts complete with cinematic visual directions, actor framing scripts, and voiceover text timelines.
              </p>
              
              <div className="space-y-3.5 text-xs text-left">
                <div className="bg-neutral-950 p-4 border border-neutral-900 rounded-xl space-y-1 flex-1">
                  <strong className="text-white block font-sans uppercase text-[11px]">Structured Multi-Scene Layouts</strong>
                  <p className="text-[10.5px] text-neutral-500 leading-normal">Instantly organizes raw briefs into sequential script sections with visual descriptions.</p>
                </div>
                <div className="bg-neutral-950 p-4 border border-neutral-900 rounded-xl space-y-1 flex-1">
                  <strong className="text-white block font-sans uppercase text-[11px]">Auto Scene Timing Allocator</strong>
                  <p className="text-[10.5px] text-neutral-500 leading-normal">Our system predictively divides timing weights based on voice length, keeping compositions fluid.</p>
                </div>
              </div>
            </div>

            {/* Script Gen Sandbox widget */}
            <div className="lg:col-span-5 bg-neutral-950/90 border border-neutral-900 p-6 rounded-2xl space-y-5 relative overflow-hidden backdrop-blur-md">
              <div className="flex justify-between items-center border-b border-neutral-900 pb-3">
                <div className="flex items-center gap-1.5 font-mono text-[9.5px] tracking-widest text-purple-400 uppercase">
                  <FileText className="w-3.5 h-3.5 animate-pulse" /> SCRIPT DESIGN WORKSPACE
                </div>
                <span className="text-[9px] text-neutral-500 font-mono">Mumbai Writers Desk</span>
              </div>

              {/* Template selection */}
              <div className="space-y-1.5">
                <label className="text-[9px] text-neutral-400 font-mono uppercase tracking-wide block">Outline Template Style:</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Brand Ad Script',
                    'Corporate Showcase',
                    'Product Featurette',
                    'Teaser Trailer Brief'
                  ].map((temp) => (
                    <button
                      key={temp}
                      type="button"
                      onClick={() => setSelectedTemplate(temp)}
                      className={`text-[10px] font-mono p-2 rounded-lg border text-left transition-all ${
                        selectedTemplate === temp
                          ? 'bg-purple-950/30 border-purple-500/50 text-white font-bold'
                          : 'bg-neutral-900/40 border-neutral-850 text-neutral-400 hover:border-neutral-800'
                      }`}
                    >
                      🖋️ {temp}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brief Keywords */}
              <div className="space-y-1.5">
                <label className="text-[9px] text-neutral-400 font-mono uppercase tracking-wide block">Brand Core Keywords / Focus Area:</label>
                <input
                  type="text"
                  value={brandKeywords}
                  onChange={(e) => setBrandKeywords(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 text-[11px] text-white rounded-lg p-2.5 focus:outline-none font-sans"
                />
              </div>

              {/* Trigger Button */}
              <button
                onClick={handleGenerateScript}
                disabled={isGeneratingScript}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-650 hover:from-purple-500 hover:to-indigo-550 text-white font-mono text-[10px] font-bold uppercase tracking-wider rounded-xl shadow-lg transition-transform flex items-center justify-center gap-1.5 select-none focus:outline-none"
              >
                {isGeneratingScript ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" /> SYNTHESIZING DRAFT LINES...
                  </>
                ) : (
                  <>
                    GENERATE MULTI-SCENE SCRIPT <Plus className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              {/* Outcome Scripts Box */}
              {generatedScript.length > 0 && !isGeneratingScript && (
                <div className="bg-[#0b0b0b] border border-neutral-900 p-4 rounded-xl space-y-4">
                  <span className="text-[9.5px] text-purple-300 font-mono uppercase tracking-widest block font-bold">★ GENERATED STORYBOARD TRACKS:</span>
                  <div className="space-y-3.5 max-h-48 overflow-y-auto pr-1">
                    {generatedScript.map((sc: any) => (
                      <div key={sc.scene} className="border-b border-neutral-900 pb-3 last:border-0 last:pb-0 space-y-1">
                        <div className="flex justify-between items-center text-[9px] text-purple-400 font-mono font-bold">
                          <span>SCENE {sc.scene}</span>
                          <span>{sc.duration}</span>
                        </div>
                        <p className="text-[10px] text-white"><strong className="text-neutral-400">Visuals:</strong> {sc.visual}</p>
                        <p className="text-[10.5px] text-neutral-300 italic"><strong className="text-neutral-500">Audio:</strong> "{sc.voiceover}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 3. EXPERT ACTION CTA BANNER AT BASE */}
      <div className="border-t border-neutral-900 pt-20">
        <div className="bg-gradient-to-r from-purple-950/20 via-neutral-900 to-blue-955/25 border border-purple-550/25 rounded-2xl p-8 md:p-12 relative overflow-hidden text-center backdrop-blur-md">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block">TAILORED CORPORATE LICENSING</span>
            <h3 className="text-2xl md:text-4xl font-sans text-white tracking-tight leading-none">Need High Volume Dynamic Rendering?</h3>
            <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
              Unlock prioritized high-capacity GPU slots, custom webhook access keys, structured JSON template mapping, and dedicated tech advisory from our Mumbai engineering hub.
            </p>
            <div className="flex flex-wrap gap-4 justify-center select-none">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-650 hover:from-purple-500 hover:to-indigo-550 text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl shadow-lg hover:scale-101 transition-transform"
              >
                Inquire Developer Solutions
              </button>
              <button
                onClick={() => onNavigate('pricing')}
                className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-850 text-neutral-300 hover:text-white border border-neutral-800 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-colors"
              >
                View Licensing Tiers
              </button>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[90px] pointer-events-none" />
        </div>
      </div>

    </div>
  );
}
