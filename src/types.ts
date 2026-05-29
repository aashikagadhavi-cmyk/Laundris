/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageView =
  | 'home'
  | 'product'
  | 'features'
  | 'pricing'
  | 'demo'
  | 'login'
  | 'signup'
  | 'dashboard'
  | 'api'
  | 'about'
  | 'contact'
  | 'blog'
  | 'privacy'
  | 'terms'
  | 'platform'
  | 'solutions'
  | 'technology'
  | 'ai-video-engine'
  | 'ai-voice-engine'
  | 'generative-ai'
  | 'ai-video-editor'
  | 'multi-language-dubbing'
  | 'content-generator';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface ScriptScene {
  sceneNumber: number;
  visualDescription: string;
  cameraMovement: string;
  voiceover: string;
  duration: string;
}

export interface GeneratedVideo {
  id: string;
  prompt: string;
  title: string;
  style: string;
  aspect: string;
  resolution: string;
  videoUrl: string;
  duration: string;
  thumbnailUrl: string;
  createdAt: string;
  script?: ScriptScene[];
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  billing: string;
  features: string[];
  popular: boolean;
  cta: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  snippet: string;
  content: string;
  imageUrl: string;
}

export interface Project {
  id: string;
  name: string;
  prompt: string;
  status: 'completed' | 'rendering' | 'queued' | 'failed';
  progress: number;
  date: string;
  duration: string;
  style: string;
}
