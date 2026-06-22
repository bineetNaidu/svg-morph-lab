export interface MorphState {
    pathA: string;
    pathB: string;
    blendFactor: number; 
    easing: "linear" | "spring" | "easeInOut";
}
  
export const DEFAULT_PATHS = {
    // A simple rounded box
    SQUARE: "M 20 20 H 80 V 80 H 20 Z",
    // A triangle
    TRIANGLE: "M 50 20 L 80 80 L 20 80 Z",
};