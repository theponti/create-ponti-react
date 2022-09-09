/* eslint-disable @typescript-eslint/no-magic-numbers */
import { rgba } from 'polished';
import { fontFamilies, IS_MOBILE } from 'services/constants';

declare module '@emotion/react' {
  export interface Theme {
    appWidth: number;
    palette: {
      black: string;
      error: {
        main: string;
      };
      green: {
        dark: string;
        main: string;
        light: string;
        secondary: string;
      }
      grey: {
        light100: string;
        light120: string;
        light200: string;
        medium300: string;
        medium400: string;
        medium500: string;
        dark700: string;
        dark800: string;
        dark900: string;
      };
      red: {
        dark: string;
        main: string;
        light: string;
      };
      white: string;
    };
    breakpoints: {
      [key: string]: number
    }
    misc: {
      focusShadow: string;
    }
    shape: {
      borderRadius: string;
    };
  }
}

const { defaultFont: fontFamily } = fontFamilies;
const lineHeight = '1.4';

const blue = {
  dark: '#003fc4',
  extraLight: '#e4ecff',
  light: '#2f70ff',
  main: '#1565ea',
  transparent: rgba(228, 236, 255, 0.5),
};

const red = {
  dark: '#bf1f02',
  main: '#e54528',
  light: '#fce9e5',
};

const orange = {
  dark: '#b38000',
  main: '#ffcc34',
  light: '#fff7e6',
};

const green = {
  dark: '#147D11',
  main: '#56bf53',
  light: '#ecf9ec',
  secondary: '#54bd51',
};

const purple = {
  main: '#5f4bb6',
  light: '#efedf8',
};

const pink = {
  dark: '#e8465f',
  main: '#f3abbb',
  light: '#fdf2f7',
  secondary: '#f2a8cb',
};

const grey = {
  light100: '#f3f3f3',
  light120: '#f0f0f2',
  light200: '#d5d5d7',
  medium300: '#cdcdce',
  medium400: '#acacae',
  medium500: '#929294',
  dark700: '#79797b',
  dark800: '#464648',
  dark900: '#2d2d2f',
};

const textColors = {
  light: grey.medium500,
  semiLight: grey.dark700,
  main: grey.dark800,
  dark: grey.dark900,
  disabled: rgba(grey.dark800, 0.34),
  green: green.dark,
};

