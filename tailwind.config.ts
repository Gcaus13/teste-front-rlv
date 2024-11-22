import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				default: '#EEFFF2',
				100: '#CAFFD6',
				200: '#A5FFBA',
				300: '#55F27B',
				400: '#45DD69',
				500: '#05C151',
				600: '#079942',
				700: '#14772B',
				800: '#0A551C',
				900: '#04280D',
  			},
			neutral: {
				default: '#F9FAFB',
				100: '#F3F4F6',
				200: '#E5E7EB',
				300: '#D1D5DB',
				400: '#9CA3AF',
				500: '#6B7280',
				600: '#4D5561',
				700: '#3A424E',
				800: '#202936',
				900: '#191E29',
			},
			red: {
				default: '#FBD9D9',
				100: '#F7A2A2',
				200: '#F26969',
				300: '#F15757',
				400: '#EF4444',
				500: '#B81414',
			},
			blue: {
				default: '#D9EAFB',
				100: '#A2CCF7',
				200: '#69ADF2',
				300: '#57A4F1',
				400: '#447EEF',
				500: '#1466B8',
			},
			yellow: {
				default: '#FBF4D9',
				100: '#F7E5A2',
				200: '#F2D469',
				300: '#F1D057',
				400: '#EFC944',
				500: '#B89314',
			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
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
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
