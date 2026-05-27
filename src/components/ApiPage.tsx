/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Code, Key, Server, Terminal, Copy, Check, Play, FileText, Info } from 'lucide-react';
import { API_SAMPLES } from '../data';

export default function ApiPage() {
  const [activeLang, setActiveLang] = useState<'curl' | 'nodejs' | 'python'>('curl');
  const [copied, setCopied] = useState(false);
  const [activeToken, setActiveToken] = useState('LN_LIVE_982XF437a89b...02x5');

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRotateKey = () => {
    const chars = 'ABCDEF0123456789';
    let result = 'LN_LIVE_';
    for (let i = 0; i < 20; i++) {
       result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    result += '...rotated';
    setActiveToken(result);
    alert('Security Authorization Seat successfully rotated! Download and update your active .env integrations config file.');
  };

  const codeString = activeLang === 'curl' 
    ? API_SAMPLES.curl 
    : activeLang === 'nodejs' 
      ? API_SAMPLES.nodejs 
      : API_SAMPLES.python;

  return (
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-16" id="api-developer-root">
      {/* Intros Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block font-sans">DEVELOPER SYSTEM CORE</span>
        <h1 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-white leading-tight">
          Laundris Developer <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">REST API & SDKs</span>
        </h1>
        <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
          Automate dynamic video asset synthesis. Integrate programmatic commercial rendering, multi-voice dialog tracks, and storyboard flowcharts into your brand pipeline with a few lines of code.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column settings and configs */}
        <div className="lg:col-span-5 bg-neutral-950/80 border border-neutral-900 rounded-2xl p-6.5 backdrop-blur-md space-y-6">
          <div className="space-y-4">
            <h2 className="text-sm font-bold font-mono tracking-wider text-white uppercase flex items-center gap-2">
              <Key className="w-4 h-4 text-purple-400" /> Authorized Keyring
            </h2>
            <p className="text-neutral-400 text-xs font-sans">
              Authenticate requests by attaching your private Bearer Token in authorization headers. Never expose this key in public client bundles.
            </p>

            {/* Secret key viewer and rotation */}
            <div className="bg-neutral-900/60 p-3.5 border border-neutral-850 rounded-xl space-y-3.5">
              <div className="flex justify-between text-[10px] font-mono text-neutral-500 uppercase tracking-widest leading-none">
                <span>Active Token Name</span>
                <span>Owner: help@laundris.in</span>
              </div>
              <div className="bg-black/40 px-3 py-2 border border-neutral-950 rounded text-xs font-mono text-neutral-300 break-all select-all">
                {activeToken}
              </div>
              <button
                onClick={handleRotateKey}
                className="w-full py-2 bg-neutral-900 border border-neutral-800 hover:border-purple-900/30 text-neutral-400 hover:text-purple-300 text-[10.5px] font-mono uppercase tracking-wider font-semibold rounded-lg transition-all"
                id="rotate-key-btn"
              >
                Rotate Authorization Seat
              </button>
            </div>
          </div>

          {/* Endpoints specs details list */}
          <div className="space-y-4 border-t border-neutral-900 pt-5">
            <h3 className="text-xs font-bold font-mono text-neutral-400 uppercase tracking-widest">Active Endpoints Matrix</h3>
            <div className="space-y-3 text-xs font-mono">
              <div className="flex justify-between items-center bg-neutral-900 p-3 rounded-xl border border-neutral-850">
                <span className="text-green-400 font-bold">POST</span>
                <span className="text-white">/v1/video/generate</span>
                <span className="text-[10px] text-neutral-500 font-sans">Render clip</span>
              </div>
              <div className="flex justify-between items-center bg-neutral-900 p-3 rounded-xl border border-neutral-850">
                <span className="text-blue-400 font-bold">GET</span>
                <span className="text-white">/v1/video/status/:id</span>
                <span className="text-[10px] text-neutral-500 font-sans">Poll state</span>
              </div>
              <div className="flex justify-between items-center bg-neutral-900 p-3 rounded-xl border border-neutral-850">
                <span className="text-purple-400 font-bold">POST</span>
                <span className="text-white font-mono">/v1/voice/generate</span>
                <span className="text-[10px] text-neutral-500 font-sans">TTS voice</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column Code Terminal Editor */}
        <div className="lg:col-span-7 bg-black rounded-2xl border border-neutral-850 overflow-hidden flex flex-col justify-between">
          <div className="p-4 bg-neutral-950/80 border-b border-neutral-900 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-600/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-600/60" />
              <span className="w-3 h-3 rounded-full bg-green-600/60" />
              <span className="text-[10.5px] font-mono text-neutral-400 ml-2.5 flex items-center gap-1.5Uppercase select-none">
                <Terminal className="w-4 h-4 text-purple-400" /> SDK integration console
              </span>
            </div>

            {/* Language selectors */}
            <div className="flex gap-1.5 select-none">
              {(['curl', 'nodejs', 'python'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLang(lang)}
                  className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider transition-all ${
                    activeLang === lang
                      ? 'bg-neutral-900 text-purple-300 border border-purple-500/20 shadow-md'
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  {lang === 'nodejs' ? 'NodeJS' : lang === 'python' ? 'Python' : 'cURL'}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal view container */}
          <div className="relative flex-1 p-5 min-h-72 bg-neutral-950 overflow-auto text-xs font-mono text-neutral-200">
            <pre className="whitespace-pre">{codeString}</pre>
            
            {/* Action copy button */}
            <button
              onClick={() => handleCopy(codeString)}
              className="absolute top-4 right-4 p-2 bg-neutral-900 hover:bg-neutral-850 hover:text-white border border-neutral-800 rounded-lg text-neutral-400 transition-all"
              id="copy-code-btn"
              title="Copy Code Snippet"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Mock Server Response preview */}
          <div className="bg-neutral-950 p-4 border-t border-neutral-900">
            <span className="text-[9.5px] text-neutral-500 font-mono uppercase tracking-widest block mb-2.5 leading-none select-none">Sample Server Response (JSON)</span>
            <div className="bg-black/60 p-3 rounded-lg border border-neutral-900 font-mono text-[10.5px] text-green-400">
              <pre>{`{
  "status": "processing",
  "project_id": "job_9x4057f893",
  "queue_priority": "high",
  "est_render_ms": "180000",
  "estimated_delivery": "${new Date(Date.now() + 180000).toLocaleTimeString()}"
}`}</pre>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-950/40 p-4.5 border border-neutral-900 rounded-xl flex gap-3.5 text-xs text-neutral-400 select-none">
        <Info className="w-4.5 h-4.5 text-purple-400 shrink-0 mt-0.5" />
        <div>
          An enterprise developer sandbox is available upon registration. We support full custom webhooks for automated asset deployment. Complete SDK setup references by reviewing credentials at our Mumbai HQ mailbox help@laundris.in.
        </div>
      </div>
    </div>
  );
}
