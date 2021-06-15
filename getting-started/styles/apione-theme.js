import { extendTheme } from '@chakra-ui/react';

const apioneTheme = extendTheme({
  color: {
    neutral: {
      50: '#F4F4F4',
      100: '#EAEAEA',
      200: '#BCBCBC',
      300: '#6E6E6E',
      400: '#323232',
    },
    primary: {
      100: '#39BCFF',
      200: '#00A6FB',
      300: '#008ED6',
      400: '#006494',
    },
    secundary: {
      100: '#FF9539',
      200: '#FA6C00',
      300: '#DB5F00',
      400: '#C25400',
    },
    semantic: {
      negative: {
        100: '#FC5059',
        200: '#E34850',
        300: '#D7373F',
        400: '#B32E34',
      },
      warning: {
        100: '#FFD54E',
        200: '#FFC200',
        300: '#F0B600',
        400: '#D6A200',
      },
      accent: {
        100: '#38C294',
        200: '#2D9D78',
        300: '#268E6C',
        400: '#1F7559',
      },
    },
  },
  fonts: {
    heading: `hero-new, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `hero-new, , -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  components: {
    Heading: {
      defaultProps: { variant: 'h1' },
      variants: {
        h1: { fontSize: '8xl', fontWeight: 'normal', lineHeight: '140%' },
        h2: { fontSize: '7xl', fontWeight: 'normal', lineHeight: '140%' },
        h3: { fontSize: '6xl', fontWeight: 'normal', lineHeight: '140%' },
        h4: { fontSize: '5xl', fontWeight: 'normal', lineHeight: '140%' },
      },
    },
    Text: {
      variants: {
        helper: { fontSize: 'sm' },
        default: { fontSize: 'md' },
        Large: { fontSize: 'lg' },
      },
    },
  },
  shadows: {},
});

export default apioneTheme;
