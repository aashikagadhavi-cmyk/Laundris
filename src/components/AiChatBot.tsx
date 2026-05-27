/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect, useId } from 'react';
import { Sparkles, MessageSquare, X, Send, Cpu, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ChatMessage } from '../types';

export default function AiChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      role: 'assistant',
      content: "Welcome to Laundris Private Limited! I'm your AI Director Assistant. Ask me how our Laundris AI Studio compiles high-definition cinematic video sequences, pricing, or our technical capabilities!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const buttonId = useId();
  const titleId = useId();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: 'user',
      content: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      if (!response.ok) {
        throw new Error('Network response not ok');
      }

      const data = await response.json();
      const assistantMsg: ChatMessage = {
        id: `msg-r-${Date.now()}`,
        role: 'assistant',
        content: data.content,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      // Gracious fallback
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: `msg-err-${Date.now()}`,
            role: 'assistant',
            content: "Sorry, I had trouble reaching the Laundris servers. Please contact our corporate desk at help@laundris.in or try again shortly!",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      }, 800);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans" id="laundris-chat-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            role="dialog"
            aria-labelledby={titleId}
            className="w-80 md:w-96 h-[480px] bg-neutral-950/95 border border-purple-500/30 rounded-2xl shadow-xl shadow-purple-500/10 flex flex-col overflow-hidden backdrop-blur-xl mb-4"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-950/50 to-blue-950/50 p-4 border-b border-purple-500/20 flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center relative">
                  <Cpu className="w-4.5 h-4.5 text-white" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-neutral-950 rounded-full" />
                </div>
                <div>
                  <h3 id={titleId} className="text-sm font-semibold text-white tracking-wide">
                    Laundris AI Assistant
                  </h3>
                  <p className="text-[10px] text-purple-300 font-mono tracking-wider uppercase">Active Node • Mumbai</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                id="close-chat-btn"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-gradient-to-b from-neutral-950 to-neutral-900 scrollbar-thin scrollbar-thumb-neutral-800">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs ${
                      msg.role === 'user'
                        ? 'bg-neutral-800 text-white'
                        : 'bg-purple-900/40 text-purple-300 border border-purple-500/20'
                    }`}
                  >
                    {msg.role === 'user' ? <User className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
                  </div>
                  <div
                    className={`max-w-[75%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-purple-600 text-white rounded-tr-none'
                        : 'bg-neutral-800/80 text-neutral-200 border border-neutral-700/50 rounded-tl-none'
                    }`}
                  >
                    {/* Preserve line breaks for formatted recipes / options */}
                    <div className="whitespace-pre-wrap">{msg.content}</div>
                    <span className="block text-[9px] text-neutral-400 mt-1.5 text-right uppercase tracking-wider">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-purple-900/40 text-purple-300 flex items-center justify-center animate-pulse border border-purple-500/20">
                    <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  </div>
                  <div className="bg-neutral-800/50 rounded-2xl rounded-tl-none px-4 py-3 border border-neutral-700/50 shadow-md">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-100" />
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-200" />
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-300" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={scrollToBottom} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-neutral-800/80 bg-neutral-950 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about pricing, features, CEO Aditya..."
                className="flex-grow bg-neutral-900 border border-neutral-800 hover:border-neutral-700 focus:border-purple-500/50 text-xs text-white rounded-xl px-3.5 py-2 focus:outline-none transition-colors"
                id="chat-input-field"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="px-3.5 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl shadow-lg shadow-purple-500/20 flex items-center justify-center transition-all"
                id="chat-submit-btn"
                aria-label="Send Message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button to Open/Close Chat */}
      <button
        id={buttonId}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 text-white flex items-center justify-center shadow-xl shadow-purple-500/20 hover:scale-105 active:scale-95 transition-all relative border border-white/10 group`}
        aria-label="Toggle AI Support Assistant"
        aria-expanded={isOpen}
        aria-controls="laundris-chat-container"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 animate-ping opacity-25 group-hover:scale-110 transition-all pointer-events-none" />
        {isOpen ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />}
      </button>
    </div>
  );
}
