/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';
import { FileText, User, Calendar, BookOpen, Clock, ArrowRight, CheckCircle, Info, Mail } from 'lucide-react';

interface BlogAndLegalProps {
  initialSubTab?: 'blog' | 'privacy' | 'terms';
}

export default function BlogAndLegal({ initialSubTab = 'blog' }: BlogAndLegalProps) {
  const [subTab, setSubTab] = useState<'blog' | 'privacy' | 'terms'>(initialSubTab);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-16" id="blog-legal-root">
      {/* Subtab selection header */}
      <div className="flex justify-center border-b border-neutral-900 pb-6 max-w-lg mx-auto gap-4 select-none">
        {(['blog', 'privacy', 'terms'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setSubTab(tab)}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all ${
              subTab === tab
                ? 'bg-purple-950/40 text-purple-300 border border-purple-500/20'
                : 'text-neutral-500 hover:text-neutral-300'
            }`}
          >
            {tab === 'blog' ? 'Press & Blog' : tab === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* 1. Blog View Tab */}
        {subTab === 'blog' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-16"
            key="blog-view"
          >
            {/* Header intro */}
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs text-purple-300 font-mono uppercase tracking-widest block">JOURNAL REEL</span>
              <h1 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-white">Laundris Journal</h1>
              <p className="text-neutral-400 text-xs md:text-sm">Stay updated regarding Generative AI, movie prompts engineering, and brand ad monetization from Mumbai HQ.</p>
            </div>

            {/* Articles grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="bg-neutral-950/80 border border-neutral-900 hover:border-purple-500/20 rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between group transition-all duration-300"
                >
                  <div>
                    {/* Cover photo */}
                    <div className="relative aspect-video overflow-hidden bg-neutral-900 border-b border-neutral-900">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[9px] font-mono text-purple-300 uppercase tracking-widest leading-none">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-5 space-y-3">
                      <div className="flex items-center gap-1.5 text-[9px] font-mono text-neutral-500 uppercase tracking-wider">
                        <User className="w-3 h-3 text-purple-500" /> {post.author} • {post.date}
                      </div>
                      <h3 className="text-xs md:text-sm font-semibold text-white tracking-wide leading-snug group-hover:text-purple-300 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-neutral-400 text-[11px] leading-relaxed line-clamp-3">
                        {post.snippet}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 border-t border-neutral-905 flex items-center justify-between text-[10.5px] font-mono text-purple-400 font-bold uppercase tracking-wider">
                    <span>READ ARTICLE</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter form box widget */}
            <div className="max-w-xl mx-auto bg-neutral-950/60 p-6 md:p-8 rounded-2xl border border-neutral-900 shadow-xl space-y-4">
              <div className="text-center space-y-1.5">
                <span className="text-[10px] text-purple-400 font-mono uppercase tracking-widest block">STAY SYNCED</span>
                <strong className="text-md text-white font-sans font-bold block">Subscribe to Laundris Releases</strong>
                <p className="text-neutral-500 text-xs leading-relaxed">Join 12,000+ brand partners and software engineers receiving our video rendering models updates monthly.</p>
              </div>

              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="flex-grow bg-neutral-900 border border-neutral-800 focus:border-purple-500/50 text-xs text-white rounded-xl px-3.5 py-3 focus:outline-none focus:ring-0"
                />
                <button
                  type="submit"
                  className="px-5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all"
                >
                  SUBSCRIBE
                </button>
              </form>
              {subscribed && (
                <div className="text-center text-xs text-green-400 flex items-center justify-center gap-1.5 select-none font-sans mt-2">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Subscriber seat reserved successfully!
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* 2. Privacy Policy Tab */}
        {subTab === 'privacy' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="max-w-3xl mx-auto space-y-8 text-neutral-300 text-xs leading-relaxed"
            key="privacy-view"
          >
            <div className="text-center space-y-2">
              <span className="text-xs text-purple-300 font-mono uppercase tracking-widest block">LEGAL PROTOCOLS</span>
              <h1 className="text-2xl md:text-3xl font-sans text-white font-semibold">Privacy Policy</h1>
              <p className="text-neutral-500 font-mono text-[10px]">LAST MODIFIED: MAY 27, 2026</p>
            </div>

            <div className="space-y-6 bg-neutral-950/60 p-6 md:p-8 border border-neutral-900 rounded-2xl">
              <div>
                <strong className="text-white block font-sans font-bold text-sm mb-2.5">1. Overview of Data Scope</strong>
                <p>
                  Laundris Private Limited ("we", "our", or "Laundris") operates the Laundris AI Studio sandbox environment. We respect your corporate profile data privacy. This Policy outlines how browser cookies, registered emails, and visual text prompt vectors are parsed to process dynamic AI video renderings.
                </p>
              </div>

              <div>
                <strong className="text-white block font-sans font-bold text-sm mb-2.5">2. Safe Storage of Prompt Outputs</strong>
                <p>
                  All textual descriptions typed into the Laundris sandbox dashboard are processed server-side through Gemini AI models securely. Prompt metadata logs, such as style preferences, and storyboard timelines are cached to optimize future GPU compilation speeds. We do not distribute your artistic copyright prompts to secondary advertising networks.
                </p>
              </div>

              <div>
                <strong className="text-white block font-sans font-bold text-sm mb-2.5">3. Indian Data Protection and Jurisdiction</strong>
                <p>
                  We operate complying with information tech regulations defined inside Maharashtra, India. If you have questions regarding personal tracking or need to wipe cached projects portfolios, contact our administrative compliance team in Goregaon West at help@laundris.in email.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* 3. Terms & Conditions Tab */}
        {subTab === 'terms' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="max-w-3xl mx-auto space-y-8 text-neutral-300 text-xs leading-relaxed"
            key="terms-view"
          >
            <div className="text-center space-y-2">
              <span className="text-xs text-purple-300 font-mono uppercase tracking-widest block">LICENSING CHARTERS</span>
              <h1 className="text-2xl md:text-3xl font-sans text-white font-semibold">Terms & Conditions</h1>
              <p className="text-neutral-500 font-mono text-[10px]">EFFECTIVE DECREE: MAY 27, 2026</p>
            </div>

            <div className="space-y-6 bg-neutral-950/60 p-6 md:p-8 border border-neutral-900 rounded-2xl">
              <div>
                <strong className="text-white block font-sans font-bold text-sm mb-2.5">1. Workspace Access Seat</strong>
                <p>
                  By creating a Laundris account passport, you are granted a limited, personal, non-assignable active seat inside our Laundris AI Studio console. Subscriptions like the Starter (₹999/mo) or Professional (₹4,999/mo) plans allocate a corresponding cap of rendering credits. Credentials sharing across multiple teams without authorization is prohibited.
                </p>
              </div>

              <div>
                <strong className="text-white block font-sans font-bold text-sm mb-2.5">2. Intellectual Property Charter</strong>
                <p>
                  Laundris Private Limited claims no copyright or proprietary rights over the video MP4 file exports compiled from your original visual prompt ideas. You retain absolute commercial rights to distribute generated ads. However, you are strictly prohibited from utilizing Laundris REST APIs programmatically to synthesize adult, abusive, or copyright-violating deep-fakes.
                </p>
              </div>

              <div>
                <strong className="text-white block font-sans font-bold text-sm mb-2.5">3. Indian Judicial Venue</strong>
                <p>
                  These Terms are subject to the domestic laws of the Republic of India. Any legal disputes, arbitration claims, or compliance lawsuits rising directly from Laundris AI Studio rendering failures must be evaluated exclusively under the administrative jurisdiction of the regulatory courts of Mumbai, Maharashtra.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Blog Details Modal Popup */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className="bg-neutral-950 border border-neutral-850 rounded-2xl w-full max-w-2xl h-[90vh] md:h-[80vh] flex flex-col justify-between overflow-hidden shadow-2xl"
            >
              {/* Cover Photo */}
              <div className="relative aspect-video shrink-0 bg-neutral-900">
                <img
                  src={selectedPost.imageUrl}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white hover:text-purple-400 transition-colors flex items-center justify-center border border-neutral-800"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Content body scroll */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-neutral-500 uppercase tracking-widest leading-none">
                  <User className="text-purple-400 w-3 h-3" /> {selectedPost.author} • {selectedPost.date}
                </div>
                <h2 className="text-base md:text-xl font-sans font-bold text-white tracking-wide leading-snug">
                  {selectedPost.title}
                </h2>
                <div className="text-neutral-300 text-xs md:text-sm leading-relaxed space-y-4 font-sans whitespace-pre-wrap">
                  <p>{selectedPost.content}</p>
                  <p>In partnering with digital creative agencies, our software engineers continue optimizing frame interpolation techniques. Programmatic ad models prove helpful for quick micro-variation testing. We plan to detail these benchmarking findings in upcoming technical papers from Aditya Yadav and our developers.</p>
                </div>
              </div>

              {/* Foot details */}
              <div className="p-4 bg-neutral-950 border-t border-neutral-900 text-right">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-850 text-neutral-300 font-mono text-xs uppercase tracking-wider rounded-xl border border-neutral-800 transition-all"
                >
                  DISMISS JOURNAL
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
