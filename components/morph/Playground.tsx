"use client";

import { useState } from "react";
import { MorphState, DEFAULT_PATHS, PRESET_SHAPES } from "@/types";
import { useMorph } from "@/hooks/useMorph";
import Canvas from "./Canvas";

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

  const morphedPath = useMorph(state.pathA, state.pathB, state.blendFactor);

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
            <span className="text-xl font-bold text-white">{state.blendFactor}%</span>
          </div>
          
          <input
            type="range"
            min="0"
            max="100"
            value={state.blendFactor}
            onChange={(e) => setState({ ...state, blendFactor: Number(e.target.value) })}
            className="w-full h-2 bg-black/50 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
        </div>
      </div>

      {/* RIGHT COLUMN: The Output Canvas */}
      <div className="lg:col-span-8 order-1 lg:order-2 sticky top-24 lg:relative lg:top-0">
        <div className="aspect-square lg:aspect-video glass-panel overflow-hidden relative group">
          
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />

          <Canvas path={morphedPath} />

          {/* Export Bar */}
          <div className="absolute bottom-4 left-4 right-4 glass-input p-4 backdrop-blur-md flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <code className="text-xs text-neutral-400 font-mono truncate mr-4">
              &lt;path d=&quot;{morphedPath.substring(0, 40)}...&quot; /&gt;
            </code>
            <button 
              onClick={() => navigator.clipboard.writeText(morphedPath)}
              className="text-xs bg-white text-black px-4 py-2 rounded-md font-bold hover:bg-neutral-200 transition-colors"
            >
              Copy SVG
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}