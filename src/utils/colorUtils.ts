// Predefined palette of solid colors (no gradients)
const SOLID_COLORS = [
  "#6366f1", // indigo
  "#8b5cf6", // violet
  "#ec4899", // pink
  "#f43f5e", // rose
  "#f97316", // orange
  "#eab308", // yellow
  "#22c55e", // green
  "#14b8a6", // teal
  "#06b6d4", // cyan
  "#3b82f6", // blue
];

/**
 * Generate a consistent solid color from a string
 * Same string always returns same color
 */
export function stringToSolidColor(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return SOLID_COLORS[Math.abs(hash) % SOLID_COLORS.length];
}

/**
 * Get initials from a name (up to 2 characters)
 */
export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

/**
 * Determine if a color is dark (for text contrast)
 */
export function isDarkColor(hexColor: string): boolean {
  const hex = hexColor.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.5;
}

/**
 * Get contrasting text color (white or black) for a background
 */
export function getContrastColor(bgColor: string): string {
  return isDarkColor(bgColor) ? "#ffffff" : "#000000";
}
