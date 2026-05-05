/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ['./src/**/*.{astro,html,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        'bg-secondary': '#F0F7FA',
        fg: '#1A2733',
        muted: '#5C6B7A',
        accent: '#0E7C9E',
        accent2: '#08597A',
        border: '#D4E5EB',
        hover: '#E8F2F7',
      },
      fontFamily: {
        heading: ["'Noto Sans KR', sans-serif", 'system-ui', 'sans-serif'],
        body: ["'Noto Sans KR', sans-serif", 'system-ui', 'sans-serif'],
        mono: ['ui-monospace, monospace', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '720px',
        wide: '1100px',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': '#1A2733',
            '--tw-prose-headings': '#1A2733',
            '--tw-prose-links': '#0E7C9E',
            '--tw-prose-bold': '#0E7C9E',
            '--tw-prose-quotes': '#5C6B7A',
            '--tw-prose-quote-borders': '#0E7C9E',
            '--tw-prose-code': '#0E7C9E',
            '--tw-prose-borders': '#D4E5EB',
            maxWidth: '720px',
            fontSize: '1.05rem',
            lineHeight: '1.85',
            'h1, h2, h3, h4': {
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              letterSpacing: '-0.01em',
            },
            h2: {
              borderBottom: '1px solid #D4E5EB',
              paddingBottom: '0.5rem',
              marginTop: '3rem',
            },
            blockquote: {
              background: '#E8F2F7',
              borderRadius: '0 8px 8px 0',
              padding: '0.8rem 1.2rem',
              fontStyle: 'italic',
            },
            img: {
              borderRadius: '12px',
              boxShadow: '0 6px 24px rgba(0,0,0,0.12)',
              margin: '2rem auto',
            },
            code: {
              background: '#E8F2F7',
              padding: '0.15rem 0.45rem',
              borderRadius: '4px',
              border: '1px solid #D4E5EB',
              fontWeight: '500',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
