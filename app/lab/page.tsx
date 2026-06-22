import { Metadata } from "next";
import Playground from "@/components/morph/Playground";
import Link from "next/link";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Playground | SVG Morph Lab",
  description: "Mathematically interpolate and morph SVG paths in real-time.",
};

export default function LabPage() {
  return (
    <main className="relative min-h-screen bg-black text-neutral-50 selection:bg-indigo-500/30 overflow-hidden">
      
      {/* ✨ The "Aurora" Background Light 
          These blobs sit fixed behind everything and provide the color 
          for our glassmorphism to refract.
      */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-600/20 blur-[120px] pointer-events-none" />
      <div className="fixed top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-purple-600/20 blur-[100px] pointer-events-none" />

      {/* Glass Navigation Bar */}
      <nav className="border-b border-white/8 bg-black/20 backdrop-blur-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/" 
              className="p-2 rounded-full glass-panel hover:bg-white/10 text-neutral-400 hover:text-white transition-all border border-white/5"
            >
              <Home className="w-4 h-4" />
            </Link>
            
            <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="text-indigo-400">🧪</span> SVG Morph Lab
            </h1>
          </div>
          <a 
            href="https://github.com/bineetNaidu/svg-morph-lab/" 
            target="_blank" 
            rel="noreferrer"
            className="text-sm text-neutral-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* Main Workspace */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <Playground />
      </div>
    </main>
  );
}