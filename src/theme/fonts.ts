// Font configurations
export const fontFamilies = {
  inter:
    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  poppins:
    'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  nunito:
    'Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  opensans:
    '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  lato: 'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',

  playfair: '"Playfair Display", Georgia, serif',
  merriweather: "Merriweather, Georgia, serif",

  jetbrains: '"JetBrains Mono", "Fira Code", Consolas, monospace',

  system: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

// Font weights
export const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

// Font sizes (rem values)
export const fontSizes = {
  xs: "0.75rem", // 12px
  sm: "0.875rem", // 14px
  md: "1rem", // 16px
  lg: "1.125rem", // 18px
  xl: "1.25rem", // 20px
  "2xl": "1.5rem", // 24px
  "3xl": "1.875rem", // 30px
  "4xl": "2.25rem", // 36px
  "5xl": "3rem", // 48px
  "6xl": "4rem", // 64px
};

// Line heights
export const lineHeights = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.6,
  loose: 2,
};

// Font combinations per diversi stili di brand
export const fontCombinations = {
  modern: {
    headings: fontFamilies.inter,
    body: fontFamilies.inter,
  },
  elegant: {
    headings: fontFamilies.playfair,
    body: fontFamilies.opensans,
  },
  friendly: {
    headings: fontFamilies.poppins,
    body: fontFamilies.nunito,
  },
  professional: {
    headings: fontFamilies.lato,
    body: fontFamilies.opensans,
  },
  creative: {
    headings: fontFamilies.poppins,
    body: fontFamilies.inter,
  },
  minimal: {
    headings: fontFamilies.system,
    body: fontFamilies.system,
  },
};
