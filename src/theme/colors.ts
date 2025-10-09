import { MantineColorsTuple } from "@mantine/core";

/**
 * PALETTE PREDEFINITE PER DIVERSI STILI DI RISTORANTI
 * Scegli una palette e importala nel mock.ts
 */

// Palette per ristoranti eleganti/fine dining
export const elegantPalette = {
  primary: [
    "#f5f3f0",
    "#e8e4dd",
    "#d4cdc1",
    "#bfb5a4",
    "#ab9e88",
    "#8b7e6a", // Base - Marrone elegante
    "#7a6f5e",
    "#695f52",
    "#584f46",
    "#47403a",
  ] as MantineColorsTuple,

  accent: [
    "#fff9f5",
    "#ffeee0",
    "#ffd9b8",
    "#ffc38d",
    "#ffad63",
    "#d4a574", // Base - Oro/Champagne
    "#c4976a",
    "#b48960",
    "#a47b56",
    "#946d4c",
  ] as MantineColorsTuple,
};

// Palette per pizzerie/trattorie rustiche
export const rusticPalette = {
  primary: [
    "#fff5f5",
    "#ffe3e3",
    "#ffc9c9",
    "#ffa8a8",
    "#ff8787",
    "#fa5252", // Base - Rosso pomodoro
    "#f03e3e",
    "#e03131",
    "#c92a2a",
    "#b02525",
  ] as MantineColorsTuple,

  accent: [
    "#f4fce3",
    "#e9fac8",
    "#d8f5a2",
    "#c0eb75",
    "#a9e34b",
    "#94d82d", // Base - Verde basilico
    "#82c91e",
    "#74b816",
    "#66a80f",
    "#5c940d",
  ] as MantineColorsTuple,
};

// Palette per pub/birrerie moderne
export const modernPubPalette = {
  primary: [
    "#fff4e6",
    "#ffe8cc",
    "#ffd8a8",
    "#ffc078",
    "#ffa94d",
    "#fd7e14", // Base - Arancione ambra (birra)
    "#f76707",
    "#e8590c",
    "#d9480f",
    "#bf400d",
  ] as MantineColorsTuple,

  accent: [
    "#e7f5ff",
    "#d0ebff",
    "#a5d8ff",
    "#74c0fc",
    "#4dabf7",
    "#339af0", // Base - Blu scuro
    "#228be6",
    "#1c7ed6",
    "#1971c2",
    "#1864ab",
  ] as MantineColorsTuple,
};

// Palette per locali trendy/contemporanei
export const trendyPalette = {
  primary: [
    "#f3f0ff",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7", // Base - Viola moderno
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4",
  ] as MantineColorsTuple,

  accent: [
    "#fff0f6",
    "#ffdeeb",
    "#fcc2d7",
    "#faa2c1",
    "#f783ac",
    "#f06595", // Base - Rosa acceso
    "#e64980",
    "#d6336c",
    "#c2255c",
    "#a61e4d",
  ] as MantineColorsTuple,
};

// Palette per ristoranti vegani/salutistici
export const healthyPalette = {
  primary: [
    "#ebfbee",
    "#d3f9d8",
    "#b2f2bb",
    "#8ce99a",
    "#69db7c",
    "#51cf66", // Base - Verde natura
    "#40c057",
    "#37b24d",
    "#2f9e44",
    "#2b8a3e",
  ] as MantineColorsTuple,

  accent: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419", // Base - Giallo limone
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700",
  ] as MantineColorsTuple,
};

// Palette per locali sul mare/pesce
export const seafoodPalette = {
  primary: [
    "#e3fafc",
    "#c5f6fa",
    "#99e9f2",
    "#66d9e8",
    "#3bc9db",
    "#22b8cf", // Base - Azzurro mare
    "#15aabf",
    "#1098ad",
    "#0c8599",
    "#0b7285",
  ] as MantineColorsTuple,

  accent: [
    "#e7f5ff",
    "#d0ebff",
    "#a5d8ff",
    "#74c0fc",
    "#4dabf7",
    "#339af0", // Base - Blu oceano
    "#228be6",
    "#1c7ed6",
    "#1971c2",
    "#1864ab",
  ] as MantineColorsTuple,
};

