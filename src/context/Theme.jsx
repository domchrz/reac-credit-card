import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    main: '#edf6f9',
    mainContrast: '#072531',
    secondary: '#49c8e2',
    secondaryContrast: '#CAF0F8',
    action: '#f09819',
    warning: '#dc143c;'
  },
  fonts: {
    sansSerif: `'Exo 2', sans-serif`,
    serif: `'Ms Madi', cursive`,
    mono: `Share Tech Mono, monospace`,
    materialIcon: `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
    font-family: 'Material Icons';
    `
  },
  effects: {
    borderRadius: '0.35em',
    boxShadow: '.07rem .07rem .5rem hsla(0, 0%, 0%, .18)',
  }
};

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
