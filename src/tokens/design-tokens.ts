/**
 * ASIYA Design Tokens
 *
 * Single source of truth for design decisions.
 */

export const colors = {
  background: {
    primary: '#EEE5D7',    // Linen
    secondary: '#E5D8C5',  // Sand
    soft: '#FFFFFF',       // White
    dark: '#3D5230',       // Forest
    accent: '#8B9B3C',     // Olive
  },
  text: {
    primary: '#6B3A1F',    // Sienna
    secondary: '#6B5544',  // Forest -> Custom Body Text
    muted: '#9C8870',
    onDark: '#EEE5D7',     // Linen
    accent: '#8B9B3C',     // Olive
  },
  border: {
    default: '#E5D8C5',    // Sand
    soft: '#EEE5D7',       // Linen
  },
} as const;

export const typography = {
  fonts: {
    serif: '"Playfair Display", Georgia, serif',
    sans: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
  },
} as const;

export const spacing = {
  section: { desktop: '120px', mobile: '64px' },
  card: { desktop: '40px', mobile: '24px' },
  container: { maxWidth: '1280px', paddingDesktop: '64px', paddingMobile: '20px' },
} as const;

export const breakpoints = {
  desktop: 768,
} as const;

export const motionTokens = {
  duration: { fast: 200, base: 400, slow: 700 },
  easing: { smooth: 'cubic-bezier(0.4, 0, 0.2, 1)' },
} as const;
