"use client";

import { motion } from "framer-motion";

interface CanvasProps {
  path: string;
}

export default function Canvas({ path }: CanvasProps) {
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      {/* The viewBox 0 0 100 100 allows our default shapes 
        to scale responsively inside the container 
      */}
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full overflow-visible drop-shadow-[0_0_25px_rgba(99,102,241,0.4)]"
      >
        <motion.path
          // Framer motion automatically animates changes to the 'd' attribute
          animate={{ d: path }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-indigo-400"
        />
      </svg>
    </div>
  );
}