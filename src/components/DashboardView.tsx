/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Film, Cpu, HardDrive, Layout, ChevronRight, Play, Laptop, Plus, RefreshCw, BarChart2, Shield, Settings, Trash, Users } from 'lucide-react';
import { MOCK_PROJECTS } from '../data';
import { Project } from '../types';

export default function DashboardView() {
  const [activeTab, setActiveTab] = useState<'all' | 'rendering' | 'completed'>('all');
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const stats = [
    { label: 'Total Rendered Videos', value: '47 clips', sub: 'Starter allocation cap' },
    { label: 'AI Credits Remaining', value: '1,500 cr', sub: 'Next billing: June 27' },
    { label: 'Active Render Nodes', value: '3 nodes', sub: 'Mumbai Core server cluster' }
  ];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      // Simulate progressing rendering projects
      const updated = projects.map(p => {
        if (p.status === 'rendering') {
          const nextProgress = Math.min(100, p.progress + 15);
          return {
            ...p,
            progress: nextProgress,
            status: nextProgress === 100 ? 'completed' as const : 'rendering' as const
          };
        }
        if (p.status === 'queued') {
          return {
            ...p,
            status: 'rendering' as const,
            progress: 10
          };
        }
        return p;
      });
      setProjects(updated);
      setIsRefreshing(false);
    }, 600);
  };

  const filteredProjects = projects.filter(p => {
    if (activeTab === 'rendering') return p.status === 'rendering' || p.status === 'queued';
    if (activeTab === 'completed') return p.status === 'completed';
    return true;
  });

  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-10" id="dashboard-root">
      {/* Dynamic dashboard header alerts */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide flex items-center gap-2">
            Creator Dashboard <span className="text-[10px] bg-purple-500/20 text-purple-400 font-mono tracking-wider px-2 py-0.5 rounded ml-2 select-none uppercase">PRO PLATFORM</span>
          </h1>
          <p className="text-neutral-400 text-xs mt-1">
            Logged in as help@laundris.in • Managing Laundris AI Studio workspace
          </p>
        </div>

        {/* Console control actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="p-2.5 bg-neutral-900 border border-neutral-800 hover:bg-neutral-850 hover:border-neutral-700 text-neutral-300 rounded-xl transition-all"
            title="Refresh Rendering Queues"
            id="refresh-dash-btn"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-purple-400' : ''}`} />
          </button>
          <button
            onClick={() => alert("Simulation: Open unified prompt workspace flow")}
            className="px-4 py-2.5 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white font-mono text-xs font-semibold rounded-xl shadow-lg shadow-purple-500/20 flex items-center gap-1.5 transition-all select-none"
            id="new-project-btn"
          >
            <Plus className="w-4 h-4" /> NEW RENDER JOB
          </button>
        </div>
      </div>

      {/* Analytics widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-neutral-950/80 border border-neutral-900 rounded-2xl p-5 relative overflow-hidden backdrop-blur-md">
            <span className="text-[9px] text-neutral-400 font-mono tracking-widest uppercase block">{stat.label}</span>
            <div className="text-2xl md:text-3xl font-sans font-bold text-white tracking-tight mt-2.5">
              {stat.value}
            </div>
            <p className="text-[10px] text-neutral-500 font-mono mt-1 leading-relaxed uppercase tracking-wider">{stat.sub}</p>
            <div className="absolute right-0 bottom-0 w-24 h-24 bg-purple-500/2 blur-[40px] pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Main projects timeline list */}
      <div className="bg-neutral-950/80 border border-neutral-900 rounded-2xl p-6 backdrop-blur-md space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-neutral-900 pb-4">
          <span className="text-xs font-bold text-white tracking-wider font-mono uppercase">Recent Renders Portfolio</span>

          {/* Tab switches */}
          <div className="flex gap-2.5 bg-neutral-900/50 border border-neutral-850 p-1 rounded-xl select-none">
            {(['all', 'rendering', 'completed'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider transition-all ${
                  activeTab === tab
                    ? 'bg-neutral-950 text-purple-300 border border-purple-500/20 shadow-md'
                    : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects cards grid list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProjects.map((p) => (
            <div key={p.id} className="bg-neutral-900/50 hover:bg-neutral-900 border border-neutral-850 hover:border-neutral-800 rounded-xl p-4 transition-all duration-200 space-y-3.5 relative overflow-hidden group">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xs font-bold text-white tracking-wide group-hover:text-purple-300 transition-colors capitalize">{p.name}</h3>
                  <span className="text-[10px] font-mono text-neutral-500 block">{p.date} • Style: {p.style}</span>
                </div>

                {/* Status Badges */}
                <div>
                  {p.status === 'completed' && (
                    <span className="bg-green-500/10 text-green-400 border border-green-500/20 rounded font-mono text-[8.5px] px-2 py-0.5 font-bold uppercase tracking-widest">
                      Ready 4K
                    </span>
                  )}
                  {p.status === 'rendering' && (
                    <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded font-mono text-[8.5px] px-2 py-0.5 font-bold uppercase tracking-widest animate-pulse">
                      Rendering {p.progress}%
                    </span>
                  )}
                  {p.status === 'queued' && (
                    <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded font-mono text-[8.5px] px-2 py-0.5 font-bold uppercase tracking-widest animate-pulse">
                      Queued
                    </span>
                  )}
                </div>
              </div>

              {/* Core description text prompt mapping */}
              <p className="text-[10.5px] text-neutral-400 font-sans italic leading-relaxed bg-black/30 p-2.5 rounded border border-neutral-900">
                "{p.prompt}"
              </p>

              {/* Progress bars if active */}
              {p.status !== 'completed' ? (
                <div className="space-y-1.5 pt-1.5">
                  <div className="w-full h-1 bg-neutral-950 border border-neutral-850 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                    <span>COMPILING SCENE CHUNKS</span>
                    <span>{p.duration} CAP</span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between border-t border-neutral-950 pt-3 text-[10px] font-mono text-neutral-500 tracking-wider">
                  <span>CLIP DURATION: {p.duration}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => alert(`Simulation: Fetching clean streaming media download URL for project: ${p.name}`)}
                      className="text-purple-400 hover:text-purple-300 transition-colors uppercase font-bold text-[9px]"
                    >
                      DOWNLOAD MP4
                    </button>
                    <span className="text-neutral-800">|</span>
                    <button
                      onClick={() => alert("Simulation: Launching secondary timeline rendering settings")}
                      className="text-neutral-400 hover:text-white transition-colors uppercase font-bold text-[9px]"
                    >
                      EDIT PROMPT
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {filteredProjects.length === 0 && (
            <div className="col-span-2 text-center p-12 bg-neutral-900/15 border border-dashed border-neutral-900 rounded-xl space-y-2">
              <span className="text-neutral-600 block text-2xl font-mono">∅</span>
              <p className="text-xs text-neutral-400">No matching studio projects currently registered in this workspace catalog.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
