/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PricingPlan, BlogPost, Project } from './types';

export const VIDEO_SHOWCASE = [
  {
    id: 'vid1',
    title: 'Neon Odyssey',
    prompt: 'A cyberpunk wanderer overlooking a glowing neo-shanghai street corner, cinematic lighting, 8k, photorealistic',
    style: 'Cyberpunk',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-neon-light-from-a-futuristic-tunnel-41604-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=600',
    aspect: '16:9',
    resolution: '4K',
    duration: '12s'
  },
  {
    id: 'vid2',
    title: 'The Golden Crest',
    prompt: 'A sleek luxury sports coupe carving down a wet mountain pass in Goregaon West under twilight stars, reflections, photorealistic',
    style: 'Reflective Cinematic',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-sports-car-driving-on-a-road-at-night-40502-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600',
    aspect: '16:9',
    resolution: '4K',
    duration: '15s'
  },
  {
    id: 'vid3',
    title: 'Celestial Ridge',
    prompt: 'Stunning aerial orbit of snowy mountain peaks glowing at early dawn golden hour, ultra-wide lens, dynamic mist, 8k render',
    style: 'Alpine Drone',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-sunset-over-craggy-mountains-and-misty-valleys-44122-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600',
    aspect: '16:9',
    resolution: '1080p',
    duration: '10s'
  },
  {
    id: 'vid4',
    title: 'Metropolis Core',
    prompt: 'Time-lapse of high-tech smart city hyperloop lanes glowing under towering metallic skyscraper structures, tilt-shift lens',
    style: 'Hyperlapse',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-time-lapse-of-a-futuristic-city-with-glowing-trails-42173-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=600',
    aspect: '16:9',
    resolution: '4K',
    duration: '18s'
  },
  {
    id: 'vid5',
    title: 'Ethereal Glamour',
    prompt: 'Slow motion portrait of a model in custom holographic trench coat amidst dancing glowing particles, fashion editorial luxury aesthetic',
    style: 'Luxury Editorial',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-woman-with-neon-lights-and-glitters-41527-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=600',
    aspect: '9:16',
    resolution: '1080p',
    duration: '8s'
  }
];

