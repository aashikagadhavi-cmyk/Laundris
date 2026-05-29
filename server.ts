import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-loaded GenAI Client
let aiClient: GoogleGenAI | null = null;
function getAI(): GoogleGenAI | null {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (key && key !== "MY_GEMINI_API_KEY") {
      aiClient = new GoogleGenAI({
        apiKey: key,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
  }
  return aiClient;
}

// System description for chat assistant
const LAUNDRIS_SYSTEM_CONTEXT = `
You are the official AI Assistant for Laundris Private Limited.
Laundris Private Limited is a generative AI company transforming text into dynamic high quality video making professional video creation accessible every business creator.
- Tagline: "Turn Text Into Cinematic AI Videos"
- Founder & CEO: Aditya Yadav
- Support Email: help@laundris.in
- Corporate Address: 342 Anant Vihar, Aarey Piramal Cross Road, Behind Mahindra Gardens, Goregaon West, Mumbai, Maharashtra 400104, India
- Platform: "Laundris AI Studio"

Features:
- AI Text-to-Video Engine: Multi-layered photorealistic scenes
- Ultra Realistic Cinematic Rendering: 4K rendering, state-of-the-art camera simulation
- AI Camera Motion: Pan, Zoom, Crane, Orbit, Drone controls through text prompt tags
- Cloud Rendering & One-Click Ads: Quick export for branding and agencies
- Script & Voice synthesis: Integrated scripts, voiceovers in multiple languages

Pricing Models:
1. Starter: ₹999/month (20 videos/month, 720p export)
2. Professional: ₹4,999/month (200 videos/month, 4K export, Team access, Advanced controls)
3. Enterprise: Custom Pricing (Unlimited volume, Private APIs, 24/7 dedicated support)

Tone & Behavior:
- Professional, futuristic, luxurious, helpful, concise, and clear.
- Represent Laundris Private Limited with premium brand authority.
- When answering support, billing, or sales questions, refer to Goregaon Mumbai office or help@laundris.in email.
- Give highly visual and creative video ideas or tips when asked.
`;

// API Endpoints
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", company: "Laundris Private Limited", time: new Date().toISOString() });
});

// Chat support assistant
app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid messages payload" });
  }

  const userQuery = messages[messages.length - 1]?.content || "";
  const ai = getAI();

  if (!ai) {
    // Elegant fallback simulation
    console.log("Using mock conversational response (No live API key or placeholder detected)");
    const lastUserQuery = userQuery.toLowerCase();
    let reply = "Hello! I'm your Laundris AI assistant. How can I help you turn your concepts into cinematic masterpiece videos today?";
    
    if (lastUserQuery.includes("price") || lastUserQuery.includes("pricing") || lastUserQuery.includes("cost") || lastUserQuery.includes("plan")) {
      reply = "Laundris AI Studio offers three flexible tiers designed for every creative scope:\n\n• **Starter**: ₹999/mo (Includes 20 AI videos, 720p exports)\n• **Professional**: ₹4,999/mo (Includes 200 AI videos, 4K exports, priority team access)\n• **Enterprise**: Customizable scale (Unlimited, dedicated server APIs, full cloud rendering support).\n\nWould you like me to guide you to our Professional subscription, or can I help customize an Enterprise package for your team?";
    } else if (lastUserQuery.includes("aditya") || lastUserQuery.includes("founder") || lastUserQuery.includes("ceo") || lastUserQuery.includes("who run")) {
      reply = "Laundris Private Limited was founded and is led by our visionary Founder & CEO, **Aditya Yadav**. Based out of Mumbai, Aditya and our engineering team are dedicated to democratizing high-end cinematic video production via state-of-the-art Generative AI research.";
    } else if (lastUserQuery.includes("contact") || lastUserQuery.includes("email") || lastUserQuery.includes("where") || lastUserQuery.includes("address")) {
      reply = "You can easily reach Laundris Private Limited through our direct support channels:\n\n• **Direct Email**: help@laundris.in\n• **Headquarters**: 342 Anant Vihar, Aarey Piramal Cross Road, Behind Mahindra Gardens, Goregaon West, Mumbai, Maharashtra 400104, India\n\nFeel free to write to us or submit our contact form, and one of our video production experts will get back to you within 2-4 hours!";
    } else if (lastUserQuery.includes("api") || lastUserQuery.includes("developer") || lastUserQuery.includes("sdk")) {
      reply = "Our developers enjoy beautiful, RESTful API documentation at Laundris! You can generate deep-cinematic videos straight from terminal/cURL. An invitation-only SDK is available in Python, Node, and Go. Try navigating to the API tab in the top navigation to check out code templates!";
    } else if (lastUserQuery.includes("create") || lastUserQuery.includes("generate") || lastUserQuery.includes("video") || lastUserQuery.includes("prompt")) {
      reply = "The best prompts describe the exact framing, time of day, and emotional notes. For example: *'A majestic drone orbiting an ancient stone fortress nested in alpine mountains at sunrise, dramatic 35mm golden hour lighting.'* Try running a prompt like this in our interactive **Demo Creator** or the **Dashboard** to see the simulated render timeline!";
    } else {
      reply = `Thank you for asking about **Laundris AI Studio**! Under the leadership of CEO **Aditya Yadav**, our platform at Goregaon West, Mumbai, enables brands, advertising agencies, and filmmakers to generate ultra-realistic 4K digital cinema directly from prompts. \n\nIs there anything specific I can help you with today? (e.g., pricing plans, core team, prompt writing hints, or API details!)`;
    }

    return res.json({
      content: reply,
      isMock: true,
      hint: "Add your GEMINI_API_KEY to the AI Studio secrets configuration to activate live server-side AI responses!"
    });
  }

  try {
    // Generate actual contents structure mapping historical chat
    const geminiHistory = messages.slice(0, -1).map((m: any) => ({
      role: m.role === "assistant" ? "model" as const : "user" as const,
      parts: [{ text: m.content }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        ...geminiHistory,
        { role: "user", parts: [{ text: userQuery }] }
      ],
      config: {
        systemInstruction: LAUNDRIS_SYSTEM_CONTEXT,
        temperature: 0.7,
      },
    });

    res.json({ content: response.text || "I was unable to formulate a response.", isMock: false });
  } catch (error: any) {
    console.error("Gemini API Error in /api/chat:", error);
    res.status(500).json({ error: error.message || "Failed to communicate with AI model" });
  }
});

