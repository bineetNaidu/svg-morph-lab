export interface MorphState {
    pathA: string;
    pathB: string;
    blendFactor: number; 
    easing: "linear" | "spring" | "easeInOut";
}
  
export const PRESET_SHAPES = {
    Square: "M 20 20 H 80 V 80 H 20 Z",
    Triangle: "M 50 20 L 80 80 L 20 80 Z",
    Circle: "M 50 20 A 30 30 0 1 1 49.9 20 Z",
    Star: "M 50 15 L 61 38 L 86 42 L 68 59 L 72 85 L 50 73 L 28 85 L 32 59 L 14 42 L 39 38 Z",
    Blob: "M 50 20 C 70 20 80 40 70 70 C 60 90 30 90 20 60 C 10 40 30 20 50 20 Z",
};

// We still need a default fallback for initialization
export const DEFAULT_PATHS = {
    A: PRESET_SHAPES.Square,
    B: PRESET_SHAPES.Star,
};