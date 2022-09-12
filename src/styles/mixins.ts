import { css, SerializedStyles } from '@emotion/react';
import { IS_MOBILE } from 'services/constants';
import theme from './theme';

const ONE = 1;

const { breakpoints } = theme;

const mediaQueries: MediaQueries = {
  small: `(min-width: ${breakpoints.small}px)`,
  medium: `(min-width: ${breakpoints.medium}px)`,
  large: `(min-width: ${breakpoints.large}px)`,
  xLarge: `(min-width: ${breakpoints.xLarge}px)`,
  belowSmall: `(max-width: ${breakpoints.small - ONE}px)`,
  belowMedium: `(max-width: ${breakpoints.medium - ONE}px)`,
  belowLarge: `(max-width: ${breakpoints.large - ONE}px)`,
  belowXLarge: `(max-width: ${breakpoints.xLarge - ONE}px)`,
  portrait: '(orientation: portrait)',
  landscape: '(orientation: landscape)',
  hover: '(hover: hover)',
};

interface MediaQueries {
  small: string;
  medium: string;
  large: string;
  xLarge: string;
  belowSmall: string;
  belowMedium: string;
  belowLarge: string;
  belowXLarge: string;
  portrait: string;
  landscape: string;
  hover: string;
  [key: string]: string;
}

interface Media {
  small?: () => SerializedStyles
  medium?: () => SerializedStyles
  large?: () => SerializedStyles
  xLarge?: () => SerializedStyles
  belowSmall?: () => SerializedStyles
  belowMedium?: () => SerializedStyles
  belowLarge?: () => SerializedStyles
  belowXLarge?: () => SerializedStyles
  portrait?: () => SerializedStyles
  landscape?: () => SerializedStyles
  hover?: () => SerializedStyles
  mobile?: (arg: TemplateStringsArray) => false | SerializedStyles
  notMobile?: (arg: TemplateStringsArray) => false | SerializedStyles
}

// Iterate through the sizes and create a media template
const media: Media = Object.keys(mediaQueries).reduce<Media>(
  (dict, key) => ({
    [key]: (args: TemplateStringsArray) => css`
      @media ${mediaQueries[key]} {
        ${css(args)};
      }
    `,
  }),
  {
    mobile: (args: TemplateStringsArray) => IS_MOBILE && css(args),
    notMobile: (args: TemplateStringsArray) => !IS_MOBILE && css(args),
  },
);

const textMixins = {
  ellipsisOverflow: css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
};

const visibility = {
  hideSmall: css`
    @media ${mediaQueries.small} {
      display: none !important;
    }
  `,
  showSmall: css`
    @media ${mediaQueries.belowSmall} {
      display: none !important;
    }
  `,
  hideMedium: css`
    @media ${mediaQueries.medium} {
      display: none !important;
    }
  `,
  showMedium: css`
    @media ${mediaQueries.belowMedium} {
      display: none !important;
    }
  `,
  hideLarge: css`
    @media ${mediaQueries.large} {
      display: none !important;
    }
  `,
  showLarge: css`
    @media ${mediaQueries.belowLarge} {
      display: none !important;
    }
  `,
  hideXLarge: css`
    @media ${mediaQueries.xLarge} {
      display: none !important;
    }
  `,
  showXLarge: css`
    @media ${mediaQueries.belowXLarge} {
      display: none !important;
    }
  `,
  hideMobile: css`
    display: ${IS_MOBILE && 'none !important'};
  `,
  showMobile: css`
    display: ${!IS_MOBILE && 'none !important'};
  `,
};

export {
  media, mediaQueries, textMixins, visibility,
};
