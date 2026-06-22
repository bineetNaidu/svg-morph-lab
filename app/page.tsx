"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Split, Zap, Shapes, Move, Palette, Layers } from "lucide-react";

// Animation Variants for smooth scrolling reveals
const fadeUp:any  = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-black text-neutral-50 selection:bg-indigo-500/30">
      
      {/* ✨ Ambient Aurora Lights */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-600/20 blur-[120px] pointer-events-none" />

      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[24px_32px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* --- HERO SECTION --- */}
      <motion.section 
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto mt-32 md:mt-48 min-h-[60vh]"
        initial="hidden" animate="visible" variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border-indigo-500/20 text-indigo-400 text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          <span>Next-Gen Vector Engine</span>
        </motion.div>

        <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-[1.1]">
          The <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400 drop-shadow-[0_0_40px_rgba(99,102,241,0.4)]">SVG Morph</span> Lab
        </motion.h1>

        <motion.p variants={fadeUp} className="text-lg md:text-2xl text-neutral-400 max-w-2xl mb-12 leading-relaxed font-light">
          A mathematical playground for developers. Blend, interpolate, and animate complex vector paths with real-time visual feedback and instant React code export.
        </motion.p>

        {/* Calls to Action */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/lab"
            className="group flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-white text-black font-bold text-lg transition-all hover:bg-neutral-200 hover:scale-105 active:scale-95 shadow-[0_0_40px_8px_rgba(255,255,255,0.15)]"
          >
            Enter the Lab
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="https://github.com/bineetNaidu/svg-morph-lab/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 h-14 px-8 rounded-full glass-panel hover:bg-white/10 transition-colors font-medium text-white"
          >
            <Code2 className="w-5 h-5" />
            View Source
          </a>
        </motion.div>
      </motion.section>

      {/* --- BENTO GRID FEATURES SECTION --- */}
      <motion.section 
        className="relative z-10 w-full max-w-6xl mx-auto px-4 py-32"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
      >
        <div className="text-center mb-16">
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Engineered for precision.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Stop guessing SVG coordinates. We handle the complex geometry so you can focus on building immersive digital experiences.
          </motion.p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          
          {/* Feature 1: Large Feature */}
          <motion.div variants={fadeUp} className="md:col-span-2 glass-panel p-8 flex flex-col justify-between group hover:bg-white/4 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full group-hover:bg-indigo-500/20 transition-colors" />
            <div>
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                <Split className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Mathematical Blending</h3>
              <p className="text-neutral-400 leading-relaxed max-w-md">
                Powered by Flubber, our engine calculates the exact midpoint between completely disparate vector shapes, automatically adding and removing vertices to prevent layout breakage.
              </p>
            </div>
          </motion.div>

          {/* Feature 2: Small Box */}
          <motion.div variants={fadeUp} className="glass-panel p-8 flex flex-col justify-between group hover:bg-white/4 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                <Move className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Spring Physics</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Seamless Framer Motion integration. Test bouncy springs or smooth linear tweens in real-time.
              </p>
            </div>
          </motion.div>

          {/* Feature 3: Small Box */}
          <motion.div variants={fadeUp} className="glass-panel p-8 flex flex-col justify-between group hover:bg-white/4 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 mb-6">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Color Factory</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Native CSS <code className="text-pink-300 bg-pink-500/10 px-1 rounded">color-mix()</code> automatically crossfades hex values along the vector path.
              </p>
            </div>
          </motion.div>

          {/* Feature 4: Medium/Wide Box */}
          <motion.div variants={fadeUp} className="md:col-span-2 glass-panel p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group hover:bg-white/4 transition-colors">
            <div className="max-w-sm">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Drag, Drop, Export</h3>
              <p className="text-neutral-400 leading-relaxed">
                Drop standard SVG files directly into the UI to extract their math. When you are done, export a production-ready React Component in one click.
              </p>
            </div>
            {/* Decorative Code Block Mockup */}
            <div className="flex-1 w-full bg-black/50 border border-white/5 rounded-xl p-4 font-mono text-xs text-neutral-500 shadow-inner">
              <span className="text-indigo-400">export default</span> function Icon() {"{"}<br/>
              &nbsp;&nbsp;return (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-cyan-400">svg</span> viewBox=<span className="text-emerald-400">"0 0 100 100"</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-cyan-400">motion.path</span> d=<span className="text-emerald-400">{"{morphedPath}"}</span> /&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-cyan-400">svg</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {"}"}
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* --- FOOTER CTA --- */}
      <motion.section 
        className="relative z-10 w-full py-32 flex flex-col items-center justify-center text-center border-t border-white/5 bg-linear-to-b from-transparent to-indigo-950/20"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-8 transform rotate-12">
          <Layers className="w-8 h-8" />
        </motion.div>
        <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Ready to morph?
        </motion.h2>
        <motion.div variants={fadeUp}>
          <Link
            href="/lab"
            className="group flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-indigo-500 text-white font-bold text-lg transition-all hover:bg-indigo-400 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(99,102,241,0.3)]"
          >
            Open Playground
          </Link>
        </motion.div>
      </motion.section>

    </main>
  );
}