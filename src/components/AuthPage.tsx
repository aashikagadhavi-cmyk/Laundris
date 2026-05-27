/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Laptop, MessageSquare, Cpu, Key, Mail, Lock, Building } from 'lucide-react';
import { PageView } from '../types';

interface AuthPageProps {
  initialMode: 'login' | 'signup';
  onAuthSuccess: () => void;
  onNavigate: (view: PageView) => void;
}

export default function AuthPage({ initialMode, onAuthSuccess, onNavigate }: AuthPageProps) {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [useOtp, setUseOtp] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onAuthSuccess(); // This transitions App state to the Dashboard UI automatically!
    }, 1200);
  };

  const signInWithSocial = (provider: string) => {
    alert(`Simulation: Dynamic secure SSO connection redirecting through ${provider}...`);
    onAuthSuccess();
  };

  return (
    <div className="py-20 px-4 md:px-8 max-w-lg mx-auto relative z-10" id="auth-root-container">
      {/* Absolute accent glow */}
      <div className="absolute inset-0 bg-purple-500/5 blur-[80px] pointer-events-none" />

      <div className="bg-neutral-950/80 border border-neutral-850 rounded-2xl p-6.5 md:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
        {/* Toggle link style heading */}
        <div className="text-center space-y-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center mx-auto text-white shadow-lg shadow-purple-500/10 mb-2">
            <Cpu className="w-6 h-6 animate-pulse" />
          </div>
          <h1 className="text-xl md:text-2xl font-semibold text-white tracking-wide">
            {mode === 'login' ? 'Welcome Back to Laundris' : 'Initiate Studio Workspace'}
          </h1>
          <p className="text-neutral-400 text-xs font-sans">
            {mode === 'login' 
              ? 'Access your cinematic renders and team dashboard credentials' 
              : 'Create a professional creator passport to unlock 4K renders'}
          </p>
        </div>

        {/* Traditional Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <AnimatePresence mode="popLayout">
            {mode === 'signup' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4 overflow-hidden"
                key="signup-fields"
              >
                {/* Full name input */}
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest block">Full Name</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-500 select-none">☺</span>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Aditya Yadav"
                      className="w-full bg-neutral-900 border border-neutral-800 hover:border-neutral-750 focus:border-purple-500/50 text-xs text-white rounded-xl pl-9.5 pr-3 py-3 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Corporate company registration */}
                <div className="space-y-1.5">
                  <label htmlFor="companyName" className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest block">Company Name</label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3.5 w-4 h-4 text-neutral-500" />
                    <input
                      id="companyName"
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Laundris Private Limited"
                      className="w-full bg-neutral-900 border border-neutral-800 hover:border-neutral-750 focus:border-purple-500/50 text-xs text-white rounded-xl pl-9.5 pr-3 py-3 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Email input common field */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest block">Corporate Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 w-4 h-4 text-neutral-500" />
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="help@laundris.in"
                className="w-full bg-neutral-900 border border-neutral-800 hover:border-neutral-750 focus:border-purple-500/50 text-xs text-white rounded-xl pl-9.5 pr-3 py-3 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* OTP Code toggle logic vs traditional passwords */}
          {!useOtp ? (
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest block">Security Password</label>
                {mode === 'login' && (
                  <button
                    type="button"
                    onClick={() => alert('Passwords reset tutorial link dispatched to active mailbox.')}
                    className="text-[10px] text-purple-400 hover:text-purple-300 font-mono hover:underline"
                  >
                    Forgot Password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-4 h-4 text-neutral-500" />
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-neutral-900 border border-neutral-800 hover:border-neutral-750 focus:border-purple-500/50 text-xs text-white rounded-xl pl-9.5 pr-3 py-3 focus:outline-none transition-colors"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-1.5">
              <label htmlFor="otpCode" className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest block">One-Time OTP Passport</label>
              <div className="relative">
                <Key className="absolute left-3 top-3.5 w-4 h-4 text-neutral-500" />
                <input
                  id="otpCode"
                  type="text"
                  required
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value)}
                  placeholder="Enter 6-digit passcode"
                  className="w-full bg-neutral-900 border border-neutral-800 hover:border-neutral-750 focus:border-purple-500/50 text-xs text-white rounded-xl pl-9.5 pr-3 py-3 focus:outline-none transition-colors"
                />
              </div>
            </div>
          )}

          {/* Prompt toggle helper */}
          <div>
            <button
              type="button"
              onClick={() => setUseOtp(!useOtp)}
              className="text-[10.5px] font-mono text-neutral-400 hover:text-purple-300 flex items-center gap-1 mt-1 transition-all"
            >
              • Or {useOtp ? 'use normal password credentials' : 'request OTP dispatch to secure mailbox'}
            </button>
          </div>

          {/* Form action submission */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-purple-500/25 flex items-center justify-center gap-1.5 transition-all select-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>Authenticating Render Seat...</>
            ) : (
              <>
                {mode === 'login' ? 'AUTHORIZED LOGIN' : 'RESERVE WORKSPACE'} <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Separator block */}
        <div className="relative my-6 select-none">
          <div className="absolute inset-y-0 left-0 right-0 flex items-center">
            <div className="w-full h-[1px] bg-neutral-900" />
          </div>
          <span className="relative block text-center text-[10px] font-mono text-neutral-500 uppercase tracking-widest bg-neutral-950 px-3">
            Alternative SSO Gateways
          </span>
        </div>

        {/* Social SSO buttons */}
        <div className="grid grid-cols-2 gap-3.5">
          <button
            onClick={() => signInWithSocial('Google')}
            className="flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 rounded-xl py-2.5 text-neutral-300 hover:text-white transition-all text-xs font-mono tracking-wider uppercase select-none"
          >
            Google
          </button>
          <button
            onClick={() => signInWithSocial('Microsoft')}
            className="flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 rounded-xl py-2.5 text-neutral-300 hover:text-white transition-all text-xs font-mono tracking-wider uppercase select-none"
          >
            Microsoft
          </button>
        </div>

        {/* Tab state toggler foot */}
        <div className="mt-8 text-center border-t border-neutral-900 pt-5 text-xs text-neutral-400 select-none">
          <span>{mode === 'login' ? "Don't have a Laundris account?" : "Already registered to Laundris?"} </span>
          <button
            onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
            className="text-purple-400 hover:text-purple-300 font-semibold hover:underline"
          >
            {mode === 'login' ? 'Sign up' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
}
