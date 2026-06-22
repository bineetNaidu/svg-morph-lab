"use client";

import { motion, type Transition } from "framer-motion";

interface CanvasProps {
  path: string;
  easing: "linear" | "spring" | "easeInOut";
  colorA: string;
  colorB: string;
  blendFactor: number; // to track the color mix
}
export default function Canvas({ path, easing, blendFactor, colorA, colorB }: CanvasProps) {

  const getTransition = (): Transition => {
    switch (easing) {
      case "spring":
        return { type: "spring", bounce: 0.5, duration: 0.8 };
      case "easeInOut":
        return { type: "tween", ease: "easeInOut", duration: 0.6 };
      case "linear":
        return { type: "tween", ease: "linear", duration: 0.4 };
      default:
        return { type: "spring", bounce: 0.2, duration: 0.6 };
    }
  };

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
          animate={{ d: path, stroke: blendFactor > 50 ? colorB : colorA }}
          transition={getTransition()}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ stroke: blendFactor > 50 ? colorB : colorA }}
        />
      </svg>
    </div>
  );
}