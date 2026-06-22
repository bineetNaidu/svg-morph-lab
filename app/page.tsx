import Link from "next/link";
import { ArrowRight, Sparkles, Code2, Split, Zap, Shapes } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-black text-neutral-50 selection:bg-indigo-500/30">
      
      {/* ✨ Ambient Aurora Light (for the glass panels to refract) */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-600/20 blur-[120px] pointer-events-none" />

      {/* Subtle Background Grid - Updated for the dark theme */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mt-32">
        
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border-indigo-500/20 text-indigo-400 text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          <span>Generative Design Tool</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          The <span className="text-glow">SVG Morph</span> Lab
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed">
          A mathematical playground for developers and designers. Blend, interpolate, and animate complex vector paths with real-time visual feedback and instant code export.
        </p>

        {/* Calls to Action */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/lab"
            className="group flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-white text-black font-bold transition-all hover:bg-neutral-200 hover:scale-105 active:scale-95 shadow-[0_0_40px_8px_rgba(255,255,255,0.15)]"
          >
            Enter the Lab
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 h-12 px-8 rounded-full glass-panel hover:bg-white/[0.04] transition-colors font-medium text-white/90"
          >
            <Code2 className="w-4 h-4" />
            View Source
          </a>
        </div>
      </div>

      {/* Feature Highlights using the new global `.glass-panel` class */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-32 px-4 pb-20">
        
        <div className="flex flex-col items-center text-center p-6 glass-panel hover:bg-white/[0.04] transition-colors">
          <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400 shadow-inner">
            <Split className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-white/90">Mathematical Blending</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Uses advanced interpolation to calculate the exact midpoint between two completely different vector shapes.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 glass-panel hover:bg-white/[0.04] transition-colors">
          <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 text-cyan-400 shadow-inner">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-white/90">Real-time Performance</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Powered by Next.js and Framer Motion for buttery smooth, 60fps path transitions right in the browser.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6 glass-panel hover:bg-white/[0.04] transition-colors">
          <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 text-purple-400 shadow-inner">
            <Shapes className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-white/90">Ready to Export</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Tweak your blend factor and easing, then immediately copy the production-ready React/SVG code.
          </p>
        </div>

      </div>
    </main>
  );
}