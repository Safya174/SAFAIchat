import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#534AB7',
      light: '#7F77DD',
      dark: '#3C3489',
    },
    secondary: {
      main: '#7F77DD',
    },
    background: {
      default: '#0f0d1a',
      paper: '#13102a',
    },
    text: {
      primary: '#EEEDFE',
      secondary: '#AFA9EC',
      disabled: '#534AB7',
    },
    divider: '#26215C',
    custom: {
      cardBg: '#1a163a',
      activeBg: '#26215C',
      borderSoft: '#26215C',
      borderStrong: '#3C3489',
      mutedText: '#7F77DD',
    },
  },
});
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#534AB7',
      light: '#7F77DD',
      dark: '#3C3489',
    },
    secondary: {
      main: '#7F77DD',
    },
    background: {
      default: '#F5F4FC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1E1B33',
      secondary: '#534AB7',
      disabled: '#B9B4E8',
    },
    divider: '#E4E1F7',
    custom: {
      cardBg: '#F0EEFB',
      activeBg: '#E4E1F7',
      borderSoft: '#E4E1F7',
      borderStrong: '#C7C1EF',
      mutedText: '#7F77DD',
    },
  },
});