const theme = {
  palette: {
    primary: {
      ...blue,
      contrastText: '#fff',
    },
    error: {
      ...red,
      contrastText: '#fff',
    },
    warning: {
      ...orange,
      contrastText: textColors.main,
    },
    black: '#11121b',
    blue,
    green,
    grey,
    orange,
    pink,
    purple,
    red,
    text: textColors,
    white: '#fff',
  },
  breakpoints: {
    small: 500,
    medium: 769,
    large: 993,
    xLarge: 1200,
    xxLarge: 1800,
  },
  misc: {
    focusShadow: '0 0 0 3px #c0d2fb',
    focusShadowInset: '0 0 0 3px #c0d2fb inset',
    contentPadding: {
      medium: '32px',
      large: '48px',
    },
  },
  shape: {
    borderRadius: '4px',
    largeBorderRadius: '8px',
    xLargeBorderRadius: '16px',
    input: {
      borderColor: grey.medium300,
      borderColorDisabled: grey.light200,
      borderThickness: '1px',
      medium: {
        height: '43px',
        sidePadding: '12px',
      },
      large: {
        height: '52px',
        sidePadding: '15px',
      },
    },
    button: {
      xLarge: { height: '60px' },
      large: { height: '52px' },
      medium: { height: '39px' },
      small: { height: '30px' },
      tiny: { height: '22px' },
    },
    iconButton: {
      medium: { size: '36px' },
      'small-plus': { size: '32px' },
      small: { size: '24px' },
      tiny: { size: '16px' },
    },
  },
  shadows: {
    subtle: '0px 1px 8px -3px rgba(0, 0, 0, 0.3)',
    medium: '0px 3px 12px -3px rgba(0, 0, 0, 0.25)',
    large: '0px 6px 50px 1px rgba(0, 0, 0, 0.25)',
    cloud: '-8px 9px 48px rgba(218, 224, 236, 0.22)',
  },
  text: {
    fontFamily,
    lineHeight,
    fontWeightRegular: 400,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    fontWeightExtraBold: 800,
    h1: {
      fontFamily,
      lineHeight,
      fontSize: '4.0rem',
      fontWeight: 600,
      color: textColors.dark,
      marginBottom: '2.0rem',
    },
    h2: {
      fontFamily,
      lineHeight,
      fontSize: '2.8rem',
      fontWeight: 600,
      color: textColors.dark,
      marginBottom: '1.6rem',
    },
    h3: {
      fontFamily,
      lineHeight,
      fontSize: '2.2rem',
      fontWeight: 600,
      color: textColors.dark,
      marginBottom: '1.6rem',
    },
    h4: {
      fontFamily,
      lineHeight,
      fontSize: '1.7rem',
      fontWeight: 600,
      color: textColors.dark,
      marginBottom: '1.6rem',
    },
    h5: {
      fontFamily,
      lineHeight,
      fontSize: '1.5rem',
      fontWeight: 600,
      color: textColors.dark,
      marginBottom: '1.6rem',
    },
    h6: {
      fontFamily,
      lineHeight,
      fontSize: '1.4rem',
      fontWeight: 600,
      color: textColors.dark,
      marginBottom: '1.2rem',
    },
    nav: {
      fontFamily,
      lineHeight,
      fontSize: '1.4rem',
      fontWeight: 400,
      color: textColors.main,
    },
    label: {
      fontFamily,
      lineHeight,
      fontSize: '1.6rem',
      fontWeight: 400,
      color: textColors.main,
      marginBottom: '1.0rem',
    },
    label2: {
      fontFamily,
      lineHeight,
      fontSize: '1.4rem',
      fontWeight: 400,
      color: textColors.main,
      marginBottom: '1.0rem',
    },
    body: {
      fontFamily,
      fontSize: '1.6rem',
      fontWeight: 400,
      lineHeight: '1.6',
      color: textColors.main,
      marginBottom: '1.6rem',
    },
    body2: {
      fontFamily,
      fontSize: '1.4rem',
      fontWeight: 400,
      lineHeight: '1.6',
      color: textColors.main,
      marginBottom: '1.2rem',
    },
    body3: {
      fontFamily,
      fontSize: '1.3rem',
      fontWeight: 400,
      lineHeight: '1.6',
      color: textColors.main,
      marginBottom: '1.2rem',
    },
    // iOS will auto zoom on inputs unless the font size is at least 16px. No auto-zoom
    // makes it feel more like a native app, so use 16px for all inputs on mobile. Also,
    // don't use rem for buttons either so their font says stays proportional to input.
    // It looks bad if the input text is much larger than the button text.
    // https://stackoverflow.com/questions/2989263/disable-auto-zoom-in-input-text-tag-safari-on-iphone
    button: {
      fontFamily,
      lineHeight,
      fontSize: IS_MOBILE ? '16px' : '1.6rem',
      fontWeight: 600,
    },
    button2: {
      fontFamily,
      lineHeight,
      fontSize: IS_MOBILE ? '14px' : '1.4rem',
      fontWeight: 600,
    },
    input: {
      fontFamily,
      lineHeight,
      fontSize: IS_MOBILE ? '16px' : '1.6rem',
      fontWeight: 400,
      color: textColors.dark,
    },
    input2: {
      fontFamily,
      lineHeight,
      fontSize: IS_MOBILE ? '16px' : '1.4rem',
      fontWeight: 400,
      color: textColors.dark,
    },
    inputPlaceholder: {
      fontFamily,
      lineHeight,
      fontSize: IS_MOBILE ? '16px' : '1.6rem',
      fontWeight: 400,
      color: textColors.light,
    },
    inputPlaceholder2: {
      fontFamily,
      lineHeight,
      fontSize: IS_MOBILE ? '16px' : '1.4rem',
      fontWeight: 400,
      color: textColors.light,
    },
  },
  unit: 8,
};

export default theme;