// Prompt analysis & screenplay generator for the "Generate Video" demo interaction
app.post("/api/generate-script", async (req, res) => {
  const { prompt, style, aspect, duration } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  const ai = getAI();
  const baseInstruction = `
  You are an expert Hollywood creative director and cinematographer at Laundris AI Studio.
  You will break down a given user prompt into an detailed scene-by-scene cinematic script ready for Laundris Video Engine rendering.
  
  Please analyze the following prompt: "${prompt}" using rendering style: "${style || 'cinematic'}", aspect ratio: "${aspect || '16:9'}", targeted duration: "${duration || '15s'}".
  
  Generate exactly 3 sequential scenes.
  Return the output as a valid and clean JSON array matching the following schema structure:
  [
    {
      "sceneNumber": 1,
      "visualDescription": "describe precise set design, depth of field, atmospheric lights, colors, textures",
      "cameraMovement": "describe lens choices, specific motion tags like drone orbit, slow push-in, low-angle pan, steady-cam sweep",
      "voiceover": "written dialogue narration or promotional text to speak during this scene",
      "duration": "length of this segment, e.g., '0:00 - 0:05'"
    },
    ...
  ]
  Do NOT include any markdown code blocks or formatting like \`\`\`json. Return only pure JSON string.
  `;

  if (!ai) {
    // Elegant fallback simulation
    console.log("Using mock script response (No live API key)");
    const simulatedScenes = [
      {
        sceneNumber: 1,
        visualDescription: `Atmospheric opening showcasing the core theme of '${prompt}'. Cinematic shallow depth of field, mist drifting across high-contrast volumetric lighting beams. Lux-textures visible, rendering in majestic ${style || 'cinematic'} style.`,
        cameraMovement: "Slow orbital drone tracking shot, rising gently from ground level, capturing an expansive panorama.",
        voiceover: "In a world of noise, true masterpieces speak quietly. Behold a new lens of imagination.",
        duration: "0:00 - 0:04"
      },
      {
        sceneNumber: 2,
        visualDescription: `Detailed dramatic focus transition. Elements elements reacting dynamically, particles dancing under intense dynamic neon spotlights, blending Electric Blue and Neon Purple accent lighting.`,
        cameraMovement: "Micro macro dolly zoom, high-speed steadycam push-in focusing closely on key subjects.",
        voiceover: "Crafted frame-by-frame with infinite precision. Powered by advanced Generative AI.",
        duration: "0:04 - 0:09"
      },
      {
        sceneNumber: 3,
        visualDescription: `Epic finale climax layout. Deep cinematic horizon views, beautiful lens flare shining across high contrast surfaces, resolving in ultra-clear Hollywood details.`,
        cameraMovement: "Grand sweeping crane crane pull-out, revealing scale and majestic scope.",
        voiceover: "Your vision. Studio quality. Rendered instantly. Laundris Private Limited.",
        duration: "0:09 - 0:15"
      }
    ];

    return res.json({
      title: prompt.length > 30 ? prompt.slice(0, 30) + "..." : prompt,
      scenes: simulatedScenes,
      isMock: true,
      hint: "Add your GEMINI_API_KEY to secrets to generate custom scripts in real-time."
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: baseInstruction,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              sceneNumber: { type: Type.INTEGER, description: "Sequential scene numbering from 1" },
              visualDescription: { type: Type.STRING, description: "Detailed set layout, ambient conditions, lighting, and textures." },
              cameraMovement: { type: Type.STRING, description: "Precise cinematic lens/camera tracking instructions" },
              voiceover: { type: Type.STRING, description: "Appropriate promotional voiceover spoken during this scene. Keep it highly captivating." },
              duration: { type: Type.STRING, description: "Timestamp timeline for the scene" }
            },
            required: ["sceneNumber", "visualDescription", "cameraMovement", "voiceover", "duration"]
          }
        },
        temperature: 0.8,
      }
    });

    const parsedScenes = JSON.parse(response.text || "[]");
    res.json({
      title: prompt.length > 30 ? prompt.slice(0, 30) + "..." : prompt,
      scenes: parsedScenes,
      isMock: false
    });
  } catch (error: any) {
    console.error("Gemini API Error in /api/generate-script:", error);
    // Silent failover to mockup
    const simulatedScenes = [
      {
        sceneNumber: 1,
        visualDescription: `Majestic opening frame for '${prompt}'. Crisp cinematography, volumetric moody beams highlighting primary subjects. High-contrast detail.`,
        cameraMovement: "Slow cinematic glide pan matching high premium values.",
        voiceover: "Step into uncharted territory. Introducing pristine AI rendering.",
        duration: "0:00 - 0:05"
      }
    ];
    res.json({
      title: prompt,
      scenes: simulatedScenes,
      isMock: true,
      error: "API connection limits reached, returned premium template."
    });
  }
});

// Setup Vite & static server
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
