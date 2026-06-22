import { useMemo } from "react";
import { interpolate } from "flubber";

/**
 * Custom hook that mathematically blends two SVG paths.
 * @param pathA The starting SVG path 'd' string
 * @param pathB The destination SVG path 'd' string
 * @param blendFactor A number from 0 to 100 representing the blend percentage
 * @returns The new morphed SVG 'd' string
 */
export function useMorph(pathA: string, pathB: string, blendFactor: number) {
  
  // 1. Create the interpolator function. We wrap this in useMemo so it 
  // only recalculates when the user actually changes the text inputs, not during sliding.
  const interpolator = useMemo(() => {
    try {
      // maxSegmentLength ensures smooth curves even on simple shapes
      return interpolate(pathA, pathB, { maxSegmentLength: 2 });
    } catch (error) {
      console.warn("Paths are not compatible for interpolation yet.", error);
      // Fallback to pathA if the user is currently typing an invalid path
      return () => pathA; 
    }
  }, [pathA, pathB]);

  // 2. Generate the actual hybrid path based on the slider value (0.0 to 1.0)
  const currentPath = useMemo(() => {
    return interpolator(blendFactor / 100);
  }, [interpolator, blendFactor]);

  return currentPath;
}