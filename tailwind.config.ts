import type { Config } from "tailwindcss";
import type { PluginAPI } from 'tailwindcss/types/config';
import animate from "tailwindcss-animate";

// @ts-expect-error - tailwindcss internal utility lacks type definitions
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette.js";

function addVariablesForColors({ addBase, theme }: PluginAPI) {
  const colors = flattenColorPalette(theme("colors"));
  const cssVariables: { [key: string]: string } = {};
  
  Object.entries(colors).forEach(([key, val]) => {
    if (typeof val === 'string') {
      cssVariables[`--${key}`] = val;
    }
  });

  addBase({
    ":root": cssVariables,
  });
}

const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aeonik: ['var(--font-aeonik)'],
        gloria: ['var(--font-gloria)'],
      },
      colors: {
        background: '#1A1A1A',
        foreground: '#242524',
        greenPri: 'hsl(var(--green-pri))',
        greenSec: 'hsl(var(--green-sec))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: '#E4E7DC',
          foreground: '#6D7065',
          dark: '#6D7065',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'text-gradient': 'linear-gradient(to right, #040403, #565750)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      spacing: {
        '96px': '96px',
        '48px': '48px',
        '24px': '24px',
        '12px': '12px'
      },
      padding: {
        container: '1rem',
        'container-sm': '1.5rem',
        'container-md': '2rem',
        'container-lg': '48px',
        'container-xl': '96px'
      },
      animation: {
        'shiny-text': 'shiny-text 8s infinite',
        marquee: 'marquee var(--duration) infinite linear',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        'shiny-text': {
          '0%, 90%, 100%': {
            'background-position': 'calc(-100% - var(--shiny-width)) 0'
          },
          '30%, 60%': {
            'background-position': 'calc(100% + var(--shiny-width)) 0'
          }
        },
        marquee: {
          from: {
            transform: 'translateX(0)'
          },
          to: {
            transform: 'translateX(calc(-100% - var(--gap)))'
          }
        },
        'marquee-vertical': {
          from: {
            transform: 'translateY(0)'
          },
          to: {
            transform: 'translateY(calc(-100% - var(--gap)))'
          }
        },
        'border-beam': {
          '100%': {
            'offset-distance': '100%'
          }
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0"
          },
          to: {
            backgroundPosition: "-200% 0"
          }
        }
      }
    }
  },
  plugins: [
    animate,
    addVariablesForColors
  ],
} satisfies Config;

export default config;