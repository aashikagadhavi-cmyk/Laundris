/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Code, Key, Server, Terminal, Copy, Check, Play, FileText, Info, 
  Settings, Puzzle, DollarSign, ArrowRight, ShieldCheck, Mail, Sliders, RefreshCw
} from 'lucide-react';
import { API_SAMPLES } from '../data';

export default function ApiPage() {
  const [activeLang, setActiveLang] = useState<'nodejs' | 'python' | 'curl'>('nodejs');
  const [activeTab, setActiveTab] = useState<'auth' | 'video' | 'voice' | 'webhooks'>('video');
  const [copied, setCopied] = useState(false);
  const [activeToken, setActiveToken] = useState('LN_LIVE_724XG981m43a...82q9');
  
  // Playground state
  const [playPrompt, setPlayPrompt] = useState('A dramatic anamorphic sweep of Mumbai high rises, cyberpunk twilight lighting');
  const [playModel, setPlayModel] = useState('laundris-cine-v4');
  const [playFps, setPlayFps] = useState('60fps');
  const [playgroundSuccess, setPlaygroundSuccess] = useState<any>(null);
  const [isPlayinggroundLoading, setIsPlaygroundLoading] = useState(false);

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
  };

  const handleRunPlayground = () => {
    setIsPlaygroundLoading(true);
    setPlaygroundSuccess(null);
    setTimeout(() => {
      setIsPlaygroundLoading(false);
      setPlaygroundSuccess({
        status: "succeeded",
        id: `job_${Math.random().toString(36).substr(2, 9)}`,
        model: playModel,
        fps: playFps,
        cost: "0.04 Credits",
        resolution: "3840x2160 (4K Uncompressed)",
        output_url: "https://laundris.in/outputs/preview_sample_prores.mp4"
      });
    }, 1200);
  };

  // Dedicated dynamic code presets based on active lang + active tab
  const getDynamicCode = () => {
    if (activeTab === 'auth') {
      if (activeLang === 'curl') {
        return `curl -X GET "https://api.laundris.in/v1/auth/verify" \\
  -H "Authorization: Bearer ${activeToken}" \\
  -H "Content-Type: application/json"`;
      } else if (activeLang === 'nodejs') {
        return `import { LaundrisClient } from '@laundris/sdk';

const laundris = new LaundrisClient({
  apiKey: "${activeToken}"
});

// Verify security seat session
const org = await laundris.auth.verify();
console.log(\`Authenticated as: \${org.company_name}\`);`;
      } else {
        return `from laundris import LaundrisClient

laundris = LaundrisClient(
    api_key="${activeToken}"
)

# Verify security credentials
org = laundris.auth.verify()
print(f"Authenticated as: {org['company_name']}")`;
      }
    }

    if (activeTab === 'video') {
      if (activeLang === 'curl') {
        return `curl -X POST "https://api.laundris.in/v1/video/generate" \\
  -H "Authorization: Bearer ${activeToken}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "${playPrompt}",
    "model": "${playModel}",
    "aspect_ratio": "16:9",
    "framerate": "${playFps}",
    "camera_tracking": "Anamorphic Cinematic Pan"
  }'`;
      } else if (activeLang === 'nodejs') {
        return `import { LaundrisClient } from '@laundris/sdk';

const laundris = new LaundrisClient({ apiKey: "${activeToken}" });

const render = await laundris.video.generate({
  prompt: "${playPrompt}",
  model: "${playModel}",
  aspectRatio: "16:9",
  cameraMovement: "anamorphic_dolly_forward",
  durationSec: 10
});

console.log(\`Video Render Started. ID: \${render.id}\`);`;
      } else {
        return `from laundris import LaundrisClient

client = LaundrisClient(api_key="${activeToken}")

render = client.video.generate(
    prompt="${playPrompt}",
    model="${playModel}",
    aspect_ratio="16:9",
    duration_sec=10
)

print(f"Video synthesis initiated: {render['id']}")`;
      }
    }

    if (activeTab === 'voice') {
      if (activeLang === 'curl') {
        return `curl -X POST "https://api.laundris.in/v1/voice/generate" \\
  -H "Authorization: Bearer ${activeToken}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Laundris Private Limited converts script copies instantly.",
    "voice_id": "aravind-mumbai-studio",
    "pitch_level": 1.0,
    "speed": 1.0
  }'`;
      } else if (activeLang === 'nodejs') {
        return `import { LaundrisClient } from '@laundris/sdk';

const laundris = new LaundrisClient({ apiKey: "${activeToken}" });

const voice = await laundris.voice.generate({
  text: "Laundris Private Limited converts script copies instantly.",
  voiceId: "aravind-mumbai-studio",
  pitch: 1.0,
  speed: 1.0
});

console.log(\`Audio compiled successfully. Stream URL: \${voice.audioUrl}\`);`;
      } else {
        return `from laundris import LaundrisClient

client = LaundrisClient(api_key="${activeToken}")

voice = client.voice.generate(
    text="Laundris Private Limited converts script copies instantly.",
    voice_id="aravind-mumbai-studio",
    speed=1.0
)

print(f"Audio Compiled: {voice['audioUrl']}")`;
      }
    }

    // Webhooks tab
    if (activeLang === 'curl') {
      return `curl -X POST "https://api.laundris.in/v1/webhooks/subscribe" \\
  -H "Authorization: Bearer ${activeToken}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "event": "video.render.completed",
    "target_url": "https://yourbrand.com/hooks/laundris-receiver"
  }'`;
    } else if (activeLang === 'nodejs') {
      return `import { LaundrisClient } from '@laundris/sdk';

// Verify signed webhook payload
const rawPayload = req.body;
const signature = req.headers['laundris-signature'];

const isValid = laundris.webhooks.verifySignature(rawPayload, signature);
if (isValid) {
  console.log('Webhook validated successfully! Parsing metadata...');
}`;
    } else {
      return `from laundris import LaundrisClient

# Validate signed payload
is_valid = LaundrisClient.webhooks.verify_signature(
    payload=raw_json,
    signature=headers['laundris-signature']
)
if is_valid:
    print("Security pass validated: parsing movie frame details.")`;
    }
  };

  const dynamicCode = getDynamicCode();

  return (
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-20 animate-fade-in text-left font-sans" id="api-developer-root">
      
      {/* 1. Header Section */}
      <div className="space-y-6 max-w-3xl">
        <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block font-bold">// DEVSYSTEM CENTER CONTROLS</span>
        <h1 className="text-4xl md:text-6xl tracking-tight leading-none text-white font-medium">
          Laundris Developer <br />
          <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent font-sans">SaaS API & Platform SDKs</span>
        </h1>
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-sans">
          Incorporate high-fidelity generative video render triggers, multi-voice oral alignments, and automatic lipsync algorithms direct inside your dynamic SaaS dashboards. Build in minutes using compliant Node.js or Python templates.
        </p>
      </div>

      {/* 2. Interactive Bento Layout: Key management & Live Playground */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: API parameters & Settings */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Keyring component card */}
          <div className="bg-neutral-950/90 border border-neutral-900 rounded-2xl p-6 relative overflow-hidden">
            <div className="space-y-4">
              <h3 className="text-sm font-bold font-mono tracking-wider text-white uppercase flex items-center gap-2">
                <Key className="w-4 h-4 text-purple-400" /> API KEYROOM ACCESS
              </h3>
              <p className="text-neutral-400 text-xs font-sans leading-relaxed">
                Provide authorization credentials inside your HTTP header vectors. Always secure your keys server-side to avoid cross-domain exploitation.
              </p>

              <div className="bg-neutral-900/60 p-3.5 border border-neutral-850 rounded-xl space-y-3">
                <div className="flex justify-between text-[9px] font-mono text-neutral-500 uppercase tracking-widest leading-none">
                  <span>SANDBOX ACCOUNT ENGINE</span>
                  <span className="text-green-400 font-bold">● ONLINE KEY</span>
                </div>
                <div className="bg-black/40 px-3 py-2 border border-neutral-950 rounded text-xs font-mono text-neutral-300 break-all select-all">
                  {activeToken}
                </div>
                <button
                  onClick={handleRotateKey}
                  className="w-full py-2.5 bg-neutral-900 hover:bg-neutral-850 text-neutral-300 hover:text-white border border-neutral-800 text-[10.5px] font-mono uppercase tracking-wider font-semibold rounded-lg transition-all focus:outline-none cursor-pointer"
                  id="rotate-key-btn"
                >
                  Rotate Secret Key
                </button>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-purple-500/5 rounded-full blur-[40px] pointer-events-none" />
          </div>

          {/* Playground Simulator */}
          <div className="bg-neutral-950/90 border border-neutral-900 rounded-2xl p-6 space-y-5">
            <h3 className="text-sm font-bold font-mono tracking-wider text-white uppercase flex items-center gap-2">
              <Sliders className="w-4 h-4 text-purple-405" /> API playground emulator
            </h3>
            
            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <label className="text-[9.5px] font-mono text-neutral-400 uppercase tracking-wide">Input Prompt String:</label>
                <input
                  type="text"
                  value={playPrompt}
                  onChange={(e) => setPlayPrompt(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-850 rounded-lg p-2.5 text-white focus:outline-none focus:border-purple-500/30 font-sans"
                />
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-[9.5px] font-mono text-neutral-400 uppercase tracking-wide">Model Core:</label>
                  <select
                    value={playModel}
                    onChange={(e) => setPlayModel(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-850 rounded-lg p-2 text-white focus:outline-none text-[11px]"
                  >
                    <option value="laundris-cine-v4">Laundris Cinema v4</option>
                    <option value="laundris-lipsync-mesh">Neural Lipsync v2</option>
                    <option value="laundris-fast-preview">UltraFast Draft</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[9.5px] font-mono text-neutral-400 uppercase tracking-wide">Framerate Spec:</label>
                  <select
                    value={playFps}
                    onChange={(e) => setPlayFps(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-850 rounded-lg p-2 text-white focus:outline-none text-[11px]"
                  >
                    <option value="60fps">60FPS ProRes</option>
                    <option value="30fps">30FPS Standard</option>
                    <option value="24fps">24FPS Cinematic</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              onClick={handleRunPlayground}
              disabled={isPlayinggroundLoading}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-650 hover:from-purple-500 hover:to-indigo-550 text-white font-mono text-[10px] font-bold uppercase tracking-wider rounded-xl shadow-lg transition-transform flex items-center justify-center gap-1.5 cursor-pointer"
            >
              {isPlayinggroundLoading ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" /> RUNNING SERVER COMPULATOR...
                </>
              ) : (
                <>
                  EXECUTE PLAYGROUND QUERY <Play className="w-3.5 h-3.5" />
                </>
              )}
            </button>

            {/* Simulated Server JSON response */}
            {playgroundSuccess && (
              <div className="bg-black/80 border border-neutral-900 rounded-xl p-4 space-y-3 font-mono text-[10px]">
                <div className="flex justify-between items-center text-green-400">
                  <span>✓ 200 OK STATUS</span>
                  <span>{playgroundSuccess.cost}</span>
                </div>
                <pre className="text-neutral-300 overflow-x-auto text-left leading-relaxed">
                  {JSON.stringify(playgroundSuccess, null, 2)}
                </pre>
              </div>
            )}

          </div>

        </div>

        {/* Right Column: Code integration & Documentation console */}
        <div className="lg:col-span-7 bg-neutral-950 border border-neutral-905 rounded-2xl overflow-hidden flex flex-col justify-between">
          
          {/* Header toolbar */}
          <div className="p-4 bg-neutral-950 border-b border-neutral-900 flex flex-wrap gap-4 justify-between items-center select-none">
            
            {/* Nav select tabs */}
            <div className="flex gap-2.5">
              {(['auth', 'video', 'voice', 'webhooks'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-[11px] font-mono uppercase tracking-wide py-1.5 px-3 rounded-lg border transition-colors cursor-pointer ${
                    activeTab === tab
                      ? 'bg-purple-950/30 border-purple-500/40 text-purple-300 font-bold'
                      : 'border-transparent text-neutral-400 hover:text-white'
                  }`}
                >
                  {tab === 'auth' && '🔑 Authenticate'}
                  {tab === 'video' && '📹 Text-to-Video'}
                  {tab === 'voice' && '🎙️ Audio Voice'}
                  {tab === 'webhooks' && '🔗 Webhooks'}
                </button>
              ))}
            </div>

            {/* Language Selection toggles */}
            <div className="flex gap-1.5 bg-neutral-900/60 p-1 rounded-lg border border-neutral-850">
              {(['nodejs', 'python', 'curl'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLang(lang)}
                  className={`px-3 py-1 rounded-md text-[9.5px] font-mono uppercase tracking-widest transition-all cursor-pointer ${
                    activeLang === lang
                      ? 'bg-purple-900/20 text-purple-300 font-bold border border-purple-500/10'
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  {lang === 'nodejs' ? 'JS SDK' : lang === 'python' ? 'Python' : 'cURL'}
                </button>
              ))}
            </div>

          </div>

          {/* Terminal Code Viewer */}
          <div className="relative flex-grow p-6 bg-black min-h-80 overflow-auto text-xs font-mono text-neutral-200">
            <pre className="whitespace-pre text-left leading-relaxed">{dynamicCode}</pre>
            
            {/* Copy button float */}
            <button
              onClick={() => handleCopy(dynamicCode)}
              className="absolute top-4 right-4 p-2 bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-neutral-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              title="Copy snippet"
              id="copy-snippet-btn"
            >
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Interactive footer parameters description */}
          <div className="bg-[#0a0a0d] p-5.5 border-t border-neutral-900 text-[11px] text-neutral-400 text-left space-y-1 font-sans">
            <strong className="text-white block font-mono text-[9px] uppercase tracking-widest font-bold">✓ Parameters overview indices</strong>
            <p className="leading-relaxed">
              {activeTab === 'auth' && 'Bearer authorization header is validated globally across Laundris servers. Maximum session seats defaults to 5.'}
              {activeTab === 'video' && 'Prompt strings support weights & advanced tags. Render costs deduct dynamically from credit balance.'}
              {activeTab === 'voice' && 'Generates expressive oral wave files. Default dialect parameter defaults to Indian regional sound accents.'}
              {activeTab === 'webhooks' && 'Subscribes target server URLs to receive automatic JSON payloads once rendering workflows status succeeds.'}
            </p>
          </div>

        </div>

      </div>

      {/* 3. API DEDICATED CREDIT PRICING SCHEME */}
      <div className="border-t border-neutral-900 pt-20 text-center space-y-10">
        <div className="space-y-4 max-w-2xl mx-auto">
          <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block font-bold">// PROGRAMMATIC CREDIT TIERS</span>
          <h3 className="text-2xl md:text-3xl text-white font-medium">Clear, Affordable API Licensing</h3>
          <p className="text-neutral-401 text-xs md:text-sm leading-relaxed text-neutral-400">
            Enjoy instant developer queue priority, custom webhook endpoints, and volume cost discount indexes based on your company usage scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-neutral-950 border border-neutral-900 p-6 rounded-2xl space-y-4 text-left hover:border-neutral-850 transition-colors">
            <div className="space-y-1">
              <span className="text-[10px] text-neutral-500 font-mono block uppercase">STARTER DEV TIER</span>
              <strong className="text-lg text-white block">Free Developer</strong>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-mono text-white font-bold">$0</span>
              <span className="text-[10px] text-neutral-500 font-mono uppercase">/ month</span>
            </div>
            <p className="text-neutral-400 text-[11px] leading-relaxed">Perfect for building visual storyboards, integrating sandbox testing, or small-scale prototyping.</p>
            <ul className="text-[10.5px] text-neutral-400 font-sans space-y-2 pt-2 border-t border-neutral-900">
              <li>• 10 Free credits monthly</li>
              <li>• Standard Queue Priority</li>
              <li>• 1 Concurrent rendering channel</li>
            </ul>
          </div>

          <div className="bg-gradient-to-b from-purple-950/20 to-neutral-950 border border-purple-500/30 p-6 rounded-2xl space-y-4 text-left relative overflow-hidden">
            <div className="absolute top-3 right-3 bg-purple-600 text-white text-[8.5px] font-mono px-2 py-0.5 rounded-full font-bold uppercase">POPULAR</div>
            <div className="space-y-1">
              <span className="text-[10px] text-purple-405 font-mono block uppercase">PRO ACCESS CORE</span>
              <strong className="text-lg text-white block">SaaS Scale Plan</strong>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-mono text-purple-400 font-bold">$199</span>
              <span className="text-[10px] text-neutral-500 font-mono uppercase">/ month</span>
            </div>
            <p className="text-neutral-400 text-[11px] leading-relaxed">For production workloads, automated content calendars, ecommerce catalog renders, and scale agency pipelines.</p>
            <ul className="text-[10.5px] text-neutral-300 font-sans space-y-2 pt-2 border-t border-neutral-900">
              <li className="text-green-400 font-semibold">• 10,000 High speed credits</li>
              <li>• Top Priority GPU Allocation</li>
              <li>• 5 Concurrent rendering pipeline threads</li>
              <li>• Signed Custom Webhook callbacks</li>
            </ul>
          </div>

          <div className="bg-neutral-950 border border-neutral-900 p-6 rounded-2xl space-y-4 text-left hover:border-neutral-850 transition-colors">
            <div className="space-y-1">
              <span className="text-[10px] text-neutral-500 font-mono block uppercase">ENTERPRISE SYSTEM SKU</span>
              <strong className="text-lg text-white block">Enterprise API</strong>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-mono text-white font-bold">Custom</span>
              <span className="text-[10px] text-neutral-500 font-mono uppercase">volume discount</span>
            </div>
            <p className="text-neutral-400 text-[11px] leading-relaxed">For massive volume workloads, custom-trained brand diffusion models, and secure private server hosting requirements.</p>
            <ul className="text-[10.5px] text-neutral-400 font-sans space-y-2 pt-2 border-t border-neutral-900 font-sans">
              <li>• Uncapped Dynamic Render Credits</li>
              <li>• Private Bare-Metal GPU isolated cluster</li>
              <li>• SLA guaranteed uptime matrix</li>
              <li>• SLA support desk from Mumbai HQ</li>
            </ul>
          </div>

        </div>
      </div>

      {/* 4. Support Alert */}
      <div className="bg-neutral-950/40 p-5 px-6 border border-neutral-900 rounded-2xl flex gap-3.5 text-xs text-neutral-400">
        <Info className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
        <div className="leading-relaxed font-sans">
          Our technical integration advisory is located within our Goregaon West corporate offices inside central Mumbai. Need custom Python scripts or direct enterprise onboarding? Reach our engineering team at <a href="mailto:help@laundris.in" className="text-purple-300 underline font-semibold">help@laundris.in</a>. We respond within 2-4 hours.
        </div>
      </div>

    </div>
  );
}
