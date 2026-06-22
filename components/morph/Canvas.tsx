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

  // This calculates the exact hex code midpoint between Color A and Color B based on the slider
  const currentColor = `color-mix(in srgb, ${colorB} ${blendFactor}%, ${colorA})`;

  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      {/* The viewBox 0 0 100 100 allows our default shapes 
        to scale responsively inside the container 
      */}
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full overflow-visible drop-shadow-[0_0_25px_rgba(99,102,241,0.4)]"
        style={{
          // The glow now physically changes color to match the shape!
          filter: `drop-shadow(0px 0px 25px color-mix(in srgb, ${currentColor} 40%, transparent))`
        }}
      >
        <motion.path
          // Framer motion automatically animates changes to the 'd' attribute
          animate={{ 
            d: path, 
            stroke: currentColor,
            fill: currentColor // Adding fill to the animation target
          }}
          transition={getTransition()}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          // The "Jelly" Aesthetic
          // Fills the shape with a 15% opacity of the current color for a glass-like look
          fillOpacity={0.15} 
          //  Crisp Scaling
          // Prevents the stroke from getting weirdly thick or thin on different screen sizes
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}