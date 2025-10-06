"use client";

import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import {
  getPalette,
  semanticColors,
  type ColorConfig,
} from "../../theme/colors";

// Importa la configurazione colori dal tuo mock
// Esempio: import { colorConfig } from "@/mock/mock";

interface ProvidersProps {
  children: React.ReactNode;
  colorConfig: ColorConfig; // Passa la config dal mock
}

export default function Providers({ children, colorConfig }: ProvidersProps) {
  // Ottieni la palette selezionata
  const palette = getPalette(colorConfig);

  // Crea il tema personalizzato
  const theme = createTheme({
    primaryColor: "primary",
    colors: {
      primary: palette.primary,
      accent: palette.accent,
      success: semanticColors.success,
      warning: semanticColors.warning,
      danger: semanticColors.danger,
    },

    // Font personalizzabili (puoi metterli nel mock)
    fontFamily:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    headings: {
      fontFamily: "Playfair Display, Georgia, serif",
    },

    // Spacing personalizzabile
    spacing: {
      xs: "0.5rem",
      sm: "0.75rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
    },

    // Border radius
    radius: {
      xs: "0.25rem",
      sm: "0.5rem",
      md: "0.75rem",
      lg: "1rem",
      xl: "1.5rem",
    },

    // Breakpoints responsive
    breakpoints: {
      xs: "36em",
      sm: "48em",
      md: "62em",
      lg: "75em",
      xl: "88em",
    },

    // Componenti personalizzati
    components: {
      Button: {
        defaultProps: {
          radius: "md",
        },
      },
      Card: {
        defaultProps: {
          shadow: "sm",
          radius: "md",
        },
      },
    },
  });

  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <Notifications position="top-right" />
      {children}
    </MantineProvider>
  );
}
