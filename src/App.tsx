/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X, Cpu, User, LogOut, Laptop, Copyright, Heart, ShieldAlert, FileText, Globe, MessageSquare } from 'lucide-react';
import { PageView } from './types';

// Importing modules
import HomeHero from './components/HomeHero';
import ProductAndFeatures from './components/ProductAndFeatures';
import PricingPage from './components/PricingPage';
import DemoPage from './components/DemoPage';
import AuthPage from './components/AuthPage';
import DashboardView from './components/DashboardView';
import ApiPage from './components/ApiPage';
import AboutAndContact from './components/AboutAndContact';
import BlogAndLegal from './components/BlogAndLegal';
import AiChatBot from './components/AiChatBot';
import PlatformPages from './components/PlatformPages';
import SolutionsPage from './components/SolutionsPage';
import TechnologyPage from './components/TechnologyPage';

export default function App() {
  const [view, setView] = useState<PageView>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Simple logout function
  const handleLogout = () => {
    setIsLoggedIn(false);
    setView('home');
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'platform', label: 'Platform' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'technology', label: 'Technology' },
    { id: 'api', label: 'Developers' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ] as const;

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col justify-between overflow-x-hidden font-sans">
      {/* 1. HEADER / NAVBAR WORLD */}
      <header className="sticky top-0 z-40 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900 px-4 md:px-8 py-4.5 select-none font-sans">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Brand */}
          <button
            onClick={() => { setView('home'); setMobileMenuOpen(false); }}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
            id="brand-logo-btn"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 text-white flex items-center justify-center shadow-lg shadow-purple-500/15 group-hover:scale-102 transition-transform">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-bold text-white tracking-widest block font-display leading-tight">LAUNDRIS</span>
              <span className="text-[9px] text-neutral-400 font-mono tracking-widest leading-none block">PRIVATE LIMITED</span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7.5">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setView(item.id)}
                className={`text-[12.5px] font-semibold tracking-wide hover:text-purple-300 transition-colors focus:outline-none ${
                  view === item.id
                    ? 'text-purple-400 font-bold'
                    : 'text-neutral-300'
                }`}
                id={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Session controls */}
          <div className="hidden lg:flex items-center gap-4">
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setView('dashboard')}
                  className={`px-4.5 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase border flex items-center gap-1.5 focus:outline-none select-none transition-all ${
                    view === 'dashboard'
                      ? 'bg-purple-950/40 text-purple-300 border-purple-500/30 shadow-lg shadow-purple-500/5'
                      : 'bg-neutral-900/60 text-white border-neutral-800 hover:border-neutral-700'
                  }`}
                  id="nav-dashboard"
                >
                  <User className="w-3.5 h-3.5 text-purple-400" /> CREATOR BOARD
                </button>
                <button
                  onClick={handleLogout}
                  className="p-2.5 bg-neutral-900 border border-neutral-800 hover:border-red-500/20 text-neutral-400 hover:text-red-400 rounded-xl transition-all focus:outline-none"
                  title="Disconnect seat session"
                  id="logout-btn"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setView('login')}
                className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-mono font-bold tracking-widest uppercase rounded-xl shadow-lg shadow-purple-500/20 select-none transition-all focus:outline-none cursor-pointer"
                id="login-cta-btn"
              >
                Access Studio
              </button>
            )}
          </div>

          {/* Responsive Mobile burger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-400 hover:text-white rounded-lg focus:outline-none"
            id="mobile-menu-burger"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* 2. MOBILE OVERLAY DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-neutral-950 border-b border-neutral-900 px-6 py-6 space-y-4 select-none z-30 relative"
          >
            <div className="flex flex-col gap-3.5 text-left">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setView(item.id); setMobileMenuOpen(false); }}
                  className={`text-xs font-semibold uppercase tracking-widest py-1.5 focus:outline-none ${
                    view === item.id ? 'text-purple-400' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="border-t border-neutral-900 pt-4.5 flex flex-col gap-3">
              {isLoggedIn ? (
                <>
                  <button
                    onClick={() => { setView('dashboard'); setMobileMenuOpen(false); }}
                    className="w-full py-3 bg-neutral-900 rounded-xl text-xs font-mono font-bold tracking-wider uppercase text-purple-300 border border-purple-500/20 text-center"
                  >
                    WORKSPACE BOARD
                  </button>
                  <button
                    onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
                    className="w-full py-3 bg-red-950/20 text-red-400 rounded-xl text-xs font-mono font-bold tracking-wider uppercase text-center border border-red-500/10"
                  >
                    DISCONNECT SESSION
                  </button>
                </>
              ) : (
                <button
                  onClick={() => { setView('login'); setMobileMenuOpen(false); }}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-mono text-xs font-bold tracking-widest uppercase rounded-xl text-center"
                >
                  ACCESS STUDIO
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. DYNAMIC PAGES ROUTER VIEWPORTS */}
      <main className="flex-grow z-10 relative bg-neutral-[#050505]" id="app-view-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-full h-full"
          >
            {view === 'home' && <HomeHero onNavigate={setView} />}
            
            {(view === 'product' || view === 'features') && <ProductAndFeatures />}
            
            {view === 'pricing' && <PricingPage />}
            
            {view === 'demo' && <DemoPage />}
            
            {(view === 'login' || view === 'signup') && (
              <AuthPage
                initialMode={view === 'login' ? 'login' : 'signup'}
                onAuthSuccess={() => { setIsLoggedIn(true); setView('dashboard'); }}
                onNavigate={setView}
              />
            )}
            
            {view === 'dashboard' && <DashboardView />}
            
            {view === 'api' && <ApiPage />}
            
            {view === 'about' && <AboutAndContact mode="about" onNavigate={setView} />}
            
            {view === 'contact' && <AboutAndContact mode="contact" onNavigate={setView} />}
            
            {view === 'blog' && <BlogAndLegal initialSubTab="blog" />}
            
            {view === 'privacy' && <BlogAndLegal initialSubTab="privacy" />}
            
            {view === 'terms' && <BlogAndLegal initialSubTab="terms" />}
            
            {view === 'solutions' && <SolutionsPage onNavigate={setView} />}
            
            {view === 'technology' && <TechnologyPage onNavigate={setView} />}
            
            {['platform', 'ai-video-engine', 'ai-voice-engine', 'generative-ai', 'ai-video-editor', 'multi-language-dubbing', 'content-generator'].includes(view) && (
              <PlatformPages page={view} onNavigate={setView} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. FOOTER REGIONS */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-12 px-4 md:px-8 select-none relative z-10 font-sans text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          
          {/* Brand Column */}
          <div className="space-y-4 text-left col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-blue-500 text-white flex items-center justify-center">
                <Cpu className="w-4.5 h-4.5" />
              </div>
              <span className="font-bold tracking-widest text-white block">LAUNDRIS</span>
            </div>
            <p className="text-neutral-500 text-[11px] leading-relaxed">
              Laundris Private Limited is a generative AI company transforming text into dynamic high quality video making professional video creation accessible every business creator
            </p>
          </div>

          {/* Platform Column NEW */}
          <div className="space-y-3.5 text-left">
            <span className="font-mono text-[9px] font-bold text-neutral-400 uppercase tracking-widest block">Platform</span>
            <div className="flex flex-col gap-2 font-medium text-neutral-500">
              <button onClick={() => setView('ai-video-engine')} className="hover:text-purple-400 transition-colors text-left focus:outline-none">AI Video Engine</button>
              <button onClick={() => setView('ai-voice-engine')} className="hover:text-purple-400 transition-colors text-left focus:outline-none">AI Voice Engine</button>
              <button onClick={() => setView('generative-ai')} className="hover:text-purple-400 transition-colors text-left focus:outline-none">Generative AI</button>
              <button onClick={() => setView('ai-video-editor')} className="hover:text-purple-400 transition-colors text-left focus:outline-none">AI Video Editor</button>
              <button onClick={() => setView('multi-language-dubbing')} className="hover:text-purple-400 transition-colors text-left focus:outline-none">Multi-Language Dubbing</button>
              <button onClick={() => setView('content-generator')} className="hover:text-purple-400 transition-colors text-left focus:outline-none">Content Generator</button>
            </div>
          </div>

          {/* Links Column A */}
          <div className="space-y-3.5 text-left">
            <span className="font-mono text-[9px] font-bold text-neutral-400 uppercase tracking-widest block">Studio Directory</span>
            <div className="flex flex-col gap-2 font-medium text-neutral-500">
              <button onClick={() => setView('product')} className="hover:text-purple-400 transition-colors text-left focus:outline-none">AI Studio Core</button>
              <button onClick={() => setView('pricing')} className="hover:text-purple-400 transition-colors text-left focus:outline-none">Tiers & Subscriptions</button>
              <button onClick={() => setView('demo')} className="hover:text-purple-400 transition-colors text-left focus:outline-none">Interactive Sandbox</button>
              <button onClick={() => setView('api')} className="hover:text-purple-400 transition-colors text-left focus:outline-none">Developer API Manuals</button>
            </div>
          </div>

          {/* Links Column B */}
          <div className="space-y-3.5 text-left">
            <span className="font-mono text-[9px] font-bold text-neutral-400 uppercase tracking-widest block">Corporate Desk</span>
            <div className="flex flex-col gap-2 font-medium text-neutral-500">
              <button onClick={() => setView('about')} className="hover:text-purple-400 transition-colors text-left focus:outline-none">About Us</button>
              <button onClick={() => setView('contact')} className="hover:text-purple-400 transition-colors text-left focus:outline-none">Contact Team</button>
              <button onClick={() => setView('blog')} className="hover:text-purple-400 transition-colors text-left focus:outline-none">Press Journal</button>
            </div>
          </div>

          {/* Links Column C */}
          <div className="space-y-3.5 text-left col-span-2 lg:col-span-1 md:col-span-1">
            <span className="font-mono text-[9px] font-bold text-neutral-400 uppercase tracking-widest block">Governance</span>
            <div className="flex flex-col gap-2 font-medium text-neutral-500">
              <button onClick={() => setView('privacy')} className="hover:text-purple-400 transition-colors text-left focus:outline-none">Privacy Protection</button>
              <button onClick={() => setView('terms')} className="hover:text-purple-400 transition-colors text-left focus:outline-none">Terms of Contract</button>
              <a href="mailto:help@laundris.in" className="hover:text-purple-400 transition-colors text-left">help@laundris.in</a>
            </div>
          </div>
        </div>

        {/* Footnotes copy margins */}
        <div className="max-w-7xl mx-auto border-t border-neutral-900 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-500 text-[11px]">
          <span className="flex items-center gap-1.5">
            <Copyright className="w-3.5 h-3.5" /> 2026 Laundris Private Limited. All Rights Reserved.
          </span>
          <span className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> inside Mumbai Maharashtra
          </span>
        </div>
      </footer>

      {/* 5. Root Float AI Assistant bot */}
      <AiChatBot />
    </div>
  );
}