/**
 * COLORI SEMANTICI UNIVERSALI
 * Questi rimangono consistenti in tutte le palette
 */
export const semanticColors = {
  // Stati di successo/errore/warning
  success: [
    "#ebfbee",
    "#d3f9d8",
    "#b2f2bb",
    "#8ce99a",
    "#69db7c",
    "#51cf66",
    "#40c057",
    "#37b24d",
    "#2f9e44",
    "#2b8a3e",
  ] as MantineColorsTuple,

  warning: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419",
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700",
  ] as MantineColorsTuple,

  danger: [
    "#fff5f5",
    "#ffe3e3",
    "#ffc9c9",
    "#ffa8a8",
    "#ff8787",
    "#ff6b6b",
    "#fa5252",
    "#f03e3e",
    "#e03131",
    "#c92a2a",
  ] as MantineColorsTuple,

  // Colori di testo
  text: {
    primary: "#1a1a1a",
    secondary: "#6b7280",
    muted: "#9ca3af",
    inverse: "#ffffff",
    onPrimary: "#ffffff", // Testo su colore primario
    onAccent: "#ffffff", // Testo su colore accent
  },

  // Sfondi
  background: {
    primary: "#ffffff",
    secondary: "#f8fafc",
    tertiary: "#f1f5f9",
    dark: "#0f172a",
    overlay: "rgba(0, 0, 0, 0.5)",
  },

  // Bordi
  border: {
    light: "#e2e8f0",
    medium: "#cbd5e1",
    dark: "#94a3b8",
  },
};

/**
 * GRADIENTI PREDEFINITI
 * Usa questi per hero sections, cards, bottoni speciali
 */
export const gradients = {
  elegant: "linear-gradient(135deg, #8b7e6a 0%, #d4a574 100%)",
  rustic: "linear-gradient(135deg, #fa5252 0%, #94d82d 100%)",
  modernPub: "linear-gradient(135deg, #fd7e14 0%, #339af0 100%)",
  trendy: "linear-gradient(135deg, #845ef7 0%, #f06595 100%)",
  healthy: "linear-gradient(135deg, #51cf66 0%, #fcc419 100%)",
  seafood: "linear-gradient(135deg, #22b8cf 0%, #339af0 100%)",

  // Gradienti generici
  sunset: "linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)",
  ocean: "linear-gradient(135deg, #2e3192 0%, #1bffff 100%)",
  fire: "linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)",
  forest: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)",
  night: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
};

/**
 * OMBRE PERSONALIZZATE
 */
export const shadows = {
  subtle: "0 3px 6px rgba(0, 0, 0, 0.4)",
  medium:
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  large:
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  glow: "0 0 20px rgba(0, 0, 0, 0.15)",
};

/**
 * TIPO PER LA CONFIGURAZIONE COLORI DEL TEMPLATE
 * Usa questo nel tuo mock.ts
 */
export interface ColorConfig {
  palette:
    | "elegant"
    | "rustic"
    | "modernPub"
    | "trendy"
    | "healthy"
    | "seafood";
  gradient?: keyof typeof gradients;
  customPrimary?: MantineColorsTuple;
  customAccent?: MantineColorsTuple;
}

/**
 * FUNZIONE HELPER PER OTTENERE LA PALETTE SELEZIONATA
 */
export const getPalette = (config: ColorConfig) => {
  const palettes = {
    elegant: elegantPalette,
    rustic: rusticPalette,
    modernPub: modernPubPalette,
    trendy: trendyPalette,
    healthy: healthyPalette,
    seafood: seafoodPalette,
  };

  const selectedPalette = palettes[config.palette];

  return {
    primary: config.customPrimary || selectedPalette.primary,
    accent: config.customAccent || selectedPalette.accent,
  };
};
