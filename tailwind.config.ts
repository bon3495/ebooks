import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        openSans: ['var(--font-openSans)', ...fontFamily.sans],
        dancing: ['var(--font-dancing)', ...fontFamily.sans],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        'pink-pastel': {
          DEFAULT: 'hsl(var(--pink-pastel))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      width: {
        inherit: 'inherit',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        'soft-gradient': 'url(/assets/images/bg.png)',
        'custom-gradient': `radial-gradient(
          138.48% 134.3% at 60.01% 112.56%,
          rgba(255, 255, 255, 0.5) 0%,
          rgba(255, 255, 255, 0) 100%
        ),
        radial-gradient(
          72.07% 179.32% at 121.88% 108.09%,
          rgba(248, 172, 196, 0.7) 0%,
          rgba(255, 255, 255, 0) 99.75%
        ),
        radial-gradient(
          95.38% 208.77% at 0% 143.96%,
          rgba(228, 214, 207, 0.7) 26.04%,
          rgba(255, 255, 255, 0) 100%
        )`,
        'custom-dark-gradient': `radial-gradient(
          138.48% 134.3% at 60.01% 112.56%,
          rgba(11, 11, 11, 0.60) 0%,
          rgba(89, 89, 89, 0.00) 100%
        )`,
      },
      boxShadow: {
        'pink-layer':
          '0 1px 2px hsl(350deg 100% 78% / 0.075), 0 2px 4px hsl(350deg 100% 78% / 0.075), 0 4px 8px hsl(350deg 100% 78% / 0.075), 0 8px 16px hsl(350deg 100% 78% / 0.075), 0 16px 32px hsl(350deg 100% 78% / 0.075)',
        'side-header': '0 2px 6px hsl(0deg 0% 0% / 0.1)',
        tooltip:
          '0px 3.4px 1.3px rgba(0, 0, 0, 0.083), 0px 5px 6.1px rgba(0, 0, 0, 0.093), 0px 6.8px 19.5px rgba(0, 0, 0, 0.098), 0px 10px 139px rgba(0, 0, 0, 0.1);',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
export default config;
