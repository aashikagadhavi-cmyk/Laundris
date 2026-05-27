/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Play, Film, Sliders, Laptop, Clock, ArrowRight, Video, Download } from 'lucide-react';
import { ScriptScene, GeneratedVideo } from '../types';
import { VIDEO_SHOWCASE } from '../data';

const DEMO_SUGGESTIONS = [
  'A luxury electric sports car racing down Goregaon West highway under cinematic golden hour neon twilight',
  'An old vintage analog camera on a mahogany table, sliding focus with soft volumetric dust motes',
  'A soaring dynamic drone orbit of snow-capped Himalayan peaks piercing thick morning clouds',
  'Cosmetic crystal oil bottle on organic layered wet rocks, slow macro studio lighting pan'
];

const STYLES = [
  { id: 'cinematic', label: 'Hollywood Cinematic', accent: 'from-amber-500 to-red-600' },
  { id: 'cyberpunk', label: 'Neon Cyberpunk 8K', accent: 'from-purple-500 to-blue-600' },
  { id: 'drone', label: 'Panoramic Drone Orbit', accent: 'from-green-500 to-blue-600' },
  { id: 'minimalist', label: 'Premium Studio Product', accent: 'from-rose-500 to-purple-600' }
];

export default function DemoPage() {
  const [prompt, setPrompt] = useState(DEMO_SUGGESTIONS[0]);
  const [style, setStyle] = useState('cinematic');
  const [duration, setDuration] = useState('15s');
  const [resolution, setResolution] = useState('4K');
  const [isGenerating, setIsGenerating] = useState(false);
  const [renderStep, setRenderStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [renderLogs, setRenderLogs] = useState<string[]>([]);
  const [generatedVideo, setGeneratedVideo] = useState<GeneratedVideo | null>(null);

  // Suggested prompt select
  const selectSuggestion = (text: string) => {
    setPrompt(text);
  };

  const startGeneration = async () => {
    if (!prompt.trim() || isGenerating) return;

    setIsGenerating(true);
    setProgress(0);
    setRenderStep(0);
    setGeneratedVideo(null);
    setRenderLogs(['Connecting to Laundris Render Cluster...', 'Synthesizing creative direction...']);

    let scriptResult: ScriptScene[] = [];
    let title = prompt.length > 25 ? prompt.slice(0, 25) + '...' : prompt;

    // 1. Fetch AI Script directions from backend in background early
    try {
      const response = await fetch('/api/generate-script', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, style, duration, resolution })
      });
      if (response.ok) {
        const data = await response.json();
        scriptResult = data.scenes;
        title = data.title;
      }
    } catch (e) {
      console.error('Failed fetching script:', e);
    }

    // 2. Beautiful render ticker cycles
    const logs = [
      'Reading visual parameters successfully',
      'Generating storyboard direction',
      'Running procedural camera paths with [Dolly Pan] coordinates',
      'Composing atmospheric lighting & volumetric fog variables',
      'Beginning GPU core denoising cycle [Pass 1/12]',
      'Consolidating high-definition movie textures',
      'Synchronizing synthesized AI voice dialogue tracks',
      'Compacting ultra-high resolution cinematic final video...'
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + 4;
        
        // Push log entries at varying intervals
        if (nextProgress % 12 === 0 && renderStep < logs.length) {
          setRenderLogs((prevLogs) => [...prevLogs, logs[renderStep]]);
          setRenderStep((prevStep) => prevStep + 1);
        }

        if (nextProgress >= 100) {
          clearInterval(timer);
          
          // Select correct video depending on style
          let url = VIDEO_SHOWCASE[1].videoUrl; // sports car default
          let thumb = VIDEO_SHOWCASE[1].thumbnailUrl;
          if (style === 'cyberpunk') {
            url = VIDEO_SHOWCASE[0].videoUrl;
            thumb = VIDEO_SHOWCASE[0].thumbnailUrl;
          } else if (style === 'drone') {
            url = VIDEO_SHOWCASE[2].videoUrl;
            thumb = VIDEO_SHOWCASE[2].thumbnailUrl;
          } else if (style === 'minimalist') {
            url = VIDEO_SHOWCASE[4].videoUrl;
            thumb = VIDEO_SHOWCASE[4].thumbnailUrl;
          }

          // Generate final payload
          setGeneratedVideo({
            id: `v-${Date.now()}`,
            prompt: prompt,
            title: title,
            style: style,
            aspect: '16:9',
            resolution: resolution,
            videoUrl: url,
            thumbnailUrl: thumb,
            duration: duration,
            createdAt: new Date().toLocaleDateString(),
            script: scriptResult.length > 0 ? scriptResult : undefined
          });
          setIsGenerating(false);
          return 100;
        }
        return nextProgress;
      });
    }, 240);
  };

  return (
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-16" id="demo-section-page">
      {/* Intros Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-wider uppercase rounded-full">
          <Film className="w-3.5 h-3.5 animate-pulse" /> Sandbox Interactive Laboratory
        </div>
        <h1 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-white leading-tight">
          Laundris AI <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Studio Sandbox</span>
        </h1>
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
          Experience real studio capabilities. Our generative model compiles descriptions, writes camera directions, synthesizes audio files, and renders a fully compiled preview.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column Settings */}
        <div className="lg:col-span-5 bg-neutral-950/80 border border-neutral-800/80 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-neutral-800 pb-4">
              <Sliders className="w-5 h-5 text-purple-400" />
              <h2 className="text-md font-semibold text-white tracking-wide">Studio Configuration</h2>
            </div>

            {/* Suggestions buttons */}
            <div className="space-y-2">
              <span className="text-xs text-neutral-400 font-mono uppercase tracking-wider block">Or Select a Sample Prompt</span>
              <div className="flex flex-wrap gap-2">
                {DEMO_SUGGESTIONS.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectSuggestion(s)}
                    className="text-[11px] text-neutral-300 bg-neutral-900 border border-neutral-850 hover:bg-neutral-800 rounded-lg px-2.5 py-1.5 text-left transition-all duration-200"
                    id={`suggestion-btn-${idx}`}
                  >
                    "{s.slice(0, 32)}..."
                  </button>
                ))}
              </div>
            </div>

            {/* Prompt textarea */}
            <div className="space-y-2">
              <label htmlFor="prompt-input" className="text-xs text-neutral-400 font-mono uppercase tracking-wider block">Cinematic Prompt</label>
              <textarea
                id="prompt-input"
                rows={4}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your cinematic setting, camera tracking tags, lighting atmospheric properties..."
                className="w-full bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 focus:border-purple-500/50 text-xs text-white rounded-xl p-3.5 focus:outline-none transition-colors"
              />
            </div>

            {/* Rendering style */}
            <div className="space-y-2">
              <label htmlFor="style-select" className="text-xs text-neutral-400 font-mono uppercase tracking-wider block">Visual Direction Preset</label>
              <div className="grid grid-cols-2 gap-3" id="style-select">
                {STYLES.map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setStyle(st.id)}
                    className={`p-3 rounded-xl border text-left transition-all duration-300 relative overflow-hidden ${
                      style === st.id
                        ? 'border-purple-500 bg-purple-950/20 text-white'
                        : 'border-neutral-800 bg-neutral-900/30 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <span className="block text-xs font-medium z-10 relative">{st.label}</span>
                    <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${st.accent}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Config metadata */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <label htmlFor="duration-select" className="text-xs text-neutral-400 font-mono uppercase tracking-wider block">Render Duration</label>
                <select
                  id="duration-select"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 focus:border-purple-500/50 rounded-xl p-2.5 text-xs text-white focus:outline-none"
                >
                  <option value="10s">10 SECONDS</option>
                  <option value="15s">15 SECONDS</option>
                  <option value="24s">24 SECONDS (HIGH HD)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="resolution-select" className="text-xs text-neutral-400 font-mono uppercase tracking-wider block">Asset Quality</label>
                <select
                  id="resolution-select"
                  value={resolution}
                  onChange={(e) => setResolution(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 focus:border-purple-500/50 rounded-xl p-2.5 text-xs text-white focus:outline-none"
                >
                  <option value="720p">HD (720P)</option>
                  <option value="1080p">FULL HD (1080P)</option>
                  <option value="4K">ULTRA HD 4K (PRO)</option>
                </select>
              </div>
            </div>
          </div>

          <button
            onClick={startGeneration}
            disabled={!prompt.trim() || isGenerating}
            className="w-full mt-8 py-3.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white font-medium rounded-xl shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2 group transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-xs uppercase"
            id="generate-video-btn"
          >
            {isGenerating ? (
              <>
                <Sparkles className="w-4.5 h-4.5 animate-spin" /> Synthesizing Render... {progress}%
              </>
            ) : (
              <>
                Generate AI video <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>

        {/* Right column Display */}
        <div className="lg:col-span-7 min-h-[480px] bg-neutral-950/80 border border-neutral-800/80 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-center items-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            {/* 1. Default State */}
            {!isGenerating && !generatedVideo && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center space-y-4 max-w-sm"
                key="default-display"
              >
                <div className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto text-purple-400 shadow-inner">
                  <Video className="w-8 h-8" />
                </div>
                <h3 className="text-md font-semibold text-white">Renderer Standby</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Select config, enter your vision prompts, and click 'Generate'. Laundris Private Limited cloud cores will compile your workspace instantly.
                </p>
              </motion.div>
            )}

            {/* 2. Generating / Progress Monitor */}
            {isGenerating && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full flex flex-col justify-between"
                key="loading-display"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-neutral-900 border border-neutral-800/80 p-3 rounded-xl">
                    <span className="text-xs font-semibold text-purple-300 uppercase font-mono tracking-wider flex items-center gap-2">
                      <Laptop className="w-3.5 h-3.5 animate-pulse text-purple-500" /> GPU NODES WORKING
                    </span>
                    <span className="text-xs font-mono text-purple-300">{progress}%</span>
                  </div>

                  {/* Progressive loading bar */}
                  <div className="w-full h-1.5 bg-neutral-900 border border-neutral-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Console Log outputs */}
                <div className="flex-1 my-6 bg-neutral-900/50 rounded-xl p-4 border border-neutral-850 overflow-y-auto font-mono text-[10px] space-y-2.5 max-h-56">
                  {renderLogs.map((log, idx) => (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.15 }}
                      key={idx}
                      className="text-neutral-400 flex items-start gap-2"
                    >
                      <span className="text-purple-500 select-none">▶</span>
                      <span>{log}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center text-[11px] text-neutral-500 animate-pulse font-mono uppercase tracking-wider">
                  Est. remaining render time: {Math.max(1, Math.round((100 - progress) / 10))}s (Server: Mumbai High)
                </div>
              </motion.div>
            )}

            {/* 3. Successful Generation Preview */}
            {generatedVideo && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full flex flex-col gap-6"
                key="render-success-display"
              >
                {/* Widescreen player wrapper */}
                <div className="relative group rounded-xl overflow-hidden aspect-video bg-black border border-neutral-800">
                  <video
                    src={generatedVideo.videoUrl}
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    loop
                    id="sandbox-video-frame"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-neutral-800 px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider text-green-400 flex items-center gap-1.5 select-none">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" /> PRO COMPACT GENERATED • {generatedVideo.resolution}
                  </div>
                </div>

                {/* Director details and scripts */}
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-sm font-semibold text-white leading-tight capitalize">{generatedVideo.title}</h3>
                      <p className="text-[11px] text-neutral-400 italic mt-1 font-sans">Prompt: "{generatedVideo.prompt}"</p>
                    </div>
                    <button
                      onClick={() => alert("Simulation: Clean MP4 master asset compile downloading...")}
                      className="px-3.5 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-[11px] font-mono text-purple-400 border border-purple-500/30 rounded-lg flex items-center gap-1.5 transition-all select-none hover:shadow-lg hover:shadow-purple-500/5"
                    >
                      <Download className="w-3.5 h-3.5" /> DOWNLOAD
                    </button>
                  </div>

                  {/* AI Cinema directions breakdown */}
                  {generatedVideo.script && (
                    <div className="space-y-3.5 border-t border-neutral-900 pt-4">
                      <span className="text-[11px] text-neutral-400 font-mono tracking-widest uppercase block">AI Script Breakdown ({generatedVideo.style})</span>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {generatedVideo.script.map((scene) => (
                          <div key={scene.sceneNumber} className="bg-neutral-900 p-3 rounded-xl border border-neutral-850 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-center border-b border-neutral-800 pb-1.5 mb-2">
                                <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest">SCENE {scene.sceneNumber}</span>
                                <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider">{scene.duration}</span>
                              </div>
                              <p className="text-[10px] text-neutral-300 leading-relaxed line-clamp-4 hover:line-clamp-none transition-all duration-200">
                                <strong>Visuals:</strong> {scene.visualDescription}
                              </p>
                            </div>
                            <div className="mt-3 text-[9px] font-sans text-neutral-400 bg-black/50 p-1.5 rounded border border-neutral-950">
                              <span className="font-mono text-purple-300 uppercase tracking-wider block mb-0.5">Voiceover Dialogue</span>
                              "{scene.voiceover}"
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