export const CORE_FEATURES = [
  {
    id: 'feat1',
    title: 'AI Text-to-Video Engine',
    desc: 'Input direct visual directives. Laundris AI Studio compiles multi-layered photorealistic scenes with cinematic material shaders.',
    icon: 'Sparkles'
  },
  {
    id: 'feat2',
    title: 'Ultra realistic Rendering',
    desc: 'Render up to pristine 4K resolution with volumetric atmospheric shadows, real particle physics, and accurate ambient reflections.',
    icon: 'Tv'
  },
  {
    id: 'feat3',
    title: 'Intelligent Camera Motion',
    desc: 'Control shot angles with semantic tags. Instruct cranes, slow dolly sweeps, 360 orbits, and high-velocity drone dives smoothly.',
    icon: 'Video'
  },
  {
    id: 'feat4',
    title: 'Multi-lingual Voice Synthesis',
    desc: 'Synthesize highly expressive, high-fidelity voices across 30+ regional languages including major Indian languages.',
    icon: 'Mic'
  },
  {
    id: 'feat5',
    title: 'Smart Storyboarding & Scripting',
    desc: 'Let our model design the narrative flowchart. Auto-generates matching dialogues, lighting styles, and pacing structures.',
    icon: 'FileText'
  },
  {
    id: 'feat6',
    title: 'Developer Core REST API',
    desc: 'Integrate dynamic cinema synthesis securely into any CRM, marketing app, or automated social media posting script.',
    icon: 'Code'
  },
  {
    id: 'feat7',
    title: 'Brand Consistency Filters',
    desc: 'Upload color schemes, brand guidelines, logo files, and fonts to ensure generated promotional clips never break alignment.',
    icon: 'ShieldCheck'
  },
  {
    id: 'feat8',
    title: 'Lightning Cloud Rendering',
    desc: 'Distributed hyper-servers process complex rendering tasks concurrently. Generate complete commercials in less than 3 minutes.',
    icon: 'Cpu'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: '₹999',
    period: '/ month',
    billing: 'Billed monthly',
    features: [
      '20 High-Quality AI Videos / mo',
      'Standard 720p Resolution Exports',
      'Dozens of Standard Cinematic Styles',
      'Basic Voice Synthesis',
      'No watermarks',
      'Cloud storage for 30 days'
    ],
    popular: false,
    cta: 'Start Creating'
  },
  {
    name: 'Professional',
    price: '₹4,999',
    period: '/ month',
    billing: 'Billed monthly',
    features: [
      '200 Cinematic AI Videos / mo',
      'Pristine 4K Resolution Exports',
      'Advanced 3D Camera Controls',
      'Expressive Multi-Voice Synthesis',
      'Script & Storyboard Assistant',
      'Up to 3 Team seats included',
      'Prioritized cloud render queue'
    ],
    popular: true,
    cta: 'Upgrade to Studio'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    billing: 'Tailored pricing options',
    features: [
      'Unlimited video renders',
      'Dedicated private cloud servers',
      'Full REST API and SDK access',
      'Enterprise SSO & custom policies',
      'Personal account strategist',
      '24/7 priority SLA support',
      'Custom fine-tuned styles'
    ],
    popular: false,
    cta: 'Contact Partner Relations'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog1',
    title: 'The Shift to Synthesized Cinema: How AI Rewrites Commercial Filmmaking',
    category: 'Generative AI',
    date: 'May 20, 2026',
    author: 'Aditya Yadav',
    readTime: '6 min read',
    snippet: 'Exploring how traditional production bottlenecks are resolved by turning descriptive prompts into rich 3D movie cameras, volumetric lighting, and studio-grade final footage.',
    content: 'Traditional video production is notoriously expensive, requiring large equipment budgets, studio space, and days of post-processing. With the advent of Laundris AI Studio, creators and brand partners are realizing a shift. By utilizing advanced diffusion techniques mapped perfectly onto cinema frameworks, anyone can act as a world-class light designer and director...',
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'blog2',
    title: 'The Science of Semantic Cinematic Cameras: Behind the Laundris SDK Core',
    category: 'AI Video Creation',
    date: 'April 14, 2026',
    author: 'Aditya Yadav',
    readTime: '9 min read',
    snippet: 'A deep dive into our innovative parsing engine that translates text tags like [dolly orbit] or [crane rise] into precise cinematic motion fields without visual distortion.',
    content: 'One major issue with default AI video generators is the loss of anatomical structure or scene consistency during high-speed camera movements. In this technical walkthrough, we discuss the implementation of predictive geometric tracking which aligns camera coordinates prior to rendering the pixel arrays...',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'blog3',
    title: 'Maximizing Marketing ROI With Programmatic AI Commercials',
    category: 'Marketing Automation',
    date: 'Mar 02, 2026',
    author: 'Product Engineering Team',
    readTime: '5 min read',
    snippet: 'How early SaaS brands integrated our REST APIs to auto-generate customized video ads based on user cohort behavior, leading to a 340% increase in social click-through rates.',
    content: 'Customization is king in modern marketing. Using Laundris Private Limited developer APIs, marketing teams can programmatically generate ad campaigns. If a user browsing a luxury watch site prefers sports over business models, our webhook triggers backends to instantly render simulated high-intensity drone shots of rugged terrain with matching voice clips...',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  }
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'proj1',
    name: 'Metropolitan Luxury Ad',
    prompt: 'Luxury watch on a sleek black marble slab under glowing neon raindrops, 4k macro shot.',
    status: 'completed',
    progress: 100,
    date: 'May 26, 2026',
    duration: '15s',
    style: 'Cinematic'
  },
  {
    id: 'proj2',
    name: 'Sunset Glacier Flyover',
    prompt: 'Wide drone orbit over massive blue glacier cracking under golden sunset rays, dramatic orchestral music.',
    status: 'completed',
    progress: 100,
    date: 'May 24, 2026',
    duration: '24s',
    style: 'Drone landscape'
  },
  {
    id: 'proj3',
    name: 'Sneaker Hyper-Ad',
    prompt: 'Sports shoe exploding into glowing electric particles, energetic neon lighting shifts.',
    status: 'rendering',
    progress: 68,
    date: 'May 27, 2026',
    duration: '12s',
    style: 'Futuristic product'
  },
  {
    id: 'proj4',
    name: 'E-commerce Perfume Explainer',
    prompt: 'Minimalist glass bottle dripping with glistening organic honey, slow macro slide.',
    status: 'queued',
    progress: 0,
    date: 'May 27, 2026',
    duration: '10s',
    style: 'Studio premium'
  }
];

export const API_SAMPLES = {
  curl: `curl -X POST "https://api.laundris.in/v1/video/generate" \\
  -H "Authorization: Bearer LN_LIVE_982XF437..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Luxury watch commercial with cinematic slow-mo water splashes",
    "style": "cinematic",
    "resolution": "4k",
    "aspect_ratio": "16:9",
    "duration": 15
  }'`,
  
  nodejs: `import { LaundrisClient } from '@laundris/sdk';

const laundris = new LaundrisClient({
  apiKey: "LN_LIVE_982XF437..."
});

async function main() {
  const video = await laundris.video.create({
    prompt: "A modern electric sports car driving dynamically through atmospheric clouds",
    style: "hyper-realistic",
    resolution: "4k",
    aspectRatio: "16:9"
  });

  console.log("Rendering initiated! Video Job ID:", video.id);
  // Polling or listening to webhooks
}`,

  python: `from laundris import Laundris

client = Laundris(api_key="LN_LIVE_982XF437...")

video = client.video.generate(
    prompt="Sleek silver cosmetics bottle placed on organic mossy rock, soft forest lighting",
    style="cinematic",
    resolution="4k",
    aspect_ratio="16:9",
    duration=15
)

print(f"Tracking Render: {video.status} | URL: {video.download_url}")`
};
