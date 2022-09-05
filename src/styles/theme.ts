/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Theme } from '@emotion/react';
import { createTheme } from '@mui/material';

declare module '@emotion/react' {
  export interface Theme {
    palette: {
      error: {
        main: string;
      };
      grey: {
        100: string;
        300: string;
        500: string;
        700: string;
        900: string;
      };
    };
  }
}

const theme: Theme = createTheme({
  palette: {
    error: {
      main: '#B00020',
    },
    grey: {
      100: 'rgb(153,153,153)',
      300: 'rgb(119,119,119)',
      500: 'rgb(85,85,85)',
      700: 'rgb(51,51,51)',
      900: 'rgb(17,17,17)',
    },
  },
});

export default theme;
