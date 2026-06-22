"use client";

import { useState, useEffect } from "react";
import { MorphState, DEFAULT_PATHS, PRESET_SHAPES } from "@/types";
import { useMorph } from "@/hooks/useMorph";
import Canvas from "./Canvas";
import { animate } from "framer-motion";
import { Play, Pause } from "lucide-react";

// --- NEW: A reusable Preset Picker Component ---
function PresetPicker({ 
  onSelect, 
  activePath 
}: { 
  onSelect: (path: string) => void, 
  activePath: string 
}) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {Object.entries(PRESET_SHAPES).map(([name, path]) => {
        const isActive = activePath === path;
        return (
          <button
            key={name}
            onClick={() => onSelect(path)}
            className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-200 ${
              isActive 
                ? "bg-indigo-500 text-white shadow-[0_0_10px_rgba(99,102,241,0.5)]" 
                : "glass-panel hover:bg-white/10 text-neutral-400 hover:text-white"
            }`}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
}
// ------------------------------------------------

export default function Playground() {
  const [state, setState] = useState<MorphState>({
    pathA: DEFAULT_PATHS.A,
    pathB: DEFAULT_PATHS.B,
    blendFactor: 50,
    easing: "spring",
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [copiedCode, setCopiedCode] = useState<"svg" | "react" | null>(null);

  const morphedPath = useMorph(state.pathA, state.pathB, state.blendFactor);

  // 🧪 NEW: The "Pro" Code Generator Function
  const generateReactComponent = () => {
    // Format the physics based on their selection
    const transitionCode = state.easing === "spring" 
      ? `transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}`
      : state.easing === "linear"
      ? `transition={{ type: "tween", ease: "linear", duration: 0.4 }}`
      : `transition={{ type: "tween", ease: "easeInOut", duration: 0.6 }}`;

    return `"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { interpolate } from "flubber"; // npm install flubber

export default function MorphingIcon() {
  const [isToggled, setIsToggled] = useState(false);

  // Calculate the path dynamically using Flubber (handles dissimilar paths)
  const path = interpolate(
    "${state.pathA}", // Shape A
    "${state.pathB}", // Shape B
    { maxSegmentLength: 2 }
  )(isToggled ? 1 : 0);

  return (
    <svg 
      viewBox="0 0 100 100" 
      className="w-12 h-12 cursor-pointer text-indigo-400"
      onClick={() => setIsToggled(!isToggled)}
    >
      <motion.path
        animate={{ d: path }}
        ${transitionCode}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}`;
  };

  const handleCopy = (type: "svg" | "react") => {
    const textToCopy = type === "svg" ? `<path d="${morphedPath}" />` : generateReactComponent();
    navigator.clipboard.writeText(textToCopy);
    setCopiedCode(type);
    setTimeout(() => setCopiedCode(null), 2000); // Reset after 2 seconds
  };

  // 4. The Auto-Play Loop Engine
  useEffect(() => {
    if (!isPlaying) return;

    // This forces the blend factor to animate from 0 to 100, then reverse forever
    const controls = animate(0, 100, {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      onUpdate: (latest) => {
        setState((prev) => ({ ...prev, blendFactor: Math.round(latest) }));
      },
    });

    // Cleanup when paused
    return () => controls.stop();
  }, [isPlaying]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      {/* LEFT COLUMN: Inputs & Controls */}
      <div className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
        
        {/* Input A */}
        <div className="glass-panel p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm uppercase tracking-widest font-semibold text-white/60">Shape A (Start)</h2>
          </div>
          <textarea
            value={state.pathA}
            onChange={(e) => setState({ ...state, pathA: e.target.value })}
            className="glass-input w-full h-24 p-4 text-sm font-mono text-indigo-300 resize-none"
            spellCheck={false}
          />
          {/* Inject Preset Picker for A */}
          <PresetPicker 
            activePath={state.pathA} 
            onSelect={(path) => setState({ ...state, pathA: path })} 
          />
        </div>

        {/* Input B */}
        <div className="glass-panel p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm uppercase tracking-widest font-semibold text-white/60">Shape B (End)</h2>
          </div>
          <textarea
            value={state.pathB}
            onChange={(e) => setState({ ...state, pathB: e.target.value })}
            className="glass-input w-full h-24 p-4 text-sm font-mono text-cyan-300 resize-none"
            spellCheck={false}
          />
          {/* Inject Preset Picker for B */}
          <PresetPicker 
            activePath={state.pathB} 
            onSelect={(path) => setState({ ...state, pathB: path })} 
          />
        </div>

        {/* The Blender Control */}
        <div className="glass-panel p-6">
        <div className="flex justify-between items-end mb-4">
            <h2 className="text-sm uppercase tracking-widest font-semibold text-white/60">Blend Factor</h2>
            
            {/* 5. Add the Play/Pause Button next to the percentage! */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`p-2 rounded-full transition-all ${
                  isPlaying 
                    ? "bg-indigo-500/20 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.4)]" 
                    : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
              </button>
              <span className="text-xl font-bold text-white w-12 text-right">{state.blendFactor}%</span>
            </div>
          </div>
          
          <input
            type="range"
            min="0"
            max="100"
            value={state.blendFactor}
            onChange={(e) => setState({ ...state, blendFactor: Number(e.target.value) })}
            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
          
          <h2 className="text-sm uppercase tracking-widest font-semibold text-white/60 mb-3 mt-4">Animation Physics</h2>
          <div className="flex p-1 bg-black/40 border border-white/5 rounded-lg shadow-inner">
            {(["spring", "easeInOut", "linear"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setState({ ...state, easing: type })}
                className={`flex-1 text-xs py-2 rounded-md font-medium capitalize transition-all ${
                  state.easing === type
                    ? "bg-white/8 text-white shadow-sm border border-white/5"
                    : "text-neutral-500 hover:text-white/70 hover:bg-white/2"
                }`}
              >
                {type === "easeInOut" ? "Smooth" : type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: The Output Canvas */}
      <div className="lg:col-span-8 order-1 lg:order-2 sticky top-24 lg:relative lg:top-0">
        <div className="aspect-square lg:aspect-video glass-panel overflow-hidden relative group">
          
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />

          <Canvas path={morphedPath} easing={state.easing} />

          {/* Export Bar */}
          <div className="absolute bottom-4 left-4 right-4 glass-input p-4 backdrop-blur-md flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <code className="text-xs text-neutral-400 font-mono truncate mr-4">
              &lt;path d=&quot;{morphedPath.substring(0, 40)}...&quot; /&gt;
            </code>
            <div className="flex gap-2">
              <button 
                onClick={() => handleCopy("svg")}
                className="text-xs glass-panel hover:bg-white/10 text-white px-4 py-2 rounded-md font-medium transition-colors w-24 text-center"
              >
                {copiedCode === "svg" ? "Copied!" : "Copy SVG"}
              </button>
              <button 
                onClick={() => handleCopy("react")}
                className="text-xs glass-panel bg-indigo-500! hover:bg-indigo-400! px-4 py-2 rounded-md font-medium transition-colors w-24 text-center"
              >
                {copiedCode === "react" ? "Copied!" : "Copy React"}
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}