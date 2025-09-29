import { MantineColorsTuple } from "@mantine/core";

// Colori personalizzati che puoi aggiungere a Mantine
export const customColors = {
  // Primary brand colors
  brand: [
    "#e3f2fd",
    "#bbdefb",
    "#90caf9",
    "#64b5f6",
    "#42a5f5",
    "#2196f3", // Base color
    "#1e88e5",
    "#1976d2",
    "#1565c0",
    "#0d47a1",
  ] as MantineColorsTuple,

  // Secondary colors
  accent: [
    "#fff3e0",
    "#ffe0b2",
    "#ffcc80",
    "#ffb74d",
    "#ffa726",
    "#ff9800", // Base color
    "#fb8c00",
    "#f57c00",
    "#ef6c00",
    "#e65100",
  ] as MantineColorsTuple,

  // Success/Green variations
  success: [
    "#e8f5e8",
    "#c8e6c9",
    "#a5d6a7",
    "#81c784",
    "#66bb6a",
    "#4caf50", // Base color
    "#43a047",
    "#388e3c",
    "#2e7d32",
    "#1b5e20",
  ] as MantineColorsTuple,

  // Warning colors
  warning: [
    "#fff8e1",
    "#ffecb3",
    "#ffe082",
    "#ffd54f",
    "#ffca28",
    "#ffc107", // Base color
    "#ffb300",
    "#ffa000",
    "#ff8f00",
    "#ff6f00",
  ] as MantineColorsTuple,

  // Error/Danger colors
  danger: [
    "#ffebee",
    "#ffcdd2",
    "#ef9a9a",
    "#e57373",
    "#ef5350",
    "#f44336", // Base color
    "#e53935",
    "#d32f2f",
    "#c62828",
    "#b71c1c",
  ] as MantineColorsTuple,
};

// Gradients predefiniti
export const gradients = {
  primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  sunset: "linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)",
  ocean: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  forest: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)",
  fire: "linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)",
  royal: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  minimal:
    "linear-gradient(135deg,rgb(255, 255, 255) 0%,rgb(227, 157, 255) 100%)",
  orange:
    "linear-gradient(135deg,rgba(239, 173, 255, 0.95) 0%,rgb(241, 133, 32) 100%)",
};

// Colori semantici per diversi stati
export const semanticColors = {
  text: {
    primary: "#1a1a1a",
    secondary: "#6b7280",
    muted: "#9ca3af",
    inverse: "#ffffff",
  },
  background: {
    primary: "#ffffff",
    secondary: "#f8fafc",
    tertiary: "#f1f5f9",
    dark: "#0f172a",
  },
  border: {
    light: "#e2e8f0",
    medium: "#cbd5e1",
    dark: "#94a3b8",
  },
};
