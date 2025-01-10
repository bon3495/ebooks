import { px } from 'framer-motion';
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
        texture: {
          DEFAULT: 'hsl(var(--bg-txt))',
        },
        'blackest-berry': {
          DEFAULT: 'hsl(var(--blackest-berry))',
        },
        monochromatic: {
          'dark-taupe': 'hsl(var(--dark-taupe))',
          'warm-brown-gray': 'hsl(var(--warm-brown-gray))',
          'cream-white': 'hsl(var(--cream-white))',
          'subtle-ivory': 'hsl(var(--subtle-ivory))',
        },
        analogous: {
          'pale-peach-tan': 'hsl(var(--pale-peach-tan))',
          'warm-terra-cotta': 'hsl(var(--warm-terra-cotta))',
          'taupe-brown': 'hsl(var(--taupe-brown))',
          'dusty-brown': 'hsl(var(--dusty-brown))',
        },
        complementary: {
          'soft-pastel-teal': 'hsl(var(--soft-pastel-teal))',
          'muted-teal-blue': 'hsl(var(--muted-teal-blue))',
          'slate-green-gray': 'hsl(var(--slate-green-gray))',
          'deep-teal-gray': 'hsl(var(--deep-teal-gray))',
        },
        triadic: {
          'muted-blue-gray': 'hsl(var(--muted-blue-gray))',
          'soft-green': 'hsl(var(--soft-green))',
          'aqua-blue': 'hsl(var(--aqua-blue))',
          'mint-green': 'hsl(var(--mint-green))',
        },
        neutral: {
          'deep-charcoal': 'hsl(var(--deep-charcoal))',
          'medium-gray': 'hsl(var(--medium-gray))',
          'pure-white': 'hsl(var(--pure-white))',
          'off-white': 'hsl(var(--off-white))',
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
        terracotta:
          '1px 2px 2px hsl(28 49% 65% / 0.3), 2px 4px 4px hsl(28 49% 65% / 0.2), 3px 6px 6px hsl(28 49% 65% / 0.1);',
        tooltip:
          '0px 3.4px 1.3px rgba(0, 0, 0, 0.083), 0px 5px 6.1px rgba(0, 0, 0, 0.093), 0px 6.8px 19.5px rgba(0, 0, 0, 0.098), 0px 10px 139px rgba(0, 0, 0, 0.1);',
        'deep-terracotta':
          '1px 2px 2px hsl(28 49% 55% / 0.4), 2px 4px 4px hsl(28 49% 55% / 0.3), 3px 6px 6px hsl(28 49% 55% / 0.2);',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
export default config;
